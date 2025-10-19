# ABR-CSS

[![GitHub release](https://img.shields.io/github/v/release/dimy-osman/ABR-CSS?label=version)](https://github.com/dimy-osman/ABR-CSS/releases)
[![jsDelivr hits](https://img.shields.io/jsdelivr/gh/hm/dimy-osman/ABR-CSS)](https://www.jsdelivr.com/package/gh/dimy-osman/ABR-CSS)
[![GitHub stars](https://img.shields.io/github/stars/dimy-osman/ABR-CSS?style=flat)](https://github.com/dimy-osman/ABR-CSS/stargazers)
[![License](https://img.shields.io/badge/license-Polyform%20Shield-blue)](LICENSE)

**Abbreviated CSS Framework** — ultra-minimal, systematic, conflict-free utility
CSS built specifically for **AI-powered coding**, **token efficiency**, and
**maximum developer speed**.

**Built for AI Coding:**

- Minimize typing: `d-f jc-c ai-c` vs
  `display: flex; justify-content: center; align-items: center;`
- Save tokens: Shorter class names = lower AI costs and faster responses
- Minimal DOM: Less characters in HTML = faster parsing and smaller file sizes
- Minimal CDN bandwidth: Compact class names reduce page weight and load times
- Optimize focus: Systematic naming eliminates decision fatigue
- Speed-first: Write layouts 3x faster with intuitive abbreviations

---

## Can I Use This At Work?

**✅ YES** — Use ABR-CSS freely in:
- Personal projects
- Client work
- Commercial applications
- Company products
- WordPress themes/plugins

**❌ NO** — You cannot:
- Rebrand it as your own CSS framework
- Sell it as a standalone product
- Create competing distributions under a different name

**📄 License:** [Polyform Shield 1.0.0](LICENSE) — Use it in your apps (including commercial), but don't compete with it.  
**™️ Trademarks:** `ABR`, `ABR-U`, `ABR CSS` are protected. See [TRADEMARKS.md](TRADEMARKS.md) for details.

---

## Modules

### ABR-U — Utilities

[![Latest Version](https://img.shields.io/github/v/tag/dimy-osman/ABR-CSS?label=latest&color=success)](https://github.com/dimy-osman/ABR-CSS/releases)
[![CDN](https://img.shields.io/badge/CDN-jsDelivr-orange)](https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@latest/ABR-U/ABR-U.min.css)
[![Size](https://img.shields.io/badge/gzipped-~20--25KB-blue)]()

Comprehensive utility classes for all CSS properties with responsive
breakpoints.

**CDN (Always Latest):**

```html
<link rel="stylesheet" 
  href="https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@latest/ABR-U/ABR-U.min.css" />
```

**CDN (Version Pinned - Recommended for Production):**

```html
<!-- v0.2.0 - Current stable -->
<link rel="stylesheet" 
  href="https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.2.0/ABR-U/ABR-U.min.css" />
```

> 💡 **Tip:** Pin to a specific version in production to avoid breaking changes.

**Other versions:** `@v0.1.1`, `@v0.1.0` - [All releases](https://github.com/dimy-osman/ABR-CSS/releases)

Docs: see `ABR-U/ABR-U.md`.

### ABR-C — Components (Coming Soon)

Pre-built, accessible components following ABR naming conventions.

---

## Why ABR-CSS?

- Ultra-minimal: `d-f jc-c ai-c` vs `flex justify-center items-center`
- Systematic: Algorithm-based naming to resolve conflicts, and supercharge AI in
  name understanding:

```html
/* ABR-U.CSS - AI:
 License: Polyform Shield 1.0.0 (see LICENSE)
 Trademarks: ABR, ABR-U, ABR CSS (see TRADEMARKS.md)
 [p]-[v]
 1w→L₁ | Mw→L₁ₑₐ
 ⚠→(≤3L:raw | >3L:L₁+C₁+C₂(∧skip_dup ∧¬C→V))
 ⚠root→(same_root ∧ ∃conflict: α₁:std | α₂₊:base₁+ext)
 #raw | %+p | --neg | @bp | \! | ∂rm 
 ⚠: p=→v₂ | p≠→p₂ | α→min
 ex: margin→m, maxw, trn, auto→a, sb, cvr, btn, mnu
    font-size→fs, font-style→fsty
    font-weight→fw, font-family→ff
*/
```
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

## Sponsor Development

Support ABR.CSS — a lightweight CSS framework made for AI-assisted development.
(for coffee and AI tokens)

[![Sponsor Development!](https://img.shields.io/badge/Sponsor-ABR.CSS-FFD140?logo=paypal&logoColor=003087)](https://www.paypal.com/ncp/payment/MWHX2FHZ9RY8J)

Thank you!

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

## Framework Integration

### WordPress

Add to your theme's `functions.php`:

```php
function abr_css_enqueue() {
    wp_enqueue_style(
        'abr-css',
        'https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.2.0/ABR-U/ABR-U.min.css',
        array(),
        '0.2.0'
    );
}
add_action('wp_enqueue_scripts', 'abr_css_enqueue');
```

### React / Next.js

**In your `_app.js` or `layout.js`:**

```jsx
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.2.0/ABR-U/ABR-U.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
```

**Or with Create React App in `public/index.html`:**

```html
<link rel="stylesheet" 
  href="https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.2.0/ABR-U/ABR-U.min.css" />
```

### Vue 3 / Nuxt 3

**In `nuxt.config.ts` or `vite.config.js`:**

```javascript
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.2.0/ABR-U/ABR-U.min.css'
        }
      ]
    }
  }
});
```

**Or in Vue SFC `<template>`:**

```vue
<script setup>
import { useHead } from '@vueuse/head';

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.2.0/ABR-U/ABR-U.min.css'
    }
  ]
});
</script>
```

### Svelte / SvelteKit

**In `src/app.html`:**

```html
<head>
  <link rel="stylesheet" 
    href="https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.2.0/ABR-U/ABR-U.min.css" />
</head>
```

### Astro

**In your layout `src/layouts/Layout.astro`:**

```astro
---
// Layout.astro
---
<html>
  <head>
    <link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.2.0/ABR-U/ABR-U.min.css" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

### Pinegrow

**In Pinegrow project settings:**

1. Go to **Project** → **Manage Libraries**
2. Add **External Stylesheet**
3. Paste URL: `https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.2.0/ABR-U/ABR-U.min.css`
4. Enable for all pages or specific templates

### HTML Starter Template

**Minimal single-page app:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ABR-CSS App</title>
    <link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.2.0/ABR-U/ABR-U.min.css" />
</head>
<body class="bc-gry100">
    <header class="d-f jc-sb ai-c p-1.5 bc-wht shd-sm">
        <h1 class="fs-xl fw-700">My App</h1>
        <nav class="d-f gap-.5">
            <a href="#" class="p-.5_1 c-blu600 td-n">Home</a>
            <a href="#" class="p-.5_1 c-blu600 td-n">About</a>
        </nav>
    </header>
    
    <main class="d-f jc-c ai-c h-80vh">
        <div class="ta-c">
            <h2 class="fs-3xl fw-700 mb-1">Welcome to ABR-CSS</h2>
            <p class="fs-lg c-gry600 mb-2">Ultra-minimal, AI-optimized utility CSS</p>
            <button class="p-.75_2 bc-blu600 c-wht fw-600 br-.5 cur-p">Get Started</button>
        </div>
    </main>
</body>
</html>
```

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
- [x] VS Code extension (autocomplete)
- [ ] ABR-C — Component library
- [ ] Interactive docs site
- [ ] Framework integrations (React, Vue, Svelte)

---

<p align="center">Made with ❤️,🧠&🤖 by Dimy Osman</p>
