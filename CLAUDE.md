# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Dutch-language marketing website for a physiotherapy practice ("Kine Demol"). SvelteKit + Svelte 5 (runes mode enforced project-wide via `svelte.config.js`), Tailwind CSS 4 (via `@tailwindcss/vite`), TypeScript. No tests, no database, no backend logic.

## Commands

- `npm run dev` — dev server (add `-- --open` to open browser)
- `npm run build` / `npm run preview` — production build / preview
- `npm run check` — svelte-check type checking
- `npm run lint` — prettier check + eslint
- `npm run format` — prettier write

## Structure

- Single-page site ("Clinical Classic" design): all sections live in `src/routes/+page.svelte` with anchor navigation (`#over`, `#behandelingen`, `#praktisch`, `#tarieven`, `#adres`, `#contact`); `+layout.svelte` wraps it with `Navbar` (utility bar + sticky nav) and `Footer` from `src/lib/components/`.
- `src/lib/config.ts` holds site-wide config (currently `afspraakUrl`, the external booking link — still a placeholder).
- Styling: Tailwind is imported in `src/app.css`, but components mostly use scoped `<style>` blocks. Montserrat font (500/700) is self-hosted from `static/fonts/` and set as `--font-sans`.
- Internal links use `resolve()` from `$app/paths`; external links get `rel="external"`.
- Site copy and UI text are in Dutch — keep new content in Dutch.
