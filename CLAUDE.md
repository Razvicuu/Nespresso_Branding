# CLAUDE.md — Nespresso Branding Presentation

## Project Overview

Reveal.js academic presentation (16 slides, 0–15) analyzing Nespresso's branding strategy. Minimalist luxury with Art Deco geometric precision.

**Target audience**: University Branding course
**Language**: All slide content in **Romanian** with correct diacritics (ă, â, î, ș, ț)
**Tone**: Academic but visually premium — data-rich content in a luxury wrapper
**Deploy**: Vercel — auto-deploy from GitHub

**Planned additions**: 1 more slide to be inserted after Slide 5 (Portofoliul de Branduri):
- Slide 6 (planned): "Utilizatori & Piețe" — cards grid, user segments + global markets
- After this addition: 17 slides total (0–16)

---

## Technical Stack

- **Reveal.js 5.1.0** loaded from CDN (NOT node_modules):
  - CSS: `https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.1.0/reveal.min.css`
  - JS: `https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.1.0/reveal.min.js`
  - Notes: `https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.1.0/plugin/notes/notes.min.js`
- **Font**: Campton — local .otf files from `assets/fonts/`, 9 weights (100–900) + italic variants, `@font-face` with `format('opentype')`
- **NO Google Fonts** — no Playfair Display, no Cormorant Garamond, no Lato, no Josefin Sans
- **Logo**: SVG at `assets/images/Logo_nou.svg` — centered 700px on Slide 0 only (white filter). **Persistent top-left logo removed.**
- **Favicon**: `assets/images/Favico.svg` — adaptive dark/light OS theme
- **model-viewer 3.5.0** — Google CDN: `https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js` (Slide 1 — 3D capsule)
- **Images**: `assets/images/Fundal.png` (Cover background, Slide 0). `assets/images/eric_nespresso.gif` (Eric Favre photo, Slide 1). `assets/Capsula_Nespresso.glb` (3D capsule model, Slide 1). Timeline images in `assets/images/`: `1986.png`, `1989.png`, `1999.png`, `2000.jpg`, `2003.png`, `2006.jpg`, `2009.png`, `2014.png`, `2022.png`, `2023.png` (Slide 2). `Icon_alb.svg`, `Icon_maro.svg`.
- **Target resolution**: 1920×1080

---

## File Structure

```
Nesspreso/
├── CLAUDE.md                  ← This file
├── design-spec.md             ← Full design specification
├── index.html                 ← Main presentation
├── css/
│   └── nespresso-theme.css    ← Custom theme (~1,639 lines)
├── js/
│   └── custom.js              ← Animations & interactivity (~168 lines)
└── assets/
    ├── fonts/                 ← Campton .otf files (9 weights + italics)
    ├── Capsula_Nespresso.glb  ← 3D capsule model (Slide 1)
    └── images/
        ├── Logo_nou.svg
        ├── Fundal.png             ← Cover background image (Slide 0)
        ├── Favico.svg
        ├── Icon_alb.svg
        ├── Icon_maro.svg
        ├── eric_nespresso.gif ← Eric Favre photo (Slide 1)
        ├── 1986.png           ← Timeline images (Slide 2)
        ├── 1989.png
        ├── 1999.png
        ├── 2000.jpg
        ├── 2003.png
        ├── 2006.jpg
        ├── 2009.png
        ├── 2014.png
        ├── 2022.png
        └── 2023.png
```

---

## Color Palette

### Slide backgrounds
| Slide       | Background | Type |
|-------------|-----------|------|
| Slide 0     | `assets/images/Fundal.png` | Full-bleed background image (`background-size: cover`) |
| Slides 1–15 | `#FAF9F8` | Light cream (default) |

