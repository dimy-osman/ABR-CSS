# ABR-CSS

Abbreviated CSS Framework — ultra-minimal, systematic, conflict-free utility CSS
with an algorithmic naming system.

## Modules

### ABR-U — Utilities

Comprehensive utility classes for all CSS properties with responsive
breakpoints.

CDN (Latest):

```html
<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@latest/ABR-U/ABR-U.min.css" />
```

CDN (Specific Version):

```html
<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.1.1/ABR-U/ABR-U.min.css" />
```

Docs: see `ABR-U/ABR-U.md`.

### ABR-C — Components (Coming Soon)

Pre-built, accessible components following ABR naming conventions.

---

## Why ABR-CSS?

- Ultra-minimal: `d-f jc-c ai-c` vs `flex justify-center items-center`
- Systematic: algorithm-based naming eliminates conflicts
- Comprehensive: 4,400+ utilities covering all CSS properties
- Tiny footprint: ~20–25KB gzipped
- Zero dependencies: pure CSS, no build tools required

---

## Quick Start

```html
<!DOCTYPE html>
<html>
	<head>
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@latest/ABR-U/ABR-U.min.css" />
	</head>
	<body>
		<div class="d-f jc-c ai-c h-100vh">
			<h1 class="fs-3xl fw-700 c-blu500">Hello ABR-CSS!</h1>
		</div>
	</body>
</html>
```

---

## Core Algorithm

Format: `[property]-[value]`

Rules:

- Single word → first letter (margin → `m`, auto → `a`)
- Multi-word → first letter of each (flex-start → `fs`, space-between → `sb`)
- Conflicts → extend with consonants (padding → `p`, position → `pst`)
- Responsive → `@breakpoint` suffix (`d-f@m`, `fs-xl@l`)

Examples:

- `d-f` → display: flex
- `jc-sb` → justify-content: space-between
- `maxw-100%` → max-width: 100%
- `bc-red500` → background-color: red-500

Full details: `ABR-U/ABR-U.md`.

---

## Responsive Breakpoints

- `@xs`: 426px+
- `@s`: 769px+
- `@m`: 1281px+
- `@l`: 1441px+
- `@xl`: 1921px+

Example:

```html
<div class="d-b d-f@m jc-c@m">Responsive layout</div>
```

---

## License & Trademarks

- License: Polyform Shield 1.0.0 — use freely in your applications (including
  commercial); competitive redistribution is restricted. See `LICENSE`.
- Trademarks: `ABR`, `ABR-U`, `ABR CSS`. See `TRADEMARKS.md`.

---

## Contributing

Pull requests welcome!

Workflow:

```bash
# Clone
git clone https://github.com/dimy-osman/ABR-CSS.git

# Minify for distribution
npm install -g clean-css-cli
cleancss -O2 -o ABR-U/ABR-U.min.css ABR-U/ABR-U.css

# Commit and tag
git add .
git commit -m "feat: your change"
# e.g. v0.1.2
git tag vX.Y.Z
git push && git push --tags
```

---

## Roadmap

- [x] ABR-U — Utility classes
- [x] CDN via jsDelivr
- [x] Responsive breakpoints (xs, s, m, l, xl)
- [ ] ABR-C — Component library
- [ ] VS Code extension (autocomplete)
- [ ] Interactive docs site
- [ ] Framework integrations (React, Vue, Svelte)

---

<p align="center">Made with ❤️,🧠&🤖 by Dimy Osman</p>
