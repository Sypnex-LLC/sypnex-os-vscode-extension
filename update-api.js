#!/usr/bin/env node
/**
 * Auto-generate VS Code extension methods from sypnex-api.js
 * Run this script whenever the Sypnex API is updated
 */

const fs = require('fs');
const path = require('path');

// Path to your sypnex-api.js file (update this path as needed)
const API_FILE_PATH = './sypnex-api.js';
const EXTENSION_FILE_PATH = './src/extension.ts';

function extractMethodsFromApi(apiContent) {
    const methods = [];
    
    // Enhanced pattern to capture JSDoc comments and method signatures
    const fullContent = apiContent.replace(/\r\n/g, '\n'); // Normalize line endings
    
    // Look for JSDoc comment blocks followed by method definitions
    const jsdocMethodPattern = /(\/\*\*[\s\S]*?\*\/)\s*(async\s+)?([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(([^)]*)\)\s*\{/g;
    
    let match;
    while ((match = jsdocMethodPattern.exec(fullContent)) !== null) {
        const jsdocComment = match[1];
        const isAsync = !!match[2];
        const methodName = match[3];
        const params = match[4].trim();
        
        // Extract description from JSDoc
        let description = generateMethodDescription(methodName);
        if (jsdocComment) {
            const descMatch = jsdocComment.match(/\/\*\*\s*\n?\s*\*?\s*([^@\n*]+)/);
            if (descMatch && descMatch[1].trim()) {
                description = descMatch[1].trim()
                    .replace(/'/g, "\\'")  // Escape single quotes
                    .replace(/"/g, '\\"')  // Escape double quotes
                    .replace(/\n/g, ' ')   // Replace newlines with spaces
                    .replace(/\s+/g, ' '); // Normalize whitespace
            }
        }
        
        // Filter out invalid method names and keywords
        if (methodName && 
            !methodName.startsWith('_') && 
            methodName !== 'constructor' &&
            !['if', 'for', 'while', 'catch', 'try', 'switch', 'function', 'const', 'let', 'var', 'return', 'not', 'assign'].includes(methodName) &&
            /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(methodName) &&  // Valid JavaScript identifier
            !methods.some(m => m.name === methodName)) {  // Avoid duplicates
            
            methods.push({
                name: methodName,
                params: params,
                isAsync: isAsync,
                description: description,
                jsdoc: jsdocComment || null
            });
        }
    }
    
    // Also look for methods without JSDoc comments
    const simpleMethodPattern = /(?<!\/\*\*[\s\S]*?\*\/\s*)(async\s+)?([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(([^)]*)\)\s*\{/g;
    
    // Split content into lines to filter out obvious non-methods
    const lines = fullContent.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Skip lines that are clearly not method definitions
        if (line.startsWith('if') || line.startsWith('for') || line.startsWith('while') || 
            line.startsWith('catch') || line.startsWith('try') || line.startsWith('switch') ||
            line.includes('=') && !line.includes('=>') ||  // Assignment but not arrow function
            line.startsWith('//') || line.startsWith('/*') ||
            line.includes('Object.assign') || line.includes('console.') ||
            line.includes(':') && !line.includes('(')) {  // CSS selectors, object properties
            continue;
        }
        
        // Look for method patterns in this line and a few following lines for multiline methods
        const context = lines.slice(i, i + 3).join('\n');
        
        let simpleMatch;
        while ((simpleMatch = simpleMethodPattern.exec(context)) !== null) {
            const isAsync = !!simpleMatch[1];
            const methodName = simpleMatch[2];
            const params = simpleMatch[3].trim();
            
            // Filter out invalid method names and keywords
            if (methodName && 
                !methodName.startsWith('_') && 
                methodName !== 'constructor' &&
                !['if', 'for', 'while', 'catch', 'try', 'switch', 'function', 'const', 'let', 'var', 'return', 'not', 'assign'].includes(methodName) &&
                /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(methodName) &&  // Valid JavaScript identifier
                !methods.some(m => m.name === methodName)) {  // Avoid duplicates
                
                methods.push({
                    name: methodName,
                    params: params,
                    isAsync: isAsync,
                    description: generateMethodDescription(methodName),
                    jsdoc: null
                });
            }
        }
        
        // Reset regex for next iteration
        simpleMethodPattern.lastIndex = 0;
    }
    
    return methods;
}

function generateMethodSignature(method) {
    // Convert JavaScript parameters to TypeScript-like signature
    let signature = method.name + '(';
    
    if (method.params) {
        const params = method.params.split(',').map(param => {
            const trimmed = param.trim();
            if (!trimmed) return '';
            
            // Handle default values
            if (trimmed.includes('=')) {
                const [name] = trimmed.split('=');
                return `${name.trim()}?: any`;
            } else {
                return `${trimmed}: any`;
            }
        }).filter(p => p).join(', ');
        
        signature += params;
    }
    
    signature += ')';
    
    if (method.isAsync) {
        signature += ': Promise<any>';
    } else {
        signature += ': any';
    }
    
    return signature;
}

function generateMethodDescription(methodName) {
    // Common descriptions for known methods
    const descriptions = {
        'init': 'Initialize the SypnexAPI instance',
        'getSetting': 'Get an application setting value',
        'setSetting': 'Set an application setting value',
        'getAllSettings': 'Get all application settings',
        'deleteSetting': 'Delete an application setting',
        'getVirtualFileStats': 'Get virtual file system statistics',
        'listVirtualFiles': 'List files in virtual file system',
        'readVirtualFile': 'Read a file from virtual file system',
        'writeVirtualFile': 'Write a file to virtual file system',
        'deleteVirtualItem': 'Delete a file or folder from virtual file system',
        'connectSocket': 'Connect to a WebSocket',
        'sendMessage': 'Send a message through WebSocket',
        'isInitialized': 'Check if the API is initialized',
        'getAppId': 'Get the current application ID',
        'showNotification': 'Show a notification to the user',
        'logInfo': 'Log an info message',
        'logError': 'Log an error message',
        'executeTerminalCommand': 'Execute a terminal command',
        'readVirtualFileText': 'Read a text file from virtual file system',
        'readVirtualFileJSON': 'Read a JSON file from virtual file system',
        'writeVirtualFileJSON': 'Write a JSON file to virtual file system',
        'createVirtualFolder': 'Create a folder in virtual file system',
        'createVirtualFile': 'Create a file in virtual file system',
        'getVirtualItemInfo': 'Get information about a virtual file system item',
        'virtualItemExists': 'Check if a virtual file system item exists'
    };
    
    return descriptions[methodName] || `${methodName} method from Sypnex API`;
}

function generateExtensionCode(methods) {
    const methodDefinitions = methods.map(method => {
        return `\t{
\t\tname: '${method.name}',
\t\tsignature: '${generateMethodSignature(method)}',
\t\tdescription: '${method.description}',
\t\tisAsync: ${method.isAsync}
\t}`;
    }).join(',\n');
    
    return `// Sypnex API method definitions (auto-generated)
const sypnexApiMethods = [
${methodDefinitions}
];`;
}

function updateExtensionFile(newMethodsCode) {
    const extensionContent = fs.readFileSync(EXTENSION_FILE_PATH, 'utf8');
    
    // Replace the sypnexApiMethods array
    const updatedContent = extensionContent.replace(
        /\/\/ Sypnex API method definitions[\s\S]*?^];/m,
        newMethodsCode
    );
    
    fs.writeFileSync(EXTENSION_FILE_PATH, updatedContent, 'utf8');
}

function main() {
    try {
        console.log('🔍 Reading Sypnex API file...');
        
        if (!fs.existsSync(API_FILE_PATH)) {
            console.error(`❌ API file not found: ${API_FILE_PATH}`);
            console.log('💡 Update the API_FILE_PATH in this script to point to your sypnex-api.js file');
            process.exit(1);
        }
        
        const apiContent = fs.readFileSync(API_FILE_PATH, 'utf8');
        
        console.log('🔍 Extracting methods...');
        const methods = extractMethodsFromApi(apiContent);
        
        console.log(`✅ Found ${methods.length} methods:`);
        methods.forEach(method => {
            const asyncMarker = method.isAsync ? 'async ' : '';
            console.log(`   - ${asyncMarker}${method.name}(${method.params})`);
        });
        
        console.log('🔧 Generating extension code...');
        const newMethodsCode = generateExtensionCode(methods);
        
        console.log('📝 Updating extension.ts...');
        updateExtensionFile(newMethodsCode);
        
        console.log('✅ Extension updated successfully!');
        console.log('💡 Run "npm run compile && vsce package" to rebuild the extension');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}
