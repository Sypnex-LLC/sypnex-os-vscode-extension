/**
 * Sypnex API - LLM Translation Module
 * Provides universal LLM interface that translates between OpenAI format and various providers
 * 
 * Usage:
 * const response = await sypnexAPI.llm.complete({
 *     provider: 'anthropic',
 *     endpoint: 'https://api.anthropic.com/v1/messages',
 *     apiKey: 'sk-...',
 *     model: 'claude-3-5-sonnet',
 *     messages: [{role: 'user', content: 'Hello'}],
 *     temperature: 0.7,
 *     maxTokens: 1000
 * });
 */

(function() {
    'use strict';

    // Ensure sypnexAPI exists
    if (typeof sypnexAPI === 'undefined') {
        console.error('sypnexAPI not found. Please include sypnex-api.js first.');
        return;
    }

    // LLM module
    sypnexAPI.llm = {
        /**
         * Complete a chat conversation using any supported LLM provider
         * @param {Object} options - Configuration options
         * @param {string} options.provider - Provider: 'openai', 'anthropic', 'google', 'ollama'
         * @param {string} options.endpoint - API endpoint URL
         * @param {string} [options.apiKey] - API key (not needed for Ollama)
         * @param {string} options.model - Model name
         * @param {Array} options.messages - Messages array in OpenAI format
         * @param {number} [options.temperature=0.7] - Temperature (0-1)
         * @param {number} [options.maxTokens=1000] - Maximum tokens to generate
         * @param {boolean} [options.stream=false] - Whether to stream response
         * @returns {Promise<Object>} Normalized response: {content, usage, model, provider}
         */
        async complete(options) {
            try {
                const {
                    provider,
                    endpoint,
                    apiKey,
                    model,
                    messages,
                    temperature = 0.7,
                    maxTokens = 1000,
                    stream = false
                } = options;

                // Validate required parameters
                if (!provider || !endpoint || !model || !messages) {
                    throw new Error('Missing required parameters: provider, endpoint, model, messages');
                }

                if (!Array.isArray(messages) || messages.length === 0) {
                    throw new Error('Messages must be a non-empty array');
                }

                // Format request based on provider
                const formattedRequest = this._formatRequest(provider, {
                    model,
                    messages,
                    temperature,
                    maxTokens,
                    stream
                });

                // Prepare headers
                const headers = this._getHeaders(provider, apiKey);

                // Make the request using sypnexAPI.proxyHTTP
                const proxyRequest = {
                    url: endpoint,
                    method: 'POST',
                    headers: headers,
                    body: formattedRequest,
                    timeout: 60 // Longer timeout for LLM requests
                };

                const response = await sypnexAPI.proxyHTTP(proxyRequest);

                if (!response || response.status < 200 || response.status >= 300) {
                    throw new Error(`LLM API request failed: ${response?.status || 'Unknown error'}`);
                }

                // Parse response
                let responseData;
                if (typeof response.content === 'string') {
                    responseData = JSON.parse(response.content);
                } else {
                    responseData = response.content;
                }

                // Normalize response based on provider
                const normalizedResponse = this._normalizeResponse(provider, responseData);

                return {
                    ...normalizedResponse,
                    provider: provider,
                    raw: responseData // Include raw response for debugging
                };

            } catch (error) {
                console.error('LLM completion error:', error);
                throw error;
            }
        },

        /**
         * Format request for specific provider
         * @private
         */
        _formatRequest(provider, options) {
            const { model, messages, temperature, maxTokens, stream } = options;

            switch (provider.toLowerCase()) {
                case 'openai':
                    return {
                        model: model,
                        messages: messages,
                        temperature: temperature,
                        max_tokens: maxTokens,
                        stream: stream
                    };

                case 'anthropic':
                    // Separate system message for Anthropic
                    const anthropicMessages = [];
                    let systemMessage = null;

                    for (const msg of messages) {
                        if (msg.role === 'system') {
                            systemMessage = msg.content;
                        } else {
                            anthropicMessages.push({
                                role: msg.role,
                                content: msg.content
                            });
                        }
                    }

                    const anthropicRequest = {
                        model: model,
                        messages: anthropicMessages,
                        max_tokens: maxTokens,
                        temperature: temperature,
                        stream: stream
                    };

                    if (systemMessage) {
                        anthropicRequest.system = systemMessage;
                    }

                    return anthropicRequest;

                case 'google':
                    // Convert to Google's parts format
                    const contents = [];
                    let systemInstruction = null;

                    for (const msg of messages) {
                        if (msg.role === 'system') {
                            systemInstruction = msg.content;
                        } else if (msg.role === 'user') {
                            contents.push({
                                role: 'user',
                                parts: [{ text: msg.content }]
                            });
                        } else if (msg.role === 'assistant') {
                            contents.push({
                                role: 'model',
                                parts: [{ text: msg.content }]
                            });
                        }
                    }

                    const googleRequest = {
                        contents: contents,
                        generationConfig: {
                            temperature: temperature,
                            maxOutputTokens: maxTokens
                        }
                    };

                    if (systemInstruction) {
                        googleRequest.systemInstruction = {
                            parts: [{ text: systemInstruction }]
                        };
                    }

                    return googleRequest;

                case 'ollama':
                    return {
                        model: model,
                        messages: messages,
                        stream: stream,
                        options: {
                            temperature: temperature,
                            num_predict: maxTokens
                        }
                    };

                default:
                    throw new Error(`Unsupported provider: ${provider}`);
            }
        },

        /**
         * Get headers for specific provider
         * @private
         */
        _getHeaders(provider, apiKey) {
            const headers = {
                'Content-Type': 'application/json'
            };

            switch (provider.toLowerCase()) {
                case 'openai':
                    if (apiKey) {
                        headers['Authorization'] = `Bearer ${apiKey}`;
                    }
                    break;

                case 'anthropic':
                    if (apiKey) {
                        headers['X-API-Key'] = apiKey;
                        headers['anthropic-version'] = '2023-06-01';
                    }
                    break;

                case 'google':
                    // Google uses API key in URL query parameter, not header
                    break;

                case 'ollama':
                    // Ollama typically doesn't require authentication
                    break;
            }

            return headers;
        },

        /**
         * Normalize response from provider to OpenAI format
         * @private
         */
        _normalizeResponse(provider, responseData) {
            switch (provider.toLowerCase()) {
                case 'openai':
                    return {
                        content: responseData.choices?.[0]?.message?.content || '',
                        model: responseData.model || '',
                        usage: responseData.usage || {}
                    };

                case 'anthropic':
                    const anthropicContent = responseData.content?.[0]?.text || '';
                    return {
                        content: anthropicContent,
                        model: responseData.model || '',
                        usage: responseData.usage || {}
                    };

                case 'google':
                    const googleContent = responseData.candidates?.[0]?.content?.parts?.[0]?.text || '';
                    return {
                        content: googleContent,
                        model: 'google-model', // Google doesn't return model in response
                        usage: responseData.usageMetadata || {}
                    };

                case 'ollama':
                    return {
                        content: responseData.message?.content || '',
                        model: responseData.model || '',
                        usage: {
                            prompt_tokens: responseData.prompt_eval_count || 0,
                            completion_tokens: responseData.eval_count || 0,
                            total_tokens: (responseData.prompt_eval_count || 0) + (responseData.eval_count || 0)
                        }
                    };

                default:
                    // Generic fallback
                    return {
                        content: JSON.stringify(responseData),
                        model: 'unknown',
                        usage: {}
                    };
            }
        },

        /**
         * Get supported providers and their typical endpoints
         */
        getProviders() {
            return {
                openai: {
                    name: 'OpenAI',
                    endpoint: 'https://api.openai.com/v1/chat/completions',
                    models: ['gpt-4o', 'gpt-4o-mini', 'gpt-4-turbo', 'gpt-4', 'gpt-3.5-turbo'],
                    requiresApiKey: true
                },
                anthropic: {
                    name: 'Anthropic Claude',
                    endpoint: 'https://api.anthropic.com/v1/messages',
                    models: ['claude-3-5-sonnet-20241022', 'claude-3-5-haiku-20241022', 'claude-3-opus-20240229'],
                    requiresApiKey: true
                },
                google: {
                    name: 'Google Gemini',
                    endpoint: 'https://generativelanguage.googleapis.com/v1/models/{model}:generateContent?key={apiKey}',
                    models: ['gemini-1.5-pro', 'gemini-1.5-flash', 'gemini-pro'],
                    requiresApiKey: true,
                    note: 'API key goes in URL, not header'
                },
                ollama: {
                    name: 'Ollama (Local)',
                    endpoint: 'http://localhost:11434/api/chat',
                    models: ['llama3.2', 'llama3.1', 'mistral', 'codellama', 'qwen2.5'],
                    requiresApiKey: false
                }
            };
        }
    };

    console.log('Sypnex API LLM module loaded');

})();