### Colors
| Name               | Hex       | Usage                                    |
|--------------------|-----------|------------------------------------------|
| Warm Brown         | `#362217` | Viewport bg                              |
| Light Cream        | `#FAF9F8` | Default slide background (slides 1–15)   |
| Dark Charcoal      | `#2E2E2C` | Text on light slides                     |
| Warm Gray-Brown    | `#6B5D4F` | Subtext, captions on light slides        |
| Pure White         | `#FFFFFF` | Text on dark slides, card backgrounds    |
| Card Border        | `#E6E0D8` | Card borders (warm beige)                |
| Crema Gold         | `#C3A572` | Primary accent — dividers, stats, highlights |
| Light Gold         | `#FDAF3E` | Secondary accent — hover states          |
| Brand Brown        | `#4e3227` | Brand identity accent                    |
| Brand Beige        | `#d9c7ba` | Brand identity accent                    |
| Sustainability Green | `#94A96D` | Sustainability sections                |
| Sustainability Teal  | `#375F5E` | Environmental content accents          |

**Rule**: Gold (`#C3A572`) is NEVER a large background — only for thin lines, small accents, and highlights.

---

## Typography — Campton Only

| Role            | Font    | Weight        | Style       |
|-----------------|---------|---------------|-------------|
| Hero display    | Campton | ExtraBold 800 | UPPERCASE   |
| Slide titles    | Campton | Bold 700      | UPPERCASE   |
| Subheadings     | Campton | SemiBold 600  | UPPERCASE   |
| Labels/UI       | Campton | Medium 500    | UPPERCASE   |
| Body text       | Campton | Book 400      | Normal case |
| Captions        | Campton | Light 300     | Normal case |

**Uppercase text always has letter-spacing: 0.15em–0.3em** (Art Deco style)

---

## Slide-by-Slide Specification (with verified data)

### Slide 0 — Coperta
- **Layout**: Minimal cover — centered logo only
- **Content**: Large white SVG logo (`Logo_nou.svg`, 700px wide) centered. No divider, no text, no persistent top-left logo.
- **Background**: Full-bleed image `assets/images/Fundal.png` via `data-background-image`, `data-background-size="cover"`, `data-background-position="center"`
- **Logo filter**: `brightness(0) invert(1)` to render white on background
- **Speaker notes**: Prezintă-te. Spune tema. Lasă slide-ul să respire 5 secunde înainte să vorbești.

### Slide 1 — Istoria Brandului (1976)
- **Layout**: Split 45/55 — photo left, content + 3D capsule right
- **Left (45%)**: `assets/images/eric_nespresso.gif` — Eric Favre photo, `object-fit: cover`, full slide height
- **Right top**: Label "Istoria Brandului" + big-year "1976" + gold divider + paragraph (Eric Favre brevet insight). No mini-timeline.
- **Right bottom**: `<model-viewer>` with `assets/Capsula_Nespresso.glb` — 360×340px, centered, auto-rotate 15deg/s, `auto-rotate-delay="0"`, `environment-image="legacy"`, `exposure="2.2"`, `tone-mapping="commerce"`, `shadow-intensity="0"`
- **Background**: `#FAF9F8`

