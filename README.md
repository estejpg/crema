# crema · Sherman Oaks

Marketing site for **crema**, a neighborhood cafe at 13750 Ventura Blvd, Sherman Oaks, CA.

Warm, contemporary, and inviting, built as a fast, dependency-free static site.

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | `index.html` | Announcement bar, full-bleed hero, scrolling banner, drink carousel, story bands |
| Menu | `menu.html` | Full espresso / matcha / tea menu with prices |
| About | `about.html` | Story, craft, and neighborhood |
| Visit | `visit.html` | Map, address, hours, parking notes |

Homepage hierarchy is adapted from [café matcha](https://cafe-matcha.com) (announcement → sticky header → full-bleed hero → scrolling banner → portrait product list → textured footer), expressed in crema’s palette and type.

## Stack

Plain HTML + CSS + a sprinkle of vanilla JS. No build step, no dependencies.
Deployable anywhere, GitHub Pages ready (just serve the repo root).

## Brand

- **Palette:** pale lemon cream `#F5F0CA`, rich mahogany `#371004`, white `#FFFFFF`, black `#000000`
- **Type:** Fraunces (headings), Genty (wordmark only), Teachers (body), Inter Italic (accents). All self-hosted woff2 in `assets/fonts/`.
  - Fraunces is a variable font with the optical-size and weight axes live; `SOFT` is pinned at 100 and `WONK` at 1, which is the cut that matches the wordmark's roundness. Pinning those two dropped the file from 114KB to 73KB. Licensed OFL (`assets/fonts/Fraunces-OFL.txt`).
  - Genty is deliberately confined to the logo lockup (`--font-brand`). It is single-weight and has no accented glyphs, so it cannot set `Crèma` or work as a heading face. It is also licensed separately from the OFL fonts here; confirm the license covers webfont embedding before widening its use.
- **Logo:** supplied SVG marks in `assets/logo/` (recolored only within the approved palette, never redrawn or distorted)
- **Photography:** selected from the cafe's Instagram archive, optimized for web in `assets/img/`

## Local development

Open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8000
```

---

Visit crema in Sherman Oaks · [@crema.shermanoaks](https://www.instagram.com/crema.shermanoaks/) · open daily 7am–5pm
