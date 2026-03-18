# CLAUDE.md — Nespresso Branding Presentation

## Project Overview

Reveal.js academic presentation (14 slides, 0–13) analyzing Nespresso's branding strategy. Minimalist luxury with Art Deco geometric precision.

**Target audience**: University Branding course
**Language**: All slide content in **Romanian** with correct diacritics (ă, â, î, ș, ț)
**Tone**: Academic but visually premium — data-rich content in a luxury wrapper
**Deploy**: Vercel — auto-deploy from GitHub

**All slides implemented.** Current total: 14 slides (0–13).

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
- **Sketchfab embed** — Slide 1 3D capsule via iframe (model by PoliGone, `autospin=0.4`, `autostart=1`, `transparent=1`). Interaction blocked by `.sketchfab-overlay` div. **model-viewer removed.**
- **Images**: `assets/images/Fundal.png` (Cover background, Slide 0). `assets/images/eric_nespresso.gif` (Eric Favre photo, Slide 1). Timeline images in `assets/images/`: `1986.png`, `1989.png`, `1999.png`, `2000.jpg`, `2003.png`, `2006.jpg`, `2009.png`, `2014.png`, `2022.png`, `2023.png` (Slide 2). `Logo_vechi_maro.svg`, `Logo_nou_maro.svg` (Slide 3 flip card). `Icon_maro.svg`.
- **Target resolution**: 1920×1080

---

## File Structure

```
Nesspreso/
├── CLAUDE.md                  ← This file
├── design-spec.md             ← Full design specification
├── index.html                 ← Main presentation
├── css/
│   └── nespresso-theme.css    ← Custom theme (~2,528 lines)
├── js/
│   └── custom.js              ← Interactions (~120 lines)
└── assets/
    ├── fonts/                 ← Campton .otf files (9 weights + italics)
    ├── Capsula_Nespresso.glb  ← 3D capsule model (unused — replaced by Sketchfab iframe)
    └── images/
        ├── Logo_nou.svg
        ├── Fundal.png             ← Cover background image (Slide 0)
        ├── Favico.svg
        ├── Icon_maro.svg
        ├── Logo_vechi_maro.svg  ← Old logo (Slide 3 flip card)
        ├── Logo_nou_maro.svg    ← New logo (Slide 3 flip card)
        ├── eric_nespresso.gif   ← Eric Favre photo (Slide 1)
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
| Slides 1–13 | `#FAF9F8` | Light cream (default) |

### Colors
| Name               | Hex       | Usage                                    |
|--------------------|-----------|------------------------------------------|
| Warm Brown         | `#362217` | Viewport bg                              |
| Light Cream        | `#FAF9F8` | Default slide background (slides 1–13)   |
| Dark Charcoal      | `#2E2E2C` | Text on light slides                     |
| Warm Gray-Brown    | `#6B5D4F` | Subtext, captions on light slides        |
| Pure White         | `#FFFFFF` | Text on dark slides, card backgrounds    |
| Card Border        | `#E6E0D8` | Card borders (warm beige)                |
| Crema Gold         | `#C3A572` | Primary accent — dividers, stats, highlights |
| Light Gold         | `#FDAF3E` | Secondary accent — hover states          |
| Brand Brown        | `#4e3227` | Brand identity accent                    |
| Brand Beige        | `#d9c7ba` | Brand identity accent                    |
| Sustainability Green | `#94A96D` | Sustenabilitate value card SVG stroke (Slide 9 only) |
| Sustainability Teal  | `#375F5E` | **No longer used on card slides** — unified to gold |

**Rule**: Gold (`#C3A572`) is NEVER a large background — only for thin lines, small accents, and highlights.
**Rule**: ALL card accent bars, badges, and SVG icon strokes use gold (`#C3A572`) — no teal/green/dark exceptions.

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
- **Right bottom**: Sketchfab iframe embed (model by PoliGone) — `autospin=0.4`, `autostart=1`, `transparent=1`, all UI disabled. `.slide-3-capsule` uses `flex: 1` for optical centering. `.sketchfab-overlay` div blocks mouse interaction (z-index 10).
- **Background**: `#FAF9F8`

