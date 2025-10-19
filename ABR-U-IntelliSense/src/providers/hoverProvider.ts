import * as vscode from "vscode";
import * as classes from "../data/classes.json";

interface ClassInfo {
	css: string;
	description: string;
}

export class AbrUHoverProvider implements vscode.HoverProvider {
	provideHover(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken
	): vscode.ProviderResult<vscode.Hover> {
		try {
			const classData = classes as Record<string, ClassInfo>;
			const editor = vscode.window.activeTextEditor;

			// Get hover mode setting
			const config = vscode.workspace.getConfiguration("abr-u-intellisense");
			const hoverMode = config.get<string>("hoverMode", "selectionOnly");

			// CHECK FOR SELECTION FIRST
			if (editor && !editor.selection.isEmpty) {
				const selection = editor.selection;
				// Check if hover position is within selection
				if (selection.contains(position) && document === editor.document) {
					const selectedText = document.getText(selection).trim();

					// Extract all potential class names (split by space, comma, etc)
					const potentialClasses = selectedText
						.split(/[\s,]+/)
						.filter((c) => c.length > 0);

					// Find ABR-U classes
					const abrClasses: { name: string; css: string }[] = [];
					for (const className of potentialClasses) {
						if (classData[className]) {
							abrClasses.push({
								name: className,
								css: classData[className].css,
							});
						}
					}

					// If we found ABR-U classes, show combined tooltip
					if (abrClasses.length > 0) {
						const markdown = new vscode.MarkdownString();

						// Title
						markdown.appendMarkdown(
							`**ABR-U:** ${abrClasses.length} ${
								abrClasses.length === 1 ? "class" : "classes"
							} selected\n\n`
						);

						// Selected classes
						const classNames = abrClasses.map((c) => c.name).join(" ");
						markdown.appendMarkdown(`\`${classNames}\`\n\n`);

						// Link icon
						markdown.appendMarkdown(
							`<div style="text-align:right;margin-top:-30px;"><a href="https://github.com/dimy-osman/ABR-CSS" style="color:#2563eb;text-decoration:none;font-size:16px;" title="View Documentation">↗</a></div>\n\n`
						);

						markdown.appendMarkdown(`---\n\n`); // Separator before CSS

						// Format CSS with colors: properties in light blue, values in white
						const formattedCSS = abrClasses
							.map((c) => {
								// Parse CSS to colorize properties and values
								return c.css
									.split("\n")
									.map((line) => {
										const trimmed = line.trim();
										if (
											!trimmed ||
											trimmed.startsWith("/*") ||
											trimmed.startsWith("*")
										) {
											return line; // Keep comments as-is
										}
										// Match property: value; pattern
										const match = trimmed.match(/^([^:]+):\s*(.+)$/);
										if (match) {
											const property = match[1].trim();
											const value = match[2].trim();
											return `<span style="color:#9cdcfe;">${property}</span>: <span style="color:#ffffff;">${value}</span>`;
										}
										return line;
									})
									.join("<br/>");
							})
							.join("<br/>");

						markdown.appendMarkdown(
							`\n\n<div style="font-family:Consolas,Monaco,monospace;font-size:12px;line-height:1.5;">${formattedCSS}</div>\n\n`
						);

						markdown.isTrusted = true;
						markdown.supportHtml = true;

						return new vscode.Hover(markdown, selection);
					}
				}
			}

			// No selection - check hover mode setting
			if (hoverMode === "selectionOnly") {
				return null;
			}

			// FALLBACK: Show hover for single word (when mode is "always")
			const wordRange = document.getWordRangeAtPosition(position, /[\w\-@!]+/);
			if (!wordRange) {
				return null;
			}

			const hoveredWord = document.getText(wordRange);

			// Look up class
			const data = classData[hoveredWord];

			if (!data) {
				return null;
			}

			// Create tooltip for single class
			const markdown = new vscode.MarkdownString();

			// Title
			markdown.appendMarkdown(`**ABR-U:** 1 class selected\n\n`);

			// Selected class
			markdown.appendMarkdown(`\`${hoveredWord}\`\n\n`);

			// Link icon
			markdown.appendMarkdown(
				`<div style="text-align:right;margin-top:-30px;"><a href="https://github.com/dimy-osman/ABR-CSS" style="color:#2563eb;text-decoration:none;font-size:16px;" title="View Documentation">↗</a></div>\n\n`
			);

			markdown.appendMarkdown(`---\n\n`); // Separator before CSS

			// Format CSS with colors
			const formattedCSS = data.css
				.split("\n")
				.map((line) => {
					const trimmed = line.trim();
					if (!trimmed || trimmed.startsWith("/*") || trimmed.startsWith("*")) {
						return line;
					}
					const match = trimmed.match(/^([^:]+):\s*(.+)$/);
					if (match) {
						const property = match[1].trim();
						const value = match[2].trim();
						return `<span style="color:#9cdcfe;">${property}</span>: <span style="color:#ffffff;">${value}</span>`;
					}
					return line;
				})
				.join("<br/>");

			markdown.appendMarkdown(
				`\n\n<div style="font-family:Consolas,Monaco,monospace;font-size:12px;line-height:1.5;">${formattedCSS}</div>\n\n`
			);

			markdown.isTrusted = true;
			markdown.supportHtml = true;

			return new vscode.Hover(markdown, wordRange);
		} catch (error) {
			return null;
		}
	}
}
