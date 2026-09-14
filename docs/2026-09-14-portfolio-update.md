# Portfolio and resume update

## Scope

Keep the existing Next.js pages, Markdown project articles and visual style. Add the search report as a static PDF with a stable URL. Use the resume versions to recover missing projects, while keeping employment descriptions generic and omitting internal implementation details.

## Todo

- [x] Locate both repositories and save their existing state in Git.
- [x] Confirm TikTok start date: June 2025.
- [x] Check Vercel access. Login refreshed successfully.
- [x] Read the project material across all 18 resume versions and record sources.
- [x] Add Query-guided Search, HeroUI Chat, Quick Median and HeroUI contributions.
- [x] Add local summaries for UImagine and OneLLM with Product Hunt / BetaList links.
- [x] Refresh AdSwift and the other existing project summaries without inventing metrics.
- [x] Update home, education and experience with current public information.
- [ ] Pending scope clarification: create a new resume PDF only if requested; existing resumes remain untouched.
- [ ] Pending scope clarification: update the website resume only after approval of a new PDF.
- [x] Build the site and check desktop, mobile, project links and PDF downloads.
- [x] Save content checkpoints, deploy to the existing Vercel project and verify vinroger.com.

## Boundaries

Keep the site concept; collapsible sidebar and mobile fixes are included. No new CMS, account changes or research reruns. The research paper itself stays unchanged. Existing dated resumes remain available. Internship status stays visible even though each role uses Software Engineer as its title. Historic traffic, performance and award figures are not copied without supporting evidence.

## Paths

- Project summary: `app/(dashboard)/projects/markdown/query-guided-search.md`
- Public report: `public/projects/query-guided-search/report.pdf`
- Resume source: `../../ResumeTEX/14-09-2026/resume.tex`
- Website resume: `public/resume.pdf`

## Checks

Run the production build and lint. Open the home page, project list, each new project page, experience and education on desktop and mobile. Verify the served report matches the source PDF, and inspect every resume page as an image. Keep the existing resume page behavior.

## Verification

- Production build and lint pass. Existing game/data-table hook warnings remain outside this update.
- All 17 checked page routes return HTTP 200 locally.
- All 11 project entries have working detail pages.
- Mobile check at 390px: no horizontal overflow across the updated pages.
- Collapsed sidebar and mobile navigation were checked in the browser.
- Report is served as application/pdf and matches its source byte for byte.
- Replaced broken Blog card routes, reproduced as 404 before the change.
- Resume PDF scope remains pending; no resume source or PDF was rewritten.

## Deployment

Published to https://www.vinroger.com on 14 September 2026. Production deployment: `dpl_GJGWcheoRMU7z1PtYAnshCbht9sz`. Source content commit: `ac66dbd`. The live project pages and report return HTTP 200, and the downloaded production report matches the source PDF byte for byte. Main is pushed to the existing GitHub repository.

Vercel reported that the project's Node 20 runtime is deprecated. GitHub also reports pre-existing dependency security alerts. Dependency maintenance was not included in this content/UI update.
