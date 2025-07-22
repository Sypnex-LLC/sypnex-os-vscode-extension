// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// Sypnex API method definitions (auto-generated)
const sypnexApiMethods = [
	{
		name: 'connectSocket',
		signature: 'connectSocket(url?: any, options?: any): Promise<any>',
		description: 'Connect to Socket.IO server for this app instance',
		isAsync: true
	},
	{
		name: 'disconnectSocket',
		signature: 'disconnectSocket(): any',
		description: 'Disconnect from Socket.IO server',
		isAsync: false
	},
	{
		name: 'isSocketConnected',
		signature: 'isSocketConnected(): any',
		description: 'Check if Socket.IO is connected',
		isAsync: false
	},
	{
		name: 'sendMessage',
		signature: 'sendMessage(event: any, data: any, room?: any): any',
		description: 'Send a message via Socket.IO',
		isAsync: false
	},
	{
		name: 'joinRoom',
		signature: 'joinRoom(roomName: any): any',
		description: 'Join a Socket.IO room',
		isAsync: false
	},
	{
		name: 'leaveRoom',
		signature: 'leaveRoom(roomName: any): any',
		description: 'Leave a Socket.IO room',
		isAsync: false
	},
	{
		name: 'ping',
		signature: 'ping(): Promise<any>',
		description: 'Send a ping to test connection',
		isAsync: true
	},
	{
		name: 'on',
		signature: 'on(eventName: any, callback: any): any',
		description: 'Listen for Socket.IO events',
		isAsync: false
	},
	{
		name: 'off',
		signature: 'off(eventName: any, callback: any): any',
		description: 'Remove Socket.IO event listener',
		isAsync: false
	},
	{
		name: 'getSocket',
		signature: 'getSocket(): any',
		description: 'Get the Socket.IO instance',
		isAsync: false
	},
	{
		name: 'getSocketState',
		signature: 'getSocketState(): any',
		description: 'Get Socket.IO connection state',
		isAsync: false
	},
	{
		name: 'startHealthChecks',
		signature: 'startHealthChecks(): any',
		description: 'Start periodic health checks',
		isAsync: false
	},
	{
		name: 'stopHealthChecks',
		signature: 'stopHealthChecks(): any',
		description: 'Stop periodic health checks',
		isAsync: false
	},
	{
		name: 'performHealthCheck',
		signature: 'performHealthCheck(): Promise<any>',
		description: 'Perform a health check ping',
		isAsync: true
	},
	{
		name: 'setHealthChecks',
		signature: 'setHealthChecks(enabled: any): any',
		description: 'Enable or disable health checks',
		isAsync: false
	},
	{
		name: 'setHealthCheckInterval',
		signature: 'setHealthCheckInterval(intervalMs: any): any',
		description: 'Set health check interval',
		isAsync: false
	},
	{
		name: 'setAutoReconnect',
		signature: 'setAutoReconnect(enabled: any): any',
		description: 'Enable or disable auto-reconnect',
		isAsync: false
	},
	{
		name: 'setReconnectConfig',
		signature: 'setReconnectConfig(config: any): any',
		description: 'Set auto-reconnect configuration',
		isAsync: false
	},
	{
		name: 'reconnect',
		signature: 'reconnect(): any',
		description: 'Manually trigger reconnection',
		isAsync: false
	},
	{
		name: 'getVirtualFileStats',
		signature: 'getVirtualFileStats(): Promise<any>',
		description: 'Get virtual file system statistics',
		isAsync: true
	},
	{
		name: 'listVirtualFiles',
		signature: 'listVirtualFiles(path?: any): Promise<any>',
		description: 'List files and directories in a path',
		isAsync: true
	},
	{
		name: 'createVirtualFolder',
		signature: 'createVirtualFolder(name: any, parentPath?: any): Promise<any>',
		description: 'Create a new folder',
		isAsync: true
	},
	{
		name: 'createVirtualFile',
		signature: 'createVirtualFile(name: any, content?: any, parentPath?: any): Promise<any>',
		description: 'Create a new file',
		isAsync: true
	},
	{
		name: 'uploadVirtualFile',
		signature: 'uploadVirtualFile(file: any, parentPath?: any): Promise<any>',
		description: 'Upload a file from the host system',
		isAsync: true
	},
	{
		name: 'readVirtualFile',
		signature: 'readVirtualFile(filePath: any): Promise<any>',
		description: 'Read a file\'s content',
		isAsync: true
	},
	{
		name: 'readVirtualFileText',
		signature: 'readVirtualFileText(filePath: any): Promise<any>',
		description: 'Get a file\'s content as text',
		isAsync: true
	},
	{
		name: 'readVirtualFileJSON',
		signature: 'readVirtualFileJSON(filePath: any): Promise<any>',
		description: 'Get a file\'s content as JSON',
		isAsync: true
	},
	{
		name: 'getVirtualFileUrl',
		signature: 'getVirtualFileUrl(filePath: any): any',
		description: 'Serve a file directly (for binary files, images, etc.)',
		isAsync: false
	},
	{
		name: 'deleteVirtualItem',
		signature: 'deleteVirtualItem(itemPath: any): Promise<any>',
		description: 'Delete a file or directory',
		isAsync: true
	},
	{
		name: 'getVirtualItemInfo',
		signature: 'getVirtualItemInfo(itemPath: any): Promise<any>',
		description: 'Get information about a file or directory',
		isAsync: true
	},
	{
		name: 'virtualItemExists',
		signature: 'virtualItemExists(itemPath: any): Promise<any>',
		description: 'Check if a file or directory exists',
		isAsync: true
	},
	{
		name: 'writeVirtualFile',
		signature: 'writeVirtualFile(filePath: any, content: any): Promise<any>',
		description: 'Write content to a file (creates or overwrites)',
		isAsync: true
	},
	{
		name: 'writeVirtualFileJSON',
		signature: 'writeVirtualFileJSON(filePath: any, data: any): Promise<any>',
		description: 'Write JSON content to a file',
		isAsync: true
	},
	{
		name: 'createVirtualDirectoryStructure',
		signature: 'createVirtualDirectoryStructure(dirPath: any): Promise<any>',
		description: 'Create a directory structure (creates parent directories if needed)',
		isAsync: true
	},
	{
		name: 'loadLibrary',
		signature: 'loadLibrary(url: any, options?: any): Promise<any>',
		description: 'Load a library from CDN',
		isAsync: true
	},
	{
		name: 'showFileExplorer',
		signature: 'showFileExplorer(options?: any): Promise<any>',
		description: 'Show a file explorer modal for selecting files or directories',
		isAsync: true
	},
	{
		name: 'executeTerminalCommand',
		signature: 'executeTerminalCommand(command: any): Promise<any>',
		description: 'Execute a terminal command',
		isAsync: true
	},
	{
		name: 'writeLog',
		signature: 'writeLog(logData: any): Promise<any>',
		description: 'Write a log entry',
		isAsync: true
	},
	{
		name: 'logDebug',
		signature: 'logDebug(message: any, details?: any): Promise<any>',
		description: 'Convenience method to write debug log',
		isAsync: true
	},
	{
		name: 'logInfo',
		signature: 'logInfo(message: any, details?: any): Promise<any>',
		description: 'Convenience method to write info log',
		isAsync: true
	},
	{
		name: 'logWarn',
		signature: 'logWarn(message: any, details?: any): Promise<any>',
		description: 'Convenience method to write warning log',
		isAsync: true
	},
	{
		name: 'logError',
		signature: 'logError(message: any, details?: any): Promise<any>',
		description: 'Convenience method to write error log',
		isAsync: true
	},
	{
		name: 'logCritical',
		signature: 'logCritical(message: any, details?: any): Promise<any>',
		description: 'Convenience method to write critical log',
		isAsync: true
	},
	{
		name: 'readLogs',
		signature: 'readLogs(filters?: any): Promise<any>',
		description: 'Read logs with filtering options',
		isAsync: true
	},
	{
		name: 'getLogDates',
		signature: 'getLogDates(): Promise<any>',
		description: 'Get available log dates for each component',
		isAsync: true
	},
	{
		name: 'clearLogs',
		signature: 'clearLogs(filters?: any): Promise<any>',
		description: 'Clear logs with optional filtering',
		isAsync: true
	},
	{
		name: 'getLogStats',
		signature: 'getLogStats(): Promise<any>',
		description: 'Get logging system statistics',
		isAsync: true
	},
	{
		name: 'getMyLogs',
		signature: 'getMyLogs(filters?: any): Promise<any>',
		description: 'Get logs for the current app (convenience method)',
		isAsync: true
	},
	{
		name: 'init',
		signature: 'init(): Promise<any>',
		description: 'Initialize the SypnexAPI instance',
		isAsync: true
	},
	{
		name: 'getAppMetadata',
		signature: 'getAppMetadata(): Promise<any>',
		description: 'getAppMetadata method from Sypnex API',
		isAsync: true
	},
	{
		name: 'isInitialized',
		signature: 'isInitialized(): any',
		description: 'Check if the API is initialized',
		isAsync: false
	},
	{
		name: 'getAppId',
		signature: 'getAppId(): any',
		description: 'Get the current application ID',
		isAsync: false
	},
	{
		name: 'getWindowState',
		signature: 'getWindowState(): Promise<any>',
		description: 'getWindowState method from Sypnex API',
		isAsync: true
	},
	{
		name: 'saveWindowState',
		signature: 'saveWindowState(state: any): Promise<any>',
		description: 'saveWindowState method from Sypnex API',
		isAsync: true
	},
	{
		name: 'getSetting',
		signature: 'getSetting(key: any, defaultValue?: any): Promise<any>',
		description: 'Get an application setting value',
		isAsync: true
	},
	{
		name: 'setSetting',
		signature: 'setSetting(key: any, value: any): Promise<any>',
		description: 'Set an application setting value',
		isAsync: true
	},
	{
		name: 'getAllSettings',
		signature: 'getAllSettings(): Promise<any>',
		description: 'Get all application settings',
		isAsync: true
	},
	{
		name: 'deleteSetting',
		signature: 'deleteSetting(key: any): Promise<any>',
		description: 'Delete an application setting',
		isAsync: true
	},
	{
		name: 'getPreference',
		signature: 'getPreference(category: any, key: any, defaultValue?: any): Promise<any>',
		description: 'getPreference method from Sypnex API',
		isAsync: true
	},
	{
		name: 'setPreference',
		signature: 'setPreference(category: any, key: any, value: any): Promise<any>',
		description: 'setPreference method from Sypnex API',
		isAsync: true
	},
	{
		name: 'detectAppScale',
		signature: 'detectAppScale(): any',
		description: 'detectAppScale method from Sypnex API',
		isAsync: false
	},
	{
		name: 'screenToAppCoords',
		signature: 'screenToAppCoords(screenX: any, screenY: any): any',
		description: 'screenToAppCoords method from Sypnex API',
		isAsync: false
	},
	{
		name: 'getScaledBoundingClientRect',
		signature: 'getScaledBoundingClientRect(element: any): any',
		description: 'getScaledBoundingClientRect method from Sypnex API',
		isAsync: false
	},
	{
		name: 'loadDirectory',
		signature: 'loadDirectory(path: any): any',
		description: 'loadDirectory method from Sypnex API',
		isAsync: false
	},
	{
		name: 'updateBreadcrumb',
		signature: 'updateBreadcrumb(path: any): any',
		description: 'updateBreadcrumb method from Sypnex API',
		isAsync: false
	}
];

