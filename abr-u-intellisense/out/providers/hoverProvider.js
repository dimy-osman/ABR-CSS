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
exports.AbrUHoverProvider = void 0;
const vscode = __importStar(require("vscode"));
const classes_json_1 = __importDefault(require("../data/classes.json"));
class AbrUHoverProvider {
    provideHover(document, position) {
        const range = document.getWordRangeAtPosition(position, /[a-z0-9_\-@%!]+/i);
        if (!range)
            return null;
        const word = document.getText(range);
        const info = classes_json_1.default[word];
        if (!info)
            return null;
        const md = new vscode.MarkdownString();
        md.appendMarkdown(`**ABR-U Class**: \`${word}\`\n\n`);
        md.appendCodeblock(`.${word} {\n  ${info.css}\n}`, 'css');
        md.isTrusted = true;
        return new vscode.Hover(md, range);
    }
}
exports.AbrUHoverProvider = AbrUHoverProvider;
