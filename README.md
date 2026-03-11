# Nespresso Brand Story — Reveal.js Presentation
### Academic presentation · Romanian · 10–15 min · University level

---

## About

An interactive cinematic presentation exploring the Nespresso brand story across 14 slides — from its 1986 origins to a global luxury powerhouse. Built with Reveal.js, styled to match the Nespresso boutique premium aesthetic (cream, gold, serif typography).

**Central message:** *The power of luxury positioning in a mundane category.*

---

## Quick Start

### Prerequisites
- [Node.js](https://nodejs.org) v18+ installed
- [VS Code](https://code.visualstudio.com) with [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension

### Install & Run
```bash
# 1. Navigate to project folder
cd nespresso-presentation

# 2. Install Reveal.js
npm install

# 3. Open in VS Code, then right-click index.html
#    → "Open with Live Server"
#    → opens at http://127.0.0.1:5500
```

### Fullscreen Presentation
Press `F` inside the browser for fullscreen, or use `F11`.

---

## Slide Structure (14 slides)

| # | Title | Content Area |
|---|-------|-------------|
| 0 | **NESPRESSO** | Title — logo, visual intro |
| 1 | **Statistica** | Opening hook — 96B$ global coffee market |
| 2 | **Originile** | 1986, Eric Favre, the Roman barista insight |
| 3 | **Etapele** | Key milestones timeline 1986–2014 |
| 4 | **Identitate Vizuală** | Logo, colors, slogan, typography |
| 5 | **Valorile Brandului** | Brand mantra, core values |
| 6 | **Axe de Poziționare** | Benefits, users, usage situations |
| 7 | **Portofoliul Nestlé** | Brand hierarchy within Nestlé |
| 8 | **Segmente Țintă** | 3 target personas |
| 9 | **Piețe Globale** | 80+ countries, 800+ boutiques, 14B€ |
| 10 | **Campanii & Celebrity** | George Clooney, "What Else?" |
| 11 | **Ecosistem Marketing** | Digital, CSR, distribution, partnerships |
| 12 | **Repozitionare** | Vertuo launch, sustainability pivot |
| 13 | **Concluzii** | 5 branding lessons |
| 14 | **Mulțumesc** | Outro + Q&A |

---

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `Space` or `→` | Next slide |
| `←` | Previous slide |
| `S` | Speaker notes (new window) |
| `F` | Fullscreen |
| `O` | Overview all slides |
| `B` | Blackout screen |
| `?` | All shortcuts |

---

## Adding Your Images

Image placeholders are marked throughout the presentation. Replace each placeholder with your image:

```html
<!-- Find this: -->
<div class="img-placeholder" data-desc="Eric Favre / 1986 Nespresso machine"></div>

<!-- Replace with: -->
<div class="img-wrapper">
  <img src="assets/images/your-image.jpg" alt="Description" class="img-overlay">
</div>
```

Recommended image style: desaturated or sepia with a dark overlay (already handled by `.img-overlay` class).

---

## Technologies

| Tool | Purpose |
|------|---------|
| [Reveal.js v5](https://revealjs.com) | Presentation framework |
| [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) | Titles — serif elegant |
| [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) | Body text — refined |
| [Montserrat](https://fonts.google.com/specimen/Montserrat) | Labels, dates, uppercase |
| Custom CSS | Nespresso boutique theme (cream/gold) |
| Custom JS | Counter, timeline, particle animations |

---

## Working with Claude Code

This project includes a `CLAUDE.md` file with complete specifications. When using Claude Code:

```bash
# Open Claude Code in the project directory
claude

# Example prompts:
# "Add speaker notes to slide 6 based on CLAUDE.md"
# "Create a new slide about the Vertuo system following the existing style"
# "Optimize the counter animation on slide 1"
```

See `CLAUDE.md` for the full list of what Claude Code can do autonomously vs. what requires your approval.

---

## Sources

- Nestlé Annual Reports (2020–2023)
- Statista — Global Coffee Market Data 2023
- Nespresso official press kit & brand guidelines
- Harvard Business School — Nespresso case study
- Interbrand Best Global Brands 2022
- Campaign Live — "The Making of What Else?"
- Rainforest Alliance — AAA Sustainable Quality Program

---

*Built for academic evaluation · University branding course · Romanian*
