import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

interface ClassData {
	class: string;
	css: string;
	category?: string;
}

interface ClassesJsonStructure {
	[className: string]: {
		css: string;
		description: string;
	};
}

export class ClassExplorerProvider {
	private classes: ClassData[] = [];
	private outputChannel: vscode.OutputChannel;

	constructor(outputChannel: vscode.OutputChannel) {
		this.outputChannel = outputChannel;
		this.loadClasses();
	}

	private loadClasses() {
		try {
			const classesPath = path.join(__dirname, "../data/classes.json");
			this.outputChannel.appendLine(
				`[Class Explorer] Loading classes from: ${classesPath}`
			);

			const rawData = fs.readFileSync(classesPath, "utf-8");
			const classesObj: ClassesJsonStructure = JSON.parse(rawData);

			// Convert object to array
			this.classes = Object.entries(classesObj).map(([className, data]) => ({
				class: className,
				css: data.css,
				category: undefined,
			}));

			this.outputChannel.appendLine(
				`[Class Explorer] Loaded ${this.classes.length} classes`
			);
		} catch (error) {
			this.outputChannel.appendLine(
				`[Class Explorer] ERROR loading classes: ${error}`
			);
			vscode.window.showErrorMessage(`Failed to load ABR-U classes: ${error}`);
		}
	}

	public async show() {
		this.outputChannel.appendLine(
			`[Class Explorer] Opening explorer with ${this.classes.length} classes`
		);

		const quickPick = vscode.window.createQuickPick();
		quickPick.placeholder =
			"🔍 Search ABR-U classes (e.g., 'bc-', 'fw-', 'pt-') — Press Enter or Click to copy";
		quickPick.matchOnDescription = true;
		quickPick.matchOnDetail = true;

		// Create items from all classes
		const items = this.classes.map((classData) => ({
			label: `$(symbol-color)  ${classData.class}`,
			description: classData.css,
			detail: classData.category || "",
			classData: classData,
		}));

		this.outputChannel.appendLine(
			`[Class Explorer] Created ${items.length} items for QuickPick`
		);
		quickPick.items = items;

		// Handle selection
		quickPick.onDidChangeSelection((selection) => {
			if (selection[0]) {
				const selectedClass = (selection[0] as any).classData;
				this.showClassDetails(selectedClass);
			}
		});

		// Handle acceptance (Enter key)
		quickPick.onDidAccept(() => {
			const selected = quickPick.selectedItems[0];
			if (selected) {
				const selectedClass = (selected as any).classData;
				this.copyClassToClipboard(selectedClass.class);
				quickPick.hide(); // Close the Class Explorer after copying
			}
		});

		quickPick.onDidHide(() => {
			this.outputChannel.appendLine(`[Class Explorer] QuickPick closed`);
			quickPick.dispose();
		});

		this.outputChannel.appendLine(`[Class Explorer] Showing QuickPick...`);
		quickPick.show();
		this.outputChannel.appendLine(
			`[Class Explorer] QuickPick.show() called successfully`
		);
	}

	private showClassDetails(classData: ClassData) {
		// Don't show anything on hover - let the user just see the description
	}

	private copyClassToClipboard(className: string) {
		vscode.env.clipboard.writeText(className);

		// Show temporary status bar message
		const statusBarItem = vscode.window.createStatusBarItem(
			vscode.StatusBarAlignment.Right,
			1000
		);
		statusBarItem.text = `$(check) Copied: ${className}`;
		statusBarItem.show();

		// Auto-hide after 5 seconds
		setTimeout(() => {
			statusBarItem.dispose();
		}, 5000);
	}
}
