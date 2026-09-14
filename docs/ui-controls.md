# UI controls

## Features

- [x] Project images open in a preview overlay with zoom, Fit, drag-to-pan and Escape/close.
- [x] Closing a preview returns keyboard focus to the image button.
- [x] Source links and report downloads keep their existing behavior.
- [x] Homepage work rows use 32px logos, 46px rows and 2px gaps.
- [x] TikTok uses the supplied full-colour logo.
- [x] The content area scrolls vertically without forcing a bottom scrollbar.
- [x] The original sidebar keeps its icons, labels, W/E/S/D/R shortcuts and social hover arrows, with a collapse control added.
- [x] Light and dark modes are available in the sidebar and on mobile.
- [x] Theme and sidebar preferences survive reloads.
- [x] The five main routes are prefetched after the initial page loads and the browser is idle.
- [x] Production verification.

## Files

- `components/site-shell.tsx`: sidebar size, saved collapse preference and the content scroll area.
- `components/navbar.tsx`: sidebar links, shortcuts and idle route prefetching.
- `components/theme-provider.tsx` and `components/theme-toggle.tsx`: saved light/dark setting using next-themes.
- `components/image-preview.tsx`: one shared dialog for the images on a project page.
- `app/(dashboard)/projects/[slug]/page.tsx`: connects Markdown images to the preview while keeping ordinary links.
- `app/globals.css`: appearance for the existing neutral palette and image preview.

## Checks

The original scroll container used overflow: scroll in both directions. Its content width equalled its available width, but it still reserved 15px at the bottom. The new container has no horizontal scrollbar and keeps vertical scrolling.

A local production server recorded page-data requests for Explore, Education, Experience, Projects and Blog before a shortcut was pressed. Visiting all five with E/S/D/R/W did not require another page-data request for those routes. This verifies prefetching and cache reuse; it is not a claim about a fixed speedup on every network.

Browser checks covered expanded/collapsed navigation, preference persistence, both themes, mobile pages, image zoom and pan, Fit, Escape, focus return, and keeping navigation shortcuts inactive inside the preview. The final browser session reported no errors. Build passes.

Project descriptions, original images, article screenshots, ideation drawings and report PDFs are unchanged.

Published on 14 September 2026 at https://www.vinroger.com. Live checks confirmed the compact homepage, theme/sidebar controls and an image preview at 150% zoom without changing the project-page URL.
