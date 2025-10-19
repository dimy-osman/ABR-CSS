# ABR-U IntelliSense

Autocomplete and hover documentation for ABR-U CSS utility classes in VS Code and Cursor.

## Features

- **Autocomplete**: Type `class="` and get intelligent suggestions for all ABR-U classes
- **Hover Documentation**: Hover over any ABR-U class to see its CSS definition
- **Multi-language Support**: Works in HTML, JSX, TSX, JavaScript, and TypeScript files

## Usage

1. Install the extension
2. Open any HTML, JSX, or TSX file
3. Start typing `class="d-` to see ABR-U class suggestions
4. Hover over any class like `d-f` to see `display: flex;`

## Example

```html
<div class="d-f jc-c ai-c">
  <!-- Autocomplete suggests: d-f, jc-c, ai-c -->
  <!-- Hover shows: display: flex, justify-content: center, align-items: center -->
</div>
```

## Development

```bash
# Generate class data from ABR-U.css
npm run generate

# Compile TypeScript
npm run compile

# Build everything
npm run build
```

## License

Same as ABR-CSS: Polyform Shield 1.0.0

