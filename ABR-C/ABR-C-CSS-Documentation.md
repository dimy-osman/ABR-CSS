# ABR-C.CSS – Abbreviated Component CSS Framework

## AI Algorithm (Ultra-Compressed)

```
ac-[3L] | __[3L] | --[3L] | i-[3L]
3L: w≤3→raw | w>3→L₁+C₂(skip_dup, vowel_ok)
scope: .ac-X.--Y | .ac-X .__Y | .ac-X.i-Z
ex: button→btn, accordion→acr(a+c-r), card→crd, menu→mnu(m+n+u)

Legend: 3L=3letters w=word L₁=1stLetter C₂=next2consonants
        ac-=block __=element --=modifier i-=state
```

## Universal Abbreviation Rules – Optimized for Minimal Typing & Clarity

### 1. Class Structure (Namespaces)

- **Blocks (components)**: `ac-[abr]` → e.g., `ac-btn`, `ac-crd`
- **Elements (parts inside a block)**: `__[abr]` (standalone) → `__ttl`, `__img`
- **Modifiers (variants)**: `--[abr]` (standalone) → `--prm`, `--lrg`
- **States (flags)**: `i-[abr]` (standalone) → `i-act`, `i-dsb`

Compose on the element; scope with descendants in CSS:

```html
<div class="ac-crd --prm">
	<h3 class="__ttl">Title</h3>
	<button class="ac-btn --lrg i-dsb">Buy</button>
</div>
```

```css
.ac-crd {
	/* base */
}
.ac-crd.--prm {
	/* primary variant */
}
.ac-btn.--lrg {
	/* large button */
}
.ac-crd .__ttl {
	/* card title */
}
```

### 2. Abbreviation Logic (F1+C2)

Universal rule for block (component) names - **all names are exactly 3
letters**:

- **3-letter words**: Use the whole word as-is (e.g., "tag" → `tag`)
- **Longer words**: Apply F1+C2 abbreviation:
  - Keep the first letter (F1)
  - Then take the next two consonants (C2) in order
  - Skip duplicate consonants (use only one, continue to next)
  - If not enough consonants after F1, include vowels to reach 3 letters
  - Ignore spaces and hyphens in multi-word names
  - y is treated as a consonant

**Examples:**

- `tag` → tag (3-letter word, use as-is)
- `button` → btn (b + t-n, skip duplicate t)
- `accordion` → acr (a + c-r, skip duplicate c)
- `message` → msg (m + s-g, skip duplicate s)
- `offcanvas` → ofc (o + f-c, skip duplicate f)
- `image` → img (i + m-g)
- `navigation` → nvg (n + v-g)
- `card` → crd (c + r-d)
- `header` → hdr (h + d-r)
- `footer` → ftr (f + t-r)
- `sidebar` → sdb (s + d-b)
- `dialog` → dlg (d + l-g)
- `tooltip` → tlt (t + l-t)
- `breadcrumb` → brd (b + r-d)
- `panel` → pnl (p + n-l)
- `tabs` → tbs (t + b-s)
- `menu` → mnu (m + n-u, not enough consonants so include vowel)

### 3. Conflict Resolution

In rare cases where two component names produce the same 3-letter abbreviation,
append the next consonant to make 4 letters. Prefer keeping the shorter code for
the more common component.

Stick to lowercase. Use hyphens only in the namespace (`ac-`, `i-`, `--`, `__`).

---

## Starter Registry

### A) Blocks (ac-\*)

