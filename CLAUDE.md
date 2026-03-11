# CLAUDE.md — Nespresso Branding Presentation

## Project Overview

Build a complete Reveal.js academic presentation (15 slides, 0–14) analyzing Nespresso's branding strategy. Mixed dark/light theme inspired by nespresso.com — minimalist luxury with Art Deco geometric precision.

**Target audience**: University Branding course
**Language**: All slide content in **Romanian** with correct diacritics (ă, â, î, ș, ț)
**Tone**: Academic but visually premium — data-rich content in a luxury wrapper

---

## CRITICAL: Read Before Coding

1. **Read `design-spec.md` completely** — it contains the full Nespresso design system extracted from nespresso.com
2. **Consult installed skills** before generating any code:
   - `revealjs` skill — for slide structure, layouts, overflow checking, speaker notes
   - `ui-ux-pro-max` skill — for design system generation (luxury/premium style)
   - `frontend-design` skill — to avoid generic AI aesthetics, create bold distinctive design
   - `brand-guidelines` skill — for consistent Nespresso brand identity enforcement
3. **Follow the design-spec.md color palette exactly** — these are real Nespresso brand colors
4. **Create all 3 files in a single run**: `index.html`, `css/nespresso-theme.css`, `js/custom.js`

---

## Skills Integration

Before generating any code, consult each relevant skill's SKILL.md for best practices and follow their workflows:

1. **revealjs skill** — Use for: slide structure, multi-column layouts, code highlighting, speaker notes, overflow checking, PDF export readiness. Follow its typography rules (font sizes in pt), spacing patterns, and fragment navigation best practices.

2. **ui-ux-pro-max skill** — Use for: generating the design system tokens, choosing the right luxury/premium style parameters, validating color contrast, ensuring typography hierarchy. Search its database for "luxury" and "dark theme" styles.

3. **frontend-design skill** — Use for: avoiding generic AI aesthetics (no purple gradients, no Inter/Roboto, no cookie-cutter layouts). The aesthetic direction is **"Art Deco dark luxury"** — geometric precision, monochrome dominance, gold accents, restrained motion. Every slide should feel custom-crafted for Nespresso.

4. **brand-guidelines skill** — Use for: ensuring consistent application of Nespresso's brand colors (#000000, #BD6416, #FDAF3E, #402108, #E6C797), typography (Josefin Sans as Nespresso Lucas substitute), logo placement, and spacing rules across all 14 slides.

---

## Technical Stack