### Slide 2 — Repere Istorice (1986–2023)
- **Layout**: Vertical scrollable timeline with 10 nodes, images, and colored badges
- **Class**: `timeline-slide` (custom padding/overflow overrides)
- **Structure**: `.timeline-scroll-area` > label + h1 + `.vertical-timeline-v`
- **Scrollable**: `overflow-y: auto`, custom gold scrollbar, JS auto-scroll on fragment reveal
- **Gold line**: Vertical `::before` pseudo-element (2px, gold gradient) on `.vertical-timeline-v`
- **Each node**: `.timeline-node-v.fragment.fade-up` with `.node-dot-v` (14px solid gold circle), `.node-content-v.has-image` (flex row: text + image)
- **Text block**: `.node-text-block` with `.node-year-v` (gold, 2.5rem), `.node-badge` (colored category label), `.node-title-v`, `.node-detail-v`
- **Images**: `.node-img` (400×180px, `object-fit: contain`) or `.node-img-lg` (400×260px for nodes 2003, 2006) — all images share 400px width for horizontal center alignment
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
- **Layout**: Interactive 2×2 flip card grid (same fragment mechanism as Slide 3), usage situations row. **Tagline removed (17 Mar 2026).**
- **CSS namespace**: `.pos-*` prefix (`.flip-grid-pos`, `.card-wrapper-pos`, `.card-inner-pos`, `.card-front-pos`, `.card-back-pos`)
- **Font sizes matched to Slide 3**: `.flip-cat-pos` 24px/600/0.2em, `.card-back-label-pos` 11px, `.pos-back-lines` inherits 28px
- **Flip cards** (`.card-wrapper-pos.fragment`):
  - Card 1 — **Exclusivitate** (◆ icon): back → "Beneficii Emoționale" — Sentiment de răsfăț / Statut social / Comunitate de elită
  - Card 2 — **Calitate** (★ icon): back → "Beneficii Funcționale" — Calitate constantă / Consistența gustului / Varietate de arome
  - Card 3 — **Inovație** (⚙ icon): back → "Beneficii Funcționale" — Confort maxim / Tehnologie brevetată / Experiență simplificată
  - Card 4 — **Estetică** (◐ icon): back → "Beneficii Emoționale" — Design premium / Ritual personal zilnic / Rafinament vizual
- **Usage situations row** (`.pos-situations`): 4 `.pos-situation-item` entries with inline SVG icons:
  - ☀ "Ritualul de dimineață"
  - 💼 "Întâlniri de afaceri"
  - 🏠 "Entertaining acasă"
  - 🎁 "Cadouri"
- **Fragment visibility override**: `.reveal .slides .flip-grid-pos .fragment, .flip-grid-pos .fragment.visible { opacity: 1 !important; visibility: visible !important; }`
- **Entrance animation excluded**: `.reveal .slides section.present > .flip-grid-pos { animation: none; }`
- **Background**: `#FAF9F8`
- **Resolved issue**: `.flip-grid-pos` uses `margin: 0` (NOT `margin: 0 auto`). Auto horizontal margins on a flex child override `align-self: stretch` and collapse the grid to near-zero width. This is fixed and debug CSS has been removed.

### Slide 5 — Ecosistemul Nestlé — inserted 16 Mar 2026
- **Label**: "Compania Mamă" | **Heading**: "Ecosistemul Nestlé"
- **Layout**: 2×2 card grid (`.nestle-grid`), fragment fade-up
- **CSS namespace**: `.nestle-*` (`.nestle-grid`, `.nestle-card`, `.nestle-card-header`, `.nestle-brand-name`, `.nestle-tag`, `.nestle-tag-gold`, `.nestle-card-desc`)
- **All cards have gold border** (`border: 1px solid #C3A572; border-left: 4px solid #C3A572`) — `.nestle-card-highlight` removed
- **Cards** (4, each `.nestle-card.fragment.fade-up`):
  - NESPRESSO — "Lux accesibil" (gold tag)
  - NESCAFÉ — "Cafea de masă" (neutral tag)
  - DOLCE GUSTO — "Sistem accesibil" (neutral tag)
  - STARBUCKS (licensed) — "Premium retail" (neutral tag)
