# Nespresso Presentation — Design Specification

---

## Design Philosophy

The presentation must look and feel like nespresso.com:
**Minimalist luxury with Art Deco DNA and restrained motion.**

Key principles:
- **Quiet confidence** — no ornate patterns, no excessive decoration
- **Monochrome dominance** — black and white create the luxury foundation
- **Warm gold accents** — used sparingly for emphasis and emotional warmth
- **Generous whitespace** — the primary luxury signifier
- **Geometric precision** — clean lines, structured layouts, Art Deco influence
- **No particle backgrounds, vignette, dot patterns, or parallax**

---

## Color Palette

### Primary Colors

| Name                 | Hex       | RGB              | Usage                                     |
|----------------------|-----------|------------------|-------------------------------------------|
| **Warm Brown**       | `#362217` | (54, 34, 23)     | Viewport bg                               |
| **Light Cream**      | `#FAF9F8` | (250, 249, 248)  | Default slide background (slides 1–13)    |
| **Dark Charcoal**    | `#2E2E2C` | (46, 46, 44)     | Text on light slides                      |
| **Warm Gray-Brown**  | `#6B5D4F` | (107, 93, 79)    | Subtext, captions on light slides         |
| **Pure White**       | `#FFFFFF` | (255, 255, 255)  | Text on dark slides, card backgrounds     |
| **Card Border**      | `#E6E0D8` | (230, 224, 216)  | Card borders (warm beige)                 |
| **Crema Gold**       | `#C3A572` | (195, 165, 114)  | Primary accent — dividers, stats, highlights |
| **Light Gold**       | `#FDAF3E` | (253, 175, 62)   | Secondary accent — hover states           |

### Sustainability Colors (legacy — no longer used on card slides)

| Name               | Hex       | Usage                                  |
|--------------------|-----------|----------------------------------------|
| **Sage Green**     | `#94A96D` | Sustenabilitate value card SVG stroke only (Slide 9) |
| **Dark Teal**      | `#375F5E` | **Removed from all card accents/badges** (17 Mar 2026) |

### Brand Colors

| Name               | Hex       | Usage                                  |
|--------------------|-----------|----------------------------------------|
| **Brand Brown**    | `#4e3227` | Brand identity accent                  |
| **Brand Beige**    | `#d9c7ba` | Brand identity accent                  |

### Color Usage Rules
- Gold (`#C3A572`) is NEVER used for large background areas — only for thin lines, small accents, icons, and highlights
- **ALL card accent bars, badges, and SVG icon strokes use gold** (`#C3A572`) — no teal/green/dark exceptions (unified 17 Mar 2026)
- Max border-radius: 4px (Art Deco = geometric precision)

---

## Typography — Campton

### Font Source
Local .otf files from `assets/fonts/`. Loaded via `@font-face` with `format('opentype')`.

| File              | Weight | font-weight |
|-------------------|--------|-------------|
| CamptonThin       | Thin       | 100 |
| CamptonExtraLight | ExtraLight | 200 |
| CamptonLight      | Light      | 300 |
| CamptonBook       | Book       | 400 |
| CamptonMedium     | Medium     | 500 |
| CamptonSemiBold   | SemiBold   | 600 |
| CamptonBold       | Bold       | 700 |
| CamptonExtraBold  | ExtraBold  | 800 |
| CamptonBlack      | Black      | 900 |

Each weight has a matching Italic variant (e.g., CamptonBoldItalic.otf).

**NO Google Fonts** — no Playfair Display, Cormorant Garamond, Lato, or Josefin Sans.

### Typography Roles

| Role            | Weight        | Style       |
|-----------------|---------------|-------------|
| Hero display    | ExtraBold 800 | UPPERCASE   |
| Slide titles    | Bold 700      | UPPERCASE   |
| Subheadings     | SemiBold 600  | UPPERCASE   |
| Labels/UI       | Medium 500    | UPPERCASE   |
| Body text       | Book 400      | Normal case |
| Captions        | Light 300     | Normal case |

### Typography Rules
- **ALL CAPS** for: slide titles, navigation labels, section headers
- **Letter-spacing: 0.15em–0.3em** on uppercase text (Art Deco spacing)
- **Regular case** for: body text, descriptions, speaker notes
- **Italics** reserved for: quotes, citations, emphasis
- Never use more than 2 font weights on a single slide

---

## Layout Patterns

### Slide Structure
```
┌──────────────────────────────────────────┐
│                                          │
│         [CONTENT AREA]                   │
│         Edge-to-edge, margin: 0          │
│                                          │
│  [Gold thin line — bottom accent]        │
│  [Slide number — bottom right]           │
└──────────────────────────────────────────┘
```
> Persistent top-left logo removed (11 Mar 2026). Slide 0 retains its own centered 700px logo.

### Layout Types

**1. Hero/Centered Layout** (Slides 0, 13)
- Centered text, large display typography
- Thin gold horizontal divider
- Dramatic negative space

**2. Split Layout** (Slide 1: 45/55 photo+Sketchfab iframe)
- Two-column grid

