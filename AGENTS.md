# Agent instructions

This repository is a recruiter-facing junior frontend portfolio. Keep every change production-oriented, readable, accessible, and easy to review.

## Non-negotiable rules

- Use TypeScript in strict mode. Never introduce `any` unless a third-party boundary makes it unavoidable and the reason is documented.
- Prefer Server Components. Add `"use client"` only when hooks, browser APIs, event handlers, browser APIs or event handlers require it.
- Keep components small and domain-focused. Reuse UI primitives instead of duplicating styles.
- Build mobile-first. Check keyboard navigation, focus visibility, semantic HTML, reduced motion, and useful accessible names.
- Treat loading, error, empty, and success states explicitly for asynchronous UI.
- Validate AI-generated code before accepting it. Do not invent APIs, dependencies, project facts, or professional experience.
- Run `npm run quality` after meaningful changes. Run Playwright when changing navigation, responsive behavior, or critical user flows.
- Use Conventional Commits in English: `type(scope): short imperative description`.

## Architecture

- `src/app`: Next.js routes and application boundaries.
- `src/components/ui`: reusable low-level UI primitives.
- `src/components/layout`: global page structure.
- `src/components/sections`: portfolio sections.
- `src/data`: static typed portfolio content.
- `tests/e2e`: browser and accessibility coverage.