- **Hover**: `border-color: #C3A572`, `translateY(-2px)`, `box-shadow: 0 4px 12px rgba(0,0,0,0.06)`
- **Section override**: `.reveal .slides section:has(.nestle-grid) { justify-content: flex-start; }`
- **Reused classes**: `.label`, `.flip-divider`
- **Background**: `#FAF9F8`

### Slide 6 — Portofoliul Nespresso — inserted 16 Mar 2026
- **Label**: "Linii de Produs" | **Heading**: "Portofoliul Nespresso"
- **Layout**: 3-column grid (`.nespresso-lines-grid`), fragment fade-up
- **CSS namespace**: `.nline-*` (`.nline-card`, `.nline-accent`, `.nline-content`, `.nline-header`, `.nline-title`, `.nline-badge`, `.nline-badge-gold`, `.nline-desc`, `.nline-tags`)
- **Cards** (3, each `.nline-card.fragment.fade-up`, all gold accent + gold badge):
  - Original Line — gold accent bar, "D2C" gold badge, tags: Espresso, Lungo, Ristretto
  - Vertuo Line — gold accent bar, "D2C" gold badge, tags: Espresso, Gran Lungo, Mug, Alto
  - Professional — gold accent bar, "B2B" gold badge, tags: Birouri, HoReCa, Evenimente
- **Accent bar**: `.nline-accent` — 4px tall colored strip at top of each card
- **Tag chips**: `.nline-tags span` — small uppercase labels (0.7rem, bg `#F5F0EB`)
- **Hover**: same as Slide 5
- **Section override**: `.reveal .slides section:has(.nespresso-lines-grid) { justify-content: flex-start; }`
- **Reused classes**: `.label`, `.flip-divider`
- **Background**: `#FAF9F8`

### Slide 7 — Categorii de Utilizatori — inserted 16 Mar 2026
- **Label**: "Segmentare" | **Heading**: "Categorii de Utilizatori"
- **Layout**: 3-column grid (`.users-grid`), fragment fade-up
- **CSS namespace**: `.user-*` (`.user-card`, `.user-card-accent`, `.user-card-content`, `.user-card-icon`, `.user-card-title`, `.user-card-desc`, `.user-card-tag`)
- **Cards** (3, each `.user-card.fragment.fade-up`, all gold accent):
  - Original Line — gold accent, coffee cup SVG icon (gold stroke), demographic tag "25–55 ani · Urban · Venit peste medie"
  - Vertuo Line — gold accent, coffee cup SVG icon (gold stroke), tag "25–55 ani · Urban · Orientați spre comoditate"
  - Professional — gold accent, briefcase SVG icon (gold stroke), tag "B2B · Companii · Foodservice"
- **Card structure**: accent bar (4px) + content (icon, title, description, gold tag at bottom with border-top separator)
- **Section override**: `.reveal .slides section:has(.users-grid) { justify-content: flex-start; }`
- **Reused classes**: `.label`, `.flip-divider`
- **Background**: `#FAF9F8`

### Slide 8 — Piețe Globale — inserted 16 Mar 2026
- **Label**: "Prezență Internațională" | **Heading**: "Piețe Globale"
- **Layout**: Flex row — dark stats column (240px) + 3 stacked region cards (`.markets-layout`)
- **CSS namespace**: `.markets-*` (`.markets-layout`, `.markets-stats`, `.markets-stat-item`, `.markets-stat-number`, `.markets-stat-label`, `.markets-stat-hq`, `.markets-stat-city`, `.markets-regions`, `.market-card`, `.market-badge`, `.market-badge-gold`, `.market-title`, `.market-desc`)
- **Stats column** (dark bg `#2E2E2C`, no fragments): "+80 țări", "+800 boutiques", "Lausanne — Sediu central · Elveția"
- **Region cards** (3, each `.market-card.fragment.fade-up`, all gold badges):
  - Europa — gold badge "Piața istorică"
  - America de Nord — gold badge "Motor de creștere"
  - Piețe Emergente — gold badge "Expansiune"
