<script lang="ts">
	import { resolve } from '$app/paths';
	import { afspraakUrl } from '$lib/config';

	const home = resolve('/');
</script>

<div class="utility">
	<div class="utility-inner">
		<span>de Neufforgestraat 2, 1830 Machelen</span>
		<span class="utility-right">
			<span>Ma–Vr&nbsp;·&nbsp;08:00–20:00</span>
			<a href="tel:+32494836584">0494 83 65 84</a>
		</span>
	</div>
</div>

<nav>
	<div class="nav-inner">
		<a href={home} class="brand">
			<img src="/logo_only.svg" alt="Kine Demol" class="logo" />
			<span class="brand-text"><span class="kine">KINE</span> <span class="demol">DEMOL</span></span
			>
		</a>
		<div class="links">
			<a href="{home}#over">Over</a>
			<a href="{home}#behandelingen">Behandelingen</a>
			<a href="{home}#praktisch">Praktisch</a>
			<a href="{home}#tarieven">Tarieven</a>
			<a href="{home}#contact">Contact</a>
			<a href={afspraakUrl} rel="external" class="btn-afspraak">Afspraak maken</a>
		</div>
	</div>
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
		flex-wrap: wrap;
		gap: 12px;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 12px;
		text-decoration: none;
	}

	.logo {
		height: 44px;
		width: auto;
	}

	.brand-text {
		font-weight: 700;
		font-size: 19px;
		letter-spacing: 0.04em;
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
		gap: 26px;
		flex-wrap: wrap;
	}

	.links a {
		color: #304557;
		text-decoration: none;
		font-weight: 500;
		font-size: 15px;
	}

	.btn-afspraak {
		background: #1078b2;
		color: #fff !important;
		font-weight: 700 !important;
		padding: 11px 22px;
		border-radius: 8px;
		white-space: nowrap;
		transition: background 0.2s;
	}

	.btn-afspraak:hover {
		background: #0c5f8f;
	}

	@media (max-width: 720px) {
		.links {
			gap: 16px;
		}
	}
</style>
