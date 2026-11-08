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
- `e2e/`: Playwright tests and a server that serves `dist/` the way GitHub Pages does.
- `vite.config.ts`: build config. Vite's root is `src/`.
- `.github/workflows/`: CI (`ci.yml`) and deploy (`deploy.yml`).

Stack: TypeScript, React 19, CSS Modules, Vite, Biome, Playwright. Package manager: pnpm.

## Key Commands

```bash
pnpm install    # install dependencies
pnpm start      # dev server with hot reload
pnpm build      # production build
pnpm preview    # serve the production build locally
pnpm typecheck  # TypeScript check
pnpm lint       # Biome lint, format, and import checks (use lint:fix to auto-fix)
pnpm test:e2e   # build, then run Playwright tests against the build
pnpm clean      # remove dist
```

## Testing

- Tests must not check specific project content.
- e2e tests read what they need (for example, project links) from the page itself.