### Slide 2 — Repere Istorice (1986–2023)
- **Layout**: Vertical scrollable timeline with 10 nodes, images, and colored badges
- **Class**: `timeline-slide` (custom padding/overflow overrides)
- **Structure**: `.timeline-scroll-area` > label + h1 + `.vertical-timeline-v`
- **Scrollable**: `overflow-y: auto`, custom gold scrollbar, JS auto-scroll on fragment reveal
- **Gold line**: Vertical `::before` pseudo-element (2px, gold gradient) on `.vertical-timeline-v`
- **Each node**: `.timeline-node-v.fragment.fade-up` with `.node-dot-v` (14px solid gold circle), `.node-content-v.has-image` (flex row: text + image)
- **Text block**: `.node-text-block` with `.node-year-v` (gold, 2.5rem), `.node-badge` (colored category label), `.node-title-v`, `.node-detail-v`
- **Images**: `.node-img` (300×180px, `object-fit: contain`) or `.node-img-lg` (400×260px for nodes 2003, 2006)
- **Badge colors**: `.badge-launch` (gold 12% bg), `.badge-strategy` (teal 12% bg), `.badge-sustain` (green 12% bg), `.badge-identity` (charcoal 12% bg)
- **Nodes**:
  1. **1986** — Lansare — Lansare oficială Nespresso S.A. (`1986.png`)
  2. **1989** — Strategie — Jean-Paul Gaillard → Nespresso Club (`1989.png`)
  3. **1999** — Extensie — Nespresso Professional (`1999.png`)
  4. **2000** — Identitate — O nouă identitate vizuală + Primul Boutique Paris (`2000.jpg`)
  5. **2003** — Sustenabilitate — Programul AAA Sustainable Quality (`2003.png`, lg)
  6. **2006** — Campanie — George Clooney „What Else?" (`2006.jpg`, lg)
  7. **2009** — Sustenabilitate — Ecolaboration (`2009.png`)
  8. **2014** — Inovație — VertuoLine (`2014.png`)
  9. **2022** — Certificare — B Corporation Certified (`2022.png`)
  10. **2023** — Inovație — Capsule pe bază de hârtie (`2023.png`)
- **Animation**: Nodes revealed one-by-one via Reveal.js fragments (arrow key), auto-scroll to revealed node
- **Background**: `#FAF9F8`

### Slide 3 — Limbajul Vizual — redesigned 14 Mar 2026
- **Layout**: Interactive 2×2 flip card grid, fragment-driven (arrow key)
- **Structure**: `<span class="label">` + `<h1>` + `.flip-divider` + `.flip-grid` (2-column CSS grid)
- **Header**: Aligned to top via `.reveal .slides section:has(.flip-grid) { justify-content: flex-start; }`
- **Each card**: `.card-wrapper.fragment` > `.card-inner` > `.card-front` + `.card-back`
- **Front faces** (icon + label only, centered):
  - Card 1 — **LOGO**: Diamond icon ◆ (70px inline), label "Logo"
  - Card 2 — **CULORI**: Gold square (56×56px inline), label "Culori"
  - Card 3 — **SLOGAN**: Quote icon ❞❞ (56px), label "Slogan"
  - Card 4 — **FONT**: "Aa" text (66px inline), label "Font"
- **Back faces**: Each card has `.card-back-label` (top-left) + `.card-back-content` (centered)
- **Flip trigger**: Reveal.js fragments — each `.card-wrapper` has class `fragment`; `fragmentshown` adds `.flipped`, `fragmenthidden` adds `.unflipped`
- **Re-entry sync**: `onSlideChanged` applies `.flipped-instant` to already-visible cards (no animation on re-entry)
- **Flip animation**: `flip-scale-up-hor` / `flip-scale-down-hor` keyframes — `scale(1.2)` at 50%, `rotateX` for 3D flip
- **Performance**: `will-change: transform` on `.card-inner`, `.flip-grid` excluded from staggered entrance animation, `transform-style: preserve-3d` on `.card-wrapper`
- **Fragment visibility override**: `.reveal .slides .flip-grid .fragment, .flip-grid .fragment.visible { opacity: 1; visibility: visible; }`
- **Background**: `#FAF9F8`

### Slide 4 — Axe de Poziționare — inserted 15 Mar 2026
- **Label**: "Strategie de Brand" | **Heading**: "Axe de Poziționare"
- **Layout**: Interactive 2×2 flip card grid (same fragment mechanism as Slide 3), tagline, usage situations row
- **Tagline**: "Experiența barista perfectă, la tine acasă." (italic, light weight, gold-brown color)
- **CSS namespace**: `.pos-*` prefix (`.flip-grid-pos`, `.card-wrapper-pos`, `.card-inner-pos`, `.card-front-pos`, `.card-back-pos`)
- **Flip cards** (`.card-wrapper-pos.fragment`):
  - Card 1 — **Exclusivitate** (◆ icon): back → "Beneficii Emoționale" — Sentiment de răsfăț / Statut social / Comunitate de elită
  - Card 2 — **Calitate** (★ icon): back → "Beneficii Funcționale" — Boabe selectate / Extracție perfectă / Constanță garantată
  - Card 3 — **Inovație** (⚙ icon): back → "Beneficii Funcționale" — Sistem capsulă brevetat / VertuoLine / Capsule hârtie 2023
  - Card 4 — **Estetică** (◐ icon): back → "Beneficii Emoționale" — Design premiat / Experiență vizuală / Obiect de decor