class SypnexCompletionProvider implements vscode.CompletionItemProvider {
	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext
	): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
		
		// Get the line up to the cursor position
		const linePrefix = document.lineAt(position).text.substr(0, position.character);
		
		// Check if we're after 'sypnexAPI.'
		if (!linePrefix.endsWith('sypnexAPI.')) {
			return undefined;
		}

		// Create completion items for each API method
		const completionItems = sypnexApiMethods.map(method => {
			const item = new vscode.CompletionItem(method.name, vscode.CompletionItemKind.Method);
			
			// Set the detail (signature) and description
			item.detail = method.signature;
			item.documentation = new vscode.MarkdownString(method.description);
			
			// Set insert text with parentheses
			if (method.isAsync) {
				item.insertText = `${method.name}($0)`;
				item.documentation.appendMarkdown('\n\n**Returns:** Promise');
			} else {
				item.insertText = `${method.name}($0)`;
			}
			
			// Enable snippet mode for cursor positioning
			item.insertText = new vscode.SnippetString(item.insertText as string);
			
			return item;
		});

		return completionItems;
	}
}

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
	console.log('Sypnex OS API Support extension is now active!');

	// Register completion provider for JavaScript and TypeScript files
	const jsProvider = vscode.languages.registerCompletionItemProvider(
		{ language: 'javascript', scheme: 'file' },
		new SypnexCompletionProvider(),
		'.' // Trigger completion after dot
	);

	const tsProvider = vscode.languages.registerCompletionItemProvider(
		{ language: 'typescript', scheme: 'file' },
		new SypnexCompletionProvider(),
		'.' // Trigger completion after dot
	);

	// Register a command for testing
	const disposable = vscode.commands.registerCommand('sypnex-os-api-support.helloWorld', () => {
		vscode.window.showInformationMessage('Sypnex OS API Support is working!');
	});

	// Add to subscriptions for proper cleanup
	context.subscriptions.push(jsProvider, tsProvider, disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
