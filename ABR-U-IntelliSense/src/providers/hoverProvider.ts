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

						// Selected classes (with orange background)
						const classNames = abrClasses.map((c) => c.name).join(" ");
						markdown.appendMarkdown(
							`<code style="background-color:#ff8c00;color:#000;padding:4px 8px;border-radius:4px;">${classNames}</code>\n\n`
						);

						// Divider with margin
						markdown.appendMarkdown(
							`<hr style="margin:8px 0;border:none;border-top:1px solid #444;">\n\n`
						);

						// Links: Class Explorer (left) with spacing | GIT (right)
						markdown.appendMarkdown(
							`<div style="font-size:11px;margin:6px 0;"><a href="command:abr-u-intellisense.showClassExplorer" style="color:#ffffff;text-decoration:none;" title="Open Class Explorer">🔍 Class Explorer</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#666;">|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/dimy-osman/ABR-CSS" style="color:#ffffff;text-decoration:none;" title="View Documentation">GIT↗</a></div>\n\n`
						);

						// Divider with margin
						markdown.appendMarkdown(
							`<hr style="margin:8px 0;border:none;border-top:1px solid #444;">\n\n`
						);

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

						markdown.appendMarkdown(`<br/>\n\n`);
						markdown.appendMarkdown(
							`<div style="font-family:Consolas,Monaco,monospace;font-size:12px;line-height:1.5;">${formattedCSS}</div>\n\n`
						);
						markdown.appendMarkdown(`<br/>\n\n`);

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

			// Selected class (with orange background)
			markdown.appendMarkdown(
				`<code style="background-color:#ff8c00;color:#000;padding:4px 8px;border-radius:4px;">${hoveredWord}</code>\n\n`
			);

			// Divider with margin
			markdown.appendMarkdown(
				`<hr style="margin:8px 0;border:none;border-top:1px solid #444;">\n\n`
			);

			// Links: Class Explorer (left) with spacing | GIT (right)
			markdown.appendMarkdown(
				`<div style="font-size:11px;margin:6px 0;"><a href="command:abr-u-intellisense.showClassExplorer" style="color:#ffffff;text-decoration:none;" title="Open Class Explorer">🔍 Class Explorer</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#666;">|</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/dimy-osman/ABR-CSS" style="color:#ffffff;text-decoration:none;" title="View Documentation">GIT↗</a></div>\n\n`
			);

			// Divider with margin
			markdown.appendMarkdown(
				`<hr style="margin:8px 0;border:none;border-top:1px solid #444;">\n\n`
			);

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

			markdown.appendMarkdown(`<br/>\n\n`);
			markdown.appendMarkdown(
				`<div style="font-family:Consolas,Monaco,monospace;font-size:12px;line-height:1.5;">${formattedCSS}</div>\n\n`
			);
			markdown.appendMarkdown(`<br/>\n\n`);

			markdown.isTrusted = true;
			markdown.supportHtml = true;

			return new vscode.Hover(markdown, wordRange);
		} catch (error) {
			return null;
		}
	}
}
