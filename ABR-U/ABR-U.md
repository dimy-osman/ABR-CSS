# ABR-U.CSS - Abbreviated Utility CSS Framework

## AI Algorithm (Ultra-Compressed)

```
[p]-[v]
1w→L₁ | Mw→L₁ₑₐ
⚠→(≤3L:raw | >3L:L₁+C₁+C₂(∧skip_dup ∧¬C→V))
⚠root→(same_root ∧ ∃conflict: α₁:std | α₂₊:base₁+ext)
#raw | %+p | --neg | @bp | \! | ∂rm
⚠: p=→v₂ | p≠→p₂ | α→min
ex: margin→m, maxw, trn, auto→a, sb, cvr, btn, mnu
   font-size→fs, font-style→fsty
   font-weight→fw, font-family→ff

Naming map (selected):
- isolation: isl‑i (isolate), isl‑a (auto)
- mix-blend: mbm‑m/s/o/d/l/dfr/n
- background-size: contain → bs‑c

Legend: p=prop v=val 1w=singleWord Mw=multiWord L₁=1stLetter L₁ₑₐ=1stLetterEach
        ⚠=conflict ≤3L=3lettersOrLess >3L=moreThan3letters C₁=firstConsonant C₂=2consonants ∧=and
        ∂=decimal #=number p==sameProp p≠=diffProp v₂=extend2ndVal
        p₂=extend2ndProp α=alphaOrder min=shortest
        sep=separator
```

## Universal Abbreviation Rules - Optimized for Minimal Typing

### 1. Class Structure

- No prefix for utility classes
- Property-value separator: single dash (`-`)
- Format: `[property]-[value]`

### 2. Property Abbreviation Logic

- **For a single word**: abbreviate to its first letter (e.g., "top" → `t`,
  "gap" → `g`, "width" → `w`, "margin" → `m`)
- **For kebab-case properties (multi-word)**: apply the above logic per
  word—abbreviate each to its first letter, but use the first 3 letters for the
  first word if needed for clarity or conflicts (e.g., "max-width" → `maxw`
  [max=first 3 letters + w from width], "grid-template-columns" → `gtc` [g from
  grid + t from template + c from columns])

### 3. Value Abbreviation Logic

- **For a single word**: abbreviate to its first letter (e.g., "auto" → `-a`,
  "top" → `-t`, "end" → `-e`, "center" → `-c`, "block" → `-b`)
- **For kebab-case values (multi-word)**: use the first letter of each word
  (e.g., "inline-block" → `-ib`, "space-between" → `-sb`, "flex-start" → `-fs`)

### 4. Conflict Resolution Hierarchy

**Default behavior**: ALL properties and values start as first-letter
abbreviations. All properties and their values follow A-Z sorting, and rule of
first get's the shortest version. the following properties Only extend when
conflicts occur.

**On conflict, apply these rules**:

- **Level 1 (Same property, different values)**: Keep the first value as
  first-letter abbreviation; for conflicting subsequent values, check word
  length:
  - If ≤3 letters → use the whole word (e.g., "min" → `min`, "max" → `max`)
  - If >3 letters → use L₁+C₂ (first letter + 2 consonants, skip duplicates; if
    insufficient consonants, use vowels)
  - Example: object-fit → `of-c` (contain), `of-cvr` (cover)
- **Level 2 (Different properties, same abbreviation)**: Keep the first property
  as first-letter; extend the conflicting property by word length:

  - If ≤3 letters → use the whole word (e.g., "gap" → `gap`, "row" → `row`)
  - If >3 letters → use L₁+C₂ (e.g., "position" → `pst`)
  - Example: padding → `p-`, position → `pst-`

- **Level 3 (Still conflicts)**: Extend both sides minimally; use **α→min** as a
  deterministic tie-breaker (choose the alphabetically minimal valid form) while
  preserving brevity.

#### Extension Rules (L₁+C₁C₂)

When extending words >3 letters:

- **First letter + next 2 consonants** (skip duplicates). Examples: "position" →
  `pst`, "cover" → `cvr`, "transition" → `trn`.