**3. Card Grid** (Slides 5, 6, 7, 9, 11)
- 2×2, 3-column, or 4-column grids
- Cards with gold borders or gold top accent bars
- Hover: gold border glow + translateY(-2px to -4px)

**3b. Flip Card Grid** (Slides 3 and 4)
- 2×2 CSS grid (`.flip-grid` / `.flip-grid-pos`), interactive flip cards driven by Reveal.js fragments
- Fragment forward (→): `fragmentshown` → `.flipped` on `.card-inner` / `.card-inner-pos`
- Fragment back (←): `fragmenthidden` → `.unflipped` on `.card-inner` / `.card-inner-pos`
- Re-entry sync: `slidechanged` → `.flipped-instant` for already-visible cards
- Front face: icon + label only (centered). Back face: label top-left + content centered.
- 3D flip animation via `@keyframes flip-scale-up-hor` / `flip-scale-down-hor` (scale 1.2 at midpoint, rotateX). Keyframes shared between both slides — not duplicated.
- `will-change: transform` on `.card-inner`/`.card-inner-pos`, `transform-style: preserve-3d` on `.card-wrapper`/`.card-wrapper-pos`
- **Critical**: `.flip-grid-pos` must use `margin: 0` (NOT `margin: 0 auto`) — horizontal auto margins override `align-self: stretch` and collapse the grid to near-zero width

**4. Timeline Layout** (Slide 2)
- Vertical scrollable timeline: 10 nodes with images, badges, gold line, fragment fade-up, auto-scroll
- Nodes along the gold line, progressive reveal with fragments

**5. Dark Stats + Cards Layout** (Slides 8, 10)
- Dark charcoal (`#2E2E2C`) stats column (240px) with gold stat numbers
- Adjacent card stack (region cards or campaign timeline cards)

**6. Phase Timeline Layout** (Slide 12)
- Numbered phase cards (01–04) with period ranges (18px) and gold badges
- Vertical stack, fragment fade-up

---

## UI Components

### Gold Divider
```css
.gold-divider {
  width: 80px;
  height: 1px;
  background: linear-gradient(90deg, var(--gold-deep), var(--gold-primary), var(--gold-deep));
  background-size: 200% 100%;
  animation: shimmer 4s ease-in-out infinite;
}
.gold-divider.wide { width: 310px; }
.gold-divider.centered { margin: 24px auto; }
```

### Cards
```css
.content-card {
  border-top: 2px solid var(--gold-primary);
  border-left: 1px solid var(--border-card);
  border-right: 1px solid var(--border-card);
  border-bottom: 1px solid var(--border-card);
  padding: 28px 24px;
  background: var(--bg-card);
}
.content-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(195, 165, 114, 0.1);
  border-color: var(--gold-primary);
}
```

### Stat Counter
```css
.stat-number {
  font-family: 'Campton', sans-serif;
  font-weight: 700;
  color: #C3A572;
  line-height: 1;
}
```

### Vertical Timeline (Slide 2) — added 13 Mar 2026
```css
.timeline-scroll-area {
  max-height: 100%; overflow-y: auto;
  padding: 60px 80px;
  scrollbar-width: thin; scrollbar-color: #C3A572 transparent;
}
.vertical-timeline-v {
  position: relative; padding-left: 50px; margin-top: 60px;
}
.vertical-timeline-v::before {
  /* Gold vertical line through dots */
  content: ''; position: absolute;
  left: 17px; top: 0; bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--gold-primary), var(--gold-light));
}
.timeline-node-v { position: relative; margin-bottom: 160px; padding-left: 32px; }
.node-dot-v { width: 14px; height: 14px; background: #C3A572; border-radius: 50%;
  position: absolute; left: -39px; top: 6px; }
.node-content-v.has-image {
  display: flex; align-items: flex-start;
  justify-content: space-between; gap: 12px; width: 100%;
}
.node-text-block { flex: 1; min-width: 0; }
.node-year-v { font-size: 2.5rem; font-weight: 700; color: var(--gold-primary); }
.node-badge { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.15em;
  text-transform: uppercase; padding: 2px 8px; border-radius: 4px; }
.node-img { width: 400px; height: 180px; object-fit: contain; flex-shrink: 0; }
.node-img-lg { height: 260px; }  /* width inherited from .node-img */
```

Badge color variants: `.badge-launch` (gold), `.badge-strategy` (teal), `.badge-sustain` (green), `.badge-identity` (charcoal) — all with 12% opacity backgrounds.

### Flip Card Components — Slide 3 (`.flip-*`) and Slide 4 (`.pos-*`)

Both slides share the same structural pattern and keyframe animations:

```
.card-wrapper[-pos].fragment
  └── .card-inner[-pos]              ← flipping element (receives .flipped / .unflipped / .flipped-instant)
        ├── .card-front[-pos]        ← front face (position: absolute, backface-visibility: hidden)
        │     ├── .flip-icon[-pos]   ← large icon or symbol
        │     └── .flip-cat[-pos]    ← card label (uppercase)
        └── .card-back[-pos]         ← back face (position: absolute, rotateX(-180deg) at rest)
              ├── .card-back-label[-pos]   ← top-left descriptor
              └── .card-back-content[-pos] ← centered content area
                    └── .pos-back-lines    ← line items (Slide 4 only)
```

