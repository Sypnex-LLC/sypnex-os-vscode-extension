# Sypnex API Documentation

## Overview
The Sypnex API is globally available as `sypnexAPI` in all applications running in the Sypnex OS environment.

## Usage
Simply use `sypnexAPI.methodName()` - no imports or instantiation needed.

## Available Methods

### `init()`
- **Description:** Initialize the SypnexAPI instance
- **Returns:** Promise
- **Usage:** `await sypnexAPI.init()`

### `getAppMetadata()`
- **Description:** Get metadata for this application
- **Returns:** Promise
- **Usage:** `await sypnexAPI.getAppMetadata()`

### `isInitialized()`
- **Description:** Check if the SypnexAPI has been initialized
- **Returns:** any
- **Usage:** `sypnexAPI.isInitialized()`

### `getAppId()`
- **Description:** Get the application ID
- **Returns:** any
- **Usage:** `sypnexAPI.getAppId()`

### `getWindowState()`
- **Description:** Get the saved window state for this application
- **Returns:** Promise
- **Usage:** `await sypnexAPI.getWindowState()`

### `saveWindowState(state)`
- **Description:** Save the window state for this application
- **Returns:** Promise
- **Usage:** `await sypnexAPI.saveWindowState(state)`

**Parameters:**
-  {object} state - Window state object to save

### `refreshAppVersionsCache()`
- **Description:** Request the OS to refresh the latest app versions cache
- **Returns:** Promise
- **Usage:** `await sypnexAPI.refreshAppVersionsCache()`

### `showConfirmation(title, message, options = {})`
- **Description:** Show a confirmation dialog with standard OS styling
- **Returns:** Promise
- **Usage:** `await sypnexAPI.showConfirmation(title, message, options = {})`

**Parameters:**
-  {string} title - Dialog title
-  {string} message - Dialog message

### `showInputModal(title, message, options = {})`
- **Description:** Show an input modal for getting text input from user
- **Returns:** Promise
- **Usage:** `await sypnexAPI.showInputModal(title, message, options = {})`

**Parameters:**
-  {string} title - Modal title
-  {string} message - Modal message/label

### `showFileUploadModal(title, message, options = {})`
- **Description:** Show a file upload modal
- **Returns:** Promise
- **Usage:** `await sypnexAPI.showFileUploadModal(title, message, options = {})`

**Parameters:**
-  {string} title - Modal title
-  {string} message - Modal message/label

### `createHamburgerMenu(container, menuItems, options = {})`
- **Description:** Create a hamburger menu with customizable items
- **Returns:** any
- **Usage:** `sypnexAPI.createHamburgerMenu(container, menuItems, options = {})`

**Parameters:**
-  {HTMLElement} container - The container element to append the menu to
-  {Array} menuItems - Array of menu item objects

### `detectAppScale()`
- **Description:** Scaling utilities for handling app scaling across all user applications
- **Returns:** any
- **Usage:** `sypnexAPI.detectAppScale()`

### `getEffectiveScale(zoomScale = 1.0)`
- **Description:** Get the total effective scale (app scale × optional zoom scale)
- **Returns:** any
- **Usage:** `sypnexAPI.getEffectiveScale(zoomScale = 1.0)`

### `screenToAppCoords(screenX, screenY, zoomScale = 1.0)`
- **Description:** Convert screen coordinates to app coordinates (accounting for app scale and optional zoom)
- **Returns:** any
- **Usage:** `sypnexAPI.screenToAppCoords(screenX, screenY, zoomScale = 1.0)`

**Parameters:**
-  {number} screenX - Screen X coordinate
-  {number} screenY - Screen Y coordinate

### `appToScreenCoords(appX, appY, zoomScale = 1.0)`
- **Description:** Convert app coordinates to screen coordinates (accounting for app scale and optional zoom)
- **Returns:** any
- **Usage:** `sypnexAPI.appToScreenCoords(appX, appY, zoomScale = 1.0)`

