// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// Sypnex API method definitions (simplified for testing)
const sypnexApiMethods = [
	{
		name: 'init',
		signature: 'init(): Promise<any>',
		description: 'Initialize the SypnexAPI instance',
		isAsync: true
	},
	{
		name: 'getAppMetadata',
		signature: 'getAppMetadata(): Promise<any>',
		description: 'Get metadata for this application',
		isAsync: true
	},
	{
		name: 'isInitialized',
		signature: 'isInitialized(): any',
		description: 'Check if the SypnexAPI has been initialized',
		isAsync: false
	},
	{
		name: 'getAppId',
		signature: 'getAppId(): any',
		description: 'Get the application ID',
		isAsync: false
	},
	{
		name: 'deleteVirtualItem',
		signature: 'deleteVirtualItem(itemPath: any): Promise<any>',
		description: 'Delete a file or directory',
		isAsync: true
	},
	{
		name: 'getSetting',
		signature: 'getSetting(key: any, defaultValue?: any): Promise<any>',
		description: 'Get an application setting',
		isAsync: true
	},
	{
		name: 'setSetting',
		signature: 'setSetting(key: any, value: any): Promise<any>',
		description: 'Set an application setting',
		isAsync: true
	},
	{
		name: 'logInfo',
		signature: 'logInfo(message: any, details?: any): Promise<any>',
		description: 'Log an info message',
		isAsync: true
	},
	{
		name: 'logError',
		signature: 'logError(message: any, details?: any): Promise<any>',
		description: 'Log an error message',
		isAsync: true
	}
];

class SypnexCompletionProvider implements vscode.CompletionItemProvider {
	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position
	): vscode.ProviderResult<vscode.CompletionItem[]> {
		
		const linePrefix = document.lineAt(position).text.substring(0, position.character);
		
		// Only provide completions after 'sypnexAPI.'
		if (!linePrefix.endsWith('sypnexAPI.')) {
			return undefined;
		}

		// Create completion items for each API method
		const completionItems = sypnexApiMethods.map(method => {
			const item = new vscode.CompletionItem(method.name, vscode.CompletionItemKind.Method);
			
			// Set method signature as detail
			item.detail = method.signature;
			item.documentation = new vscode.MarkdownString(method.description);
			
			// Set insert text with parentheses and cursor positioning
			item.insertText = new vscode.SnippetString(`${method.name}($0)`);
			
			if (method.isAsync) {
				item.documentation.appendMarkdown('\n\n**Returns:** Promise');
			}
			
			return item;
		});

		return completionItems;
	}
}

// Simple hover provider
class SypnexHoverProvider implements vscode.HoverProvider {
	provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
		const lineText = document.lineAt(position.line).text;
		const wordRange = document.getWordRangeAtPosition(position);
		
		if (!wordRange) {
			return;
		}
		
		const word = document.getText(wordRange);
		
		// Check if line contains sypnexAPI.methodName
		if (lineText.includes(`sypnexAPI.${word}`)) {
			const method = sypnexApiMethods.find(m => m.name === word);
			
			if (method) {
				const markdown = new vscode.MarkdownString();
				markdown.appendCodeblock(method.signature, 'typescript');
				markdown.appendMarkdown(`\n\n${method.description}`);
				
				return new vscode.Hover(markdown);
			}
		}
	}
}

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
	console.log('Sypnex OS API Support extension is now active!');

	// Register completion provider
	const completionProvider = vscode.languages.registerCompletionItemProvider(
		['javascript', 'typescript'],
		new SypnexCompletionProvider(),
		'.'
	);

	// Register hover provider
	const hoverProvider = vscode.languages.registerHoverProvider(
		['javascript', 'typescript'],
		new SypnexHoverProvider()
	);

	// Register command
	const command = vscode.commands.registerCommand('sypnex-os-api-support.helloWorld', () => {
		vscode.window.showInformationMessage('Sypnex OS API Support is working!');
	});

	context.subscriptions.push(completionProvider, hoverProvider, command);
}

// This method is called when your extension is deactivated
export function deactivate() {}
