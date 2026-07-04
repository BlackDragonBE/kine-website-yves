<script lang="ts">
	import { resolve } from '$app/paths';
	import { afspraakUrl } from '$lib/config';

	const home = resolve('/');

	let menuOpen = $state(false);

	const links = [
		{ hash: '#over', label: 'Over' },
		{ hash: '#behandelingen', label: 'Behandelingen' },
		{ hash: '#praktisch', label: 'Praktisch' },
		{ hash: '#tarieven', label: 'Tarieven' },
		{ hash: '#contact', label: 'Contact' }
	];
</script>

<div class="utility">
	<div class="utility-inner">
		<span class="utility-adres">de Neufforgestraat 2, 1830 Machelen</span>
		<span class="utility-right">
			<span class="utility-uren">Ma–Vr&nbsp;·&nbsp;08:00–20:00</span>
			<a href="tel:+32494836584">0494 83 65 84</a>
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
			{#each links as link (link.hash)}
				<a href="{home}{link.hash}">{link.label}</a>
			{/each}
			<a href={afspraakUrl} rel="external" class="btn-afspraak">Afspraak maken</a>
		</div>
		<div class="nav-actions">
			<a href={afspraakUrl} rel="external" class="btn-afspraak compact">Afspraak</a>
			<button
				type="button"
				class="menu-btn"
				aria-expanded={menuOpen}
				aria-controls="mobiel-menu"
				aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
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
			{#each links as link (link.hash)}
				<a href="{home}{link.hash}" onclick={() => (menuOpen = false)}>{link.label}</a>
			{/each}
			<a href="tel:+32494836584" class="menu-tel" onclick={() => (menuOpen = false)}
				>Bel ons · 0494 83 65 84</a
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

	nav {
		position: sticky;
		top: 0;
		z-index: 50;
		background: rgba(255, 255, 255, 0.92);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid #e6ecf1;
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
		color: #304557;
	}

	.demol {
		color: #1078b2;
	}

	.links {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.links a {
		color: #304557;
		text-decoration: none;
		font-weight: 500;
		font-size: 15px;
		padding: 10px;
		border-radius: 8px;
	}

	.links a:hover {
		color: #1078b2;
	}

	.btn-afspraak {
		background: #1078b2;
		color: #fff !important;
		font-weight: 700 !important;
		padding: 11px 22px !important;
		border-radius: 8px;
		white-space: nowrap;
		margin-left: 10px;
		transition: background 0.2s;
	}

	.btn-afspraak:hover {
		background: #0c5f8f;
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
		border: 1.5px solid #cdd9e2;
		border-radius: 9px;
		background: #fff;
		cursor: pointer;
		padding: 0;
	}

	.bar {
		width: 18px;
		height: 2px;
		border-radius: 2px;
		background: #304557;
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
		border-top: 1px solid #e6ecf1;
		background: #fff;
		padding: 8px 16px 16px;
	}

	.mobile-menu a {
		color: #304557;
		text-decoration: none;
		font-weight: 700;
		font-size: 17px;
		padding: 14px 12px;
		border-radius: 10px;
	}

	.mobile-menu a:active {
		background: #f4f8fb;
	}

	.menu-tel {
		color: #1078b2 !important;
		border-top: 1px solid #eef3f6;
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
