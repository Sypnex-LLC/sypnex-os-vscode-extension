# Sypnex OS API Support

VS Code extension that provides IntelliSense and autocomplete support for the Sypnex OS API.

## Features

This extension provides intelligent code completion for the `sypnexAPI` global object that gets injected into Sypnex OS applications:

- **Autocomplete**: Type `sypnexAPI.` to see all available methods
- **Method signatures**: View parameter types and return values
- **Documentation**: Hover over methods to see descriptions
- **Async/await support**: Properly handles Promise-based methods

## Supported Methods

The extension provides autocomplete for key Sypnex API methods including:

- **Settings**: `getSetting()`, `setSetting()`, `getAllSettings()`, `deleteSetting()`
- **Virtual File System**: `readVirtualFile()`, `writeVirtualFile()`, `listVirtualFiles()`, `getVirtualFileStats()`
- **WebSocket**: `connectSocket()`, `sendMessage()`
- **Logging**: `logInfo()`, `logError()`
- **Utilities**: `isInitialized()`, `getAppId()`, `showNotification()`

## Development and Testing

### To test this extension locally:

1. Open this project in VS Code
2. Press `F5` or run "Run Extension" from the debug menu
3. This opens a new VS Code window with the extension loaded
4. Create a new JavaScript or TypeScript file
5. Type `sypnexAPI.` and you should see autocomplete suggestions

### To build and package:

```bash
npm run compile
```

## Requirements

- VS Code 1.102.0 or higher
- Works with JavaScript and TypeScript files

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