**Parameters:**
-  {number} appX - App X coordinate
-  {number} appY - App Y coordinate

### `getScaledBoundingClientRect(element)`
- **Description:** Get scaled element bounding rectangle (compensates for app scaling)
- **Returns:** any
- **Usage:** `sypnexAPI.getScaledBoundingClientRect(element)`

**Parameters:**
-  {Element} element - DOM element to get bounds for

### `getScaledMouseCoords(e)`
- **Description:** Get scaled mouse coordinates from event (compensates for app scaling only)
- **Returns:** any
- **Usage:** `sypnexAPI.getScaledMouseCoords(e)`

**Parameters:**
-  {Event} e - Mouse event

### `initScaleDetection(onScaleChange = null)`
- **Description:** Initialize scale detection with optional change callback
- **Returns:** any
- **Usage:** `sypnexAPI.initScaleDetection(onScaleChange = null)`

### `getCurrentScale()`
- **Description:** Get current cached app scale (without re-detection)
- **Returns:** any
- **Usage:** `sypnexAPI.getCurrentScale()`

### `refreshScale()`
- **Description:** Force refresh of scale detection
- **Returns:** any
- **Usage:** `sypnexAPI.refreshScale()`

### `getSetting(key, defaultValue = null)`
- **Description:** Get an application setting
- **Returns:** Promise
- **Usage:** `await sypnexAPI.getSetting(key, defaultValue = null)`

**Parameters:**
-  {string} key - Setting key to retrieve

### `setSetting(key, value)`
- **Description:** Set an application setting
- **Returns:** Promise
- **Usage:** `await sypnexAPI.setSetting(key, value)`

**Parameters:**
-  {string} key - Setting key to set
-  {*} value - Value to store

### `getAllSettings()`
- **Description:** Get all application settings
- **Returns:** Promise
- **Usage:** `await sypnexAPI.getAllSettings()`

### `deleteSetting(key)`
- **Description:** Delete an application setting
- **Returns:** Promise
- **Usage:** `await sypnexAPI.deleteSetting(key)`

**Parameters:**
-  {string} key - Setting key to delete

### `getPreference(category, key, defaultValue = null)`
- **Description:** Get a user preference value
- **Returns:** Promise
- **Usage:** `await sypnexAPI.getPreference(category, key, defaultValue = null)`

**Parameters:**
-  {string} category - Preference category
-  {string} key - Preference key

### `setPreference(category, key, value)`
- **Description:** Set a user preference value
- **Returns:** Promise
- **Usage:** `await sypnexAPI.setPreference(category, key, value)`

**Parameters:**
-  {string} category - Preference category
-  {string} key - Preference key
-  {*} value - Value to store

### `connectSocket(url = null, options = {})`
- **Description:** Connect to Socket.IO server for this app instance
- **Returns:** Promise
- **Usage:** `await sypnexAPI.connectSocket(url = null, options = {})`

**Parameters:**
-  {string} url - Socket.IO server URL (defaults to current origin)
-  {object} options - Socket.IO connection options

### `disconnectSocket()`
- **Description:** Disconnect from Socket.IO server
- **Returns:** any
- **Usage:** `sypnexAPI.disconnectSocket()`

### `isSocketConnected()`
- **Description:** Check if Socket.IO is connected
- **Returns:** any
- **Usage:** `sypnexAPI.isSocketConnected()`

### `sendMessage(event, data, room = null)`
- **Description:** Send a message via Socket.IO
- **Returns:** any
- **Usage:** `sypnexAPI.sendMessage(event, data, room = null)`

**Parameters:**
-  {string} event - Event name
-  {any} data - Data to send
-  {string} room - Room to send to (optional)

### `joinRoom(roomName)`
- **Description:** Join a Socket.IO room
- **Returns:** any
- **Usage:** `sypnexAPI.joinRoom(roomName)`

**Parameters:**
-  {string} roomName - Room to join

### `leaveRoom(roomName)`
- **Description:** Leave a Socket.IO room
- **Returns:** any
- **Usage:** `sypnexAPI.leaveRoom(roomName)`

