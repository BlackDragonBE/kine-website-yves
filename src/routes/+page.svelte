<script lang="ts">
	import { afspraakUrl, siteUrl } from '$lib/config';

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

	const behandelingen = [
		{
			nr: '01',
			titel: 'Manuele therapie',
			tekst:
				'Gerichte mobilisaties van wervelkolom en gewrichten bij nek-, rug- en hoofdpijnklachten.'
		},
		{
			nr: '02',
			titel: 'Algemene kinesitherapie',
			tekst:
				'Revalidatie na operatie, blessure of langdurige inactiviteit met een oefenprogramma op maat.'
		},
		{
			nr: '03',
			titel: 'Sportrevalidatie',
			tekst:
				'Terugkeer naar uw sport na blessure, met opbouw van kracht, stabiliteit en vertrouwen.'
		},
		{
			nr: '04',
			titel: 'Vestibulaire kinesitherapie',
			tekst: 'Behandeling van duizeligheid en vertigo problematiek.'
		},
		{
			nr: '05',
			titel: 'Rug- & houdingsscholing',
			tekst:
				'Leer uw rug correct belasten in werk en dagelijks leven om klachten te voorkomen — én behandeling van chronische lage rugpijn.'
		},
		{
			nr: '06',
			titel: 'Oedeem- & lymfetherapie',
			tekst: 'Manuele lymfedrainage bij zwelling na operatie of trauma om herstel te versnellen.'
		}
	];

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
	<title>Kine Demol · Kinesitherapie & Manuele therapie in Machelen</title>
	<meta
		name="description"
		content="Persoonlijke kinesitherapie en manuele therapie in Machelen. Behandeling van rug-, nek-, gewrichts- en spierklachten door Yves Demol, erkend manueel therapeut."
	/>
	<link rel="canonical" href={siteUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="nl_BE" />
	<meta property="og:site_name" content="Kine Demol" />
	<meta property="og:title" content="Kine Demol · Kinesitherapie & Manuele therapie in Machelen" />
	<meta
		property="og:description"
		content="Persoonlijke kinesitherapie en manuele therapie in Machelen. Behandeling van rug-, nek-, gewrichts- en spierklachten door Yves Demol, erkend manueel therapeut."
	/>
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
				Kinesitherapie &amp; Manuele therapie
			</div>
			<h1>Uw herstel, met vakkundige handen begeleid.</h1>
			<p class="lead">
				Persoonlijke kinesitherapie en manuele therapie in hartje Machelen. Wij behandelen klachten
				aan rug, nek, gewrichten en spieren — met tijd, aandacht en jarenlange expertise.
			</p>
			<div class="cta-row">
				<a href={afspraakUrl} rel="external" class="btn-primary">Afspraak maken</a>
				<a href="#behandelingen" class="btn-secondary">Bekijk behandelingen</a>
			</div>
		</div>
		<div use:reveal class="hero-photo">
			<img src="/hero.webp" alt="Manuele therapie behandeling bij Kine Demol" />
			<div class="hero-card">
				<img src="/mark-blue.svg" alt="" class="hero-card-mark" />
				<div>
					<div class="hero-card-name">Yves Demol</div>
					<div class="hero-card-sub">Erkend manueel therapeut</div>
				</div>
			</div>
		</div>
	</div>
</header>

<!-- trust strip -->
<section class="trust">
	<div class="trust-inner">
		<div use:reveal class="stat">
			<div class="stat-nr">RIZIV</div>
			<div class="stat-sub">gedeconventioneerd</div>
		</div>
		<div use:reveal class="stat">
			<div class="stat-nr">10+ jaar</div>
			<div class="stat-sub">ervaring</div>
		</div>
		<div use:reveal class="stat">
			<div class="stat-nr">tot 20u</div>
			<div class="stat-sub">open op weekdagen</div>
		</div>
		<div use:reveal class="stat">
			<div class="stat-nr">1-op-1</div>
			<div class="stat-sub">persoonlijke begeleiding</div>
		</div>
	</div>
</section>

<!-- behandelingen -->
<section id="behandelingen" class="container section">
	<div use:reveal class="section-head">
		<div class="eyebrow">Behandelingen</div>
		<h2>Zorg afgestemd op uw klacht</h2>
		<p>
			Van een acute blessure tot langdurige rug- en nekklachten — elke behandeling start met een
			grondig onderzoek en een plan op maat.
		</p>
	</div>
	<div class="svc-grid">
		{#each behandelingen as b (b.nr)}
			<div use:reveal class="svc">
				<div class="svc-nr">{b.nr}</div>
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
			<img src="/portrait.webp" alt="Portret van Yves Demol" />
		</div>
		<div use:reveal>
			<div class="eyebrow">Over de praktijk</div>
			<h2>Eén vertrouwd aanspreekpunt voor uw herstel</h2>
			<p class="over-p">
				Bij Kine Demol wordt u van begin tot einde begeleid door dezelfde therapeut. Geen wisselende
				gezichten, wél een grondig opgebouwd behandelplan en de tijd om echt naar uw klacht te
				luisteren.
			</p>
			<p class="over-p">
				Yves Demol combineert klassieke kinesitherapie met manuele therapie om zowel de oorzaak als
				de symptomen aan te pakken.
			</p>
			<p class="over-p">
				Hij volgt regelmatig bijscholingen waardoor hij geregistreerd staat in het
				kwaliteitsregister voor kinesitherapie en ook de bijzondere beroepsbekwaamheid in de manuele
				therapie bezit.
			</p>
			<div class="over-stats">
				<div>
					<div class="stat-nr big">Erkend</div>
					<div class="stat-sub">manueel therapeut</div>
				</div>
				<div>
					<div class="stat-nr big">Op maat</div>
					<div class="stat-sub">behandelplan per patiënt</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- praktisch -->
<section id="praktisch" class="container section">
	<div use:reveal class="section-head">
		<div class="eyebrow">Praktisch</div>
		<h2>Verloop van uw afspraak</h2>
	</div>
	<div use:reveal>
		<div class="steps">
			<div class="step">
				<div class="step-nr">1</div>
				<p>
					Bij uw eerste afspraak brengt u uw <strong>voorschrift en identiteitskaart</strong> mee. Beschikt
					u over medische beeldvorming en/of een operatieverslag? Neem dit gerust ook mee.
				</p>
			</div>
			<div class="step">
				<div class="step-nr">2</div>
				<p>
					We nemen de tijd voor een <strong>intake</strong>: het kinesitherapeutisch gesprek en een
					grondig onderzoek.
				</p>
			</div>
			<div class="step">
				<div class="step-nr">3</div>
				<p>
					Samen stellen we een <strong>behandelplan op maat</strong> op, afgestemd op uw klacht en doelen.
				</p>
			</div>
		</div>
		<div class="info-cards">
			<div class="info-card">
				<div class="info-title">Duur van de behandeling</div>
				<p>
					De eerste sessie duurt ongeveer 45 minuten, de daaropvolgende sessies ongeveer 30 minuten.
				</p>
			</div>
			<div class="info-card">
				<div class="info-title">Verhinderd?</div>
				<p>
					Gelieve minstens 24 uur op voorhand te verwittigen. Zo niet rekenen wij een sessie aan die
					niet door uw mutualiteit wordt terugbetaald.
				</p>
			</div>
			<div class="info-card">
				<div class="info-title">Zonder voorschrift</div>
				<p>
					U kan zich ook aanmelden zonder voorschrift van een arts. Deze sessies worden niet
					terugbetaald door uw mutualiteit.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- tarieven -->
<section id="tarieven" class="tarieven">
	<div class="container section">
		<div use:reveal class="section-head">
			<div class="eyebrow">Tarieven</div>
			<h2>Heldere, eerlijke prijzen</h2>
		</div>
		<div class="price-grid">
			<div use:reveal class="price-card">
				<h3>Standaardtarieven</h3>
				<p class="price-sub">Gangbare tarieven van de praktijk.</p>
				<div class="price-row">
					<span>Intakegesprek + aanmaak dossier</span><span class="price">€ 65,00</span>
				</div>
				<div class="price-row"><span>Eén sessie</span><span class="price">€ 39,00</span></div>
				<div class="price-row last">
					<span>Behandeling aan huis <span class="muted">(incl. verplaatsing)</span></span><span
						class="price">€ 42,00</span
					>
				</div>
			</div>
			<div use:reveal class="price-card dark">
				<h3>Verhoogde tegemoetkoming</h3>
				<p class="price-sub">
					Bij recht op verhoogde tegemoetkoming zijn wij verplicht de officiële RIZIV-tarieven te
					hanteren.
				</p>
				<div class="price-row"><span>Intake dossier</span><span class="price">€ 7,38</span></div>
				<div class="price-row">
					<span>Eén sessie <span class="muted">(30 min)</span></span><span class="price"
						>€ 31,64</span
					>
				</div>
				<div class="price-row last">
					<span>Huisbezoek <span class="muted">(30 min)</span></span><span class="price"
						>€ 34,80</span
					>
				</div>
			</div>
		</div>
		<p use:reveal class="pay-note">
			Betaling is mogelijk via <strong>Bancontact, cash of overschrijving</strong>.
		</p>
	</div>
</section>

<!-- adres -->
<section id="adres" class="container section">
	<div use:reveal class="section-head">
		<div class="eyebrow">Contact</div>
		<h2>Adres &amp; openingsuren</h2>
	</div>
	<div class="adres-grid">
		<div use:reveal class="adres-col">
			<div class="adres-card">
				<h3>Adres</h3>
				<p class="adres-lijn">de Neufforgestraat 2<br />1830 Machelen</p>
				<p class="adres-note">Vlot bereikbaar met de wagen · parkeergelegenheid in de straat</p>
			</div>
			<div class="adres-card">
				<h3>Openingsuren</h3>
				<div class="uren">
					<div class="uur-rij">
						<span>Maandag – Vrijdag</span><span class="open">08:00 – 20:00</span>
					</div>
					<div class="uur-rij"><span>Zaterdag</span><span class="dicht">Gesloten</span></div>
					<div class="uur-rij last"><span>Zondag</span><span class="dicht">Gesloten</span></div>
				</div>
			</div>
		</div>
		<div use:reveal>
			<iframe
				title="Kaart Kine Demol"
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
			<h2>Klaar om aan uw herstel te beginnen?</h2>
			<p class="cta-lead">
				Maak vandaag nog een afspraak. Heeft u een vraag over een klacht of terugbetaling? Bel of
				mail ons gerust.
			</p>
			<div class="cta-row">
				<a href={afspraakUrl} rel="external" class="btn-primary light-hover">Afspraak maken</a>
				<a href="tel:+32494836584" class="btn-ghost">0494 83 65 84</a>
			</div>
			<div class="cta-details">
				<div>
					<div class="cta-label">E-mail</div>
					<a href="mailto:kine.demol@gmail.com">kine.demol@gmail.com</a>
				</div>
				<div>
					<div class="cta-label">Adres</div>
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
		color: #243645;
		letter-spacing: -0.01em;
		margin-bottom: 22px;
		text-wrap: balance;
	}

	h2 {
		font-size: 38px;
		font-weight: 700;
		color: #243645;
		letter-spacing: -0.01em;
	}

	.eyebrow {
		color: #1078b2;
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
		color: #54697a;
		margin-top: 16px;
	}

	/* hero */
	.hero {
		background: linear-gradient(180deg, #f4f8fb 0%, #ffffff 100%);
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
		background: #e4eef6;
		color: #1078b2;
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
		background: #1078b2;
	}

	.lead {
		font-size: 18px;
		line-height: 1.65;
		color: #54697a;
		max-width: 520px;
		margin-bottom: 34px;
	}

	.cta-row {
		display: flex;
		gap: 14px;
		flex-wrap: wrap;
	}

	.btn-primary {
		background: #1078b2;
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
		background: #0c5f8f;
		transform: translateY(-2px);
	}

	.btn-primary.light-hover:hover {
		background: #1a8ad0;
		transform: none;
	}

	.btn-secondary {
		background: #fff;
		color: #304557;
		border: 1.5px solid #cdd9e2;
		text-decoration: none;
		font-weight: 700;
		font-size: 16px;
		padding: 15px 30px;
		border-radius: 9px;
		transition: border-color 0.2s;
	}

	.btn-secondary:hover {
		border-color: #1078b2;
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
		background: #fff;
		border: 1px solid #e6ecf1;
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
		color: #243645;
	}

	.hero-card-sub {
		font-size: 13px;
		color: #778998;
	}

	/* trust strip */
	.trust {
		border-top: 1px solid #e6ecf1;
		border-bottom: 1px solid #e6ecf1;
		background: #fff;
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
		color: #1078b2;
	}

	.stat-nr.big {
		font-size: 30px;
	}

	.stat-sub {
		font-size: 13px;
		color: #778998;
	}

	/* behandelingen */
	.svc-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 22px;
	}

	.svc {
		border: 1px solid #e6ecf1;
		border-radius: 16px;
		padding: 32px 30px;
		background: #fff;
		transition:
			box-shadow 0.25s,
			transform 0.25s,
			border-color 0.25s;
	}

	.svc:hover {
		border-color: #1078b2;
		box-shadow: 0 20px 40px -24px rgba(48, 69, 87, 0.35);
		transform: translateY(-3px);
	}

	.svc-nr {
		font-size: 14px;
		font-weight: 700;
		color: #1078b2;
		letter-spacing: 0.05em;
		margin-bottom: 18px;
	}

	.svc h3 {
		font-size: 20px;
		font-weight: 700;
		color: #243645;
		margin-bottom: 10px;
	}

	.svc p {
		font-size: 15px;
		line-height: 1.6;
		color: #5b7082;
	}

	/* over */
	.over {
		background: #f4f8fb;
		border-top: 1px solid #e6ecf1;
		border-bottom: 1px solid #e6ecf1;
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
		color: #54697a;
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
		border: 1px solid #e6ecf1;
		border-radius: 16px;
		padding: 30px;
	}

	.step-nr {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: #e4eef6;
		color: #1078b2;
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
		color: #5b7082;
	}

	.step strong {
		color: #243645;
	}

	.info-card {
		background: #f4f8fb;
		border: 1px solid #e6ecf1;
		border-radius: 16px;
		padding: 24px 26px;
	}

	.info-card p {
		font-size: 14px;
		line-height: 1.55;
	}

	.info-title {
		font-weight: 700;
		color: #243645;
		font-size: 15px;
		margin-bottom: 6px;
	}

	/* tarieven */
	.tarieven {
		background: #f4f8fb;
		border-top: 1px solid #e6ecf1;
		border-bottom: 1px solid #e6ecf1;
	}

	.price-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
		align-items: stretch;
	}

	.price-card {
		background: #fff;
		border: 1px solid #e6ecf1;
		border-radius: 18px;
		padding: 36px;
	}

	.price-card h3 {
		font-size: 18px;
		font-weight: 700;
		color: #243645;
		margin-bottom: 6px;
	}

	.price-sub {
		font-size: 14px;
		color: #778998;
		margin-bottom: 24px;
	}

	.price-row {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 16px 0;
		border-bottom: 1px solid #eef3f6;
		font-size: 16px;
		color: #3a4b58;
	}

	.price-row.last {
		border-bottom: none;
	}

	.price {
		font-size: 19px;
		font-weight: 700;
		color: #1078b2;
		white-space: nowrap;
		margin-left: 16px;
	}

	.muted {
		color: #778998;
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
		color: #54697a;
		margin-top: 28px;
	}

	.pay-note strong {
		color: #243645;
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
		border: 1px solid #e6ecf1;
		border-radius: 16px;
		padding: 30px;
	}

	.adres-card h3 {
		font-size: 16px;
		font-weight: 700;
		color: #1078b2;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		margin-bottom: 14px;
	}

	.adres-lijn {
		font-size: 19px;
		line-height: 1.5;
		color: #243645;
		font-weight: 500;
	}

	.adres-note {
		font-size: 15px;
		color: #778998;
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
		border-bottom: 1px solid #eef3f6;
		padding-bottom: 11px;
	}

	.uur-rij.last {
		border-bottom: none;
		padding-bottom: 0;
	}

	.uur-rij span:first-child {
		color: #54697a;
	}

	.open {
		font-weight: 700;
		color: #243645;
	}

	.dicht {
		font-weight: 500;
		color: #a2b0bb;
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

		/* knoppen over de volle breedte — makkelijker aan te tikken */
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
