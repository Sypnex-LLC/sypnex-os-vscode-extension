<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Sypnex OS API Support Extension

This is a VS Code extension project. Please use the get_vscode_api with a query as input to fetch the latest VS Code API references.

## Project Purpose
This extension provides IntelliSense and autocomplete support for Sypnex OS API - a web OS platform that injects a global `sypnexAPI` object into sandboxed applications.

## Key Features
- Autocomplete for `sypnexAPI` global variable
- Method signatures and parameter hints
- Documentation on hover
- Support for JavaScript and TypeScript files

## Technical Implementation
- Uses VS Code's CompletionItemProvider API
- Detects when users type `sypnexAPI.` 
- Provides autocomplete suggestions based on Sypnex API methods
- Supports async/await patterns common in the API