- **Section override**: `.reveal .slides section:has(.markets-layout) { justify-content: flex-start; }`
- **Reused classes**: `.label`, `.flip-divider`
- **Background**: `#FAF9F8`

### Slide 9 — Valorile Brandului — inserted 16 Mar 2026
- **Label**: "Brand Mantra" | **Heading**: "Valorile Brandului"
- **Layout**: Side-by-side quote cards (`.brand-quotes-row`) + 4-column value cards grid (`.values-grid`)
- **CSS namespace**: `.brand-quotes-row`, `.brand-quote-card`, `.brand-quote-card-text`, `.brand-quote-card-source`, `.values-grid`, `.value-card`, `.value-card-green`, `.value-icon`, `.value-title`, `.value-desc`
- **Quote cards** (2, side-by-side in `.brand-quotes-row`, each `.brand-quote-card.fragment.fade-up`):
  - "Cultivating coffee as an art to grow the best in each of us." — Brand Purpose
  - "We want to be the Louis Vuitton of coffee." — Gerhard Berssenbrügge, CEO
- **Value cards** (4, each `.value-card.fragment.fade-up`, `border-top: 3px solid #C3A572`):
  - Inovație — checkmark SVG, gold stroke
  - Excelență — star SVG, gold stroke
  - Sustenabilitate — leaf SVG, green stroke (`#94A96D`), `.value-card-green` (border-top-color: `#94A96D`)
  - Integritate — heart SVG, gold stroke
- **Section override**: `.reveal .slides section:has(.values-grid) { justify-content: flex-start; }`
- **Reused classes**: `.label`, `.flip-divider`
- **Background**: `#FAF9F8`

### Slide 10 — Campanii și Ambasadori — inserted 16 Mar 2026
- **Label**: "Marketing" | **Heading**: "Campanii și Ambasadori"
- **Layout**: Flex row — dark stats column (240px) + 6 stacked campaign cards (`.campaigns-layout`)
- **CSS namespace**: `.campaigns-*` (`.campaigns-layout`, `.campaigns-stats`, `.campaigns-stat-item`, `.campaigns-stat-number`, `.campaigns-stat-label`, `.campaigns-stat-quote`, `.campaigns-stat-quote-text`), `.campaign-*` (`.campaign-card`, `.campaign-year`, `.campaign-content`, `.campaign-title`, `.campaign-desc`)
- **Stats column** (dark bg `#2E2E2C`, no fragments): "19 ani de parteneriat", "+40% creștere venituri", "~$40M contract estimat", "What Else?" quote
- **Campaign cards** (6, each `.campaign-card.fragment.fade-up`):
  - 2006 — Lansarea "What Else?" (Gondry)
  - 2009 — John Malkovich "Heaven" (Rodriguez)
  - 2013 — Matt Damon & Jean Dujardin
  - 2018 — Penélope Cruz
  - 2023 — Julia Garner & David Beckham
  - 2025 — Eva Longoria & Kim Go Eun
- **Section override**: `.reveal .slides section:has(.campaigns-layout) { justify-content: flex-start; }`
- **Reused classes**: `.label`, `.flip-divider`
- **Background**: `#FAF9F8`

