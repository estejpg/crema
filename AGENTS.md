# AGENTS.md

## Cursor Cloud specific instructions

`crema` is a dependency-free static marketing site (plain HTML + CSS + vanilla JS). There is no package manager, build step, test suite, or lint config, so there is nothing to install and the startup update script is a no-op runtime check.

### Running the site

Serve the repo root with any static file server and open the pages in a browser. The documented command (see `README.md`) is:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`. Root routes assign an A/B bucket via `js/ab.js` and redirect into `/control/` or `/refresh/`.

- **control** — original layout, updated nav labels. Files under `control/`.
- **refresh** — café-matcha–inspired layout. Files under `refresh/`.
- Shared media: `assets/`. Force a bucket with `?v=control` or `?v=refresh`.
- The newsletter form has no backend — on submit each variant’s `js/main.js` replaces it in-place with a confirmation message.
- Open pages via the HTTP server (not `file://`) so self-hosted woff2 fonts and images load correctly.
- There are no automated tests or linters to run; verify changes by loading the affected variant page in the browser.