- **Usage situations row** (`.pos-situations`): 4 `.pos-situation-item` entries with inline SVG icons:
  - ☀ "Ritualul de dimineață"
  - 💼 "Întâlniri de afaceri"
  - 🏠 "Entertaining acasă"
  - 🎁 "Cadouri"
- **Fragment visibility override**: `.reveal .slides .flip-grid-pos .fragment, .flip-grid-pos .fragment.visible { opacity: 1 !important; visibility: visible !important; }`
- **Entrance animation excluded**: `.reveal .slides section.present > .flip-grid-pos { animation: none; }`
- **Background**: `#FAF9F8`
- **Resolved issue**: `.flip-grid-pos` uses `margin: 0` (NOT `margin: 0 auto`). Auto horizontal margins on a flex child override `align-self: stretch` and collapse the grid to near-zero width. This is fixed and debug CSS has been removed.

### Slide 5 — Portofoliul de Branduri — inserted 16 Mar 2026
- **Label**: "Compania Mamă" (left) | "Linii de Produs" (right)
- **Heading**: "Ecosistemul Nestlé" (left) | "Portofoliul Propriu" (right)
- **Layout**: Split 45/55 with vertical separator, flexbox
- **CSS namespace**: `.portfolio-*` prefix (`.portfolio-split`, `.portfolio-left`, `.portfolio-right`, `.portfolio-card`, `.portfolio-product-card`, etc.)
- **Left side — Nestlé ecosystem**: 4 horizontal cards (`.portfolio-card.fragment.fade-up`), each with brand name + positioning tag:
  - NESPRESSO — "Lux accesibil" (gold tag `.portfolio-tag-gold`, gold left border `.portfolio-card-highlight`)
  - NESCAFÉ — "Cafea de masă" (neutral tag)
  - DOLCE GUSTO — "Sistem accesibil" (neutral tag)
  - STARBUCKS (licensed) — "Premium retail" (neutral tag)
- **Separator**: `.portfolio-separator` — 1px solid `#E6E0D8`, height 80%, centered
- **Right side — Nespresso portfolio**: 3 vertical product cards (`.portfolio-product-card.fragment.fade-up`):
  - Original Line + "D2C" badge (gold) + description
  - Vertuo Line + "D2C" badge (gold) + description
  - Professional + "B2B" badge (teal `#375F5E`) + description
- **Hover on all cards**: `border-color: #C3A572`, `translateY(-2px)`, `box-shadow: 0 4px 12px rgba(0,0,0,0.06)`
- **Reused classes**: `.label`, `.flip-divider`
- **Background**: `#FAF9F8`

### Slide 6 — Viziunea Brandului
- **Layout**: Hero (centered quote)
- **Quote**: "Cultivăm cafeaua ca artă pentru a scoate ce e mai bun din fiecare dintre noi."
- **CEO quote**: "Vrem să fim Louis Vuitton-ul cafelei" — Gerhard Berssenbrügge
- **Background**: `#FAF9F8`

### Slide 7 — Strategia de Poziționare
- **Layout**: 3 columns
- **Column 1 — "MASS-MARKET"**: Dolce Gusto / Keurig. $0.30–$0.80/capsulă.
- **Column 2 — "LUXUL ACCESIBIL" (NESPRESSO)**: $0.70–$1.60/capsulă. Gold border highlight.
- **Column 3 — "PREMIUM"**: Lavazza / Illy. ~$0.31/capsulă.
- **Background**: `#FAF9F8`

