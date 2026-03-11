# Nespresso Presentation — Design Specification
# Based on nespresso.com official design system (2025-2026)

---

## Design Philosophy

The presentation must look and feel like the nespresso.com website itself:
**Minimalist dark luxury with Art Deco DNA and restrained motion.**

Key principles:
- **Quiet confidence** — no ornate patterns, no excessive decoration
- **Monochrome dominance** — black and white create the luxury foundation
- **Warm gold accents** — used sparingly for emphasis and emotional warmth
- **Generous whitespace** — the primary luxury signifier
- **Photography-driven** — moody, high-contrast imagery with dramatic lighting
- **Geometric precision** — clean lines, structured layouts, Art Deco influence

---

## Color Palette (from Nespresso Brand Book)

### Primary Brand Colors

| Official Name      | Hex         | RGB              | Usage in Presentation                          |
|--------------------|-------------|------------------|-------------------------------------------------|
| **Ultimate Black** | `#000000`   | (0, 0, 0)       | Primary slide backgrounds, hero sections        |
| **Soft Black**     | `#2E2E2C`   | (46, 46, 44)     | Secondary backgrounds, text on light slides      |
| **Pure White**     | `#FFFFFF`   | (255, 255, 255)  | Text on dark backgrounds, clean sections         |
| **Crema Gold**     | `#BD6416`   | (189, 100, 22)   | Primary accent — dividers, highlights, CTAs      |
| **Light Gold**     | `#FDAF3E`   | (253, 175, 62)   | Secondary accent — hover states, emphasis         |
| **Roasted Brown**  | `#402108`   | (64, 33, 8)      | Deep accent — coffee heritage elements           |
| **Blooming Greige**| `#E6C797`   | (230, 199, 151)  | Warm neutral — subtle backgrounds, captions      |

### Extended Digital Palette

| Color              | Hex         | Usage                                           |
|--------------------|-------------|-------------------------------------------------|
| Dark Brown Deep    | `#4B1E0D`   | Rich accent for coffee-related sections          |
| Steel Blue         | `#2779A7`   | Vertuo sub-brand references                      |
| Sage Green         | `#94A96D`   | Sustainability sections (Slide 10)               |
| Dark Teal          | `#375F5E`   | Accent for environmental content                 |

