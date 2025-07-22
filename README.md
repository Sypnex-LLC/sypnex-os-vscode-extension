# Sypnex OS API Support

VS Code extension that provides IntelliSense and autocomplete support for the Sypnex OS API.

## Features

This extension provides intelligent code completion for the `sypnexAPI` global object that gets injected into Sypnex OS applications:

- **Autocomplete**: Type `sypnexAPI.` to see all available methods
- **Method signatures**: View parameter types and return values
- **Documentation**: Hover over methods to see descriptions
- **Async/await support**: Properly handles Promise-based methods

## How to Use

1. Install this extension in VS Code
2. Open any JavaScript file in your Sypnex OS project
3. Type `sypnexAPI.` and you'll see autocomplete suggestions
4. Hover over any method to see its documentation

## Supported Methods

The extension provides autocomplete for 65+ Sypnex API methods including:

- **Settings**: `getSetting()`, `setSetting()`, `getAllSettings()`, `deleteSetting()`
- **Virtual File System**: `readVirtualFile()`, `writeVirtualFile()`, `listVirtualFiles()`, `getVirtualFileStats()`
- **WebSocket**: `connectSocket()`, `sendMessage()`, `joinRoom()`, `leaveRoom()`
- **Logging**: `logInfo()`, `logError()`, `logDebug()`, `logWarn()`
- **Window Management**: `getWindowState()`, `saveWindowState()`
- **Utilities**: `isInitialized()`, `getAppId()`, `ping()`

## Requirements

- VS Code 1.102.0 or higher
- Works with JavaScript files
