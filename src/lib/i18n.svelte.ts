// ponytail: client-side taalswitch (prerender blijft Nederlands); aparte /fr /en routes pas nodig als SEO per taal moet
export type Locale = 'nl' | 'fr' | 'en';

export const locales: Locale[] = ['nl', 'fr', 'en'];

const htmlLang: Record<Locale, string> = { nl: 'nl-BE', fr: 'fr-BE', en: 'en' };

function storedLang(): Locale {
	if (typeof localStorage === 'undefined') return 'nl';
	const l = localStorage.getItem('lang');
	return l === 'fr' || l === 'en' ? l : 'nl';
}

export const lang = $state({ current: storedLang() });

export function setLang(l: Locale) {
	lang.current = l;
	localStorage.setItem('lang', l);
	document.documentElement.lang = htmlLang[l];
}

const nl = {
	nav: {
		links: [
			{ hash: '#over', label: 'Over' },
			{ hash: '#behandelingen', label: 'Behandelingen' },
			{ hash: '#praktisch', label: 'Praktisch' },
			{ hash: '#tarieven', label: 'Tarieven' },
			{ hash: '#contact', label: 'Contact' }
		],
		afspraak: 'Afspraak maken',
		afspraakKort: 'Afspraak',
		menuOpen: 'Menu openen',
		menuDicht: 'Menu sluiten',
		belOns: 'Bel ons',
		uren: 'Ma–Vr',
		licht: 'Licht thema',
		donker: 'Donker thema'
	},
	meta: {
		title: 'Kine Demol · Kinesitherapie & Manuele therapie in Machelen',
		description:
			'Persoonlijke kinesitherapie en manuele therapie in Machelen. Behandeling van rug-, nek-, gewrichts- en spierklachten door Yves Demol, erkend manueel therapeut.'
	},
	hero: {
		badge: 'Kinesitherapie & Manuele therapie',
		title: 'Uw herstel, met vakkundige handen begeleid.',
		lead: 'Persoonlijke kinesitherapie en manuele therapie in hartje Machelen. Wij behandelen klachten aan rug, nek, gewrichten en spieren. Dat doen we met tijd, aandacht en jarenlange expertise.',
		cta: 'Afspraak maken',
		cta2: 'Bekijk behandelingen',
		fotoAlt: 'Manuele therapie behandeling bij Kine Demol',
		cardSub: 'Erkend manueel therapeut'
	},
	trust: [
		{ nr: 'RIZIV', sub: 'gedeconventioneerd' },
		{ nr: '10+ jaar', sub: 'ervaring' },
		{ nr: 'tot 20u', sub: 'open op weekdagen' },
		{ nr: '1-op-1', sub: 'persoonlijke begeleiding' }
	],
	behandelingen: {
		eyebrow: 'Behandelingen',
		title: 'Zorg afgestemd op uw klacht',
		lead: 'Van een acute blessure tot langdurige rug- en nekklachten: elke behandeling start met een grondig onderzoek en een plan op maat.',
		items: [
			{
				titel: 'Manuele therapie',
				tekst:
					'Gerichte mobilisaties van wervelkolom en gewrichten bij nek-, rug- en hoofdpijnklachten.'
			},
			{
				titel: 'Algemene kinesitherapie',
				tekst:
					'Revalidatie na operatie, blessure of langdurige inactiviteit met een oefenprogramma op maat.'
			},
			{
				titel: 'Sportrevalidatie',
				tekst:
					'Terugkeer naar uw sport na blessure, met opbouw van kracht, stabiliteit en vertrouwen.'
			},
			{
				titel: 'Vestibulaire kinesitherapie',
				tekst: 'Behandeling van duizeligheid en vertigo problematiek.'
			},
			{
				titel: 'Rug- & houdingsscholing',
				tekst:
					'Leer uw rug correct belasten in werk en dagelijks leven om klachten te voorkomen, én behandeling van chronische lage rugpijn.'
			},
			{
				titel: 'Oedeem- & lymfetherapie',
				tekst: 'Manuele lymfedrainage bij zwelling na operatie of trauma om herstel te versnellen.'
			}
		]
	},
	over: {
		eyebrow: 'Over de praktijk',
		title: 'Eén vertrouwd aanspreekpunt voor uw herstel',
		p1: 'Bij Kine Demol wordt u van begin tot einde begeleid door dezelfde therapeut. Geen wisselende gezichten, wél een grondig opgebouwd behandelplan en de tijd om echt naar uw klacht te luisteren.',
		p2: 'Yves Demol combineert klassieke kinesitherapie met manuele therapie om zowel de oorzaak als de symptomen aan te pakken.',
		p3: 'Hij volgt regelmatig bijscholingen waardoor hij geregistreerd staat in het kwaliteitsregister voor kinesitherapie en ook de bijzondere beroepsbekwaamheid in de manuele therapie bezit.',
		stat1: { nr: 'Erkend', sub: 'manueel therapeut' },
		stat2: { nr: 'Op maat', sub: 'behandelplan per patiënt' },
		fotoAlt: 'Portret van Yves Demol'
	},
	praktisch: {
		eyebrow: 'Praktisch',
		title: 'Verloop van uw afspraak',
		steps: [
			{
				pre: 'Bij uw eerste afspraak brengt u uw ',
				strong: 'voorschrift en identiteitskaart',
				post: ' mee. Beschikt u over medische beeldvorming en/of een operatieverslag? Neem dit gerust ook mee.'
			},
			{
				pre: 'We nemen de tijd voor een ',
				strong: 'intake',
				post: ': het kinesitherapeutisch gesprek en een grondig onderzoek.'
			},
			{
				pre: 'Samen stellen we een ',
				strong: 'behandelplan op maat',
				post: ' op, afgestemd op uw klacht en doelen.'
			}
		],
		cards: [
			{
				titel: 'Duur van de behandeling',
				tekst:
					'De eerste sessie duurt ongeveer 45 minuten, de daaropvolgende sessies ongeveer 30 minuten.'
			},
			{
				titel: 'Verhinderd?',
				tekst:
					'Gelieve minstens 24 uur op voorhand te verwittigen. Zo niet rekenen wij een sessie aan die niet door uw mutualiteit wordt terugbetaald.'
			},
			{
				titel: 'Zonder voorschrift',
				tekst:
					'U kan zich ook aanmelden zonder voorschrift van een arts. Deze sessies worden niet terugbetaald door uw mutualiteit.'
			}
		]
	},
	tarieven: {
		eyebrow: 'Tarieven',
		title: 'Heldere, eerlijke prijzen',
		std: {
			titel: 'Standaardtarieven',
			sub: 'Gangbare tarieven van de praktijk.',
			rows: [
				{ label: 'Intakegesprek + aanmaak dossier', note: '', prijs: '€ 65,00' },
				{ label: 'Eén sessie', note: '', prijs: '€ 39,00' },
				{ label: 'Behandeling aan huis', note: '(incl. verplaatsing)', prijs: '€ 42,00' }
			]
		},
		verhoogd: {
			titel: 'Verhoogde tegemoetkoming',
			sub: 'Bij recht op verhoogde tegemoetkoming zijn wij verplicht de officiële RIZIV-tarieven te hanteren.',
			rows: [
				{ label: 'Intake dossier', note: '', prijs: '€ 7,38' },
				{ label: 'Eén sessie', note: '(30 min)', prijs: '€ 31,64' },
				{ label: 'Huisbezoek', note: '(30 min)', prijs: '€ 34,80' }
			]
		},
		payNote: {
			pre: 'Betaling is mogelijk via ',
			strong: 'Bancontact, cash of overschrijving',
			post: '.'
		}
	},
	adres: {
		eyebrow: 'Contact',
		title: 'Adres & openingsuren',
		adresTitel: 'Adres',
		adresNote: 'Vlot bereikbaar met de wagen · parkeergelegenheid in de straat',
		urenTitel: 'Openingsuren',
		maVr: 'Maandag – Vrijdag',
		za: 'Zaterdag',
		zo: 'Zondag',
		gesloten: 'Gesloten',
		kaartTitel: 'Kaart Kine Demol'
	},
	cta: {
		title: 'Klaar om aan uw herstel te beginnen?',
		lead: 'Maak vandaag nog een afspraak. Heeft u een vraag over een klacht of terugbetaling? Bel of mail ons gerust.',
		btn: 'Afspraak maken',
		email: 'E-mail',
		adres: 'Adres'
	},
	footer: { rechten: 'Alle rechten voorbehouden' }
};

