# Lab 360° — Physics + AI

GitHub Pages website: https://sd3ph.github.io/

## Edit the website
- `index.html` — master HTML shell (global header, navigation and footer).
- `assets/js/master.js` — master controller: page loading, navigation, classroom access and PWA install.
- `assets/css/master.css` — global theme, layout and responsive styling.
- `sections/*.html` — individual page content. Edit only the relevant file to update a section.

## Sections
`highlight`, `research`, `publication`, `about`, `teaching`, `outreach`, `latest`,
`classroom`, `products`, `misc`, and `playground`.

## Media and supporting pages
- `pages/1.jpg` … `pages/47.jpg` are retained for `slideshow.html`.
- `slideshow.html` and `boids_lj_interactive.html` are retained.
- Root images/GIFs and `assets/` resources are retained.
- `legacy-pages/` contains the previous standalone HTML pages as a backup; the modular homepage uses only `sections/*.html`.

## Deploy
Upload the repository contents to the root of the `main` branch. Keep `.nojekyll` in the repository root and configure GitHub Pages to deploy from `/(root)`.
