"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbrUCompletionProvider = void 0;
const vscode = __importStar(require("vscode"));
const classes_json_1 = __importDefault(require("../data/classes.json"));
class AbrUCompletionProvider {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.substring(0, position.character);
        if (!this.isInsideClassAttr(linePrefix))
            return [];
        const items = [];
        for (const [name, data] of Object.entries(classes_json_1.default)) {
            const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Class);
            item.detail = data.description;
            item.documentation = new vscode.MarkdownString(`\n\n\`\`\`css\n.${name} {\n  ${data.css}\n}\n\`\`\`\n`);
            item.insertText = name;
            item.sortText = name.length.toString().padStart(3, '0') + name;
            items.push(item);
        }
        return items;
    }
    isInsideClassAttr(prefix) {
        // Detect class="...|" or className="...|" or className={'...|'}
        const attr = /(class|className)\s*=\s*(["']|\{["'])/;
        const m = prefix.match(attr);
        if (!m)
            return false;
        // ensure we haven't closed the string yet on this line
        const quote = m[2].startsWith('{') ? (prefix.includes('"') ? '"' : "'") : m[2];
        const after = prefix.slice((m.index ?? 0) + m[0].length);
        return !after.includes(quote) && !after.includes('}');
    }
}
exports.AbrUCompletionProvider = AbrUCompletionProvider;