**Parameters:**
-  {string} roomName - Room to leave

### `ping()`
- **Description:** Send a ping to test connection
- **Returns:** Promise
- **Usage:** `await sypnexAPI.ping()`

### `on(eventName, callback)`
- **Description:** Listen for Socket.IO events
- **Returns:** any
- **Usage:** `sypnexAPI.on(eventName, callback)`

**Parameters:**
-  {string} eventName - Event name to listen for
-  {function} callback - Callback function

### `off(eventName, callback)`
- **Description:** Remove Socket.IO event listener
- **Returns:** any
- **Usage:** `sypnexAPI.off(eventName, callback)`

**Parameters:**
-  {string} eventName - Event name
-  {function} callback - Callback function to remove

### `getSocket()`
- **Description:** Get the Socket.IO instance
- **Returns:** any
- **Usage:** `sypnexAPI.getSocket()`

### `getSocketState()`
- **Description:** Get Socket.IO connection state
- **Returns:** any
- **Usage:** `sypnexAPI.getSocketState()`

### `startHealthChecks()`
- **Description:** Start periodic health checks
- **Returns:** any
- **Usage:** `sypnexAPI.startHealthChecks()`

### `stopHealthChecks()`
- **Description:** Stop periodic health checks
- **Returns:** any
- **Usage:** `sypnexAPI.stopHealthChecks()`

### `performHealthCheck()`
- **Description:** Perform a health check ping
- **Returns:** Promise
- **Usage:** `await sypnexAPI.performHealthCheck()`

### `setHealthChecks(enabled)`
- **Description:** Enable or disable health checks
- **Returns:** any
- **Usage:** `sypnexAPI.setHealthChecks(enabled)`

**Parameters:**
-  {boolean} enabled - Whether to enable health checks

### `setHealthCheckInterval(intervalMs)`
- **Description:** Set health check interval
- **Returns:** any
- **Usage:** `sypnexAPI.setHealthCheckInterval(intervalMs)`

**Parameters:**
-  {number} intervalMs - Interval in milliseconds

### `setAutoReconnect(enabled)`
- **Description:** Enable or disable auto-reconnect
- **Returns:** any
- **Usage:** `sypnexAPI.setAutoReconnect(enabled)`

**Parameters:**
-  {boolean} enabled - Whether to enable auto-reconnect

### `setReconnectConfig(config)`
- **Description:** Set auto-reconnect configuration
- **Returns:** any
- **Usage:** `sypnexAPI.setReconnectConfig(config)`

**Parameters:**
-  {object} config - Reconnect configuration

### `reconnect()`
- **Description:** Manually trigger reconnection
- **Returns:** any
- **Usage:** `sypnexAPI.reconnect()`

### `getVirtualFileStats()`
- **Description:** Get virtual file system statistics
- **Returns:** Promise
- **Usage:** `await sypnexAPI.getVirtualFileStats()`

### `listVirtualFiles(path = '/')`
- **Description:** List files and directories in a path
- **Returns:** Promise
- **Usage:** `await sypnexAPI.listVirtualFiles(path = '/')`

**Parameters:**
-  {string} path - Directory path (defaults to '/')

### `createVirtualFolder(name, parentPath = '/')`
- **Description:** Create a new folder
- **Returns:** Promise
- **Usage:** `await sypnexAPI.createVirtualFolder(name, parentPath = '/')`

**Parameters:**
-  {string} name - Folder name
-  {string} parentPath - Parent directory path (defaults to '/')

### `createVirtualFile(name, content = '', parentPath = '/')`
- **Description:** Create a new file
- **Returns:** Promise
- **Usage:** `await sypnexAPI.createVirtualFile(name, content = '', parentPath = '/')`

**Parameters:**
-  {string} name - File name
-  {string} content - File content
-  {string} parentPath - Parent directory path (defaults to '/')