Slide 4 additionally has below the grid:
```
.pos-situations      ← flex row of usage situations (tagline removed 17 Mar 2026)
  └── .pos-situation-item  ← SVG icon + span label
```

---

## Animations & Transitions

### Between Slides
- **Transition**: `none` — instant switch, no fade/slide/flash

### Fragment Animations
- `fragment fade-up` — primary entrance (content rises + opacity)
- `fragment fade-in` — simple opacity


### Vertical Timeline (Slide 2)
- Static vertical gold line (no draw animation)
- 10 nodes revealed one-by-one via `fragment fade-up`
- JS `fragmentshown` event triggers `scrollIntoView({ behavior: 'smooth', block: 'nearest' })` for auto-scroll

### Flip Card Animation (Slides 3 & 4) — added 14–15 Mar 2026
- `@keyframes flip-scale-up-hor`: 0% `scale(1) rotateX(0)` → 50% `scale(1.2) rotateX(-90deg)` → 100% `scale(1) rotateX(-180deg)`
- `@keyframes flip-scale-down-hor`: reverse of above
- Triggered by Reveal.js `fragmentshown`/`fragmenthidden` events in `js/custom.js`
- `.flipped` → forward flip animation; `.unflipped` → reverse; `.flipped-instant` → no animation (re-entry sync)
- `will-change: transform` on `.card-inner`/`.card-inner-pos` for GPU compositing
- `.flip-grid` and `.flip-grid-pos` excluded from staggered entrance animation (prevents 3D context flattening)
- Fragment visibility override required (Reveal.js hides `.fragment` by default):
  - Slide 3: `opacity: 1; visibility: visible` (no `!important` needed)
  - Slide 4: `opacity: 1 !important; visibility: visible !important`

### Hover Effects
- Cards: `translateY(-4px)` + gold border + gold box-shadow
- Timeline nodes: gold fill + glow
- All transitions: 300–400ms ease

### NOT used
- No particle backgrounds
- No vignette or dot pattern overlays
- No parallax effects
- No bounce/elastic/spin animations

---

## Nespresso Logo

- **Cover only**: `assets/images/Logo_nou.svg`, centered 700px, `filter: brightness(0) invert(1)` (white on background image) — Slide 0 only
- **Cover background**: `assets/images/Fundal.png` via `data-background-image`, `data-background-size="cover"`, `data-background-position="center"`
- **Persistent top-left logo**: Removed (11 Mar 2026) — HTML overlay div, CSS `.nespresso-logo`, and JS logo-switching logic all deleted

---

## 3D Capsule Embed (Slide 1) — Sketchfab iframe (replaced model-viewer 17 Mar 2026)

- **Source**: Sketchfab embed iframe (model by PoliGone — "Nespresso Vertuo Pod")
- **URL params**: `autostart=1`, `autospin=0.4`, `transparent=1`, `preload=1`, all `ui_*=0` flags
- **Container**: `.slide-3-capsule` — `position: relative; display: flex; flex: 1` for optical centering
- **Interaction block**: `.sketchfab-overlay` div (`position: absolute; z-index: 10`) sits on top of iframe to prevent accidental mouse interaction during presentation
- **Previous**: `<model-viewer>` with local `assets/Capsula_Nespresso.glb` — removed. GLB file still on disk but unused. model-viewer CDN script tag removed from `<body>`.

---

## Slide Number

- Position: fixed bottom-right
- Font: Campton Light 300
- Format: `01 / 14`
- Color: `#6B5D4F` on light slides, `rgba(255, 255, 255, 0.5)` on dark slides

---

## Progress Bar

- Position: bottom of viewport
- Height: 2px
- Color: `#C3A572` (Crema Gold)
- Track: `rgba(195, 165, 114, 0.15)`

---

## Reveal.js (CDN)

```
CSS:   https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.1.0/reveal.min.css
JS:    https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.1.0/reveal.min.js
Notes: https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.1.0/plugin/notes/notes.min.js
```

Speaker notes: press S key (RevealNotes plugin).

---

## Do NOT

- Use bright colors, saturated hues, or neon accents
- Use rounded corners larger than 4px
- Use playful animations (bounce, elastic, spin)
- Use emoji or informal icons
- Use gradients as primary background for text slides
- Overcrowd slides — when in doubt, use more whitespace
- Use bullet points — use gold dashes, numbered lists, or clean lines
- Mix more than 2 font weights per slide
- Use Google Fonts or any external font CDN
- Add particle backgrounds, vignette, or dot pattern overlays
- Use `margin: 0 auto` on CSS grid containers that need full-width stretch in flexbox column layout
- Add `style="position: relative;"` or any `position` override on `<section>` elements — Reveal.js requires sections to be `position: absolute`; overriding this breaks slide layout for all subsequent slides
- Add inline `style` attributes to `<section>` elements for any layout purpose — use CSS classes instead
- Place `<script type="module">` in `<head>` — always add module scripts at end of `<body>` after `Reveal.initialize()`
