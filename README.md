# crema · Sherman Oaks

Marketing site for **crema**, a neighborhood cafe at 13750 Ventura Blvd, Sherman Oaks, CA.

Warm, contemporary, and inviting, built as a fast, dependency-free static site.

## A/B variants

The site ships two full experiences and assigns visitors sticky 50/50:

| Variant | Path | What it is |
| --- | --- | --- |
| **control** | `/control/` | Original crema layout (pill nav, split hero, ticker), with shared nav copy (`Menu` / `About` / `Visit` / `Find Us`) |
| **refresh** | `/refresh/` | Café-matcha–inspired hierarchy (thin announcement bar, full-bleed hero, slower marquee, portrait drink list, solid footer) |

Root URLs (`/`, `/menu.html`, `/about.html`, `/visit.html`) run `js/ab.js`, set a `crema_ab` cookie (30 days), and send the visitor into their bucket.

Force a variant while testing:

- [/?v=control](/?v=control)
- [/?v=refresh](/?v=refresh)

Shared photography, logos, and fonts live in `assets/`.

## Pages (per variant)

| Page | File | Purpose |
| --- | --- | --- |
| Home | `index.html` | Hero + featured drinks + story |
| Menu | `menu.html` | Full espresso / matcha / tea menu with prices |
| About | `about.html` | Story, craft, and neighborhood |
| Visit | `visit.html` | Map, address, hours, parking notes |

## Stack

Plain HTML + CSS + a sprinkle of vanilla JS. No build step, no dependencies.
Deployable anywhere — **Vercel** is the intended host (`vercel.json` included). GitHub Pages works too (serve the repo root).

## Brand

- **Palette:** pale lemon cream `#F5F0CA`, rich mahogany `#371004`, white `#FFFFFF`, black `#000000`
- **Type:** Fraunces (headings), Genty (wordmark only), Teachers (body), Inter Italic (accents). All self-hosted woff2 in `assets/fonts/`.
  - Fraunces is a variable font with the optical-size and weight axes live; `SOFT` is pinned at 100 and `WONK` at 1. Licensed OFL (`assets/fonts/Fraunces-OFL.txt`).
  - Genty is deliberately confined to the logo lockup (`--font-brand`).
- **Logo:** SVG marks in `assets/logo/`
- **Photography:** Instagram archive, optimized in `assets/img/`

## Local development

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/` (A/B router) or jump straight to a variant with `http://localhost:8000/control/` / `http://localhost:8000/refresh/`.

## Deploy on Vercel + domain from Hostinger

Hosting and domains are separate: **Vercel serves the site**, **Hostinger can just sell/DNS the domain**.

1. Push this repo to GitHub and [import the project in Vercel](https://vercel.com/new). Framework preset: **Other**. Output directory: leave blank (site is the repo root).
2. In Vercel → Project → **Settings → Domains**, add your domain (e.g. `crema.cafe` or `www…`).
3. In Hostinger → Domains → DNS / Nameservers, either:
   - **Recommended:** switch nameservers to Vercel’s (`ns1.vercel-dns.com`, `ns2.vercel-dns.com` — use the pair Vercel shows), **or**
   - Keep Hostinger DNS and add the records Vercel lists: apex **A** → `76.76.21.21`, `www` **CNAME** → `cname.vercel-dns.com` (or the exact target Vercel displays).
4. Wait for DNS + SSL (often minutes, sometimes up to 24–48h). Vercel issues HTTPS automatically.

You do **not** need Hostinger web hosting for this codebase — domain + DNS is enough.

---

Visit crema in Sherman Oaks · [@crema.shermanoaks](https://www.instagram.com/crema.shermanoaks/) · open daily 7am–5pm
