# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Dutch-language marketing website for a physiotherapy practice ("Kine Demol"), live at https://kinedemol.be. SvelteKit + Svelte 5, Tailwind CSS 4 (via `@tailwindcss/vite`), TypeScript. Fully prerendered static site (`@sveltejs/adapter-static`, `prerender = true` in `+layout.ts`). No tests, no database, no backend logic.

## Commands

- `npm run dev` — dev server (add `-- --open` to open browser)
- `npm run build` / `npm run preview` — production build / preview
- `npm run check` — svelte-check type checking
- `npm run lint` — prettier check + eslint
- `npm run format` — prettier write

## Structure

- Single-page site ("Clinical Classic" design): all sections live in `src/routes/+page.svelte` with anchor navigation (`#over`, `#behandelingen`, `#praktisch`, `#tarieven`, `#adres`, `#contact`); `+layout.svelte` wraps it with `Navbar` (utility bar + sticky nav) and `Footer` from `src/lib/components/`.
- `src/lib/config.ts` holds site-wide config: `afspraakUrl` (Progenda booking link) and `siteUrl` (`https://kinedemol.be`).
- SEO lives in the `<svelte:head>` of `+page.svelte`: canonical, Open Graph, and a JSON-LD `Physiotherapy` block (injected via `{@html}` — the closing script tag is split as `${'<'}/script>` to keep the Svelte parser and eslint happy). `static/` has `robots.txt` and `sitemap.xml`; practice data (address, hours, phone) is duplicated between the visible sections and the JSON-LD — update both.
- Styling: Tailwind is imported in `src/app.css`, but components mostly use scoped `<style>` blocks. Montserrat font (500/700) is self-hosted from `static/fonts/` and set as `--font-sans`.
- Internal links use `resolve()` from `$app/paths`; external links get `rel="external"`.
- Site copy and UI text are in Dutch — keep new content in Dutch.

## Deployment

Push to `main` runs `.github/workflows/deploy.yml`: `npm run build`, then FTPS upload of `build/` to the Cloud86 shared host (`httpdocs/`). Password is the `FTP_PASSWORD` repo secret. No preview environment — verify with `npm run build && npm run preview` before pushing.