type Messages = typeof nl;

const fr: Messages = {
	nav: {
		links: [
			{ hash: '#over', label: 'À propos' },
			{ hash: '#behandelingen', label: 'Traitements' },
			{ hash: '#praktisch', label: 'En pratique' },
			{ hash: '#tarieven', label: 'Tarifs' },
			{ hash: '#contact', label: 'Contact' }
		],
		afspraak: 'Prendre rendez-vous',
		afspraakKort: 'Rendez-vous',
		menuOpen: 'Ouvrir le menu',
		menuDicht: 'Fermer le menu',
		belOns: 'Appelez-nous',
		uren: 'Lu–Ve',
		licht: 'Thème clair',
		donker: 'Thème sombre'
	},
	meta: {
		title: 'Kine Demol · Kinésithérapie & Thérapie manuelle à Machelen',
		description:
			'Kinésithérapie personnalisée et thérapie manuelle à Machelen. Traitement des douleurs du dos, de la nuque, des articulations et des muscles par Yves Demol, thérapeute manuel agréé.'
	},
	hero: {
		badge: 'Kinésithérapie & Thérapie manuelle',
		title: 'Votre rétablissement, guidé par des mains expertes.',
		lead: 'Kinésithérapie personnalisée et thérapie manuelle au cœur de Machelen. Nous traitons les douleurs du dos, de la nuque, des articulations et des muscles. Avec du temps, de l’attention et des années d’expertise.',
		cta: 'Prendre rendez-vous',
		cta2: 'Voir les traitements',
		fotoAlt: 'Traitement de thérapie manuelle chez Kine Demol',
		cardSub: 'Thérapeute manuel agréé'
	},
	trust: [
		{ nr: 'INAMI', sub: 'non conventionné' },
		{ nr: '10+ ans', sub: 'd’expérience' },
		{ nr: 'jusqu’à 20h', sub: 'ouvert en semaine' },
		{ nr: '1-à-1', sub: 'accompagnement personnel' }
	],
	behandelingen: {
		eyebrow: 'Traitements',
		title: 'Des soins adaptés à votre plainte',
		lead: 'D’une blessure aiguë aux douleurs chroniques du dos et de la nuque : chaque traitement commence par un examen approfondi et un plan sur mesure.',
		items: [
			{
				titel: 'Thérapie manuelle',
				tekst:
					'Mobilisations ciblées de la colonne vertébrale et des articulations en cas de douleurs cervicales, dorsales et de maux de tête.'
			},
			{
				titel: 'Kinésithérapie générale',
				tekst:
					'Rééducation après une opération, une blessure ou une longue inactivité, avec un programme d’exercices sur mesure.'
			},
			{
				titel: 'Rééducation sportive',
				tekst:
					'Retour à votre sport après une blessure, en développant force, stabilité et confiance.'
			},
			{
				titel: 'Kinésithérapie vestibulaire',
				tekst: 'Traitement des vertiges et des troubles de l’équilibre.'
			},
			{
				titel: 'École du dos & posture',
				tekst:
					'Apprenez à ménager votre dos au travail et au quotidien pour prévenir les douleurs, ainsi que le traitement de la lombalgie chronique.'
			},
			{
				titel: 'Thérapie de l’œdème & drainage lymphatique',
				tekst:
					'Drainage lymphatique manuel en cas de gonflement après une opération ou un traumatisme, pour accélérer la récupération.'
			}
		]
	},
	over: {
		eyebrow: 'À propos du cabinet',
		title: 'Un seul interlocuteur de confiance pour votre rétablissement',
		p1: 'Chez Kine Demol, vous êtes accompagné du début à la fin par le même thérapeute. Pas de visages changeants, mais un plan de traitement solidement construit et le temps d’écouter réellement votre plainte.',
		p2: 'Yves Demol combine la kinésithérapie classique et la thérapie manuelle pour traiter aussi bien la cause que les symptômes.',
		p3: 'Il suit régulièrement des formations continues, ce qui lui vaut d’être inscrit au registre de qualité de la kinésithérapie et de détenir la qualification professionnelle particulière en thérapie manuelle.',
		stat1: { nr: 'Agréé', sub: 'thérapeute manuel' },
		stat2: { nr: 'Sur mesure', sub: 'plan de traitement par patient' },
		fotoAlt: 'Portrait d’Yves Demol'
	},
	praktisch: {
		eyebrow: 'En pratique',
		title: 'Déroulement de votre rendez-vous',
		steps: [
			{
				pre: 'Lors de votre premier rendez-vous, apportez votre ',
				strong: 'prescription et votre carte d’identité',
				post: '. Vous disposez d’imagerie médicale et/ou d’un rapport opératoire ? N’hésitez pas à les apporter également.'
			},
			{
				pre: 'Nous prenons le temps pour une ',
				strong: 'anamnèse',
				post: ' : l’entretien kinésithérapeutique et un examen approfondi.'
			},
			{
				pre: 'Ensemble, nous établissons un ',
				strong: 'plan de traitement sur mesure',
				post: ', adapté à votre plainte et à vos objectifs.'
			}
		],
		cards: [
			{
				titel: 'Durée du traitement',
				tekst:
					'La première séance dure environ 45 minutes, les séances suivantes environ 30 minutes.'
			},
			{
				titel: 'Empêché ?',
				tekst:
					'Veuillez prévenir au moins 24 heures à l’avance. À défaut, nous facturons une séance qui n’est pas remboursée par votre mutualité.'
			},
			{
				titel: 'Sans prescription',
				tekst:
					'Vous pouvez également vous présenter sans prescription médicale. Ces séances ne sont pas remboursées par votre mutualité.'
			}
		]
	},
	tarieven: {
		eyebrow: 'Tarifs',
		title: 'Des prix clairs et honnêtes',
		std: {
			titel: 'Tarifs standards',
			sub: 'Tarifs habituels du cabinet.',
			rows: [
				{ label: 'Entretien d’admission + création du dossier', note: '', prijs: '€ 65,00' },
				{ label: 'Une séance', note: '', prijs: '€ 39,00' },
				{ label: 'Traitement à domicile', note: '(déplacement incl.)', prijs: '€ 42,00' }
			]
		},
		verhoogd: {
			titel: 'Intervention majorée',
			sub: 'Si vous avez droit à l’intervention majorée, nous sommes tenus d’appliquer les tarifs officiels de l’INAMI.',
			rows: [
				{ label: 'Dossier d’admission', note: '', prijs: '€ 7,38' },
				{ label: 'Une séance', note: '(30 min)', prijs: '€ 31,64' },
				{ label: 'Visite à domicile', note: '(30 min)', prijs: '€ 34,80' }
			]
		},
		payNote: {
			pre: 'Le paiement est possible par ',
			strong: 'Bancontact, en espèces ou par virement',
			post: '.'
		}
	},
	adres: {
		eyebrow: 'Contact',
		title: 'Adresse & heures d’ouverture',
		adresTitel: 'Adresse',
		adresNote: 'Facilement accessible en voiture · stationnement possible dans la rue',
		urenTitel: 'Heures d’ouverture',
		maVr: 'Lundi – Vendredi',
		za: 'Samedi',
		zo: 'Dimanche',
		gesloten: 'Fermé',
		kaartTitel: 'Carte Kine Demol'
	},
	cta: {
		title: 'Prêt à entamer votre rétablissement ?',
		lead: 'Prenez rendez-vous dès aujourd’hui. Une question sur une plainte ou un remboursement ? N’hésitez pas à nous appeler ou à nous écrire.',
		btn: 'Prendre rendez-vous',
		email: 'E-mail',
		adres: 'Adresse'
	},
	footer: { rechten: 'Tous droits réservés' }
};

