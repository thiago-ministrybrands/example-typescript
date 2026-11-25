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

## unity-swarm-reviewer

- `Dockerfile` / `docker-compose.yml`: a `web` service serving `public/` on
  `4173`, with dependencies installed so lint, tests and type-check can run
  in it. The reviewer's Sandbox Runner boots it with `docker compose up --wait`.
- `.swarm-reviewer.yaml`: the Functional-Verifier's checks (lint, unit tests,
  type-check, an HTTP probe and a page visit), read from the PR head.
- `openspec/specs/`: the spec corpus the Spec-Compliance reviewer checks PRs against.

Try it locally:

```sh
docker compose up --build --wait
docker compose exec web npm test
```