### Slide 11 — Distribuție & Canale — inserted 16 Mar 2026
- **Label**: "Strategie Comercială" | **Heading**: "Distribuție & Canale"
- **Layout**: 2×2 card grid (`.distrib-grid`), fragment fade-up
- **CSS namespace**: `.distrib-*` (`.distrib-grid`, `.distrib-card`, `.distrib-card-accent`, `.distrib-card-content`, `.distrib-card-header`, `.distrib-card-title`, `.distrib-badge`, `.distrib-badge-gold`, `.distrib-card-desc`, `.distrib-card-stats`)
- **Cards** (4, each `.distrib-card.fragment.fade-up`, all gold accent + gold badge):
  - Direct-to-Consumer — gold accent, "Canal Principal" gold badge, stats: 85%+ retenție, Milioane de membri
  - Boutiques — gold accent, "Retail Propriu" gold badge, stats: 802 magazine, 76 țări
  - Digital & E-commerce — gold accent, "Online" gold badge, stats: 20.5% din vânzări, +13.5% creștere
  - Fără Retail Tradițional — gold accent, "Exclusivitate" gold badge, stats: 0 supermarketuri, Marje 2x Nestlé
- **Section override**: `.reveal .slides section:has(.distrib-grid) { justify-content: flex-start; }`
- **Reused classes**: `.label`, `.flip-divider`
- **Background**: `#FAF9F8`

### Slide 12 — Repoziționare & Evoluție — inserted 16 Mar 2026
- **Label**: "Transformare Strategică" | **Heading**: "Repoziționare & Evoluție"
- **Layout**: Vertical stack of 4 phase cards (`.repo-timeline`), fragment fade-up
- **CSS namespace**: `.repo-*` (`.repo-timeline`, `.repo-phase`, `.repo-phase-marker`, `.repo-phase-number`, `.repo-phase-content`, `.repo-phase-header`, `.repo-phase-period`, `.repo-badge`, `.repo-badge-gold`, `.repo-phase-title`, `.repo-phase-desc`)
- **`.repo-phase-period`**: `font-size: 18px` (increased from 0.75rem for readability)
- **Phase cards** (4, each `.repo-phase.fragment.fade-up`, all gold badges):
  - 01: 1986→1997 — "De la B2B la B2C" (gold badge "Pivot strategic")
  - 02: 2000→2012 — "Capsulă de cafea → Simbol de lux" (gold badge "Construcția luxului")
  - 03: 2012→2022 — "Expirarea brevetelor & Vertuo" (gold badge "Răspuns la competiție")
  - 04: 2022→prezent — "Lux responsabil & B Corp" (gold badge "Sustenabilitate")
- **Section override**: `.reveal .slides section:has(.repo-timeline) { justify-content: flex-start; }`
- **Reused classes**: `.label`, `.flip-divider`
- **Background**: `#FAF9F8`

### Slide 13 — Încheiere — inserted 16 Mar 2026
- **Layout**: Centered hero (`.closing-slide`), all elements visible immediately (no fragments)
- **CSS namespace**: `.closing-*` (`.closing-slide`, `.closing-what-else`, `.closing-divider`, `.closing-thanks`, `.closing-team`, `.closing-name`, `.closing-dot`, `.closing-course`)
- **Content**: "What Else?" (gold italic 3rem) → gold divider → "MULȚUMIM PENTRU ATENȚIE" (uppercase 2.2rem) → team names (Ema Cismaru · Darius Păpurică · Mihăică Răzvan) → "Branding · 2026"
- **Section override**: `.reveal .slides section:has(.closing-slide) { justify-content: center; }`
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
- **Animated counters**: Removed (17 Mar 2026) — `animateCounter()` and `initVerticalTimeline()` dead code deleted from `custom.js`
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
- `.pos-situations` — usage situations row below the grid (tagline removed 17 Mar 2026)
- `.pos-situation-item` — individual situation (SVG icon + label)

**Keyframes shared by both namespaces** (defined once):
- `@keyframes flip-scale-up-hor` — forward flip: `rotateX(0→-180deg)` + `scale(1.2)` at 50%
- `@keyframes flip-scale-down-hor` — reverse flip

### All CSS Class Namespaces (Slides 5–13)

