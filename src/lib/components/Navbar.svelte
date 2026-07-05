<script lang="ts">
	import { browser } from '$app/environment';
	import { resolve } from '$app/paths';
	import { afspraakUrl } from '$lib/config';
	import { lang, locales, messages, setLang } from '$lib/i18n.svelte';

	const home = resolve('/');

	let menuOpen = $state(false);
	let dark = $state(browser && document.documentElement.dataset.theme === 'dark');

	const t = $derived(messages[lang.current]);

	function toggleTheme() {
		dark = !dark;
		document.documentElement.dataset.theme = dark ? 'dark' : 'light';
		localStorage.setItem('theme', dark ? 'dark' : 'light');
	}
</script>

<div class="utility">
	<div class="utility-inner">
		<span class="utility-adres">de Neufforgestraat 2, 1830 Machelen</span>
		<span class="utility-right">
			<span class="utility-uren">{t.nav.uren}&nbsp;·&nbsp;08:00–20:00</span>
			<a href="tel:+32494836584">0494 83 65 84</a>
			<span class="langs">
				{#each locales as l (l)}
					<button
						type="button"
						class:active={lang.current === l}
						onclick={() => setLang(l)}
						aria-pressed={lang.current === l}>{l.toUpperCase()}</button
					>
				{/each}
			</span>
		</span>
	</div>
</div>

<nav>
	<div class="nav-inner">
		<a href={home} class="brand" onclick={() => (menuOpen = false)}>
			<img src="/logo_only.svg" alt="Kine Demol" class="logo" />
			<span class="brand-text"><span class="kine">KINE</span> <span class="demol">DEMOL</span></span
			>
		</a>
		<div class="links">
			{#each t.nav.links as link (link.hash)}
				<a href="{home}{link.hash}">{link.label}</a>
			{/each}
			<a href={afspraakUrl} rel="external" class="btn-afspraak">{t.nav.afspraak}</a>
		</div>
		<button
			type="button"
			class="theme-btn"
			aria-label={dark ? t.nav.licht : t.nav.donker}
			onclick={toggleTheme}
		>
			{#if dark}
				<svg
					viewBox="0 0 24 24"
					width="18"
					height="18"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					aria-hidden="true"
				>
					<circle cx="12" cy="12" r="4" />
					<path
						d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
					/>
				</svg>
			{:else}
				<svg
					viewBox="0 0 24 24"
					width="18"
					height="18"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
				</svg>
			{/if}
		</button>
		<div class="nav-actions">
			<a href={afspraakUrl} rel="external" class="btn-afspraak compact">{t.nav.afspraakKort}</a>
			<button
				type="button"
				class="menu-btn"
				aria-expanded={menuOpen}
				aria-controls="mobiel-menu"
				aria-label={menuOpen ? t.nav.menuDicht : t.nav.menuOpen}
				onclick={() => (menuOpen = !menuOpen)}
			>
				<span class="bar" class:open={menuOpen}></span>
				<span class="bar" class:open={menuOpen}></span>
				<span class="bar" class:open={menuOpen}></span>
			</button>
		</div>
	</div>
	{#if menuOpen}
		<div id="mobiel-menu" class="mobile-menu">
			{#each t.nav.links as link (link.hash)}
				<a href="{home}{link.hash}" onclick={() => (menuOpen = false)}>{link.label}</a>
			{/each}
			<a href="tel:+32494836584" class="menu-tel" onclick={() => (menuOpen = false)}
				>{t.nav.belOns} · 0494 83 65 84</a
			>
		</div>
	{/if}
</nav>

<style>
	.utility {
		background: #304557;
		color: #cfe0ee;
		font-size: 13px;
		font-weight: 500;
	}

	.utility-inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 9px 32px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 10px;
	}

	.utility-right {
		display: flex;
		gap: 22px;
		align-items: center;
	}

	.utility a {
		color: #ffffff;
		text-decoration: none;
		padding: 6px 0;
		margin: -6px 0;
	}

	.langs {
		display: flex;
		gap: 2px;
	}

	.langs button {
		background: none;
		border: 0;
		color: #cfe0ee;
		font: inherit;
		padding: 4px 6px;
		margin: -4px 0;
		cursor: pointer;
		border-radius: 5px;
	}

	.langs button:hover {
		color: #ffffff;
	}

	.langs button.active {
		color: #ffffff;
		font-weight: 700;
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	nav {
		position: sticky;
		top: 0;
		z-index: 50;
		background: var(--nav-bg);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--border);
	}

	.nav-inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 14px 32px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 12px;
		text-decoration: none;
		flex-shrink: 0;
		margin-right: auto;
	}

	.logo {
		height: 44px;
		width: auto;
	}

	.brand-text {
		font-weight: 700;
		font-size: 19px;
		letter-spacing: 0.04em;
		white-space: nowrap;
	}

	.kine {
		color: var(--text-nav);
	}

	.demol {
		color: var(--brand);
	}

	.links {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.links a {
		color: var(--text-nav);
		text-decoration: none;
		font-weight: 500;
		font-size: 15px;
		padding: 10px;
		border-radius: 8px;
	}

	.links a:hover {
		color: var(--brand);
	}

	.btn-afspraak {
		background: var(--btn-bg);
		color: #fff !important;
		font-weight: 700 !important;
		padding: 11px 22px !important;
		border-radius: 8px;
		white-space: nowrap;
		margin-left: 10px;
		transition: background 0.2s;
	}

	.btn-afspraak:hover {
		background: var(--btn-bg-hover);
	}

	.theme-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border: 1.5px solid var(--border-strong);
		border-radius: 9px;
		background: var(--bg);
		color: var(--text-nav);
		cursor: pointer;
		padding: 0;
		flex-shrink: 0;
	}

	.theme-btn:hover {
		border-color: var(--brand);
		color: var(--brand);
	}

	.nav-actions {
		display: none;
		align-items: center;
		gap: 10px;
	}

	.nav-actions .btn-afspraak {
		margin-left: 0;
		text-decoration: none;
		font-size: 15px;
		padding: 11px 18px !important;
	}

	.menu-btn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5px;
		width: 44px;
		height: 44px;
		border: 1.5px solid var(--border-strong);
		border-radius: 9px;
		background: var(--bg);
		cursor: pointer;
		padding: 0;
	}

	.bar {
		width: 18px;
		height: 2px;
		border-radius: 2px;
		background: var(--text-nav);
		transition:
			transform 0.25s,
			opacity 0.25s;
	}

	.bar.open:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}

	.bar.open:nth-child(2) {
		opacity: 0;
	}

	.bar.open:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	.mobile-menu {
		display: flex;
		flex-direction: column;
		border-top: 1px solid var(--border);
		background: var(--bg);
		padding: 8px 16px 16px;
	}

	.mobile-menu a {
		color: var(--text-nav);
		text-decoration: none;
		font-weight: 700;
		font-size: 17px;
		padding: 14px 12px;
		border-radius: 10px;
	}

	.mobile-menu a:active {
		background: var(--bg-soft);
	}

	.menu-tel {
		color: var(--brand) !important;
		border-top: 1px solid var(--border-soft);
		margin-top: 6px;
		border-radius: 0 0 10px 10px !important;
	}

	@media (max-width: 880px) {
		.links {
			display: none;
		}

		.nav-actions {
			display: flex;
		}

		.nav-inner {
			padding: 10px 20px;
		}

		.logo {
			height: 38px;
		}

		.brand-text {
			font-size: 17px;
		}

		.utility-inner {
			padding: 8px 20px;
		}
	}

	@media (max-width: 560px) {
		.utility-adres {
			display: none;
		}

		.utility-inner {
			justify-content: center;
		}

		.utility-right {
			gap: 16px;
		}
	}

	@media (max-width: 350px) {
		.brand-text {
			display: none;
		}
	}
</style>