### `uploadVirtualFile(file, parentPath = '/')`
- **Description:** Upload a file from the host system
- **Returns:** Promise
- **Usage:** `await sypnexAPI.uploadVirtualFile(file, parentPath = '/')`

**Parameters:**
-  {File} file - File object from input element
-  {string} parentPath - Parent directory path (defaults to '/')

### `uploadVirtualFileChunked(file, parentPath = '/', progressCallback = null)`
- **Description:** Upload a file with real progress tracking based on actual upload progress
- **Returns:** any
- **Usage:** `sypnexAPI.uploadVirtualFileChunked(file, parentPath = '/', progressCallback = null)`

**Parameters:**
-  {File} file - File object from input element
-  {string} parentPath - Parent directory path (defaults to '/')
-  {Function} progressCallback - Callback for progress updates (percent)

### `readVirtualFile(filePath)`
- **Description:** Read a file\'s content
- **Returns:** Promise
- **Usage:** `await sypnexAPI.readVirtualFile(filePath)`

**Parameters:**
-  {string} filePath - Path to the file

### `readVirtualFileText(filePath)`
- **Description:** Get a file\'s content as text
- **Returns:** Promise
- **Usage:** `await sypnexAPI.readVirtualFileText(filePath)`

**Parameters:**
-  {string} filePath - Path to the file

### `readVirtualFileJSON(filePath)`
- **Description:** Get a file\'s content as JSON
- **Returns:** Promise
- **Usage:** `await sypnexAPI.readVirtualFileJSON(filePath)`

**Parameters:**
-  {string} filePath - Path to the file

### `readVirtualFileBlob(filePath)`
- **Description:** Get a file\'s content as Blob (for binary files, images, etc.)
- **Returns:** Promise
- **Usage:** `await sypnexAPI.readVirtualFileBlob(filePath)`

**Parameters:**
-  {string} filePath - Path to the file

### `getVirtualFileUrl(filePath)`
- **Description:** Serve a file directly (for binary files, images, etc.)
- **Returns:** any
- **Usage:** `sypnexAPI.getVirtualFileUrl(filePath)`

**Parameters:**
-  {string} filePath - Path to the file

### `deleteVirtualItem(itemPath)`
- **Description:** Delete a file or directory
- **Returns:** Promise
- **Usage:** `await sypnexAPI.deleteVirtualItem(itemPath)`

**Parameters:**
-  {string} itemPath - Path to the item to delete

### `getVirtualItemInfo(itemPath)`
- **Description:** Get information about a file or directory
- **Returns:** Promise
- **Usage:** `await sypnexAPI.getVirtualItemInfo(itemPath)`

**Parameters:**
-  {string} itemPath - Path to the item

### `virtualItemExists(itemPath)`
- **Description:** Check if a file or directory exists
- **Returns:** Promise
- **Usage:** `await sypnexAPI.virtualItemExists(itemPath)`

**Parameters:**
-  {string} itemPath - Path to the item

### `writeVirtualFile(filePath, content)`
- **Description:** Write content to a file (creates or overwrites)
- **Returns:** Promise
- **Usage:** `await sypnexAPI.writeVirtualFile(filePath, content)`

**Parameters:**
-  {string} filePath - Path to the file
-  {string} content - File content

### `writeVirtualFileJSON(filePath, data)`
- **Description:** Write JSON content to a file
- **Returns:** Promise
- **Usage:** `await sypnexAPI.writeVirtualFileJSON(filePath, data)`

**Parameters:**
-  {string} filePath - Path to the file
-  {object} data - JSON data to write

### `writeVirtualFileBinary(filePath, binaryData)`
- **Description:** Write binary content to a file using the upload endpoint
- **Returns:** Promise
- **Usage:** `await sypnexAPI.writeVirtualFileBinary(filePath, binaryData)`

**Parameters:**
-  {string} filePath - Path to the file
-  {Uint8Array|Blob} binaryData - Binary data to write

### `createVirtualDirectoryStructure(dirPath)`
- **Description:** Create a directory structure (creates parent directories if needed)
- **Returns:** Promise
- **Usage:** `await sypnexAPI.createVirtualDirectoryStructure(dirPath)`