| Slide | Prefix | Key Classes |
|-------|--------|-------------|
| 5 | `.nestle-*` | `.nestle-grid`, `.nestle-card`, `.nestle-card-header`, `.nestle-brand-name`, `.nestle-tag`, `.nestle-tag-gold`, `.nestle-card-desc` |
| 6 | `.nline-*` | `.nline-card`, `.nline-accent`, `.nline-content`, `.nline-header`, `.nline-title`, `.nline-badge`, `.nline-badge-gold`, `.nline-desc`, `.nline-tags` |
| 7 | `.user-*` | `.users-grid`, `.user-card`, `.user-card-accent`, `.user-card-content`, `.user-card-icon`, `.user-card-title`, `.user-card-desc`, `.user-card-tag` |
| 8 | `.markets-*` | `.markets-layout`, `.markets-stats`, `.markets-stat-item`, `.markets-stat-number`, `.markets-stat-label`, `.markets-stat-hq`, `.markets-stat-city`, `.markets-regions`, `.market-card`, `.market-badge`, `.market-badge-gold`, `.market-title`, `.market-desc` |
| 9 | `.brand-*`, `.value-*` | `.brand-quotes-row`, `.brand-quote-card`, `.brand-quote-card-text`, `.brand-quote-card-source`, `.values-grid`, `.value-card`, `.value-card-green`, `.value-icon`, `.value-title`, `.value-desc` |
| 10 | `.campaigns-*`, `.campaign-*` | `.campaigns-layout`, `.campaigns-stats`, `.campaigns-stat-item`, `.campaigns-stat-number`, `.campaigns-stat-label`, `.campaigns-stat-quote`, `.campaigns-stat-quote-text`, `.campaigns-timeline`, `.campaign-card`, `.campaign-year`, `.campaign-content`, `.campaign-title`, `.campaign-desc` |
| 11 | `.distrib-*` | `.distrib-grid`, `.distrib-card`, `.distrib-card-accent`, `.distrib-card-content`, `.distrib-card-header`, `.distrib-card-title`, `.distrib-badge`, `.distrib-badge-gold`, `.distrib-card-desc`, `.distrib-card-stats` |
| 12 | `.repo-*` | `.repo-timeline`, `.repo-phase`, `.repo-phase-marker`, `.repo-phase-number`, `.repo-phase-content`, `.repo-phase-header`, `.repo-phase-period`, `.repo-badge`, `.repo-badge-gold`, `.repo-phase-title`, `.repo-phase-desc` |
| 13 | `.closing-*` | `.closing-slide`, `.closing-what-else`, `.closing-divider`, `.closing-thanks`, `.closing-team`, `.closing-name`, `.closing-dot`, `.closing-course` |

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
- Slide 3 cards: removes `.flipped/.unflipped/.flipped-instant`, re-applies `.flipped-instant` if already `.visible`
- Slide 4 cards: same logic for `.card-wrapper-pos` / `.card-inner-pos`

---

## Theme Logic

- Slide 0: bg `assets/images/Fundal.png` (full-bleed), logo white centered 700px
- Slides 1–13: bg `#FAF9F8`, text `#2E2E2C`
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
Module scripts in `<head>` with `type="module"` may race with Reveal.js initialization. Always place them after the `Reveal.initialize()` script block at the end of `<body>`. (Note: model-viewer script was removed 17 Mar 2026 — replaced by Sketchfab iframe.)

---

## Changelog

