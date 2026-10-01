# Repository Guidelines

## Project Structure

This repository is a React 19, TypeScript, and Vite storefront. Application code lives in `src/`, organized by responsibility: `pages/` for route screens, `components/` for reusable UI, `layouts/` and `routes/` for app structure, `context/` and `providers/` for shared state, `hooks/`, `services/`, `api/`, `types/`, and `utils/` for supporting logic. Translation files are in `src/i18n/`; static assets belong in `public/`. There is no dedicated test directory currently.

## Development and Build Commands

- `npm install` installs dependencies from the lockfile.
- `npm run dev` starts the Vite development server with hot reload.
- `npm run build` runs TypeScript project checks and creates the production bundle in `dist/`.
- `npm run preview` serves the production bundle locally.
- `npm run lint` checks the repository with ESLint.

Run the build and lint commands before submitting changes. No test script is configured at this time.

## Coding Style and Naming

Use TypeScript for application code and React function components. Follow the existing ESLint rules; use two spaces for indentation and keep imports grouped with external packages before local modules. Use PascalCase for component and page files (`ProductGrid.tsx`), camelCase for hooks, utilities, and functions (`useProducts.ts`, `formatPrice.ts`), and descriptive domain names for types. Keep reusable UI in `components/` and avoid duplicating business logic across pages. Add or update both `src/i18n/en.json` and `src/i18n/es.json` when introducing user-facing text.

## Testing and Verification

No automated test framework or coverage threshold is configured. For UI or behavior changes, verify the relevant flow in `npm run dev`, then run `npm run lint` and `npm run build`. If adding tests, place them near the feature or in a clearly named test directory and document the runner command.

## Commits and Pull Requests

Write concise commit subjects in the imperative (for example, `Add empty cart state`). Keep each commit focused. Pull requests should explain the user-visible change, list key implementation choices, link related issues when available, and include screenshots for visual changes. Note the verification commands you ran and any remaining limitations.

## Configuration

Do not commit secrets or local environment files. Keep dependency changes reflected in `package-lock.json`, and use the shared API setup in `src/api/` for network configuration.

## AI-Assisted Development

- The human developer remains responsible for understanding and approving the project's architecture and core logic.
- AI tools should accelerate development without replacing the developer's understanding of the code.
- Before implementing non-trivial features, inspect the existing code and understand the relevant flow.
- For significant architectural decisions, explain the options and trade-offs before implementing them.
- When the developer is learning, prefer guidance and explanation over providing complete solutions without discussion.
- Implement only the requested scope. Do not perform unrelated refactors or add speculative features.
- Preserve existing architecture and avoid new dependencies unless there is a clear, justified reason.
- Do not silently change core logic, remove functionality, bypass project checks, or mark work as complete without verification.

## Memory

- Read `memory.md` before starting a task to understand the current project state and recent decisions.
- Update `memory.md` after completing a meaningful task with the current state, important decisions and their reasoning, and mistakes to avoid.
- Keep `memory.md` concise and remove outdated information.
- If information becomes a permanent project rule, move it to `AGENTS.md` instead.
- Never store secrets, tokens, credentials, or sensitive personal information in `memory.md`.