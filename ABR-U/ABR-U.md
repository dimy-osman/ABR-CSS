# ABR-U.CSS - Abbreviated Utility CSS Framework

## AI Algorithm (Ultra-Compressed)

```
[p]-[v]
1w→L₁ | Mw→L₁ₑₐ | ⚠→3L(L₁+C₂ ∧skip_dup ∧vowel_ok)
↕UPPER | #raw | %+p | --neg | @bp | \! | ∂rm.
⚠: p=→v₂ | p≠→p₂ | freq→min
ex: width→w, gtc, pst, auto→a, sb, cvr, btn, mnu

Legend: p=prop v=val 1w=singleWord Mw=multiWord L₁=1stLetter L₁ₑₐ=1stLetterEach
        ⚠=conflict 3L=3letters C₂=2consonants ∧=and ↕=axis ∂=decimal #=number
        p==sameProp p≠=diffProp v₂=extend2ndVal p₂=extend2ndProp freq=common min=shortest
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

- **Level 1 (Same property, different values)**: Keep the first value as
  first-letter abbreviation; extend the second value to its first 3 letters
  (e.g., for object-fit: "contain" → `of-c` [first occurrence, -c from contain],
  "cover" → `of-cvr` [extended to cvr to resolve conflict with -c])
- **Level 2 (Different properties, same abbreviation)**: Keep the first property
  as first-letter; extend the second property to its first 3 letters (e.g.,
  padding → `p-` [first], position → `pst-` [extended to pst to resolve
  conflict])
- **Level 3 (Still conflicts)**: Extend both the property and value as needed,
  choosing the shortest possible combination (e.g., if needed, extend to 3
  letters or add context, but prioritize less typing overall)
- **General rule**: Always resolve in favor of the most common/use-case
  property/value getting the shortest name; document any extensions in comments
  if unclear

#### Advanced 3-Letter Extension Rules (F1+C2)

When extending to 3 letters for conflict resolution, use F1+C2 rule:

- **3-letter words**: Use the whole word (e.g., "min" → `min`, "max" → `max`)
- **Longer words**: Apply F1+C2 - first letter + next 2 consonants (e.g.,
  "position" → `pst`, "cover" → `cvr`, "image" → `img`)
- **Skip duplicate consonants**: Use only one, continue to next (e.g., "button"
  → `btn` [b+t-n, skip duplicate t], "letter" → `ltr` [l+t-r, skip duplicate t])
- **Not enough consonants**: Include vowels to reach 3 letters (e.g., "menu" →
  `mnu` [m+n+u], "auto" → `ato` [a+t+o])
- **Priority**: Still favor maximum abbreviation (first letters only) as long as
  property+value combinations don't conflict

### 5. Special Cases

- **Axis combinations**: use uppercase for logical axes (e.g., `pX` =
  padding-inline, `pY` = padding-block, `mX` = margin-inline, `mY` =
  margin-block)
- **Numbers**: write as-is (e.g., 1, 2, 100, 500)
- **Percentages**: use `p` (e.g., 50p, 100p)
- **Units**: standard abbreviations (e.g., 1px, 100vh, 2rem)
- **Negative values**: double dash `--` (e.g., `mt--a-m` for margin-top:
  calc(var(--a-m) \* -1))
- **Breakpoints**: `@s`, `@m`, `@l`, `@xl` (e.g., `d-f@m` for display: flex at
  medium breakpoint)
- **Decimals in values**: Remove dot, keep zeros (e.g., 0.5→05 in `trn-s05` for
  scale(0.5), 0.25→025 in `opc-025` for opacity 0.25)

### 6. Real Examples

- `w-a` → width: auto (first-letter prop + first-letter value)
- `maxw-100p` → max-width: 100% (kebab prop: max first 3 letters + w first
  letter + percentage)
- `d-ib` → display: inline-block (first-letter prop + kebab abbreviation)
- `jc-sb` → justify-content: space-between (kebab prop + kebab value)
- `pst-s` → position: static (conflict resolved: padding gets `p-`, position
  gets `pst-` extended to 3 letters)
- `of-c` → object-fit: contain (first occurrence, -c first letter)
- `of-cvr` → object-fit: cover (conflict resolved with 3-letter value)
- `pX-m` → padding-inline: var(--a-m) (axis notation)
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

- `@s`: 769px+ (Small and above)
- `@m`: 1281px+ (Medium and above)
- `@l`: 1441px+ (Large and above)
- `@xl`: 1921px+ (Extra Large and above)

## Framework Features

- Composable transforms and effects via CSS variables
- Important variants using escaped exclamation mark suffix (`!`)
- Complete utility coverage for all CSS properties
- Zero duplicate classes across all breakpoints
- Organized into 4 consolidated responsive media query blocks
