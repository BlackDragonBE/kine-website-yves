<script lang="ts">
	import { afspraakUrl, siteUrl } from '$lib/config';
	import { lang, messages } from '$lib/i18n.svelte';

	const t = $derived(messages[lang.current]);

	const schema = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Physiotherapy',
		name: 'Kine Demol',
		description:
			'Persoonlijke kinesitherapie en manuele therapie in Machelen door Yves Demol, erkend manueel therapeut.',
		url: siteUrl,
		image: `${siteUrl}/hero.webp`,
		telephone: '+32494836584',
		email: 'kine.demol@gmail.com',
		priceRange: '€€',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'de Neufforgestraat 2',
			postalCode: '1830',
			addressLocality: 'Machelen',
			addressCountry: 'BE'
		},
		geo: { '@type': 'GeoCoordinates', latitude: 50.9140912, longitude: 4.4382626 },
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '08:00',
			closes: '20:00'
		},
		founder: { '@type': 'Person', name: 'Yves Demol', jobTitle: 'Kinesitherapeut' }
	});

	// scroll-reveal via inline styles zodat Svelte de runtime-klasse niet wegsnoeit
	let revealIndex = 0;
	function reveal(el: HTMLElement) {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		el.style.opacity = '0';
		el.style.transform = 'translateY(24px)';
		el.style.transition =
			'opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1)';
		el.style.transitionDelay = `${Math.min(revealIndex++ % 3, 2) * 80}ms`;
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) {
						el.style.opacity = '1';
						el.style.transform = 'none';
						io.unobserve(el);
					}
				}
			},
			{ threshold: 0.12 }
		);
		io.observe(el);
		return { destroy: () => io.disconnect() };
	}
</script>

