# Manuel Comi Portfolio

Modern portfolio for Manuel Comi, focused on Senior Frontend Engineer, Lead Frontend Engineer, Frontend Architect and AI Product Frontend Engineer roles.

## Stack

- Next.js 16
- React 19
- TypeScript
- CSS Modules
- Vercel-ready Pages Router
- Structured case study data

## Getting Started

```bash
nvm install 20
nvm use
npm install
npm run dev
```

Open `http://localhost:3000`.

This project requires Node.js 20.9.0 or newer. The repository includes
`.nvmrc`, so `nvm use` will select the expected major version.

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

## Content Structure

Portfolio content is centralized in:

```text
data/portfolio.ts
```

To add a new case study, add a new object to the `caseStudies` array with:

- `slug`
- `title`
- `eyebrow`
- `summary`
- `context`
- `problem`
- `role`
- `approach`
- `impact`
- `stack`
- `learned`
- `accent`

The `/work` page and `/work/[slug]` detail pages are generated from that data.

## Main Routes

- `/` - Home and recruiter overview
- `/about` - Professional background
- `/work` - Case study index
- `/work/[slug]` - Detailed case study
- `/skills` - Technical stack
- `/contact` - Recruiter contact CTA
- `/sitemap.xml`
- `/robots.txt`

## Deployment

The project is ready for Vercel. Set the production domain in the metadata helpers if the deployed URL changes from `https://mcomix.vercel.app`.

## Recommended Next Updates

- Add real screenshots or approved visuals for private enterprise work where possible.
- Add analytics after choosing a privacy-friendly provider.
- Review `docs/github-profile-recommendations.md` and align pinned repositories with the portfolio positioning.
