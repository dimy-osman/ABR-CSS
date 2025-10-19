import * as vscode from 'vscode';
import classes from '../data/classes.json';

type ClassInfo = { css: string; description: string };

export class AbrUHoverProvider implements vscode.HoverProvider {
  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    const range = document.getWordRangeAtPosition(position, /[a-z0-9_\-@%!]+/i);
    if (!range) return null;

    const word = document.getText(range);
    const info = (classes as Record<string, ClassInfo>)[word];
    if (!info) return null;

    const md = new vscode.MarkdownString();
    md.appendMarkdown(`**ABR-U Class**: \`${word}\`\n\n`);
    md.appendCodeblock(`.${word} {\n  ${info.css}\n}`, 'css');
    md.isTrusted = true;

    return new vscode.Hover(md, range);
  }
}