| Date | Change |
|------|--------|
| 17 Mar 2026 | **Full diagnostic + polish pass**: fixed border-radius violations (4px max), removed dead CSS (`.vt-item`, `.node-img-placeholder`) and dead JS (`animateCounter`, `initVerticalTimeline`), fixed all HTML comment numbering (0–13) |
| 17 Mar 2026 | Slide 1: replaced `<model-viewer>` with Sketchfab iframe embed (PoliGone model, autospin, autostart). Capsule container `flex:1` for optical centering. `.sketchfab-overlay` blocks interaction. model-viewer CDN script removed. |
| 17 Mar 2026 | Slide 2: unified all timeline images to 400px width for horizontal center alignment |
| 17 Mar 2026 | Slide 4: removed tagline, matched flip card font sizes to Slide 3 (24px labels, 11px back-labels, inherited 28px back content). Removed `.pos-tagline` CSS rule. |
| 17 Mar 2026 | Slides 5–12: replaced all em dashes (—) with commas, periods, or `<br>` depending on context |
| 17 Mar 2026 | Slides 6, 7, 8, 11, 12: unified ALL teal/green/dark accents to gold (#C3A572) — badges, accent bars, SVG icon strokes. Removed `.distrib-card-contrast` from Slide 11 Card 4. |
| 17 Mar 2026 | Slide 12: increased `.repo-phase-period` font-size from 0.75rem to 18px |
| 17 Mar 2026 | CLAUDE.md + design-spec.md updated to reflect all changes |
| 16 Mar 2026 | Added Slide 13 "Încheiere" (`.closing-*`, centered hero, no fragments). 14 slides total (0–13). |
| 16 Mar 2026 | Added Slide 12 "Repoziționare & Evoluție" (`.repo-*`, 4 numbered phase cards) |
| 16 Mar 2026 | Added Slide 11 "Distribuție & Canale" (`.distrib-*`, 2×2 grid) |
| 16 Mar 2026 | Added Slide 10 "Campanii și Ambasadori" (`.campaigns-*`, dark stats + 6 campaign cards) |
| 16 Mar 2026 | Added Slide 9 "Valorile Brandului" (`.brand-quote-card-*`, `.value-*`, quote cards + 4 value cards) |
| 16 Mar 2026 | Rebuilt slides 9–13 from scratch after deleting old slides 9–18 |
| 16 Mar 2026 | Added Slide 7 "Categorii de Utilizatori" (`.user-*`, 3-col grid with SVG icons) + Slide 8 "Piețe Globale" (`.markets-*`, dark stats + region cards) |
| 16 Mar 2026 | Split "Portofoliul de Branduri" into two slides: Slide 5 "Ecosistemul Nestlé" (`.nestle-*`, 2×2 grid) + Slide 6 "Portofoliul Nespresso" (`.nline-*`, 3-col grid). Deleted `.portfolio-*` CSS. |
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

- [ ] All 14 slides (0–13) render correctly, no blank slides
- [ ] All text in Romanian with correct diacritics
- [ ] Campton font loads from local .otf files (no Google Fonts)
- [ ] Slide 0: Fundal.png background, white Logo_nou.svg centered 700px, no divider
- [ ] Slides 1–13: `#FAF9F8` background, dark text
- [ ] Slide 1: split 45/55, Eric Favre photo + Sketchfab iframe capsule (autospin, overlay blocks interaction)
- [ ] Slide 2: vertical timeline, 10 nodes with images, badges, fragment auto-scroll
- [ ] Slide 3: flip cards (Logo, Culori, Slogan, Font), flip animation works
- [ ] Slide 4: flip cards `.pos-*` (Exclusivitate, Calitate, Inovație, Estetică), situations row (no tagline)
- [ ] Slide 5: Nestlé 2×2 grid, all 4 cards gold border
- [ ] Slide 6: Nespresso lines 3-column grid, all gold accent bars + gold badges + tag chips
- [ ] Slide 7: user categories 3-column, all gold SVG icons + accents, demographic tags
- [ ] Slide 8: dark stats column + 3 region cards with all gold badges
- [ ] Slide 9: 2 side-by-side quote cards + 4 value cards (em dashes replaced with `<br>`)
- [ ] Slide 10: dark stats box + 6 campaign timeline cards (em dashes → periods)
- [ ] Slide 11: 2×2 grid, all 4 cards gold accent + gold badge (no dark contrast)
- [ ] Slide 12: 4 numbered phase cards with 18px period + all gold badges
- [ ] Slide 13: centered closing — no fragments, all visible immediately
- [ ] Card hover effects (gold border + translateY) on all card slides
- [ ] Fragment navigation on slides 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
- [ ] Instant transitions (no fade, no flash)
- [ ] Progress bar gold (`#C3A572`) at bottom
- [ ] No persistent top-left logo on any slide
- [ ] Speaker notes on every slide (S key)
- [ ] No console errors
- [ ] Max border-radius: 4px
