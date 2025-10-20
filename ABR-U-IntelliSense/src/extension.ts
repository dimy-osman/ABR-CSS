import * as vscode from "vscode";
import { AbrUCompletionProvider } from "./providers/completionProvider";
import { AbrUHoverProvider } from "./providers/hoverProvider";
import { ClassExplorerProvider } from "./providers/classExplorerProvider";
import { initLogger } from "./logger";

export function activate(context: vscode.ExtensionContext) {
	// Create OUTPUT channel (for future debugging if needed)
	const outputChannel = vscode.window.createOutputChannel("ABR-U IntelliSense");
	context.subscriptions.push(outputChannel);

	// Initialize the shared logger (but we won't use it unless debugging)
	initLogger(outputChannel);

	try {
		// Initialize class explorer with output channel for debugging
		const classExplorer = new ClassExplorerProvider(outputChannel);

		// Create status bar item with command
		const statusBarItem = vscode.window.createStatusBarItem(
			vscode.StatusBarAlignment.Right,
			100
		);
		statusBarItem.text = "$(check) ABR-U";
		statusBarItem.tooltip =
			"ABR-U IntelliSense is running\n\nClick to open Class Explorer";
		statusBarItem.command = "abr-u-intellisense.showClassExplorer";
		statusBarItem.show();
		context.subscriptions.push(statusBarItem);

		// Register class explorer command
		const classExplorerCommand = vscode.commands.registerCommand(
			"abr-u-intellisense.showClassExplorer",
			() => {
				outputChannel.appendLine(
					`[Extension] Class Explorer command triggered`
				);
				classExplorer.show();
			}
		);
		context.subscriptions.push(classExplorerCommand);

		// Register test command
		const testCommand = vscode.commands.registerCommand(
			"abr-u-intellisense.test",
			() => {
				vscode.window.showInformationMessage("🎉 ABR-U Test Command Works!");
			}
		);
		context.subscriptions.push(testCommand);

		// Register providers
		const selector: vscode.DocumentSelector = [
			{ language: "html" },
			{ language: "javascript" },
			{ language: "typescript" },
			{ language: "javascriptreact" },
			{ language: "typescriptreact" },
		];

		const completion = vscode.languages.registerCompletionItemProvider(
			selector,
			new AbrUCompletionProvider(),
			" ",
			'"',
			"'",
			"-",
			"@"
		);

		const hover = vscode.languages.registerHoverProvider(
			selector,
			new AbrUHoverProvider()
		);

		context.subscriptions.push(completion, hover);
	} catch (error) {
		vscode.window.showErrorMessage(`ABR-U Extension Error: ${error}`);
		throw error;
	}
}

export function deactivate() {}
