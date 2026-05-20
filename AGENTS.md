# Agent Guidelines

This repository is a deployable static website. Treat the repository root as the live site root.

## Core Rules

- Keep the website static: HTML, CSS, and minimal vanilla JavaScript only.
- Do not introduce Node, Vite, React, Vue, or other build tooling unless explicitly requested.
- Keep edits scoped to the requested content or design change.
- Preserve user edits. Do not revert unrelated changes.
- Prefer updating existing patterns over inventing new components.
- Keep files ASCII unless the existing file or visible content requires otherwise.

## Design Rules

- Backgrounds should remain pure white unless explicitly changed.
- Normal body text should remain black or near-black for readability.
- Main headings and interface accents should use the DAI blue family, currently centered on `#3c4990`.
- The red accent is reserved for the `2026` mark and urgent/deadline emphasis where requested.
- Avoid decorative gradients, floating blobs, and marketing-style filler.
- Use compact, information-first layouts. This is a conference site, not a landing-page template.
- Keep buttons, cards, nav menus, and footer elements aligned with existing spacing and typography.

## Content Rules

- Current source content comes from the local conference notes and Markdown drafts outside this repository. If dates or committee information change, verify against the latest source notes before editing.
- Author subpages and the program page are intentionally `TBD` for now.
- Do not leave fake placeholder grids, fake sponsor tiers, or invented program details.
- If information is not confirmed, write concise `TBD` or a short call-for-interest paragraph as appropriate.
- Use "Organizing" spelling for public navigation and page titles.
- On `organizing.html`, use `co-chair` / `co-chairs` wording consistently.

## Asset Rules

- Use `assets/logo-compact.webp` for the shared header and footer logo unless the visual system changes.
- Store people photos under `assets/people/`.
- Prefer optimized `*-small.webp` headshots in page HTML.
- Keep headshots circular via CSS and adjust crop with person-specific classes when needed.
- Add `loading="lazy"` and `decoding="async"` for non-critical images.
- Do not hotlink external images.

## Navigation Rules

- When adding, renaming, or removing a page, update all shared navigation surfaces:
  - top navigation
  - Authors hover menu
  - sidebar quick links on `index.html`
  - footer links
- Keep `News` hidden from top navigation until there is real news content to expose.
- Keep `Attending` focused on venue until travel, visa, or hotel details are confirmed.

## Verification

Before committing:

- Run `git status --short --branch`.
- Open the changed page through a local server when SVG inlining or image loading matters.
- Check desktop and narrow widths for nav wrapping, text overflow, and card alignment.
- Verify that footer logo proportions are correct on every touched page.

Recommended local server:

```sh
python3 -m http.server 8000
```

## Git Rules

- Commit only intentional changes.
- Do not force push unless explicitly instructed.
- If replacing `main` wholesale, create or confirm a backup branch from the previous `origin/main` first.
- Keep commit messages plain and specific, for example `Add project docs` or `Update organizing committee`.

