# Project Preferences

Use this file as the project-level source of truth for implementation choices. Update it as part of a PR whenever the team deliberately changes a preference.

## Stack

| Area | Default choice | Notes |
| --- | --- | --- |
| App framework | React 19 | Keep UI code in `src/`. |
| Build/dev server | Vite 7 | Use the provided `npm run dev`, `npm run build`, and `npm run preview` scripts. |
| Language | JavaScript (ES modules) | Do not introduce TypeScript in a feature PR unless the migration is explicitly scoped. |
| Styling | Plain CSS | Keep shared visual rules in `src/style.css`; avoid adding a CSS framework without agreement. |
| Package manager | npm | Commit `package-lock.json`; use `npm ci` in CI and for a clean local install. |
| Hosting/previews | Vercel | Every pull request should have an isolated Vercel preview. |
| CI | GitHub Actions | The required baseline check is `npm run build`. |

## Code style

- Use functional React components and React hooks; keep each component focused on one responsibility.
- Prefer clear names over abbreviations. Name booleans as questions or states (`isOpen`, `hasError`).
- Use single quotes, no semicolons, and two-space indentation to match the starter source.
- Prefer `const`; use `let` only when reassignment is necessary. Avoid `var`.
- Use early returns to keep conditional render paths readable. Keep JSX legible: expand complex markup across lines rather than compressing it into one line.
- Keep component-specific logic close to the component. Extract a module only when it has a clear reusable responsibility.
- Avoid adding dependencies for small utilities or styling convenience. Explain every new runtime dependency in the PR.
- Keep user-facing copy concise, accessible, and free of placeholder language before review.

## Quality and review expectations

- Run `npm run build` before pushing. Add targeted tests when behavior is introduced or changed.
- Do not commit credentials, `.env` files, generated build output, or unrelated formatting churn.
- Preserve responsive behavior and check the Vercel preview on desktop and phone.
- In the PR description, state whether this file's stack or style preferences were changed. If no change is needed, say so explicitly.

## Changing a preference

Make preference changes intentionally: explain the reason, migration impact, and any follow-up work in the same PR. Do not silently diverge from this file.