### Slide 8 — Arhitectura de Brand (Portofoliul Nestlé)
- **Layout**: Split 50/50 — text left, brand pyramid right
- **Label**: "Portofoliul Nestlé" | **Heading**: "Arhitectura de Brand"
- **Left**: Context paragraph (Nespresso ca bijuterie Nestlé, strategie pe segmente de preț și stil de viață)
- **Right**: `.pyramid` — 4 levels: Ultra-Premium (Vertuo/Atelier), Premium (Original), Mid-Range (Dolce Gusto), Mass (Nescafé Classic)
- **Background**: `#FAF9F8`

### Slide 9 — Profilul Consumatorului (Segmente Țintă)
- **Layout**: 3 persona cards
- **Card 1 — "Profesionistul Urban"**: 30–45 ani, venit peste medie, cafea ca ritual de status
- **Card 2 — "Aspiraționalul"**: 25–35 ani, prima achiziție premium, poarta în universul luxury
- **Card 3 — "B2B / Office"**: Companii, hoteluri 5 stele, restaurante premium
- **Footer quote**: "Nespresso nu targetează toți consumatorii de cafea — ci pe cei care vor să fie mai mult decât consumatori."
- **Background**: `#FAF9F8`

### Slide 10 — Prezența Mondială (Piețe Globale)
- **Layout**: Split 50/50 — animated stats left, vertical interactive timeline right
- **Label**: "Piețe Globale" | **Heading**: "Prezența Mondială"
- **Animated counters**: "80+" (țări prezente), "800+" (boutique-uri în lume), "14 Mld €" (vânzări anuale 2023)
- **Right**: `.vertical-timeline` with 3 `.vt-item` regions: Europa (piața principală), America (expansiune Vertuo), Asia & ME (piețe emergente)
- **Background**: `#FAF9F8`

### Slide 11 — Marketing: Campanii & Celebrity
- **Layout**: Centered hero — "What Else?" quote + vertical interactive timeline with campaign entries
- **Label**: "Marketing · Campanii"
- **Quote**: "What Else?" (large display)
- **Entries**: 2006 (What Else?, Gondry), 2009 (Malkovich, Rodriguez), 2013 (Damon, Dujardin), 2018 (Penélope Cruz), 2023 (Garner, Beckham), 2025 (Longoria)
- **Animated counters**: "40%" (creștere venituri 2006–2010), "~$40M" (câștiguri Clooney), "19" (ani parteneriat)
- **Background**: `#FAF9F8`

### Slide 12 — Strategia Integrată (Ecosistemul de Marketing)
- **Layout**: 2×2 card grid
- **Label**: "Ecosistemul de Marketing" | **Heading**: "Strategia Integrată"
- **Cards**: Marketing Online (site boutique, app, e-commerce), Responsabilitate Socială (AAA, Rainforest Alliance, capsule reciclabile), Distribuție (direct-to-consumer, fără supermarket-uri), Parteneriate (Marriott, companii aeriene premium, restaurante Michelin)
- **Background**: `#FAF9F8`

### Slide 13 — Evoluția Brandului (Repozitionare & Revitalizare)
- **Layout**: Two "Înainte → După" repositioning moments with animated counters
- **Label**: "Repozitionare & Revitalizare" | **Heading**: "Evoluția Brandului"
- **Moment 1 — 2010**: Sistemul Vertuo — espresso european → cafea lungă pt. America. Counter: "40%" creștere piață
- **Moment 2 — 2019**: Pivotul Sustenabilității — lux tradițional → "lux responsabil", carbon neutral 2022. Counter: "91%" aluminiu reciclabil
- **Background**: `#FAF9F8`

### Slide 14 — Concluzii (Ce Învățăm)
- **Layout**: Vertical list with fragment fade-up
- **Label**: "Concluzii · Lecții de Branding" | **Heading**: "Ce Învățăm"
- **Lessons**: fragment-revealed branding takeaways (Ecosistem, Lux accesibil, Consistență vizuală, Celebrity endorsement strategic, Sustenabilitate ca pilon)
- **Speaker notes**: Academic refs — Kapferer (Brand Identity Prism), Keller (Brand Equity Model)
- **Background**: `#FAF9F8`

