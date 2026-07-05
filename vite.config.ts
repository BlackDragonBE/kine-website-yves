import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(), // ← toevoegen
		sveltekit()
	],
	// PORT wordt gezet door tooling (o.a. Claude preview); anders gewoon de vite-default
	server: { port: process.env.PORT ? Number(process.env.PORT) : undefined }
});
