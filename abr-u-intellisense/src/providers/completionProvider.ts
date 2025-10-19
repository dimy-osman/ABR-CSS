import * as vscode from "vscode";
import classes from "../data/classes.json";

type ClassInfo = { css: string; description: string };

export class AbrUCompletionProvider implements vscode.CompletionItemProvider {
	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position
	): vscode.CompletionItem[] {
		const linePrefix = document
			.lineAt(position)
			.text.substring(0, position.character);

		// Only provide completions inside class attributes
		if (!this.isInsideClassAttr(linePrefix)) {
			return [];
		}

		// Get the current word being typed
		const wordRange = document.getWordRangeAtPosition(position, /[@\w\-!]+/);
		const currentWord = wordRange ? document.getText(wordRange) : "";

		// Check if user typed @ after a class name (e.g., "d-f@")
		let baseClassName: string | null = null;
		if (currentWord.includes("@")) {
			// Extract the base class before @
			baseClassName = currentWord.split("@")[0];
		}

		const items: vscode.CompletionItem[] = [];

		for (const [name, data] of Object.entries(
			classes as Record<string, ClassInfo>
		)) {
			// If user typed something like "d-f@", only show "d-f@xs", "d-f@s", "d-f@m", etc.
			if (baseClassName) {
				// Only show variants of the specific base class
				if (!name.startsWith(baseClassName + "@")) {
					continue;
				}
			}

			const item = new vscode.CompletionItem(
				name,
				vscode.CompletionItemKind.Class
			);

			// Use description - shows INLINE on right (will truncate long CSS)
			item.label = {
				label: name,
				description: data.css,
			};

			// Full CSS in documentation (shows on hover/arrow select)
			const doc = new vscode.MarkdownString();
			doc.appendCodeblock(data.css, "css");
			doc.appendMarkdown(
				`\n[ABR-U.css Documentation](https://github.com/dimy-osman/ABR-CSS)`
			);
			doc.isTrusted = true;

			item.documentation = doc;
			item.insertText = name;
			item.filterText = name;
			item.sortText = name.length.toString().padStart(3, "0") + name;

			items.push(item);
		}

		return items;
	}

	private isInsideClassAttr(prefix: string): boolean {
		// Check if we're anywhere inside class="..." or className="..."
		const hasClassAttr = /class(Name)?\s*=\s*["']/.test(prefix);
		if (!hasClassAttr) {
			return false;
		}

		// Count quotes to see if we're still inside
		const doubleQuotes = (prefix.match(/"/g) || []).length;
		const singleQuotes = (prefix.match(/'/g) || []).length;

		// If odd number of quotes, we're inside the attribute
		return doubleQuotes % 2 === 1 || singleQuotes % 2 === 1;
	}
}
