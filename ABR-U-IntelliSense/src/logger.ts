import * as vscode from "vscode";

let outputChannel: vscode.OutputChannel | null = null;

export function initLogger(channel: vscode.OutputChannel) {
	outputChannel = channel;
}

export function log(message: string) {
	const timestamp = new Date().toLocaleTimeString();
	const fullMessage = `[${timestamp}] ${message}`;

	if (outputChannel) {
		outputChannel.appendLine(fullMessage);
	}
	console.log(fullMessage); // Also log to console as backup
}















