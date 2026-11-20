# example-typescript

A minimal TypeScript project used as a scratch target for trying out
`unity-swarm-reviewer` functionality. Not a real application.

## Scripts

- `npm run lint` — ESLint over `src`, `tests`, `e2e`
- `npm test` — unit tests (Vitest)
- `npm run test:e2e` — Playwright end-to-end tests (spins up a static server)
- `npm run build` — type-check / compile with `tsc`

## Layout

- `src/` — library code (`math.ts`, `counter.ts`)
- `tests/` — Vitest unit tests
- `public/` — static page exercised by the Playwright test
- `e2e/` — Playwright specs
