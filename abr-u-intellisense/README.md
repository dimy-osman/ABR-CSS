# ABR-U CSS IntelliSense

**Intelligent autocomplete and hover documentation for ABR-U CSS utility classes
in VS Code and Cursor.**

ABR-U IntelliSense enhances your development experience with ABR-U CSS by
providing instant class suggestions, detailed hover tooltips, and multi-class
CSS previews.

[![GitHub](https://img.shields.io/badge/GitHub-ABR--CSS-blue?logo=github)](https://github.com/dimy-osman/ABR-CSS)
[![Sponsor](https://img.shields.io/badge/Sponsor-ABR.CSS-FFD140?logo=paypal&logoColor=003087)](https://www.paypal.com/ncp/payment/MWHX2FHZ9RY8J)

---

## Features

### Intelligent Autocomplete

- **Context-aware suggestions** for all ABR-U CSS classes
- Triggers automatically when typing `class="`, `className="`, or within class
  attributes
- **Fuzzy search** - type partial names to find classes quickly
- Supports special prefixes: `-`, `@`, `!` for responsive, state, and important
  variants

### Rich Hover Documentation

- **Selection-based tooltips** - Select one or multiple classes to see their
  combined CSS
- **Single-class hover** - Optional hover mode for individual classes
  (configurable)
- **Formatted CSS display** with syntax highlighting:
  - Properties in light blue
  - Values in white
  - Clean monospace formatting
- **Direct documentation link** - Quick access to GitHub docs via the arrow icon

### Multi-Class Selection

One of the most powerful features: **select multiple ABR-U classes** to see
their combined CSS in a single tooltip!

```html
<!-- Select "d-f jc-c ai-c" to see all three styles at once -->
<div class="d-f jc-c ai-c h-100vh bc-sky50">Content</div>
```

The tooltip will show:

```
ABR-U: 3 classes selected

d-f jc-c ai-c

---

display: flex;
justify-content: center;
align-items: center;
```

### Configurable Behavior

- **Hover Mode Setting** - Choose between:
  - `selectionOnly` (default) - Only show tooltips when text is selected (less
    disruptive)
  - `always` - Show tooltips on hover over any ABR-U class
- Access via Settings -> Extensions -> ABR-U IntelliSense

### Multi-Language Support

Works seamlessly across:

- HTML (`.html`)
- JavaScript (`.js`)
- TypeScript (`.ts`)
- React JSX (`.jsx`, `.tsx`)

---

## Getting Started

### Installation

1. Install the extension from the Extensions marketplace
2. Reload VS Code/Cursor
3. Look for the checkmark ABR-U indicator in the status bar

### Usage

#### Autocomplete

1. Open any HTML, JSX, or TSX file
2. Start typing in a class attribute: `class="d-`
3. Select from intelligent suggestions
4. Press `Tab` or `Enter` to insert

#### Hover Documentation

1. **For single class**: Hover over any ABR-U class name
2. **For multiple classes**:
   - Select multiple class names (e.g., `d-f jc-c ai-c`)
   - Hover over the selection
   - See combined CSS for all selected classes

#### Configuration

1. Open Settings (`Ctrl+,` or `Cmd+,`)
2. Search for "ABR-U"
3. Find **"Hover Mode"**
4. Choose:
   - **Selection Only** (default) - Less disruptive, only shows on selection
   - **Always** - Traditional hover behavior

---

## Examples

### Example 1: Flexbox Layout

```html
<div class="d-f jc-sb ai-c">
	<!-- Autocomplete suggests all flex classes -->
	<!-- Hover shows: display: flex, justify-content: space-between, align-items: center -->
</div>
```

### Example 2: Responsive Design

```html
<div class="w-100% w-50%@m w-33%@l">
	<!-- Classes for responsive width -->
	<!-- Select all three to see combined breakpoint styles -->
</div>
```

### Example 3: Multi-Class Selection

```html
<section class="d-f fd-c p-m bc-blu500">
	<!-- Select "d-f fd-c p-m" to see: -->
	<!-- display: flex; flex-direction: column; padding: var(--a-m); -->
</section>
```

---

## How It Works

### Architecture

The extension consists of three main components:

1. **Class Data Generator** (`scripts/generateClassData.js`)

   - Parses `ABR-U.css` to extract all utility classes
   - Generates a JSON mapping of class names to their CSS properties
   - Automatically runs during build process

2. **Completion Provider** (`src/providers/completionProvider.ts`)

   - Implements VS Code's `CompletionItemProvider` interface
   - Monitors cursor position in class attributes
   - Provides intelligent, context-aware suggestions

3. **Hover Provider** (`src/providers/hoverProvider.ts`)
   - Implements VS Code's `HoverProvider` interface
   - Detects text selection for multi-class preview
   - Formats CSS with syntax highlighting using VS Code's MarkdownString API
   - Respects user's hover mode configuration

### Technical Details

- **Language Support**: Registered for HTML, JS, TS, JSX, TSX file types
- **Trigger Characters**: Space, quotes (`"`, `'`), hyphen (`-`), at sign (`@`)
- **Data Storage**: Pre-compiled JSON for instant lookups (~500KB)
- **Rendering**: HTML-enhanced Markdown with custom styling for tooltips

---

## Development

### Prerequisites

- Node.js 16+
- npm or yarn
- VS Code Extension development environment

### Build from Source

```bash
# Clone the repository
cd abr-u-intellisense

# Install dependencies (if any)
npm install

# Generate class data from ABR-U.css
npm run generate

# Compile TypeScript
npm run compile

# Build everything (generate + compile)
npm run build

# Package the extension
npx vsce package
```

### Project Structure

```
abr-u-intellisense/
  src/
    extension.ts              # Main activation logic
    logger.ts                 # Logging utility
    data/
      classes.json            # Generated class mappings
    providers/
      completionProvider.ts   # Autocomplete logic
      hoverProvider.ts        # Hover tooltip logic
  scripts/
    generateClassData.js      # Class data extraction script
  out/                        # Compiled JavaScript output
  package.json                # Extension manifest
  README.md                   # This file
```

### Testing

1. Press `F5` in VS Code to launch Extension Development Host
2. Open an HTML file
3. Test autocomplete: type `class="d-`
4. Test hover: select multiple classes and hover
5. Test settings: toggle hover mode in Settings

---

## Documentation

For complete ABR-U CSS documentation, class reference, and examples:

**[Visit the ABR-CSS GitHub Repository](https://github.com/dimy-osman/ABR-CSS)**

---

## Settings

| Setting                        | Type     | Default         | Description                                                               |
| ------------------------------ | -------- | --------------- | ------------------------------------------------------------------------- |
| `abr-u-intellisense.hoverMode` | `string` | `selectionOnly` | Controls when hover tooltips appear. Options: `always` or `selectionOnly` |

---

## Troubleshooting

### Autocomplete not showing?

- Ensure you're inside a `class` or `className` attribute
- Try triggering manually with `Ctrl+Space`
- Check that the file type is supported (HTML, JSX, TSX)

### Hover tooltips not appearing?

- Check Settings: **Editor > Hover > Enabled** must be checked
- If using `selectionOnly` mode, you must **select** the class names
- Verify the checkmark ABR-U indicator is visible in the status bar

### Extension not activating?

- Check the Output panel: View -> Output -> Select "ABR-U IntelliSense"
- Try reloading the window: `Ctrl+Shift+P` -> "Reload Window"
- Check for conflicts with other CSS extensions

---

## Changelog

### v1.6.0 (Current)

- Fixed autocomplete to only show breakpoint variants when @ is typed
- Fixed README examples to use real ABR-U class names
- Improved autocomplete context awareness

### v1.5.x

- Fixed README encoding issues
- Comprehensive documentation added
- Multi-class selection hover with combined CSS preview
- Configurable hover mode (selection-only vs. always)
- Enhanced tooltip formatting with syntax highlighting
- Direct documentation link in tooltips
- Removed debug logging and startup notifications
- Cleaner status bar indicator
- Improved tooltip layout and readability

### v0.3.x

- Initial hover provider implementation
- Basic autocomplete functionality
- Multi-language support

---

## License

This extension follows the same license as ABR-CSS:

**Polyform Shield License 1.0.0**

See the [main ABR-CSS repository](https://github.com/dimy-osman/ABR-CSS) for
license details.

---

## Contributing

This extension is part of the ABR-CSS project. For contributions, issues, or
feature requests:

1. Visit the [ABR-CSS GitHub Repository](https://github.com/dimy-osman/ABR-CSS)
2. Open an issue or pull request
3. Follow the contribution guidelines

---

## Credits

**Developed by:** [@dimy-osman](https://github.com/dimy-osman)

**Part of the ABR-CSS ecosystem** - A modern, utility-first CSS framework.

---

**Enjoy using ABR-U IntelliSense!**

If you find this extension helpful, consider starring the
[ABR-CSS repository](https://github.com/dimy-osman/ABR-CSS)!