### Color Usage Rules
- **70% black/dark** — backgrounds dominate
- **20% white** — text, clean sections, contrast
- **10% gold/warm accents** — sparingly, for maximum impact
- Gold (`#BD6416`) is NEVER used for large background areas — only for thin lines, small accents, icons, and highlights
- Alternate between dark and light sections to create visual rhythm (matching nespresso.com's section alternation pattern)
- Cherry Red is part of brand book but MUST NEVER be dominant — avoid using it

---

## Typography

### Primary: Nespresso Lucas (Proprietary)
Nespresso's custom typeface designed by **Jean François Porchez / ZeCraft** through agency **FutureBrand** (2014). Geometric sans-serif inspired by Italian vernacular lettering and 1930s Art Deco. Mono-linear, clean, elegant.

**Since Nespresso Lucas is proprietary and unavailable, use these Google Fonts substitutes:**

| Role                | Nespresso Original     | Google Font Substitute         | Weight          |
|---------------------|------------------------|--------------------------------|-----------------|
| Hero display text   | Nespresso Lucas XtraBd | **Josefin Sans ExtraBold**     | 800             |
| Primary headings    | Nespresso Lucas Bold   | **Josefin Sans Bold**          | 700             |
| Secondary headings  | Nespresso Lucas SemiBd | **Josefin Sans SemiBold**      | 600             |
| Subheadings/labels  | Nespresso Lucas Med    | **Josefin Sans Medium**        | 500             |
| Body text           | Nespresso Lucas Regular| **Josefin Sans Regular**       | 400             |
| Captions/fine print | Nespresso Lucas Light  | **Josefin Sans Light**         | 300             |

**Why Josefin Sans?** — It's the closest freely available match to Nespresso Lucas: geometric sans-serif construction, Art Deco influence, mono-linear strokes, elegant at display sizes, clean at body sizes. Much closer than Playfair Display (which is a serif) or Lato (which lacks the Art Deco character).

**Secondary body font:** **Lato** — for longer paragraphs, speaker notes, and small UI text where readability at small sizes matters more than Art Deco character.

### Typography Scale (in CSS clamp for responsive)

```css
--font-hero:      clamp(3rem, 6vw, 5rem);      /* Hero/title slides */
--font-h1:        clamp(2.2rem, 4vw, 3.5rem);   /* Slide titles */
--font-h2:        clamp(1.6rem, 3vw, 2.4rem);   /* Section headers */
--font-h3:        clamp(1.2rem, 2vw, 1.8rem);   /* Subheadings */
--font-body:      clamp(1rem, 1.5vw, 1.3rem);   /* Body text */
--font-caption:   clamp(0.8rem, 1.2vw, 1rem);   /* Captions, labels */
--font-stat:      clamp(3rem, 8vw, 6rem);        /* Big stat numbers */
```

### Typography Rules
- **ALL CAPS** for: slide titles, CTA buttons, navigation labels, section headers (matching Nespresso wordmark style)
- **Letter-spacing: 0.15em–0.3em** on uppercase text (Art Deco spacing)
- **Regular case** for: body text, descriptions, speaker notes
- **Italics** reserved for: quotes, citations, emphasis words
- **Bold** reserved for: key data points, highlighted terms
- Never use more than 2 font weights on a single slide

---

## Layout Patterns

### Slide Structure
Every slide follows a consistent structure:
```
┌──────────────────────────────────────────┐
│  [Persistent Nespresso logo — top left]  │
│                                          │
│                                          │
│         [CONTENT AREA]                   │
│         Centered, max-width 80%          │
│         Generous padding                 │
│                                          │
│                                          │
│  [Gold thin line — bottom accent]        │
│  [Slide number — bottom right]           │
└──────────────────────────────────────────┘
```

### Layout Types (matching nespresso.com patterns)

**1. Hero Layout** (Slides 0, 5, 14)
- Full-screen dark background
- Centered text, large display typography
- Thin gold horizontal divider above/below key text
- Dramatic negative space

**2. Split Layout** (Slides 3, 7, 8)
- Two-column: 50/50 or 60/40
- One side: text content
- Other side: image/visual placeholder
- Vertical gold divider between columns (optional)

**3. Card Grid** (Slides 2, 4, 6, 11)
- 2x2 or 3-column grid
- Cards with subtle border (1px `#2E2E2C`) or no border
- Dark card backgrounds (`#0A0A0A` or `#1A1A1A`) on black slide
- Hover: thin gold border glow + slight scale

**4. Timeline Layout** (Slides 3, 9)
- Horizontal or vertical line in gold (`#BD6416`)
- Nodes/dots along the line
- Content panels attached to nodes
- Progressive reveal with fragments

**5. Stats/Counter Layout** (Slides 1, 12)
- Large stat numbers in gold (`#BD6416`) with `--font-stat`
- Label below in white uppercase, letter-spaced
- Animated counter on slide enter
- 3-4 stats in a row

**6. List/Points Layout** (Slides 13)
- Clean vertical list
- Each point preceded by a thin gold dash or line (not bullet points)
- Fragment fade-up animation for progressive reveal

---

## UI Components

### Gold Divider
```css
.gold-divider {
  width: 60px;
  height: 2px;
  background: #BD6416;
  margin: 1.5rem auto;
}
/* Wide variant */
.gold-divider--wide {
  width: 120px;
}
```

### Buttons (matching nespresso.com)
- **Primary**: Solid black fill, white uppercase text, 0-4px border-radius, letter-spacing 0.15em
- **Secondary**: Transparent with 1-2px white/gold border, uppercase text
- **Hover**: Color inversion or gold border glow
- All buttons: Josefin Sans Medium, uppercase, generous padding

### Cards
```css
.content-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 2rem;
  transition: all 0.3s ease;
}
.content-card:hover {
  border-color: #BD6416;
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(189, 100, 22, 0.15);
}
```

### Stat Counter
```css
.stat-number {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 800;
  font-size: var(--font-stat);
  color: #BD6416;
  line-height: 1;
}
.stat-label {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: var(--font-caption);
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-top: 0.5rem;
}
```

### Timeline
- **Line**: 2px solid `#BD6416`
- **Nodes**: 12px circles, border 2px `#BD6416`, fill `#000000`, active fill `#BD6416`
- **Content panels**: Same style as `.content-card`
- **Animation**: Line draws progressively, nodes appear with fade-up

---

## Image Placeholders

Since no external images are used, create CSS-based placeholders that match the nespresso.com photography style:

### Dark Luxury Gradient (default)
```css
.image-placeholder {
  background: linear-gradient(135deg, #000000 0%, #2E2E2C 40%, #402108 70%, #BD6416 100%);
  border-radius: 2px;
  aspect-ratio: 16/9;
}
```

### Coffee Warmth Gradient
```css
.image-placeholder--warm {
  background: linear-gradient(180deg, #000000 0%, #4B1E0D 50%, #BD6416 100%);
}
```

### Sustainability Gradient
```css
.image-placeholder--green {
  background: linear-gradient(135deg, #000000 0%, #375F5E 50%, #94A96D 100%);
}
```

### Capsule Color Bands (for visual identity slide)
Create thin horizontal or vertical color bands representing Nespresso's capsule color-coding system:
```css
.capsule-colors {
  display: flex;
  gap: 4px;
  height: 40px;
}
.capsule-colors span {
  flex: 1;
  border-radius: 2px;
}
/* Use colors: #6B2D5B, #2779A7, #BD6416, #94A96D, #4B1E0D, #8B0000, #2E2E2C */
```

---

## Animations & Transitions

### Between Slides
- **Transition**: `fade` (matching nespresso.com's restrained motion)
- **Duration**: 600-800ms
- **No slide/convex/zoom** — too playful for luxury brand

### Fragment Animations
- `fragment fade-up` — primary entrance animation (content rises 30px)
- `fragment fade-in` — secondary (simple opacity)
- Delay between fragments: 200-300ms stagger
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — smooth, luxury feel

### Counter Animation (Slides 1, 9, 12)
- Counts from 0 to target value
- Duration: 2000ms
- Easing: cubic ease-out (fast start, elegant slow finish)
- Triggers when slide becomes visible via Reveal.js `slidechanged` event

### Timeline Draw Animation (Slides 3, 9)
- Gold line draws from left-to-right (horizontal) or top-to-bottom (vertical)
- Duration: 1500ms
- Nodes appear sequentially with 200ms stagger
- Content panels fade-up after their node appears

### Hover Effects
- Cards: `translateY(-4px)` + gold border + gold box-shadow
- Buttons: color inversion or opacity transition
- Timeline nodes: scale(1.2) + gold fill
- All transitions: 300ms ease

### Ambient Background (optional, subtle)
- Very subtle particle effect — 15-20 small gold dots, low opacity (0.1-0.2), slow drift
- OR: subtle CSS gradient animation (slow hue shift in the dark brown range)
- Must NOT be distracting — luxury = restraint

---

## Responsive Behavior

- **Target**: 1920x1080 (presentation aspect ratio)
- All font sizes use `clamp()` for scaling
- Card grids: 3-col → 2-col → 1-col on smaller screens
- Split layouts: side-by-side → stacked on narrow screens
- Maintain generous whitespace at all breakpoints
- Progress bar: thin gold line at bottom

---

## Nespresso Logo Persistent Element

- Position: top-left corner of every slide
- Content: "NESPRESSO" wordmark in Josefin Sans ExtraBold, all-caps, letter-spacing 0.3em
- Color: `#FFFFFF` on dark slides, `#000000` on light slides
- Size: small, subtle — roughly 14-16px
- Opacity: 0.7 (subtle, not competing with slide content)

---

## Slide Number

- Position: bottom-right
- Font: Josefin Sans Light, 12px
- Color: `rgba(255, 255, 255, 0.4)`
- Format: `01 / 14`

---

## Progress Bar

- Position: bottom of viewport
- Height: 2px
- Color: `#BD6416` (Crema Gold)
- Background: `rgba(255, 255, 255, 0.1)`

---

## Do NOT

- ❌ Use bright colors, saturated hues, or neon accents
- ❌ Use rounded corners larger than 4px (Art Deco = geometric precision)
- ❌ Use playful animations (bounce, elastic, spin)
- ❌ Use emoji or informal icons
- ❌ Use serif fonts (Nespresso's identity is geometric sans-serif)
- ❌ Use gradients as primary background for text slides (only for image placeholders)
- ❌ Overcrowd slides — when in doubt, use more whitespace
- ❌ Use bullet points — use gold dashes, numbered lists, or clean lines instead
- ❌ Mix more than 2 font weights per slide