- **Skip duplicate consonants**: Use only one, continue to next (e.g., "button"
  → `btn`, "letter" → `ltr`).
- **Not enough consonants**: Include vowels to reach 3 letters (e.g., "menu" →
  `mnu`).

### 5. Special Cases

- **Logical axis properties**: Uppercase X/X for inline/block (e.g., `pX` =
  padding-inline, `pX` = padding-block, `mX` = margin-inline, `mY` =
  margin-block, `oX` = overflow-x, `oY` = overflow-y)
- **Numbers**: write as-is (e.g., 1, 2, 100, 500)
- **Percentages**: use `%` (e.g., 50%, 100%)
- **Units**: standard abbreviations (e.g., 1px, 100vh, 2rem)
- **Negative values**: double dash `--` (e.g., `mt--a-m` for margin-top:
  calc(var(--a-m) \* -1))
- **Breakpoints**: `@xs` `@s`, `@m`, `@l`, `@xl` (e.g., `d-f@m` for display:
  flex at medium breakpoint)
- **Decimals in values**: Keep decimals (e.g., 0.5→05 in `trn-s0.5` for
  scale(0.5), 0.25→025 in `opc-0.25` for opacity 0.25)

Variants policy: To keep core minimal, responsive/important variants are not
provided for mix-blend (mbm‑_), isolation (isl‑_), animation (anm*),
text-overflow (to‑*), and hyphens (hyp‑\*). Use base classes; for edge cases use
`$` arbitrary values.

### 6. Use Case Separation

Standard ABR-U.CSS (classes)

```
<div class="d-f jc-c ai-c mt-2 px-4 br-8">Content</div>
```

- Quick, reusable, abbreviated
- Follows ABR-U.CSS rules
- Minimal output

Arbitrary/one-off values (inline style)

```
<div class="d-f jc-c ai-c mt-2 px-4 br-8" style="color: rgba(255, 100, 50, 0.5); box-shadow: 0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.2);">Content</div>
```

- Direct, clear, readable
- No build process needed
- No class explosion

Reusable custom patterns (style block)

```
<style>
.glass-card {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
<div class="glass-card mt-2 px-4">Content</div>
```

Updated philosophy

- Classes → Standard ABR-U.CSS abbreviations
- Inline styles → Arbitrary/one-off values
- Style blocks → Reusable custom patterns

### 7. Real Examples

- `w-a` → width: auto (first-letter prop + first-letter value)
- `maxw-100%` → max-width: 100% (kebab prop: max first 3 letters + w first
  letter + percentage)
- `d-ib` → display: inline-block (first-letter prop + kebab abbreviation)
- `jc-sb` → justify-content: space-between (kebab prop + kebab value)
- `pst-s` → position: static (conflict resolved: padding gets `p-`, position
  gets `pst-` extended to 3 letters)
- `of-c` → object-fit: contain (first occurrence, -c first letter)
- `of-cvr` → object-fit: cover (conflict resolved with 3-letter value)
- `px-m` → padding-inline: var(--a-m) (logical axis notation)
- `trn-s1` → sets --a-sx:1, --a-sy:1 for scale(1) (composable transform)

## Goal

Achieve maximum brevity while maintaining zero conflicts and logical
consistency.

## CSS Variable System

- Uses shortened prefix `--a-` for all framework variables
- T-shirt scale values: `3xs`, `2xs`, `xs`, `s`, `m`, `l`, `xl`, `2xl`, `3xl`,
  `4xl`, `5xl`
- Size values mapped to Tailwind-compatible rem units

## Responsive Breakpoints

- `@xs`: 426px+ (Extra Small and above)
- `@s`: 769px+ (Small and above)
- `@m`: 1281px+ (Medium and above)
- `@l`: 1441px+ (Large and above)
- `@xl`: 1921px+ (Extra Large and above)

## Framework Features

- Composable transforms and effects via CSS variables
- Important variants using escaped exclamation mark suffix (`!`)
- Complete utility coverage for all CSS properties
- Zero duplicate classes across all breakpoints
- Organized into 5 consolidated responsive media query blocks
