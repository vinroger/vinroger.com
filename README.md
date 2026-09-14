# vinroger.com

I’m Vincentius Roger Kuswara, a software engineer at TikTok (TikTok Search team), based in Singapore.

Personal portfolio, project articles and research reports.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Use `npm run build` for a production build and `npm run lint` for lint checks.

## Update content

- `lib/portfolio.ts` contains project card summaries and work experience.
- `app/(dashboard)/projects/markdown/` contains the project articles.
- `app/(dashboard)/projects/[slug]/page.tsx` renders Markdown and optional PDF previews.
- `public/projects/query-guided-search/report.pdf` is the downloadable search report.
- `public/resume.pdf` is the existing resume file. The resume page behavior is unchanged.

An article can set `title`, `description`, `image` and `report` in its Markdown frontmatter. Add its card to `lib/portfolio.ts` to include it on the project list. Set `featured: true` to include it on the home page.

The PDF has a stable public address:
https://www.vinroger.com/projects/query-guided-search/report.pdf

## Deploy

The existing Vercel project is `vinroger-com` in `vinrogers-projects`. Its production domain is `www.vinroger.com`.

```sh
npx vercel link --project vinroger-com --scope vinrogers-projects
npx vercel
npx vercel --prod
```

Preview deployments use the project's existing deployment protection. Production project pages and reports are public. Keep `.vercel/` and local environment files out of Git.

Content sources and the update checklist are in `docs/`.
