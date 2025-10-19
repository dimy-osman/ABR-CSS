import * as vscode from 'vscode';
import classes from '../data/classes.json';

type ClassInfo = { css: string; description: string };

export class AbrUCompletionProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position
  ): vscode.CompletionItem[] {
    const linePrefix = document.lineAt(position).text.substring(0, position.character);

    if (!this.isInsideClassAttr(linePrefix)) return [];

    const items: vscode.CompletionItem[] = [];

    for (const [name, data] of Object.entries(classes as Record<string, ClassInfo>)) {
      const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Class);
      item.detail = data.description;
      item.documentation = new vscode.MarkdownString(
        `\n\n\`\`\`css\n.${name} {\n  ${data.css}\n}\n\`\`\`\n`
      );
      item.insertText = name;
      item.sortText = name.length.toString().padStart(3, '0') + name;
      items.push(item);
    }

    return items;
  }

  private isInsideClassAttr(prefix: string): boolean {
    // Detect class="...|" or className="...|" or className={'...|'}
    const attr = /(class|className)\s*=\s*(["']|\{["'])/;
    const m = prefix.match(attr);
    if (!m) return false;

    // ensure we haven't closed the string yet on this line
    const quote = m[2].startsWith('{') ? (prefix.includes('"') ? '"' : "'") : m[2];
    const after = prefix.slice((m.index ?? 0) + m[0].length);
    return !after.includes(quote) && !after.includes('}');
  }
}