**Parameters:**
-  {string} dirPath - Directory path to create

### `loadLibrary(url, options = {})`
- **Description:** Load a library from CDN
- **Returns:** Promise
- **Usage:** `await sypnexAPI.loadLibrary(url, options = {})`

**Parameters:**
-  {string} url - CDN URL of the library
-  {object} options - Loading options

### `showFileExplorer(options = {})`
- **Description:** Show a file explorer modal for selecting files or directories
- **Returns:** Promise
- **Usage:** `await sypnexAPI.showFileExplorer(options = {})`

**Parameters:**
-  {object} options - Configuration options

### `writeLog(logData)`
- **Description:** Write a log entry
- **Returns:** Promise
- **Usage:** `await sypnexAPI.writeLog(logData)`

**Parameters:**
-  {object} logData - Log entry data

### `logDebug(message, details = {})`
- **Description:** Convenience method to write debug log
- **Returns:** Promise
- **Usage:** `await sypnexAPI.logDebug(message, details = {})`

**Parameters:**
-  {string} message - Log message

### `logInfo(message, details = {})`
- **Description:** Convenience method to write info log
- **Returns:** Promise
- **Usage:** `await sypnexAPI.logInfo(message, details = {})`

**Parameters:**
-  {string} message - Log message

### `logWarn(message, details = {})`
- **Description:** Convenience method to write warning log
- **Returns:** Promise
- **Usage:** `await sypnexAPI.logWarn(message, details = {})`

**Parameters:**
-  {string} message - Log message

### `logError(message, details = {})`
- **Description:** Convenience method to write error log
- **Returns:** Promise
- **Usage:** `await sypnexAPI.logError(message, details = {})`

**Parameters:**
-  {string} message - Log message

### `logCritical(message, details = {})`
- **Description:** Convenience method to write critical log
- **Returns:** Promise
- **Usage:** `await sypnexAPI.logCritical(message, details = {})`

**Parameters:**
-  {string} message - Log message

### `readLogs(filters = {})`
- **Description:** Read logs with filtering options
- **Returns:** Promise
- **Usage:** `await sypnexAPI.readLogs(filters = {})`

### `getLogDates()`
- **Description:** Get available log dates for each component
- **Returns:** Promise
- **Usage:** `await sypnexAPI.getLogDates()`

### `clearLogs(filters = {})`
- **Description:** Clear logs with optional filtering
- **Returns:** Promise
- **Usage:** `await sypnexAPI.clearLogs(filters = {})`

### `getLogStats()`
- **Description:** Get logging system statistics
- **Returns:** Promise
- **Usage:** `await sypnexAPI.getLogStats()`

### `getMyLogs(filters = {})`
- **Description:** Get logs for the current app (convenience method)
- **Returns:** Promise
- **Usage:** `await sypnexAPI.getMyLogs(filters = {})`

### `getAvailableApps()`
- **Description:** Get available applications from the registry
- **Returns:** Promise
- **Usage:** `await sypnexAPI.getAvailableApps()`

### `getInstalledApps()`
- **Description:** Get list of installed applications
- **Returns:** Promise
- **Usage:** `await sypnexAPI.getInstalledApps()`

### `updateApp(appId, downloadUrl)`
- **Description:** Update a specific application to the latest version
- **Returns:** Promise
- **Usage:** `await sypnexAPI.updateApp(appId, downloadUrl)`

**Parameters:**
-  {string} appId - Application ID to update
-  {string} downloadUrl - Download URL for the app update (required)

### `refreshAppRegistry()`
- **Description:** Refresh the application registry cache
- **Returns:** Promise
- **Usage:** `await sypnexAPI.refreshAppRegistry()`

### `installApp(appId, options = {})`
- **Description:** Install an application from the registry
- **Returns:** Promise
- **Usage:** `await sypnexAPI.installApp(appId, options = {})`

**Parameters:**
-  {string} appId - Application ID to install

