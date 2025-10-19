import * as vscode from 'vscode';
import { AbrUCompletionProvider } from './providers/completionProvider';
import { AbrUHoverProvider } from './providers/hoverProvider';

export function activate(context: vscode.ExtensionContext) {
  const selector: vscode.DocumentSelector = [
    { language: 'html', scheme: 'file' },
    { language: 'javascript', scheme: 'file' },
    { language: 'typescript', scheme: 'file' },
    { language: 'javascriptreact', scheme: 'file' },
    { language: 'typescriptreact', scheme: 'file' },
  ];

  const completion = vscode.languages.registerCompletionItemProvider(
    selector,
    new AbrUCompletionProvider(),
    ' ', '"', "'", '-', '@'
  );

  const hover = vscode.languages.registerHoverProvider(
    selector,
    new AbrUHoverProvider()
  );

  context.subscriptions.push(completion, hover);
}

export function deactivate() {}

