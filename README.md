# crèma — Sherman Oaks

Marketing site for **crèma**, a neighborhood café at 13750 Ventura Blvd, Sherman Oaks, CA.

Warm, contemporary, and inviting — built as a fast, dependency-free static site.

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | `index.html` | Hero, featured drinks, matcha story, atmosphere, visit teaser |
| Menu | `menu.html` | Full espresso / matcha / tea menu with prices |
| About | `about.html` | Story, craft, and neighborhood |
| Visit | `visit.html` | Map, address, hours, parking notes |

## Stack

Plain HTML + CSS + a sprinkle of vanilla JS. No build step, no dependencies.
Deployable anywhere — GitHub Pages ready (just serve the repo root).

## Brand

- **Palette:** pale lemon cream `#F5F0CA`, rich mahogany `#371004`, white `#FFFFFF`, black `#000000`
- **Type:** Genty (display), Teachers (body), Inter Italic (accents) — self-hosted woff2 in `assets/fonts/`
- **Logo:** supplied SVG marks in `assets/logo/` (recolored only within the approved palette — never redrawn or distorted)
- **Photography:** selected from the café's Instagram archive, optimized for web in `assets/img/`

## Local development

Open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8000
```

---

Visit crèma in Sherman Oaks · [@crema.shermanoaks](https://www.instagram.com/crema.shermanoaks/) · open daily 7am–5pm