`ac-acr` (accordion) `ac-alr` (alert) `ac-art` (article) `ac-avt` (avatar)
`ac-brd` (breadcrumb) `ac-bdg` (badge) `ac-bnn` (banner) `ac-btn` (button)
`ac-chp` (chip) `ac-crd` (card) `ac-crs` (carousel) `ac-cnt` (container)
`ac-dlg` (dialog) `ac-dvd` (divider) `ac-drp` (dropdown) `ac-drw` (drawer)
`ac-emb` (embed) `ac-emp` (empty) `ac-edt` (editor) `ac-frm` (form) `ac-ftr`
(footer) `ac-flt` (filter) `ac-glr` (gallery) `ac-grd` (grid) `ac-hdr` (header)
`ac-hr` (hero) `ac-icn` (icon) `ac-img` (image) `ac-inp` (input) `ac-ldr`
(loader) `ac-lst` (list) `ac-lyt` (layout) `ac-mdl` (modal) `ac-mn` (menu)
`ac-msg` (message) `ac-mtr` (meter) `ac-nvg` (navigation) `ac-ntc` (notice)
`ac-ovr` (overlay) `ac-ofc` (offcanvas) `ac-pnl` (panel) `ac-pgn` (pagination)
`ac-ppv` (popover) `ac-prg` (progress) `ac-qck` (quickview) `ac-rdg`
(radio-group) `ac-rtn` (rating) `ac-sct` (section) `ac-sdb` (sidebar) `ac-sld`
(slider) `ac-stp` (stepper) `ac-tbs` (tabs) `ac-tag` (tag) `ac-tbl` (table)
`ac-tlt` (tooltip) `ac-tst` (toast) `ac-usr` (user menu) `ac-upl` (uploader)
`ac-vd` (video) `ac-vsl` (visual meter) `ac-wrp` (wrapper) `ac-wzr` (wizard)
`ac-zmc` (zoom controls) `ac-zm` (zoom)

### B) Elements (\_\_\*)

`__ttl` (title) `__txt` (text) `__sub` (subtitle) `__dsc` (description) `__img`
(image) `__icn` (icon) `__mda` (media) `__mta` (meta) `__hd` (head) `__bd`
(body) `__ft` (foot) `__cnt` (content) `__itm` (item) `__lnk` (link) `__lbl`
(label) `__fld` (field) `__row` (row) `__cel` (cell) `__grp` (group) `__grd`
(grid) `__ovl` (overlay) `__err` (error) `__prv` (preview) `__pic` (picture)

### C) Modifiers (--\*)

`--prm` (primary) `--scn` (secondary) `--trt` (tertiary) `--lrg` (large) `--sml`
(small) `--xsm` (extra-small) `--blk` (block) `--gst` (ghost) `--otl` (outline)
`--inv` (inverted) `--ctr` (centered) `--fxd` (fixed) `--stk` (sticky)

### D) States (i-\*)

`i-act` (active) `i-dsb` (disabled) `i-lod` (loading) `i-opn` (open) `i-cls`
(closed) `i-sel` (selected) `i-vld` (valid) `i-err` (error) `i-fcs` (focus)
`i-hvr` (hover)

---

## Real-World Examples

```html
<header class="ac-hdr pY-s pX-m">
	<nav class="ac-nvg">
		<ul class="ac-lst d-f g-m">
			<li class="__itm"><a class="__lnk i-act">Home</a></li>
			<li class="__itm"><a class="__lnk">Shop</a></li>
		</ul>
	</nav>
</header>

<section class="ac-sct p-m">
	<div class="ac-crd --prm g-s">
		<h3 class="__ttl fs-l">Title</h3>
		<p class="__txt opc-075">Body text…</p>
		<img
			class="ac-img __mda mb-s"
			src="..."
			alt="" />
		<button class="ac-btn --lrg">Buy</button>
		<span class="ac-bdg ml-s">New</span>
	</div>
</section>

<div class="ac-mdl i-opn">
	<div class="__ovl"></div>
	<div class="__bd p-m">
		<h4 class="__ttl mb-s">Confirm</h4>
		<button class="ac-btn --prm">OK</button>
		<button class="ac-btn --scn ml-s">Cancel</button>
	</div>
</div>
```

### CSS Implementation

```css
/* Blocks */
.ac-crd {
	border: 1px solid var(--a-gray-3);
	border-radius: 0.75rem;
}

.ac-crd.--prm {
	border-color: var(--a-pri);
	box-shadow: 0 6px 18px rgba(0, 0, 0, 0.07);
}

.ac-btn {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
}

/* Elements (scoped by ancestor block) */
.ac-crd .__ttl {
	font: 600 1.125rem/1.3 system-ui;
}

.ac-crd .__txt {
	color: var(--a-fg-2);
}

/* Modifiers */
.ac-btn.--lrg {
	padding: 0.75rem 1.25rem;
	font-size: 1rem;
}

.ac-btn.--scn {
	background: transparent;
	border: 1px solid var(--a-gray-4);
}

/* States */
.ac-btn.i-dsb {
	opacity: 0.5;
	pointer-events: none;
}

.ac-nvg .__lnk.i-act {
	text-decoration: underline;
}
```