### Slide 15 — Încheiere & Q&A
- **Layout**: Hero (centered)
- **Content**: "What Else?" (large gold text), "Mulțumim pentru atenție", "Întrebări?"
- **Background**: `#FAF9F8`

---

## Reveal.js Configuration

```javascript
Reveal.initialize({
  width: 1920,
  height: 1080,
  margin: 0,
  minScale: 0.2,
  maxScale: 2.0,
  controls: false,
  controlsTutorial: false,
  progress: true,
  slideNumber: false,
  hash: true,
  transition: 'none',
  transitionSpeed: 'fast',
  backgroundTransition: 'none',
  keyboard: true,
  touch: true,
  overview: true,
  center: false,
  navigationMode: 'linear',
  fragments: true,
  fragmentInURL: false,
  showNotes: false,
  autoSlide: 0,
  autoSlideStoppable: true,
  plugins: [RevealNotes],
});
```

> Note: `history: true` was removed — it is redundant with `hash: true` in Reveal.js 5.x (`history` defaults to `false`).

---

## Transitions & Animations

- **Between slides**: `none` (instant, no fade/slide/flash)
- **Internal elements**: fragment fade-up, fragment fade-in
- **Animated counters**: Slides 10, 11, 13 — animate once from 0 on slide enter
- **Vertical timeline scroll**: Slide 2 — `fragmentshown` event triggers `scrollIntoView({ behavior: 'smooth', block: 'nearest' })` on revealed node
- **Flip cards (Slide 3)**: Fragment-driven — `fragmentshown` adds `.flipped`, `fragmenthidden` adds `.unflipped` on `.card-inner`. Keyframe animations `flip-scale-up-hor`/`flip-scale-down-hor` with `scale(1.2)` + `rotateX`. Re-entry sync via `onSlideChanged` applies `.flipped-instant`.
- **Flip cards (Slide 4)**: Same fragment mechanism as Slide 3 but using `.card-inner-pos`. `fragmentshown`/`fragmenthidden`/`onSlideChanged` all extended for `.card-wrapper-pos`. Reuses same `flip-scale-up-hor`/`flip-scale-down-hor` keyframes (not duplicated).
- **Hover effects**: Cards — gold border glow + translateY(-4px)
- **NO**: particle backgrounds, vignette, dot patterns, parallax

---

## CSS: Flip Card Class Namespaces

### Slide 3 — `.flip-*` namespace
- `.flip-grid` — 2-column CSS grid container
- `.card-wrapper` — outer wrapper, `fragment`, `transform-style: preserve-3d`
- `.card-inner` — flipping element; receives `.flipped`, `.unflipped`, `.flipped-instant`
- `.card-front` / `.card-back` — absolute-positioned faces, `backface-visibility: hidden`
- `.flip-icon`, `.flip-cat`, `.flip-divider` — front face elements
- `.card-back-label`, `.card-back-content` — back face layout

### Slide 4 — `.pos-*` namespace (mirrors Slide 3 structure)
- `.flip-grid-pos` — 2-column CSS grid; `margin: 0` (NOT `margin: 0 auto` — horizontal auto margins collapse the grid)
- `.card-wrapper-pos` — outer wrapper, `fragment`
- `.card-inner-pos` — flipping element; receives `.flipped`, `.unflipped`, `.flipped-instant`
- `.card-front-pos` / `.card-back-pos` — absolute-positioned faces
- `.flip-icon-pos`, `.flip-cat-pos` — front face elements
- `.card-back-label-pos`, `.card-back-content-pos`, `.pos-back-lines` — back face layout
- `.pos-tagline` — italic tagline below heading (specificity rule: `.reveal .slides section .pos-tagline`)
- `.pos-situations` — usage situations row below the grid
- `.pos-situation-item` — individual situation (SVG icon + label)