### `uninstallApp(appId)`
- **Description:** Uninstall an application
- **Returns:** Promise
- **Usage:** `await sypnexAPI.uninstallApp(appId)`

**Parameters:**
-  {string} appId - Application ID to uninstall

### `proxyHTTP(options)`
- **Description:** Proxy an HTTP request through the system (tries direct CORS, falls back to proxy)
- **Returns:** Promise
- **Usage:** `await sypnexAPI.proxyHTTP(options)`

**Parameters:**
-  {object} options - HTTP request options

### `proxyGET(url, options = {})`
- **Description:** Make a GET request through the proxy
- **Returns:** Promise
- **Usage:** `await sypnexAPI.proxyGET(url, options = {})`

**Parameters:**
-  {string} url - Target URL

### `proxyPOST(url, body, options = {})`
- **Description:** Make a POST request through the proxy
- **Returns:** Promise
- **Usage:** `await sypnexAPI.proxyPOST(url, body, options = {})`

**Parameters:**
-  {string} url - Target URL
-  {*} body - Request body

### `proxyPUT(url, body, options = {})`
- **Description:** Make a PUT request through the proxy
- **Returns:** Promise
- **Usage:** `await sypnexAPI.proxyPUT(url, body, options = {})`

**Parameters:**
-  {string} url - Target URL
-  {*} body - Request body

### `proxyDELETE(url, options = {})`
- **Description:** Make a DELETE request through the proxy
- **Returns:** Promise
- **Usage:** `await sypnexAPI.proxyDELETE(url, options = {})`

**Parameters:**
-  {string} url - Target URL

### `proxyJSON(url, options = {})`
- **Description:** Make a JSON API request through the proxy
- **Returns:** Promise
- **Usage:** `await sypnexAPI.proxyJSON(url, options = {})`

**Parameters:**
-  {string} url - Target URL

### `forEach(item => {
            if (item.type === 'separator')`
- **Description:** forEach method from Sypnex API
- **Returns:** any
- **Usage:** `sypnexAPI.forEach(item => {
            if (item.type === 'separator')`

### `scaling()`
- **Description:** scaling method from Sypnex API
- **Returns:** any
- **Usage:** `sypnexAPI.scaling()`

### `encrypt(value)`
- **Description:** encrypt method from Sypnex API
- **Returns:** Promise
- **Usage:** `await sypnexAPI.encrypt(value)`

### `decrypt(encryptedValue)`
- **Description:** decrypt method from Sypnex API
- **Returns:** Promise
- **Usage:** `await sypnexAPI.decrypt(encryptedValue)`

### `media(max-width: 768px)`
- **Description:** media method from Sypnex API
- **Returns:** any
- **Usage:** `sypnexAPI.media(max-width: 768px)`

### `loadDirectory(path, isRefresh = false)`
- **Description:** loadDirectory method from Sypnex API
- **Returns:** any
- **Usage:** `sypnexAPI.loadDirectory(path, isRefresh = false)`

### `updateBreadcrumb(path)`
- **Description:** updateBreadcrumb method from Sypnex API
- **Returns:** any
- **Usage:** `sypnexAPI.updateBreadcrumb(path)`


## Example Usage

```javascript
// Initialize the API (if needed)
await sypnexAPI.init();

// Get app settings
const setting = await sypnexAPI.getSetting('theme', 'dark');

// Work with virtual files
const files = await sypnexAPI.listVirtualFiles('/');
const content = await sypnexAPI.readVirtualFileText('/config.json');

// Show notifications
sypnexAPI.showNotification('Hello from your app!', 'info');

// Logging
await sypnexAPI.logInfo('Application started');
await sypnexAPI.logError('Something went wrong', { error: 'details' });

// Terminal commands
const result = await sypnexAPI.executeTerminalCommand('ls -la');
```

## Notes for AI Assistants
- All methods are available on the global `sypnexAPI` object
- Async methods should be awaited
- No imports or instantiation required
- API is automatically available in Sypnex OS applications
