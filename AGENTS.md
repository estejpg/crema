# AGENTS.md

## Cursor Cloud specific instructions

`crema` is a dependency-free static marketing site (plain HTML + CSS + vanilla JS). There is no package manager, build step, test suite, or lint config, so there is nothing to install and the startup update script is a no-op runtime check.

### Running the site

Serve the repo root with any static file server and open the pages in a browser. The documented command (see `README.md`) is:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/index.html`. `python3` is preinstalled in the environment.

- Pages: `index.html`, `menu.html`, `about.html`, `visit.html`. Shared behavior lives in `js/main.js`; all styling in `css/styles.css`.
- Non-obvious: navigation links across the pages use in-page anchors/section jumps, so on the homepage they scroll rather than always loading a separate document.
- The newsletter form has no backend — on submit `js/main.js` replaces it in-place with a confirmation message. Don't expect a network request.
- Open `index.html` via the HTTP server (not `file://`) so the self-hosted woff2 fonts in `assets/fonts/` and images in `assets/img/` load correctly.
- There are no automated tests or linters to run; verify changes by loading the affected page in the browser.