<svelte:head>
	<title>{t.meta.title}</title>
	<meta name="description" content={t.meta.description} />
	<link rel="canonical" href={siteUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="nl_BE" />
	<meta property="og:site_name" content="Kine Demol" />
	<meta property="og:title" content={t.meta.title} />
	<meta property="og:description" content={t.meta.description} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content="{siteUrl}/hero.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- statische JSON-LD, geen user input -->
	{@html `<script type="application/ld+json">${schema}${'<'}/script>`}
</svelte:head>

<!-- hero -->
<header id="top" class="hero">
	<div class="hero-inner">
		<div use:reveal>
			<div class="badge">
				<span class="dot"></span>
				{t.hero.badge}
			</div>
			<h1>{t.hero.title}</h1>
			<p class="lead">{t.hero.lead}</p>
			<div class="cta-row">
				<a href={afspraakUrl} rel="external" class="btn-primary">{t.hero.cta}</a>
				<a href="#behandelingen" class="btn-secondary">{t.hero.cta2}</a>
			</div>
		</div>
		<div use:reveal class="hero-photo">
			<img src="/hero.webp" alt={t.hero.fotoAlt} />
			<div class="hero-card">
				<img src="/mark-blue.svg" alt="" class="hero-card-mark" />
				<div>
					<div class="hero-card-name">Yves Demol</div>
					<div class="hero-card-sub">{t.hero.cardSub}</div>
				</div>
			</div>
		</div>
	</div>
</header>

<!-- trust strip -->
<section class="trust">
	<div class="trust-inner">
		{#each t.trust as stat, i (i)}
			<div use:reveal class="stat">
				<div class="stat-nr">{stat.nr}</div>
				<div class="stat-sub">{stat.sub}</div>
			</div>
		{/each}
	</div>
</section>

<!-- behandelingen -->
<section id="behandelingen" class="container section">
	<div use:reveal class="section-head">
		<div class="eyebrow">{t.behandelingen.eyebrow}</div>
		<h2>{t.behandelingen.title}</h2>
		<p>{t.behandelingen.lead}</p>
	</div>
	<div class="svc-grid">
		{#each t.behandelingen.items as b, i (i)}
			<div use:reveal class="svc">
				<div class="svc-nr">{String(i + 1).padStart(2, '0')}</div>
				<h3>{b.titel}</h3>
				<p>{b.tekst}</p>
			</div>
		{/each}
	</div>
</section>

<!-- over -->
<section id="over" class="over">
	<div class="over-inner">
		<div use:reveal class="over-photo">
			<img src="/portrait.webp" alt={t.over.fotoAlt} />
		</div>
		<div use:reveal>
			<div class="eyebrow">{t.over.eyebrow}</div>
			<h2>{t.over.title}</h2>
			<p class="over-p">{t.over.p1}</p>
			<p class="over-p">{t.over.p2}</p>
			<p class="over-p">{t.over.p3}</p>
			<div class="over-stats">
				<div>
					<div class="stat-nr big">{t.over.stat1.nr}</div>
					<div class="stat-sub">{t.over.stat1.sub}</div>
				</div>
				<div>
					<div class="stat-nr big">{t.over.stat2.nr}</div>
					<div class="stat-sub">{t.over.stat2.sub}</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- praktisch -->
<section id="praktisch" class="container section">
	<div use:reveal class="section-head">
		<div class="eyebrow">{t.praktisch.eyebrow}</div>
		<h2>{t.praktisch.title}</h2>
	</div>
	<div use:reveal>
		<div class="steps">
			{#each t.praktisch.steps as stap, i (i)}
				<div class="step">
					<div class="step-nr">{i + 1}</div>
					<p>{stap.pre}<strong>{stap.strong}</strong>{stap.post}</p>
				</div>
			{/each}
		</div>
		<div class="info-cards">
			{#each t.praktisch.cards as card, i (i)}
				<div class="info-card">
					<div class="info-title">{card.titel}</div>
					<p>{card.tekst}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- tarieven -->
<section id="tarieven" class="tarieven">
	<div class="container section">
		<div use:reveal class="section-head">
			<div class="eyebrow">{t.tarieven.eyebrow}</div>
			<h2>{t.tarieven.title}</h2>
		</div>
		<div class="price-grid">
			<div use:reveal class="price-card">
				<h3>{t.tarieven.std.titel}</h3>
				<p class="price-sub">{t.tarieven.std.sub}</p>
				{#each t.tarieven.std.rows as rij, i (i)}
					<div class="price-row" class:last={i === t.tarieven.std.rows.length - 1}>
						<span
							>{rij.label}{#if rij.note}
								<span class="muted">{rij.note}</span>{/if}</span
						><span class="price">{rij.prijs}</span>
					</div>
				{/each}
			</div>
			<div use:reveal class="price-card dark">
				<h3>{t.tarieven.verhoogd.titel}</h3>
				<p class="price-sub">{t.tarieven.verhoogd.sub}</p>
				{#each t.tarieven.verhoogd.rows as rij, i (i)}
					<div class="price-row" class:last={i === t.tarieven.verhoogd.rows.length - 1}>
						<span
							>{rij.label}{#if rij.note}
								<span class="muted">{rij.note}</span>{/if}</span
						><span class="price">{rij.prijs}</span>
					</div>
				{/each}
			</div>
		</div>
		<p use:reveal class="pay-note">
			{t.tarieven.payNote.pre}<strong>{t.tarieven.payNote.strong}</strong>{t.tarieven.payNote.post}
		</p>
	</div>
</section>

<!-- adres -->
<section id="adres" class="container section">
	<div use:reveal class="section-head">
		<div class="eyebrow">{t.adres.eyebrow}</div>
		<h2>{t.adres.title}</h2>
	</div>
	<div class="adres-grid">
		<div use:reveal class="adres-col">
			<div class="adres-card">
				<h3>{t.adres.adresTitel}</h3>
				<p class="adres-lijn">de Neufforgestraat 2<br />1830 Machelen</p>
				<p class="adres-note">{t.adres.adresNote}</p>
			</div>
			<div class="adres-card">
				<h3>{t.adres.urenTitel}</h3>
				<div class="uren">
					<div class="uur-rij">
						<span>{t.adres.maVr}</span><span class="open">08:00 – 20:00</span>
					</div>
					<div class="uur-rij">
						<span>{t.adres.za}</span><span class="dicht">{t.adres.gesloten}</span>
					</div>
					<div class="uur-rij last">
						<span>{t.adres.zo}</span><span class="dicht">{t.adres.gesloten}</span>
					</div>
				</div>
			</div>
		</div>
		<div use:reveal>
			<iframe
				title={t.adres.kaartTitel}
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.41330599854!2d4.4382626!3d50.914091199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3dd438c0117ed%3A0x98fbe4cee1f9024!2sKine%20Demol!5e1!3m2!1sen!2sbe!4v1783103509661!5m2!1sen!2sbe"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	</div>
</section>

<!-- contact CTA -->
<section id="contact" class="cta">
	<img src="/mark-white.svg" alt="" class="cta-watermark" />
	<div class="cta-inner">
		<div use:reveal class="cta-content">
			<h2>{t.cta.title}</h2>
			<p class="cta-lead">{t.cta.lead}</p>
			<div class="cta-row">
				<a href={afspraakUrl} rel="external" class="btn-primary light-hover">{t.cta.btn}</a>
				<a href="tel:+32494836584" class="btn-ghost">0494 83 65 84</a>
			</div>
			<div class="cta-details">
				<div>
					<div class="cta-label">{t.cta.email}</div>
					<a href="mailto:kine.demol@gmail.com">kine.demol@gmail.com</a>
				</div>
				<div>
					<div class="cta-label">{t.cta.adres}</div>
					de Neufforgestraat 2, 1830 Machelen
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding-left: 32px;
		padding-right: 32px;
	}

	.section {
		padding-top: 96px;
		padding-bottom: 96px;
	}

	h1 {
		font-size: 52px;
		line-height: 1.08;
		font-weight: 700;
		color: var(--text-strong);
		letter-spacing: -0.01em;
		margin-bottom: 22px;
		text-wrap: balance;
	}

	h2 {
		font-size: 38px;
		font-weight: 700;
		color: var(--text-strong);
		letter-spacing: -0.01em;
	}

	.eyebrow {
		color: var(--brand);
		font-weight: 700;
		font-size: 13px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-bottom: 14px;
	}

	.section-head {
		text-align: center;
		max-width: 640px;
		margin: 0 auto 56px;
	}

	.section-head p {
		font-size: 17px;
		line-height: 1.6;
		color: var(--text-body);
		margin-top: 16px;
	}

	/* hero */
	.hero {
		background: linear-gradient(180deg, var(--bg-soft) 0%, var(--bg) 100%);
	}

	.hero-inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 80px 32px 90px;
		display: grid;
		grid-template-columns: 1.05fr 0.95fr;
		gap: 64px;
		align-items: center;
	}

	.badge {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		background: var(--bg-badge);
		color: var(--brand);
		font-weight: 700;
		font-size: 13px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		padding: 8px 14px;
		border-radius: 100px;
		margin-bottom: 24px;
	}

	.dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--brand);
	}

	.lead {
		font-size: 18px;
		line-height: 1.65;
		color: var(--text-body);
		max-width: 520px;
		margin-bottom: 34px;
	}

	.cta-row {
		display: flex;
		gap: 14px;
		flex-wrap: wrap;
	}

	.btn-primary {
		background: var(--btn-bg);
		color: #fff;
		text-decoration: none;
		font-weight: 700;
		font-size: 16px;
		padding: 15px 30px;
		border-radius: 9px;
		transition:
			transform 0.2s,
			background 0.2s;
	}

	.btn-primary:hover {
		background: var(--btn-bg-hover);
		transform: translateY(-2px);
	}

	.btn-primary.light-hover:hover {
		background: #1a8ad0;
		transform: none;
	}

	.btn-secondary {
		background: var(--bg);
		color: var(--text-nav);
		border: 1.5px solid var(--border-strong);
		text-decoration: none;
		font-weight: 700;
		font-size: 16px;
		padding: 15px 30px;
		border-radius: 9px;
		transition: border-color 0.2s;
	}

	.btn-secondary:hover {
		border-color: var(--brand);
	}

	.hero-photo {
		position: relative;
	}

	.hero-photo > img {
		width: 100%;
		height: 460px;
		object-fit: cover;
		border-radius: 18px;
		display: block;
	}

	.hero-card {
		position: absolute;
		bottom: -22px;
		left: -22px;
		background: var(--bg);
		border: 1px solid var(--border);
		border-radius: 14px;
		padding: 18px 22px;
		box-shadow: 0 20px 40px -18px rgba(48, 69, 87, 0.35);
		display: flex;
		align-items: center;
		gap: 14px;
	}

	.hero-card-mark {
		height: 40px;
		width: auto;
	}

	.hero-card-name {
		font-weight: 700;
		font-size: 16px;
		color: var(--text-strong);
	}

	.hero-card-sub {
		font-size: 13px;
		color: var(--muted);
	}

	/* trust strip */
	.trust {
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
		background: var(--bg);
	}

	.trust-inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 26px 32px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 24px;
	}

	.stat {
		text-align: center;
	}

	.stat-nr {
		font-size: 26px;
		font-weight: 700;
		color: var(--brand);
	}

	.stat-nr.big {
		font-size: 30px;
	}

	.stat-sub {
		font-size: 13px;
		color: var(--muted);
	}

	/* behandelingen */
	.svc-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 22px;
	}

	.svc {
		border: 1px solid var(--border);
		border-radius: 16px;
		padding: 32px 30px;
		background: var(--bg);
		transition:
			box-shadow 0.25s,
			transform 0.25s,
			border-color 0.25s;
	}

	.svc:hover {
		border-color: var(--brand);
		box-shadow: 0 20px 40px -24px rgba(48, 69, 87, 0.35);
		transform: translateY(-3px);
	}

	.svc-nr {
		font-size: 14px;
		font-weight: 700;
		color: var(--brand);
		letter-spacing: 0.05em;
		margin-bottom: 18px;
	}

	.svc h3 {
		font-size: 20px;
		font-weight: 700;
		color: var(--text-strong);
		margin-bottom: 10px;
	}

	.svc p {
		font-size: 15px;
		line-height: 1.6;
		color: var(--text-body-soft);
	}

	/* over */
	.over {
		background: var(--bg-soft);
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
	}

	.over-inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 96px 32px;
		display: grid;
		grid-template-columns: 0.9fr 1.1fr;
		gap: 64px;
		align-items: center;
	}

	.over-photo img {
		width: 100%;
		height: 480px;
		object-fit: cover;
		border-radius: 18px;
		display: block;
	}

	.over h2 {
		font-size: 36px;
		margin-bottom: 20px;
	}

	.over-p {
		font-size: 17px;
		line-height: 1.7;
		color: var(--text-body);
		margin-bottom: 18px;
	}

	.over-stats {
		display: flex;
		gap: 40px;
		flex-wrap: wrap;
		margin-top: 12px;
	}

	/* praktisch */
	.steps,
	.info-cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 22px;
	}

	.info-cards {
		margin-top: 22px;
	}

	.step {
		border: 1px solid var(--border);
		border-radius: 16px;
		padding: 30px;
	}

	.step-nr {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: var(--bg-badge);
		color: var(--brand);
		font-weight: 700;
		font-size: 17px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 18px;
	}

	.step p,
	.info-card p {
		font-size: 15px;
		line-height: 1.6;
		color: var(--text-body-soft);
	}

	.step strong {
		color: var(--text-strong);
	}

	.info-card {
		background: var(--bg-soft);
		border: 1px solid var(--border);
		border-radius: 16px;
		padding: 24px 26px;
	}

	.info-card p {
		font-size: 14px;
		line-height: 1.55;
	}

	.info-title {
		font-weight: 700;
		color: var(--text-strong);
		font-size: 15px;
		margin-bottom: 6px;
	}

	/* tarieven */
	.tarieven {
		background: var(--bg-soft);
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
	}

	.price-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
		align-items: stretch;
	}

	.price-card {
		background: var(--bg);
		border: 1px solid var(--border);
		border-radius: 18px;
		padding: 36px;
	}

	.price-card h3 {
		font-size: 18px;
		font-weight: 700;
		color: var(--text-strong);
		margin-bottom: 6px;
	}

	.price-sub {
		font-size: 14px;
		color: var(--muted);
		margin-bottom: 24px;
	}

	.price-row {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 16px 0;
		border-bottom: 1px solid var(--border-soft);
		font-size: 16px;
		color: var(--text-price);
	}

	.price-row.last {
		border-bottom: none;
	}

	.price {
		font-size: 19px;
		font-weight: 700;
		color: var(--brand);
		white-space: nowrap;
		margin-left: 16px;
	}

	.muted {
		color: var(--muted);
		font-size: 13px;
	}

	.price-card.dark {
		background: #243645;
		border: none;
		color: #fff;
	}

	.price-card.dark h3 {
		color: #fff;
	}

	.price-card.dark .price-sub {
		color: #9db1c0;
	}

	.price-card.dark .price-row {
		color: #cdd9e2;
		border-bottom-color: #3a4b58;
	}

	.price-card.dark .price-row.last {
		border-bottom: none;
	}

	.price-card.dark .price {
		color: #5fb0dd;
	}

	.price-card.dark .muted {
		color: #7f93a3;
	}

	.pay-note {
		text-align: center;
		font-size: 15px;
		color: var(--text-body);
		margin-top: 28px;
	}

	.pay-note strong {
		color: var(--text-strong);
	}

	/* adres */
	.adres-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 32px;
		align-items: stretch;
	}

	.adres-col {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.adres-card {
		border: 1px solid var(--border);
		border-radius: 16px;
		padding: 30px;
	}

	.adres-card h3 {
		font-size: 16px;
		font-weight: 700;
		color: var(--brand);
		letter-spacing: 0.04em;
		text-transform: uppercase;
		margin-bottom: 14px;
	}

	.adres-lijn {
		font-size: 19px;
		line-height: 1.5;
		color: var(--text-strong);
		font-weight: 500;
	}

	.adres-note {
		font-size: 15px;
		color: var(--muted);
		margin-top: 12px;
	}

	.uren {
		display: flex;
		flex-direction: column;
		gap: 11px;
		font-size: 16px;
	}

	.uur-rij {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid var(--border-soft);
		padding-bottom: 11px;
	}

	.uur-rij.last {
		border-bottom: none;
		padding-bottom: 0;
	}

	.uur-rij span:first-child {
		color: var(--text-body);
	}

	.open {
		font-weight: 700;
		color: var(--text-strong);
	}

	.dicht {
		font-weight: 500;
		color: var(--muted-weak);
	}

	iframe {
		width: 100%;
		height: 100%;
		min-height: 420px;
		border: 0;
		border-radius: 16px;
		display: block;
	}

	/* contact CTA */
	.cta {
		background: #243645;
		position: relative;
		overflow: hidden;
	}

	.cta-watermark {
		position: absolute;
		right: -40px;
		top: 50%;
		transform: translateY(-50%);
		height: 340px;
		opacity: 0.06;
	}

	.cta-inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 84px 32px;
		position: relative;
	}

	.cta-content {
		max-width: 620px;
	}

	.cta h2 {
		font-size: 40px;
		color: #fff;
		margin-bottom: 18px;
		text-wrap: balance;
	}

	.cta-lead {
		font-size: 18px;
		line-height: 1.65;
		color: #b8c8d4;
		margin-bottom: 34px;
	}

	.cta .cta-row {
		margin-bottom: 40px;
	}

	.btn-ghost {
		background: transparent;
		color: #fff;
		border: 1.5px solid #46596a;
		text-decoration: none;
		font-weight: 700;
		font-size: 16px;
		padding: 15px 30px;
		border-radius: 9px;
		transition: border-color 0.2s;
	}

	.btn-ghost:hover {
		border-color: #8fa3b3;
	}

	.cta-details {
		display: flex;
		gap: 40px;
		flex-wrap: wrap;
		font-size: 15px;
		color: #b8c8d4;
	}

	.cta-details a {
		color: #b8c8d4;
		text-decoration: none;
	}

	.cta-label {
		color: #7f93a3;
		margin-bottom: 4px;
	}

	/* responsive */
	@media (max-width: 960px) {
		h1 {
			font-size: clamp(32px, 8.5vw, 38px);
		}

		h2 {
			font-size: clamp(26px, 7vw, 30px);
		}

		.cta h2,
		.over h2 {
			font-size: clamp(26px, 7vw, 30px);
		}

		.hero-inner,
		.over-inner,
		.price-grid,
		.adres-grid {
			grid-template-columns: 1fr;
			gap: 40px;
		}

		.hero-inner {
			padding-top: 48px;
			padding-bottom: 64px;
		}

		.svc-grid,
		.steps,
		.info-cards {
			grid-template-columns: 1fr;
		}

		.trust-inner {
			grid-template-columns: repeat(2, 1fr);
		}

		.hero-photo > img {
			height: 340px;
		}

		.over-photo img {
			height: 380px;
		}

		.hero-card {
			left: 12px;
			right: 12px;
			bottom: 12px;
			padding: 14px 18px;
		}

		.section {
			padding-top: 64px;
			padding-bottom: 64px;
		}

		.over-inner {
			padding-top: 64px;
			padding-bottom: 64px;
		}

		.cta-inner {
			padding-top: 64px;
			padding-bottom: 64px;
		}
	}

	@media (max-width: 560px) {
		.container,
		.hero-inner,
		.over-inner,
		.trust-inner,
		.cta-inner {
			padding-left: 20px;
			padding-right: 20px;
		}

		.section-head {
			margin-bottom: 40px;
		}

		.lead,
		.cta-lead {
			font-size: 16.5px;
		}

		.over-p,
		.section-head p {
			font-size: 16px;
		}

		/* knoppen over de volle breedte, makkelijker aan te tikken */
		.cta-row {
			flex-direction: column;
			align-items: stretch;
			gap: 12px;
		}

		.btn-primary,
		.btn-secondary,
		.btn-ghost {
			text-align: center;
			padding: 16px 24px;
		}

		.btn-primary:hover {
			transform: none;
		}

		.hero-photo > img {
			height: 300px;
		}

		.over-photo img {
			height: 320px;
		}

		.svc,
		.step {
			padding: 26px 22px;
		}

		.info-card {
			padding: 22px;
		}

		.price-card {
			padding: 26px 22px;
		}

		.price-row {
			font-size: 15px;
			padding: 14px 0;
		}

		.price {
			font-size: 17px;
		}

		.adres-card {
			padding: 24px 22px;
		}

		iframe {
			min-height: 300px;
		}

		.trust-inner {
			gap: 18px;
			padding-top: 22px;
			padding-bottom: 22px;
		}

		.stat-nr {
			font-size: 22px;
		}

		.stat-nr.big {
			font-size: 26px;
		}

		.over-stats {
			gap: 24px;
		}

		.cta-details {
			flex-direction: column;
			gap: 20px;
		}

		.cta-details a {
			display: inline-block;
			padding: 4px 0;
		}

		.cta-watermark {
			height: 220px;
			right: -60px;
		}
	}
</style>
