# Project Preferences

Use this file as the project-level source of truth for implementation choices. Update it in the same pull request whenever the team deliberately changes a preference.

## Stack

| Area | Default choice | Notes |
| --- | --- | --- |
| App framework | SolidJS | Default to SolidJS for frontend work. Use React when its larger ecosystem materially reduces delivery risk, such as difficult third-party components or Three.js integration; explain that choice in the PR. |
| Language | TypeScript | TypeScript is required for application code. Do not add new JavaScript source files unless the task explicitly calls for it. |
| Build/dev server | Vite | Use the provided `npm run dev`, `npm run build`, and `npm run preview` scripts. |
| Styling | Tailwind CSS + CSS | Prefer Tailwind utilities where they express the design cleanly. Use regular CSS for global tokens, complex selectors, animations, or rules that are clearer outside markup. |
| Routing | TanStack Router | Use it for client-side routing. |
| Server state | TanStack Query | Use it for remote/server state, caching, loading, and error states. |
| Complex client state | TanStack Store | When a project already uses TanStack and needs substantial shared client-side state, prefer TanStack Store instead of introducing an unrelated state library. |
| Package manager | npm | Commit `package-lock.json`; use `npm ci` in CI and for a clean local install. |
| Hosting/previews | Vercel | Every pull request should have an isolated Vercel preview. |
| CI | GitHub Actions | Required baseline checks are build, type-check, test, and lint. |

## Code style

- Define reusable domain and component types at the top of their module; infer types where TypeScript can do so safely.
- Avoid explicit function return types unless they improve a public contract, an exported API, overloads, or an otherwise unclear boundary.
- Do not use `any`. Model uncertainty with `unknown`, narrow it, or define the correct type.
- Keep `const` as the default, use `let` only for reassignment, and never use `var`.
- Use single quotes, no semicolons, and two-space indentation.
- Prefer clear names over abbreviations. Name booleans as questions or states (`isOpen`, `hasError`).
- Keep components focused on one responsibility, use early returns for readable conditional paths, and expand complex JSX instead of compressing it onto one line.
- Keep component-specific logic close to its component. Extract a module when it gains a clear reusable responsibility.
- Avoid dependencies for small utilities or styling convenience. Explain every new runtime dependency in the PR.
- Keep user-facing copy concise, accessible, and free of placeholder language before review.

## Quality and review expectations

- Run `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build` before pushing.
- ESLint and TypeScript must catch common quality failures, including `any`, unused code, unsafe type assertions, and unhandled promises.
- Add targeted tests whenever behavior is introduced or changed.
- Do not commit credentials, `.env` files, generated build output, or unrelated formatting churn.
- Preserve responsive behavior and check the Vercel preview on desktop and phone.
- In the PR description, state whether this file's stack or style preferences were changed. If no change is needed, say so explicitly.

## Changing a preference

Make preference changes intentionally: explain the reason, migration impact, and any follow-up work in the same PR. Do not silently diverge from this file.