**Keyframes shared by both namespaces** (defined once):
- `@keyframes flip-scale-up-hor` — forward flip: `rotateX(0→-180deg)` + `scale(1.2)` at 50%
- `@keyframes flip-scale-down-hor` — reverse flip

---

## JS: Fragment & Slide Event Handlers (`js/custom.js`)

### `fragmentshown`
- `.timeline-node-v` → `scrollIntoView` (Slide 2 auto-scroll)
- `.card-wrapper` → adds `.flipped` to `.card-inner` (Slide 3)
- `.card-wrapper-pos` → adds `.flipped` to `.card-inner-pos` (Slide 4)

### `fragmenthidden`
- `.card-wrapper` → adds `.unflipped` to `.card-inner` (Slide 3)
- `.card-wrapper-pos` → adds `.unflipped` to `.card-inner-pos` (Slide 4)

### `onSlideChanged` (re-entry sync)
- Counters: triggers `animateCounter()` for all `[data-counter]` on current slide
- Slide 3 cards: removes `.flipped/.unflipped/.flipped-instant`, re-applies `.flipped-instant` if already `.visible`
- Slide 4 cards: same logic for `.card-wrapper-pos` / `.card-inner-pos`

---

## Theme Logic

- Slide 0: bg `assets/images/Fundal.png` (full-bleed), logo white centered 700px
- Slides 1–15: bg `#FAF9F8`, text `#2E2E2C`
- **Persistent top-left logo**: removed (HTML overlay div, CSS `.nespresso-logo`, and JS `updateThemeElements()` logo logic all deleted)

---

## Speaker Notes

Every slide MUST have speaker notes via `<aside class="notes">` (press S to open).

---

## Verified Data Points

- Revenue: CHF 6.481 billion (2025)
- Countries: 76
- Boutiques: 802 in 515 cities
- Club retention: 85%+
- Clooney partnership: 19 years (since 2006)
- Post-Clooney growth: +40% revenue (2006–2010)
- B Corp certification: 2022
- Positive Cup investment: CHF 500 million (2014)
- Paper capsules: launched in FR/CH (2023)

---

## Critical Warnings — Do NOT Repeat These Bugs

### 1. Never add `position: relative` (or any position override) to `<section>` elements
Reveal.js CDN CSS sets `.reveal .slides > section { position: absolute; }`. Sections must stay `position: absolute` so Reveal.js can position them with `transform: translate(...)`. Adding `style="position: relative;"` or any CSS rule that overrides `position: absolute` on a `<section>` puts that section into normal document flow, inflates `.slides` content height, and causes all subsequent slides to render off-screen (blank). This was the root cause of the slides 5–14 blank bug (16 Mar 2026).

**3D flip cards do NOT need `position: relative` on the section.** The 3D stacking context is created by `perspective` and `transform-style: preserve-3d` on `.card-wrapper`/`.card-wrapper-pos`.

### 2. Never add particle backgrounds, canvas overlays, or vignette layers
Particle backgrounds (`<canvas>` with `position: fixed`) are explicitly prohibited in the design spec. They add z-index complexity, violate the minimalist luxury aesthetic, and risk covering slide content. Removed 16 Mar 2026.

### 3. Never use inline `style` attributes to override Reveal.js layout properties
Inline styles (`style="..."`) on `<section>` elements override CDN CSS and break Reveal.js positioning. If layout tweaks are needed, add a CSS class and a rule in `nespresso-theme.css` — do not use inline styles.

### 4. Reuse existing CSS classes instead of creating parallel namespaces
When adding a new slide that needs the same component pattern as an existing slide (e.g., flip cards), prefer extending the existing CSS namespace or inheriting styles. If a second namespace is truly necessary (as with `.pos-*` for Slide 4), ensure JS event handlers (`fragmentshown`, `fragmenthidden`, `onSlideChanged`) are extended to cover both namespaces, and keyframe animations are shared — not duplicated.