const en: Messages = {
	nav: {
		links: [
			{ hash: '#over', label: 'About' },
			{ hash: '#behandelingen', label: 'Treatments' },
			{ hash: '#praktisch', label: 'Practical' },
			{ hash: '#tarieven', label: 'Rates' },
			{ hash: '#contact', label: 'Contact' }
		],
		afspraak: 'Book an appointment',
		afspraakKort: 'Book',
		menuOpen: 'Open menu',
		menuDicht: 'Close menu',
		belOns: 'Call us',
		uren: 'Mon–Fri',
		licht: 'Light theme',
		donker: 'Dark theme'
	},
	meta: {
		title: 'Kine Demol · Physiotherapy & Manual therapy in Machelen',
		description:
			'Personal physiotherapy and manual therapy in Machelen. Treatment of back, neck, joint and muscle complaints by Yves Demol, certified manual therapist.'
	},
	hero: {
		badge: 'Physiotherapy & Manual therapy',
		title: 'Your recovery, guided by expert hands.',
		lead: 'Personal physiotherapy and manual therapy in the heart of Machelen. We treat back, neck, joint and muscle complaints, with time, attention and years of expertise.',
		cta: 'Book an appointment',
		cta2: 'View treatments',
		fotoAlt: 'Manual therapy treatment at Kine Demol',
		cardSub: 'Certified manual therapist'
	},
	trust: [
		{ nr: 'RIZIV', sub: 'non-conventioned' },
		{ nr: '10+ years', sub: 'of experience' },
		{ nr: 'until 8 pm', sub: 'open on weekdays' },
		{ nr: '1-on-1', sub: 'personal guidance' }
	],
	behandelingen: {
		eyebrow: 'Treatments',
		title: 'Care tailored to your complaint',
		lead: 'From an acute injury to long-term back and neck complaints: every treatment starts with a thorough examination and a tailor-made plan.',
		items: [
			{
				titel: 'Manual therapy',
				tekst:
					'Targeted mobilisation of the spine and joints for neck, back and headache complaints.'
			},
			{
				titel: 'General physiotherapy',
				tekst:
					'Rehabilitation after surgery, injury or prolonged inactivity, with a tailor-made exercise programme.'
			},
			{
				titel: 'Sports rehabilitation',
				tekst: 'Return to your sport after injury, rebuilding strength, stability and confidence.'
			},
			{
				titel: 'Vestibular physiotherapy',
				tekst: 'Treatment of dizziness and vertigo problems.'
			},
			{
				titel: 'Back & posture training',
				tekst:
					'Learn to load your back correctly at work and in daily life to prevent complaints, plus treatment of chronic lower back pain.'
			},
			{
				titel: 'Oedema & lymphatic therapy',
				tekst:
					'Manual lymphatic drainage for swelling after surgery or trauma, to speed up recovery.'
			}
		]
	},
	over: {
		eyebrow: 'About the practice',
		title: 'One trusted point of contact for your recovery',
		p1: 'At Kine Demol you are guided from start to finish by the same therapist. No changing faces, but a carefully built treatment plan and the time to really listen to your complaint.',
		p2: 'Yves Demol combines classic physiotherapy with manual therapy to address both the cause and the symptoms.',
		p3: 'He regularly attends continuing education, which is why he is registered in the quality register for physiotherapy and also holds the special professional qualification in manual therapy.',
		stat1: { nr: 'Certified', sub: 'manual therapist' },
		stat2: { nr: 'Tailor-made', sub: 'treatment plan per patient' },
		fotoAlt: 'Portrait of Yves Demol'
	},
	praktisch: {
		eyebrow: 'Practical',
		title: 'How your appointment goes',
		steps: [
			{
				pre: 'For your first appointment, bring your ',
				strong: 'prescription and identity card',
				post: '. Do you have medical imaging and/or a surgery report? Feel free to bring those too.'
			},
			{
				pre: 'We take the time for an ',
				strong: 'intake',
				post: ': the physiotherapy interview and a thorough examination.'
			},
			{
				pre: 'Together we draw up a ',
				strong: 'tailor-made treatment plan',
				post: ', matched to your complaint and goals.'
			}
		],
		cards: [
			{
				titel: 'Duration of treatment',
				tekst: 'The first session takes about 45 minutes, subsequent sessions about 30 minutes.'
			},
			{
				titel: 'Unable to attend?',
				tekst:
					'Please let us know at least 24 hours in advance. Otherwise we charge a session that is not reimbursed by your health insurance fund.'
			},
			{
				titel: 'Without a prescription',
				tekst:
					'You can also come without a doctor’s prescription. These sessions are not reimbursed by your health insurance fund.'
			}
		]
	},
	tarieven: {
		eyebrow: 'Rates',
		title: 'Clear, honest prices',
		std: {
			titel: 'Standard rates',
			sub: 'The practice’s usual rates.',
			rows: [
				{ label: 'Intake consultation + file creation', note: '', prijs: '€ 65,00' },
				{ label: 'One session', note: '', prijs: '€ 39,00' },
				{ label: 'Home treatment', note: '(travel included)', prijs: '€ 42,00' }
			]
		},
		verhoogd: {
			titel: 'Increased reimbursement',
			sub: 'If you are entitled to increased reimbursement, we are required to apply the official RIZIV rates.',
			rows: [
				{ label: 'Intake file', note: '', prijs: '€ 7,38' },
				{ label: 'One session', note: '(30 min)', prijs: '€ 31,64' },
				{ label: 'Home visit', note: '(30 min)', prijs: '€ 34,80' }
			]
		},
		payNote: {
			pre: 'Payment is possible via ',
			strong: 'Bancontact, cash or bank transfer',
			post: '.'
		}
	},
	adres: {
		eyebrow: 'Contact',
		title: 'Address & opening hours',
		adresTitel: 'Address',
		adresNote: 'Easily reachable by car · parking available in the street',
		urenTitel: 'Opening hours',
		maVr: 'Monday – Friday',
		za: 'Saturday',
		zo: 'Sunday',
		gesloten: 'Closed',
		kaartTitel: 'Map of Kine Demol'
	},
	cta: {
		title: 'Ready to start your recovery?',
		lead: 'Book an appointment today. Have a question about a complaint or reimbursement? Feel free to call or email us.',
		btn: 'Book an appointment',
		email: 'Email',
		adres: 'Address'
	},
	footer: { rechten: 'All rights reserved' }
};

export const messages: Record<Locale, Messages> = { nl, fr, en };
