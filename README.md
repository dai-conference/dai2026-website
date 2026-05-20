# DAI 2026 Website

Static website for DAI 2026, the 8th International Conference on Distributed Artificial Intelligence in Hong Kong.

The site is intentionally plain HTML, CSS, and a small amount of JavaScript. There is no build step and no package manager dependency. The repository root is the deployable website root.

## Structure

- `index.html` - home page and conference overview.
- `authors.html` - call for papers landing page. Currently marked `TBD`.
- `research-track.html`, `industry-track.html`, `ai-paper-track.html`, `sister-conference-track.html`, `author-guide.html` - author subpages. Currently marked `TBD`.
- `dates.html` - important dates.
- `program.html` - program page. Currently marked `TBD`.
- `attending.html` - venue page.
- `organizing.html` - organizing committee.
- `sponsors.html` - call for sponsorship.
- `styles.css` - shared design system and responsive layout.
- `svg-inline.js` - inlines decorative SVG assets so they inherit the site colors.
- `assets/` - logos, SVGs, venue image, and optimized headshots.

## Preview

The site can be opened directly from `index.html`, but a local server is better because SVG inlining uses `fetch()`.

```sh
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/index.html
```

## Editing

Most changes are direct edits to the relevant `.html` file and `styles.css`.

When adding or changing pages:

- Keep the shared header and footer links consistent across all pages.
- Keep pages static and fast; do not add a framework or build tool unless the project explicitly decides to migrate.
- Optimize photos before committing. Prefer small WebP assets for people headshots.
- Use `loading="lazy"` and `decoding="async"` for non-critical images.
- Keep body copy black and headings in the DAI blue family unless the design direction changes.
- Keep the site background pure white.

## Deployment

`main` is the public branch for the current static website. Before replacing `main` with a large new version, keep a backup branch of the previous `main`.

Typical publish flow:

```sh
git status --short --branch
git add -A
git commit -m "Update DAI 2026 website"
git push origin main
```

If remote `main` has changed, fetch first, inspect the history, and avoid force pushing unless the project owner explicitly asks for it.