- **Reveal.js** loaded from `node_modules/reveal.js/dist/` (already installed)
- **Google Fonts**: Playfair Display (400,600,700,italic) + Cormorant Garamond (300,400,500,italic) + Lato (300,400,700)
- **Logo**: SVG at `assets/images/Logo_Nespresso.svg` — persistent top-left on slides 1–14, hidden on slide 0. White filter on dark slides, dark/original on light slides. Height ~30px.
- **Favicon**: `assets/images/Favico.svg` with embedded CSS for dark/light OS theme adaptation (#362217 light mode, #faf9f8 dark mode)
- **No external images** beyond logo/favicon — CSS gradient placeholders for content imagery
- **No external dependencies** beyond Reveal.js and Google Fonts
- **Target resolution**: 1920×1080

---

## File Structure

```
Nesspreso/
├── CLAUDE.md                  ← This file
├── design-spec.md             ← Full design specification
├── package.json
├── index.html                 ← Main presentation
├── css/
│   └── nespresso-theme.css    ← Custom theme (mixed dark/light)
├── js/
│   └── custom.js              ← Animations & interactivity
├── assets/
│   └── images/
│       ├── Logo_Nespresso.svg ← Nespresso logo (used on cover + persistent)
│       └── Favico.svg         ← Favicon with dark/light theme support
└── node_modules/
    └── reveal.js/
```

---

## Color Scheme (Mixed Dark/Light Theme)

### Slide backgrounds
| Slide   | Background | Type |
|---------|-----------|------|
| Slide 0 | `#362217` | Flat solid warm brown (no gradients, no vignette, no overlays) |
| Slide 1 | `#0A0A0A` | Dark/black (`.dark-slide` class) |
| Slides 2–14 | `#FAF9F8` | Light cream (default) |

### Color palette
| Name             | Hex       | Usage                                    |
|------------------|-----------|------------------------------------------|
| Warm Brown       | `#362217` | Cover slide background, viewport bg      |
| Dark Black       | `#0A0A0A` | Slide 1 background                       |
| Light Cream      | `#FAF9F8` | Default slide background (slides 2–14)   |
| Soft Black       | `#2E2E2C` | Headings & body text on light slides     |
| Muted Brown      | `#6B5D4F` | Captions, subtext on light slides        |
| Pure White       | `#FFFFFF` | Text on dark slides, card backgrounds    |
| Card Border      | `#E6E0D8` | Card borders on light slides             |
| Crema Gold       | `#BD6416` | Accent — dividers, stats, highlights     |
| Light Gold       | `#FDAF3E` | Secondary accent — hover states          |
| Roasted Brown    | `#402108` | Deep accent — heritage elements          |
| Blooming Greige  | `#E6C797` | Warm neutral — captions                  |
| Sage Green       | `#94A96D` | Sustainability sections only             |

**Rule**: Gold (`#BD6416`) is NEVER a large background — only for thin lines, small accents, and highlights.

---

## Typography

| Role            | Font                      | Weight | Style       |
|-----------------|---------------------------|--------|-------------|
| Hero display    | Josefin Sans              | 800    | UPPERCASE   |
| Slide titles    | Josefin Sans              | 700    | UPPERCASE   |
| Subheadings     | Josefin Sans              | 600    | UPPERCASE   |
| Labels/UI       | Josefin Sans              | 500    | UPPERCASE   |
| Body text       | Lato                      | 400    | Normal case |
| Captions        | Josefin Sans              | 300    | Normal case |
| Speaker notes   | Lato                      | 400    | Normal case |

**Uppercase text always has letter-spacing: 0.15em–0.3em** (Art Deco style)

---

## Slide-by-Slide Specification (with verified data)

### Slide 0 — Coperta
- **Layout**: Minimal cover — centered logo only
- **Content**: Large white SVG logo (`assets/images/Logo_Nespresso.svg`, 700px wide) centered on screen. Gold divider (700px wide, 3px thick, 0.2rem gap) directly below logo. Nothing else — no text, no chevron, no persistent top-left logo on this slide.
- **Background**: Flat solid `#362217` (warm brown). No gradients, no vignette, no dot pattern, no overlays. Edge-to-edge.
- **Logo filter**: `brightness(0) invert(1)` to render white on brown background
- **Speaker notes**: Prezintă-te. Spune tema. Lasă slide-ul să respire 5 secunde înainte să vorbești.

### Slide 1 — Stat Hook
- **Layout**: Stats/Counter (centered)
- **Big number**: "6.5" with animated counter, gold color, `--font-stat`
- **Label**: "MILIARDE CHF — VENITURI NESPRESSO 2025"
- **Subtitle**: "Cum a transformat o capsulă de aluminiu industria globală a cafelei?"
- **Below**: "802 boutique-uri · 76 de țări · Milioane de membri Club"
- **Data attribute**: `data-counter="6.5"` (use decimal counter)
- **Speaker notes**: Nespresso a ajuns la 6.481 miliarde CHF în 2025. Operează în 76 de țări cu 802 boutique-uri în 515 orașe. Este unitatea autonomă cea mai profitabilă din portofoliul Nestlé.

### Slide 2 — Originea Brandului (1986)
- **Layout**: Card Grid (2x2) with hover effects
- **Card 1 — "1975: DESCOPERIREA"**: Eric Favre, inginer elvețian (EPFL), observă o cafenea lângă Pantheon în Roma. Operatorii pompau pistonul de mai multe ori, forțând aerul în cafea. Brevetează sistemul de capsule la Nestlé în 1976.
- **Card 2 — "1986: LANSAREA"**: Nespresso S.A. fondată cu doar 5 angajați. Joint venture cu Sobal. Primele mașini C-100 și C-1100. Piață B2B: birouri în Elveția, Japonia, Italia. 4 varietăți inițiale: Capriccio, Cosi, Decaffeinato, Bolero.
- **Card 3 — "1988: PIVOTUL"**: Jean-Paul Gaillard (ex-Philip Morris) numit CEO. Decizia critică: pivot de la B2B la B2C. Separarea business-ului de capsule de cel de mașini. Parteneriat cu Poșta Elvețiană pentru livrare directă.
- **Card 4 — "1989: CLUBUL"**: Lansarea Nespresso Club — unul dintre primele programe CRM din industria bunurilor de consum. Parteneriate cu Turmix, Krups, Magimix, Philips, De'Longhi. Modelul direct-to-consumer ia naștere.
- **Hover**: gold border glow + translateY(-4px)
- **Speaker notes**: Eric Favre a fost primul președinte Nespresso. Gaillard și Favre au condus împreună până la plecarea lui Favre în 1991. Gaillard a plecat în 1997 și a fondat Ethical Coffee Company în 2008, concurând direct cu Nespresso.

### Slide 3 — Timeline (1976–2025)
- **Layout**: Horizontal timeline with 8 nodes
- **Node 1 — 1976**: Brevet capsulă (Eric Favre, Nestlé)
- **Node 2 — 1986**: Fondare Nespresso S.A. (5 angajați)
- **Node 3 — 1988**: Pivot B2C sub Jean-Paul Gaillard
- **Node 4 — 2000**: Primul boutique — Paris; nou monogram "N"
- **Node 5 — 2003**: Programul AAA Sustainable Quality™ cu Rainforest Alliance
- **Node 6 — 2006**: George Clooney — campania "What Else?"
- **Node 7 — 2014**: Lansare VertuoLine; strategie Positive Cup (investiție CHF 500M)
- **Node 8 — 2022**: Certificare B Corporation
- **Animation**: Gold line draws left-to-right, nodes fade-up as fragments
- **Speaker notes**: În 1998, Nespresso a lansat comanda online și denumirea oficială a devenit Nestlé Nespresso S.A. În 2023 au introdus capsule pe bază de hârtie în Franța și Elveția.

### Slide 4 — Identitatea Vizuală
- **Layout**: 2x2 grid
- **Card 1 — "LOGO"**: Stilul Art Deco — sofisticat, elegant, modern. Monogramul "N" introdus în 2000: două părți identice în oglindă, simetrie geometrică. Simbolizează calitatea impecabilă și precizia ingineriei capsulei.
- **Card 2 — "CULORI"**: Monocrom (negru + alb) ca prezentare primară. Negru = sofisticare, eleganță, premium. Maro închis = tonul natural al cafelei. Include CSS capsule color bands (8-10 culori).
- **Card 3 — "TIPOGRAFIE"**: Font custom "Nespresso Lucas" — creat de Jean François Porchez (ZeCraft/Typofonderie) prin FutureBrand, 2014. Geometric mono-linear, inspirat din Art Deco italian. Înlocuiește Frutiger. Debut: Champs-Élysées, Paris.
- **Card 4 — "SLOGAN"**: "What Else?" — lansat 2006 cu George Clooney. Cel mai longeviv slogan din industria cafelei. Deviza brandului: "Le dernier chic".
- **Speaker notes**: Porchez este unul dintre cei mai celebri type designeri francezi — a creat fonturi și pentru Le Monde, Peugeot, France Télécom. Fontul Nespresso acoperă alfabetele latin, chirilic, grec, arab, hiragana, katakana și hangul.

### Slide 5 — Viziunea Brandului
- **Layout**: Hero (centered quote)
- **Top text**: "SCOPUL NESPRESSO" (small, uppercase, letter-spaced, Blooming Greige)
- **Quote**: "Cultivăm cafeaua ca artă pentru a scoate ce e mai bun din fiecare dintre noi." (large, Josefin Sans 300, italic)
- **Gold divider**
- **Below**: "Promisiunea: cea mai bună cafea din lume, care păstrează ce e mai bun din lumea noastră."
- **Below**: "Aspirația: „Vrem să fim Louis Vuitton-ul cafelei"" — Gerhard Berssenbrügge, CEO
- **Background**: Subtle dark gradient (black to dark brown)
- **Speaker notes**: Analiza academică Kapferer & Bastien (2009) concluzionează că Nespresso îmbină identitatea de lux (capsula) cu cea premium (mașina). Conceptul de "lux accesibil prin arta cafelei" este esența brandului.

### Slide 6 — Strategia de Poziționare
- **Layout**: 3 columns
- **Column 1 — "MASS-MARKET"**: Dolce Gusto / Keurig. Preț: $0.30–$0.80/capsulă. Distribuție: supermarket. Target: consumatori orientați spre preț.
- **Column 2 — "LUXUL ACCESIBIL" (NESPRESSO)**: Preț: $0.70–$1.60/capsulă. Distribuție: directă (boutique + online). $0.70–$1.20 acasă vs $3.50–$5.00 la cafenea. "Mai ieftin decât o cafenea, mai bun decât cafeaua obișnuită." HIGHLIGHTED with gold border.
- **Column 3 — "PREMIUM"**: Lavazza / Illy. Preț: ~$0.31/capsulă (Lavazza compatibile). Distribuție: mixte. Poziționare: premium de masă.
- **Speaker notes**: Geniul poziționării Nespresso este conceptul de lux accesibil: un espresso costă $0.70–$1.20 acasă versus $3.50–$5.00+ la o cafenea. Creează narativul "mai ieftin decât cafeneaua, mai bun decât cafeaua obișnuită". Segmentul B2B vizează companii aeriene first-class, hoteluri de lux, restaurante gourmet.

### Slide 7 — Experiența de Brand
- **Layout**: Split (60/40)
- **Left side — 3 sections**:
  - **BOUTIQUE-URI**: 802 în 515 orașe din 76 de țări. Primul: Paris, 2000. Flagship: Champs-Élysées, 2007. Design comparabil cu Cartier. Coffee Lab (format 2021, debut Viena).
  - **CLUBUL NESPRESSO**: Fondat 1989. Milioane de membri global. Retenție: peste 85%. Capsulele = "Grand Crus" (limbajul vinului de lux). Acces exclusiv, specialiști dedicați, serviciu 24/7.
  - **DIGITAL**: E-commerce din anii '90. Aplicația mobilă crește valoarea coșului. Vânzări e-commerce Nestlé: 20.5% din totalul vânzărilor (2025).
- **Right side**: Dark luxury gradient placeholder
- **3 stat counters**: "802" (boutique-uri), "85%" (retenție), "76" (țări)
- **Speaker notes**: Boutique-ul 200 a fost deschis în Shanghai (2010), al 400-lea în 2014, al 450-lea în 2015. În 2021, formatul redesignat din Viena pune accent pe experiențe: Coffee Lab, materiale reciclate.

### Slide 8 — Segmente Target
- **Layout**: 3 persona cards
- **Card 1 — "PROFESIONISTUL URBAN"**: Vârstă: 25–40. Venit: peste medie. Stil: convenience + calitate. Touchpoint-uri: app mobil, comandă online, livrare rapidă. Cafea preferată: Espresso intens, dimineața înainte de muncă.
- **Card 2 — "CUPLUL SOFISTICAT"**: Vârstă: 35–55. Venit: ridicat. Stil: cafeaua ca ritual de cuplu. Touchpoint-uri: boutique-uri, ediții limitate, capsule cadou. Cafea preferată: Lungo, Grand Crus, Origin.
- **Card 3 — "CLIENTUL B2B"**: Segment: companii aeriene first-class, hoteluri de lux, restaurante gourmet. Nespresso Professional (lansat 1999). Touchpoint-uri: parteneriate corporate, mașini profesionale.
- **Speaker notes**: Target-ul principal: 25–60 ani, gospodării cu venituri ridicate, profesioniști urbani. Psihografic: consumatori care "prețuiesc confortul, calitatea și sofisticarea" și "apreciază măiestria cafelei premium".

### Slide 9 — Campanii & George Clooney
- **Layout**: Vertical interactive timeline
- **Timeline entries**:
  - **2006**: "What Else?" — lansat cu George Clooney, regizat de Michel Gondry, creat de McCann Erickson Paris
  - **2009**: Clooney + John Malkovich — "God scenario", regizat de Robert Rodriguez
  - **2013**: Clooney + Matt Damon ($3M fee) + Jean Dujardin + Ian McShane
  - **2018**: Penélope Cruz — "The Best Café. Yours." (piața US/Canada, The Martin Agency)
  - **2023**: Julia Garner + Simone Ashley — "The Bet" (Cannes); David Beckham devine ambasador global
  - **2025**: Eva Longoria + Camille Cottin + Kim Go Eun — cea mai mare investiție OOH din istorie
- **Stat counters** (animated):
  - "40%" — creștere venituri după lansarea parteneriatului Clooney
  - "~$40M" — câștigurile estimate ale lui Clooney din parteneriat
  - "19" — ani de parteneriat continuu (2006–2025)
- **Speaker notes**: CEO Nespresso a declarat: "Îi datorăm lui Clooney aproximativ un sfert din creșterea noastră" — CHF 85 milioane venituri suplimentare doar în primul an. De la 2006 la 2010, vânzările aproape s-au triplat: de la CHF 1.16 miliarde la peste CHF 3 miliarde. Cercetarea System1 numește acest lucru "Compound Creativity" — campaniile de lungă durată generează randamente exponențial mai mari.

### Slide 10 — Sustenabilitate
- **Layout**: Card grid (2x2)
- **Card 1 — "PROGRAMUL AAA"**: AAA Sustainable Quality™ — lansat 2003 cu Rainforest Alliance. Fermieri implicați, țări de origine. Cafeaua ca "forță pentru bine" — modelează comunități și peisaje.
- **Card 2 — "RECICLAREA CAPSULELOR"**: Program dedicat de reciclare aluminiu. Puncte de colectare în boutique-uri și prin poștă. Capsule pe bază de hârtie introduse în 2023 (Franța, Elveția).
- **Card 3 — "CARBON NEUTRALITY"**: Program Ecolaboration™ lansat 2009. Strategie Positive Cup 2014 — investiție de CHF 500 milioane. Obiective concrete pentru 2025 și 2030.
- **Card 4 — "B CORPORATION"**: Certificare B Corp obținută în 2022. Standard de impact social și de mediu verificat independent.
- **Color accent**: Sage Green (#94A96D) and Dark Teal (#375F5E) for card borders/accents
- **Speaker notes**: Certificarea B Corp din 2022 este un pas major — Nespresso s-a angajat la standarde verificate de impact. Capsulele de hârtie din 2023 răspund criticilor legate de deșeurile de aluminiu. Sustenabilitatea nu este un add-on, ci un pilon central al strategiei de brand.

### Slide 11 — Inovație & Extensii de Brand
- **Layout**: 2x2 grid
- **Card 1 — "ORIGINAL vs VERTUO"**: OriginalLine: ~28 varietăți permanente + ediții sezoniere. VertuoLine: 25+ blenduri, 5 dimensiuni de ceașcă, lansată 2014 în US/Canada. Tehnologie barcode + centrifusion.
- **Card 2 — "EDIȚII LIMITATE"**: Colaborări cu designeri. Categorii: Espresso, Lungo, Pure Origin/Master Origins, Barista Creations, World Explorations, Decaffeinato.
- **Card 3 — "NESPRESSO PROFESSIONAL"**: Lansat 1999. Clienți: companii aeriene first-class, hoteluri de lux, restaurante gourmet. Linia B2B dedicată.
- **Card 4 — "PARTENERIATE MAȘINI"**: Nestlé nu produce mașini — le licențiază. Parteneri: Turmix (1990), Krups, Magimix, Alessi, Philips, Siemens, De'Longhi, Breville/Sage, KitchenAid.
- **Speaker notes**: Separarea business-ului de capsule de cel de mașini a fost decizia strategică a lui Gaillard din 1988. Nespresso se concentrează pe ceea ce știe cel mai bine — cafeaua — și lasă producția de hardware partenerilor.

### Slide 12 — Nespresso în Cifre
- **Layout**: Stats grid (3x2)
- **6 animated counters**:
  - `data-counter="6.5"` → "6.5" label "MILIARDE CHF VENITURI (2025)"
  - `data-counter="76"` → "76" label "ȚĂRI"
  - `data-counter="802"` → "802" label "BOUTIQUE-URI"
  - `data-counter="515"` → "515" label "ORAȘE"
  - `data-counter="85"` → "85%" label "RATĂ DE RETENȚIE CLUB"
  - `data-counter="2022"` → "2022" label "AN CERTIFICARE B CORP"
- **All numbers animate from 0 on slide enter**
- **Gold stat numbers, white uppercase labels**
- **Speaker notes**: Venituri: CHF 6.481 miliarde (2025). Creștere de la CHF 1.16 miliarde (2006) la peste 3 miliarde (2010) la 6.5 miliarde (2025). Nestlé a alocat 8.1% din vânzări pentru marketing în 2024, cu țintă de 9% în 2025. Marja UTOP a scăzut la 17.9% în 2025 parțial din cauza investițiilor crescute în marketing.

### Slide 13 — Lecții de Branding
- **Layout**: Vertical list with fragments
- **5 lessons**, each appearing with `fragment fade-up`:
  1. **"Creează un ecosistem, nu doar un produs"** — Nespresso a construit capsule + mașini + boutique-uri + Club + app într-un sistem închis care fidelizează clientul (retenție 85%+)
  2. **"Luxul accesibil = calitate premium + preț justificabil"** — Un espresso Nespresso costă $0.70–$1.20 vs $3.50–$5.00 la cafenea. Premium, dar accesibil.
  3. **"Consistența vizuală construiește încredere"** — Logo-ul nu s-a schimbat fundamental din 1986. Font custom din 2014. Aceeași paletă monocromă de 40 de ani.
  4. **"Celebrity endorsement strategic > aleatoriu"** — 19 ani cu George Clooney. "Compound Creativity" — campanii de lungă durată cu ROI exponențial.
  5. **"Sustenabilitatea ca pilon de brand, nu ca afterthought"** — Programul AAA din 2003, B Corp din 2022, investiție CHF 500M în Positive Cup.
- **Speaker notes**: Cadre academice aplicabile: Prisma Identității de Brand a lui Kapferer (fizic: capsula, personalitate: sofisticat, cultură: artă italiană a cafelei, relație: club exclusivist, reflecție: consumator rafinat, auto-imagine: cunoscător). Modelul Brand Equity al lui Keller: awareness ridicat prin Clooney, asocieri puternice de lux, calitate percepută premium, loialitate prin Club.

### Slide 14 — Încheiere & Q&A
- **Layout**: Hero (centered)
- **Quote**: "What Else?" (large, gold, Josefin Sans 800, italic)
- **Gold divider**
- **Below**: "Mulțumim pentru atenție" (white, Josefin Sans 500, uppercase, letter-spaced)
- **Below**: "Întrebări?" (Blooming Greige, Josefin Sans 300)
- **Bottom**: "Curs de Branding — 2026"
- **Background**: Pure black
- **Speaker notes**: Rezumat rapid: Nespresso a transformat o capsulă de cafea într-un brand de lux de 6.5 miliarde CHF prin ecosistem integrat, experiență premium, consistență vizuală de 40 de ani, parteneriat iconic cu Clooney, și angajament real pentru sustenabilitate.

---

## Speaker Notes

**Every slide MUST have speaker notes** via `<aside class="notes">`. Notes should include:
- Talking points for the presenter (in Romanian)
- Additional data/context not shown on the slide
- Source references for key statistics
- Transition phrases to the next slide

---

## Reveal.js Configuration

```javascript
Reveal.initialize({
  width: 1920,
  height: 1080,
  margin: 0,              // Edge-to-edge, no viewport border
  hash: true,
  history: true,
  transition: 'none',     // Instant slide switch, no fade
  transitionSpeed: 'fast',
  backgroundTransition: 'none',  // No background animation
  controls: false,
  progress: true,
  center: false,
  slideNumber: false,      // Custom slide number via JS
  navigationMode: 'linear',
  plugins: [RevealNotes]   // Speaker notes via S key
});
```

**All `<section>` tags also have `data-transition="none"`** for redundancy.

---

## Animation Requirements

### Animated Counter (js/custom.js)
```
Function: animateCounter(element, target, duration)
- Counts from 0 to target value
- Duration: 2000ms default
- Easing: cubic ease-out
- Trigger: Reveal 'slidechanged' event
- Target elements: anything with [data-counter] attribute
```

### Timeline Draw
```
- Trigger on slide enter
- Add .active class to timeline container
- CSS transition handles the line drawing (width/height from 0 to 100%)
- Nodes appear with staggered delay
```

### Logo & Theme Toggle (js/custom.js)
```
Function: updateThemeElements(slide)
- Hides persistent top-left logo on slide 0 (cover has its own large logo)
- Shows logo on slides 1-14
- Adds .logo-inverted class on dark slides (CSS filter makes it white)
- Removes .logo-inverted on light slides (logo stays dark/original)
- Toggles .on-dark class on custom slide number
- Trigger: Reveal 'slidechanged' event
```

---

## Quality Checklist

Before finishing, verify:
- [ ] All 15 slides (0-14) render correctly
- [ ] All text is in Romanian with correct diacritics
- [ ] Google Fonts load (Josefin Sans + Lato)
- [ ] Slide 0: flat #362217 edge-to-edge, white logo centered, gold divider, no text
- [ ] Slide 1: dark background, white text
- [ ] Slides 2-14: light cream #FAF9F8 background, dark text
- [ ] Counter animation works on slides with [data-counter]
- [ ] Timeline animation works on slides 3, 9
- [ ] Card hover effects work (gold border glow + translateY)
- [ ] Fragment navigation works on slides 3, 13
- [ ] Instant transitions between all slides (no fade, no flash)
- [ ] Progress bar is gold (#BD6416) at bottom
- [ ] Logo hidden on slide 0, visible top-left on slides 1-14 (white on dark, dark on light)
- [ ] Custom slide numbers visible bottom-right
- [ ] Speaker notes on every slide (S key to open)
- [ ] No console errors
- [ ] Favicon loads with dark/light OS theme support
- [ ] Responsive — works on any screen size