### 5. Never use `margin: 0 auto` on flex children that need full-width stretch
A flex child with `align-self: stretch` (or `align-items: stretch` on the parent) will have its stretch overridden by `margin-left: auto` or `margin-right: auto`. Use `margin: 0` on `.flip-grid-pos` (and similar containers).

### 6. Always place `<script type="module">` at end of body
Module scripts in `<head>` with `type="module"` execute after HTML parsing but their DOM effects (custom element upgrades, e.g. `<model-viewer>`) may race with Reveal.js initialization. Always place them after the `Reveal.initialize()` script block at the end of `<body>`.

---

## Changelog

| Date | Change |
|------|--------|
| 16 Mar 2026 | Added Slide 5 "Portofoliul de Branduri" — split 45/55 layout, `.portfolio-*` CSS namespace, 7 fragment cards, vertical separator |
| 15 Mar 2026 | Added Slide 4 "Axe de Poziționare" — 2×2 flip card grid, `.pos-*` CSS namespace, tagline, usage situations row |
| 15 Mar 2026 | Fixed `.flip-grid-pos` collapse: changed `margin: 0 auto` → `margin: 0` |
| 16 Mar 2026 | **Root cause fix** — removed `style="position: relative;"` from sections 3 and 4 that caused slides 5–14 to render blank |
| 16 Mar 2026 | Removed `<canvas id="particles-canvas">` and entire `initParticles()` JS function (spec violation, z-index risk) |
| 16 Mar 2026 | Fixed `@keyframes slideContentIn` — removed `opacity: 0/1` from keyframe (was causing content flash during stagger delay) |
| 16 Mar 2026 | Removed `history: true` from `Reveal.initialize()` — redundant with `hash: true` in Reveal.js 5.x |
| 16 Mar 2026 | Moved `<script type="module">` model-viewer from `<head>` to end of `<body>` after `Reveal.initialize` |
| 16 Mar 2026 | Updated `Reveal.initialize()` with full explicit config (minScale, maxScale, keyboard, touch, overview, fragments, etc.) |
| 14 Mar 2026 | Redesigned Slide 3 "Limbajul Vizual" as interactive 2×2 flip card grid |
| 13 Mar 2026 | Added vertical scrollable timeline for Slide 2 with 10 nodes, images, badges, fragment auto-scroll |
| 11 Mar 2026 | Removed persistent top-left logo overlay (HTML div, CSS `.nespresso-logo`, JS logo-switching logic) |

---

## Quality Checklist

- [ ] All 16 slides (0–15) render correctly
- [ ] All text in Romanian with correct diacritics
- [ ] Campton font loads from local .otf files (no Google Fonts)
- [ ] Slide 0: Fundal.png background, white Logo_nou.svg centered, no divider
- [ ] Slides 1–15: #FAF9F8 background, dark text
- [ ] Counter animations on slides 10, 11, 13
- [ ] Slide 5 portfolio: split layout renders, 7 fragment cards, hover effects, separator visible
- [ ] Slide 2 vertical timeline: 10 nodes with images, badges, fragment navigation, auto-scroll
- [ ] Slide 3 flip cards: 4 fragment-driven cards, front face icon+label, back face with label+content, flip animation works
- [ ] Slide 4 flip cards: 4 fragment-driven .pos cards render at full width, tagline and situations row visible
- [ ] Slide 4: `.flip-grid-pos` has `margin: 0` (not `margin: 0 auto`), no debug CSS appended to theme
- [ ] Card hover effects (gold border + translateY)
- [ ] Fragment navigation on slides 2, 3, 4, 5, 14
- [ ] Instant transitions (no fade, no flash)
- [ ] Progress bar gold (#C3A572) at bottom
- [ ] Slide 0: centered white logo (700px), no persistent top-left logo on other slides
- [ ] Speaker notes on every slide (S key)
- [ ] No console errors
- [ ] Max border-radius: 4px
