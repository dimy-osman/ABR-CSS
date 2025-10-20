# ABR-CSS

[![GitHub release](https://img.shields.io/github/v/release/dimy-osman/ABR-CSS?sort=semver&display_name=tag)](https://github.com/dimy-osman/ABR-CSS/releases)
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

## ⚡ Philosophy in 60 Seconds

ABR.CSS is built for **speed**, **clarity**, and **minimalism** — not bloated configs or verbose class names.

**Ultra-Minimal Syntax** — Every utility is reduced to its shortest readable form (`d-f`, `jc-c`, `g-2xl`), saving both code and AI tokens.

**Predictable & Consistent** — No guessing. The same pattern applies everywhere: `property-value` with familiar abbreviations.

**Framework-Free Flexibility** — Works in any environment: static HTML, WordPress, Bricks, Pinegrow, or full-stack apps — no build tools needed.

```html
<div class="d-f fd-c ai-c jc-c g-l p-2 bc-gry900 c-wht h-100vh">
  <h1 class="fs-2xl fw-700">ABR.CSS</h1>
  <p class="fs-m opc-0.75">Ultra-minimal utility CSS for humans and AI.</p>
</div>
```

**ABR.CSS keeps your codebase — and your headspace — light.** Copy, paste, build, done.

---

## Modules

### ABR-U — Utilities

[![Latest Version](https://img.shields.io/github/v/tag/dimy-osman/ABR-CSS?label=latest&color=success)](https://github.com/dimy-osman/ABR-CSS/releases)
[![CDN](https://img.shields.io/badge/CDN-jsDelivr-orange)](https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@latest/ABR-U/ABR-U.min.css)
[![Size](https://img.shields.io/badge/gzipped-~20--25KB-blue)]()

Comprehensive utility classes for all CSS properties with responsive
breakpoints.

**🔌 VS Code / Cursor Extension Available!**

[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/dimy-osman.abr-u-intellisense?label=VS%20Code&color=blue)](https://marketplace.visualstudio.com/items?itemName=dimy-osman.abr-u-intellisense)
[![Open VSX](https://img.shields.io/badge/Open%20VSX-1.8.4-purple)](https://open-vsx.org/extension/dimy-osman/abr-u-intellisense)

Get intelligent autocomplete, hover documentation, and a searchable class explorer for ABR-U CSS. Features include:

- **Intelligent autocomplete** - Context-aware suggestions in `class` attributes
- **Multi-class hover tooltips** - Select multiple classes to see combined CSS
- **Class Explorer** - Searchable popup with all ABR-U classes (`Ctrl+Alt+Shift+A`)
- **Instant copy** - Copy any class to clipboard with status bar feedback
- **Framework support** - Works in HTML, JSX, TSX, Vue, and more

📖 **[Full Extension Documentation](ABR-U-IntelliSense/README.md)**

**Install:**
- **VS Code:** Search "ABR-U IntelliSense" in Extensions or [install from marketplace](https://marketplace.visualstudio.com/items?itemName=dimy-osman.abr-u-intellisense)
- **Cursor:** Search "ABR-U IntelliSense" in Extensions or [install from Open VSX](https://open-vsx.org/extension/dimy-osman/abr-u-intellisense)

**CDN (Always Latest):**

```html
<link rel="stylesheet" 
  href="https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@latest/ABR-U/ABR-U.min.css" />
```

**CDN (Version Pinned - Recommended for Production):**

```html
<!-- v0.3.0 - Current stable (Named colors + Viewport units) -->
<link rel="stylesheet" 
  href="https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.3.0/ABR-U/ABR-U.min.css" />
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
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ABR-CSS App</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.3.0/ABR-U/ABR-U.min.css" />
  </head>
  <body class="bc-slt300 ff-s fs-l">
    <header class="d-f jc-sb ai-c pX-l pY-s bc-slt50 shd-sm brdr-s pst-stc t-s">
      <h1 class="fs-xl fw-700">My App</h1>
      <nav class="d-f g-m bc-orn100 brdr-s">
        <a href="#" class="pt-s pr-m pb-s pl-m c-gry950 fw-500 td-n">Home</a>
        <a href="#" class="pt-s pr-m pb-s pl-m c-gry950 fw-500 td-n">About</a>
      </nav>
    </header>

    <main class="d-f jc-c ai-c h-100vh">
      <div class="d-f fd-c jc-c ai-c g-m ta-c bc-slt200 w-80% pY-3xl pX-xl brdr-s">
        <h2 class="fs-5xl fw-700 mY-0">Welcome to ABR-CSS</h2>
        <p class="fs-xl c-gry600 mY-0">Ultra-minimal, AI-optimized utility CSS</p>
        <button class="pt-m pr-l pb-m pl-l bc-orn200 fw-600 brds-n brdr-s crs-p w-fc fs-l">
          Get Started
        </button>
      </div>
    </main>
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
        'https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.3.0/ABR-U/ABR-U.min.css',
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
          href="https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.3.0/ABR-U/ABR-U.min.css"
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
  href="https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.3.0/ABR-U/ABR-U.min.css" />
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
          href: 'https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.3.0/ABR-U/ABR-U.min.css'
        }
      ]
    }
  }
});
```

**Or in Vue SFC `<template>`:**

```html
<script setup>
import { useHead } from '@vueuse/head';

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.3.0/ABR-U/ABR-U.min.css'
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
    href="https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.3.0/ABR-U/ABR-U.min.css" />
</head>
```

### Astro

**In your layout `src/layouts/Layout.astro`:**

```html
---
// Layout.astro
---
<html>
  <head>
    <link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.3.0/ABR-U/ABR-U.min.css" />
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
3. Paste URL: `https://cdn.jsdelivr.net/gh/dimy-osman/ABR-CSS@v0.3.0/ABR-U/ABR-U.min.css`
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
        <nav class="d-f g-m">
            <a href="#" class="pt-s pr-m pb-s pl-m c-blu600 td-n">Home</a>
            <a href="#" class="pt-s pr-m pb-s pl-m c-blu600 td-n">About</a>
        </nav>
    </header>
    
    <main class="d-f jc-c ai-c h-80vh">
        <div class="ta-c">
            <h2 class="fs-3xl fw-700 mb-1">Welcome to ABR-CSS</h2>
            <p class="fs-lg c-gry600 mb-2">Ultra-minimal, AI-optimized utility CSS</p>
            <button class="pt-m pr-l pb-m pl-l bc-blu600 c-wht fw-600 brdr-m crs-p">Get Started</button>
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
- [x] VS Code / Cursor IntelliSense extension with Class Explorer
- [x] Framework integrations (React, Vue, Svelte)
- [ ] ABR-C — Component library
- [ ] Interactive docs site


---

<p align="center">Made with ❤️,🧠&🤖 by Dimy Osman</p>
