# Kine Demol — kinedemol.be

Marketing website for Kine Demol, a physiotherapy practice in Machelen, Belgium. Single-page, Dutch-language, fully prerendered static site.

**Stack:** SvelteKit (Svelte 5) · TypeScript · Tailwind CSS 4 · `@sveltejs/adapter-static`

## Development

```sh
npm install
npm run dev        # dev server (add -- --open to open a browser)
```

Other scripts:

```sh
npm run build      # prerender the site into build/
npm run preview    # serve the production build on 127.0.0.1:3000
npm run check      # svelte-check type checking
npm run lint       # prettier check + eslint
npm run format     # prettier write
```

## Deployment

Every push to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml): the site is built and uploaded over FTPS to the Cloud86 shared host (`httpdocs/`). The FTP password lives in the `FTP_PASSWORD` repository secret.

## Notes

- All page content is in `src/routes/+page.svelte`; site-wide config (booking URL, site URL) is in `src/lib/config.ts`.
- The site is fully prerendered (`prerender = true`) — SEO tags, Open Graph, and JSON-LD structured data end up in the static HTML.
- Site copy is in Dutch; keep it that way.
