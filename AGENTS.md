# AGENTS.md

## Project Overview

This repo is the portfolio website of Lucas Connors. It is a React SPA. It showcases the games and projects that Lucas Connors builds.

## Repo Structure

- `src/index.tsx`, `src/App.tsx`: app entry point and routes (React Router).
- `src/Home.tsx`, `src/Intro.tsx`: home page.
- `src/project/`: project pages, cards, and the project data in `project.ts`.
- `src/nav/`: header, footer, and not-found page.
- `src/assets/`: images, downloads, and favicon.
- `src/404.html`: fallback page for GitHub Pages.
- `.github/workflows/`: CI (`ci.yml`) and deploy (`deploy.yml`).

Stack: TypeScript, React 19, styled-components, Parcel, Biome. Package manager: Yarn.

## Key Commands

```bash
yarn install    # install dependencies
yarn start      # dev server with hot reload
yarn build      # production build
yarn typecheck  # TypeScript check
yarn lint       # Biome lint, format, and import checks (use lint:fix to auto-fix)
yarn clean      # remove .parcel-cache and dist
```
