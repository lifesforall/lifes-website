const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const translationsNl = {
  "Technology": "Technologie",
  "For Growers": "Voor telers",
  "Validation": "Validatie",
  "Pilots & Partners": "Pilots & partners",
  "About": "Over ons",
  "Our Story": "Ons verhaal",
  "Meet the Team": "Maak kennis met het team",
  "Our Belief": "Onze overtuiging",
  "Contact": "Contact",
  "A new interface between plants and technology": "Een nieuwe interface tussen planten en technologie",
  "Increase crop performance. Not complexity.": "Verbeter gewasprestaties. Niet de complexiteit.",
  "Life⁻s works closer to the plant to help growers unlock more value from the resources already used in the greenhouse—automatically and without another complex workflow.": "Life⁻s werkt dichter bij de plant en geeft telers meer waarde uit de middelen die al in de kas worden gebruikt—automatisch en binnen bestaande werkwijzen.",
  "Request a pilot": "Vraag een pilot aan",
  "View validation": "Bekijk de validatie",
  "The environment is controlled. The plant is the next frontier.": "De omgeving wordt gestuurd. De plant is de volgende stap.",
  "Greenhouses precisely manage light, water, nutrition, and climate. Life⁻s adds a proprietary plant-level layer designed to support crop performance without disrupting existing operations.": "Kassen sturen licht, water, voeding en klimaat nauwkeurig aan. Life⁻s voegt een eigen technologie op plantniveau toe, ontworpen om gewasprestaties te ondersteunen zonder de bestaande bedrijfsvoering te verstoren.",
  "01 · Plant level": "01 · Plantniveau",
  "Closer to the crop.": "Dichter bij het gewas.",
  "Life⁻s complements the systems that manage the greenhouse environment by working at plant level through a protected, proprietary approach.": "Life⁻s vult de systemen die de kasomgeving sturen aan met een beschermde, eigen aanpak op plantniveau.",
  "02 · Automatic": "02 · Automatisch",
  "Works in the background.": "Werkt op de achtergrond.",
  "Once installed, the system operates automatically. No dashboard, constant interpretation, or additional daily grower task is required.": "Na installatie werkt het systeem automatisch. Er is geen dashboard, voortdurende interpretatie of extra dagelijkse taak voor de teler nodig.",
  "03 · Measurable": "03 · Meetbaar",
  "Value is demonstrated crop by crop.": "Waarde wordt per gewas aangetoond.",
  "Performance is evaluated against controls and translated into a practical business case before commercial expansion.": "De prestaties worden vergeleken met controles en vóór commerciële uitbreiding vertaald naar een praktische businesscase.",
  "Protected by design:": "Bescherming als uitgangspunt:",
  "we explain the value, operating experience, and validated outcomes while keeping the proprietary mechanism confidential.": "we leggen de waarde, gebruikservaring en gevalideerde resultaten uit, terwijl het eigen werkingsmechanisme vertrouwelijk blijft.",
  "Built around grower economics.": "Ontwikkeld rond de economie van de teler.",
  "The objective is straightforward: create measurable crop value without adding inputs, technical burden, or a difficult adoption process.": "Het doel is helder: meetbare gewaswaarde creëren zonder extra inputs, technische belasting of een moeilijk implementatieproces.",
  "Low operational burden": "Lage operationele belasting",
  "Install it and let it work.": "Installeer het en laat het werken.",
  "Designed to operate automatically alongside normal greenhouse routines.": "Ontworpen om automatisch naast de normale kaswerkzaamheden te functioneren.",
  "No extra inputs": "Geen extra inputs",
  "More from existing resources.": "Meer uit bestaande middelen.",
  "Designed to support performance without continuously increasing water, nutrition, energy, or labour.": "Ontworpen om prestaties te ondersteunen zonder voortdurend meer water, voeding, energie of arbeid toe te voegen.",
  "Measured performance": "Gemeten prestaties",
  "Evidence before expansion.": "Bewijs vóór uitbreiding.",
  "Each crop is evaluated against agreed performance and commercial criteria.": "Elk gewas wordt beoordeeld aan de hand van afgesproken prestatie- en commerciële criteria.",
  "Aligned incentives": "Gelijke belangen",
  "Grower value comes first.": "Waarde voor de teler staat voorop.",
  "Commercial rollout follows demonstrated value rather than promises alone.": "Commerciële uitrol volgt op aangetoonde waarde, niet alleen op beloften.",
  "Prove the uplift. Quantify the value. Expand with confidence.": "Toon de verbetering aan. Bereken de waarde. Breid met vertrouwen uit.",
  "Independent Validation": "Onafhankelijke validatie",
  "Measured by an independent institution.": "Gemeten door een onafhankelijke instelling.",
  "The trial was designed, controlled, and measured by": "De proef is ontworpen, gecontroleerd en uitgevoerd door",
  ". Every figure below compares treated plants with an untreated control under identical conditions.": ". Elk onderstaande resultaat vergelijkt behandelde planten met een onbehandelde controlegroep onder identieke omstandigheden.",
  "Floral buds": "Bloemknoppen",
  "Chrysanthemum": "Chrysant",
  "Dry weight": "Drooggewicht",
  "Leaf area": "Bladoppervlak",
  "Spinach": "Spinazie",
  "Number of leaves": "Aantal bladeren",
  "Lettuce": "Sla",
  "Controlled-trial outcomes are crop- and condition-specific. Commercial greenhouse pilots are used to assess repeatability, operational fit, and grower economics.": "Resultaten van gecontroleerde proeven zijn gewas- en omstandigheidsspecifiek. Commerciële kaspilots worden gebruikt om herhaalbaarheid, praktische toepasbaarheid en telereconomie te beoordelen.",
  "From controlled validation to commercial greenhouse pilots.": "Van gecontroleerde validatie naar commerciële kaspilots.",
  "Life⁻s works with growers, horticultural specialists, and research partners to test repeatability, operational fit, and commercial value in real production environments.": "Life⁻s werkt samen met telers, tuinbouwspecialisten en onderzoekspartners om herhaalbaarheid, praktische toepasbaarheid en commerciële waarde in echte productieomgevingen te testen.",
  "Pilot and development partners": "Pilot- en ontwikkelpartners",
  "Every pilot must answer four questions.": "Elke pilot moet vier vragen beantwoorden.",
  "Performance": "Prestaties",
  "Does Life⁻s improve crop yields?": "Verhoogt Life⁻s de gewasopbrengst?",
  "Repeatability": "Herhaalbaarheid",
  "Can the results be repeated across crop cycles and growing environments?": "Kunnen de resultaten worden herhaald in verschillende teeltcycli en teeltomgevingen?",
  "Ease of use": "Gebruiksgemak",
  "Is the system simple to install and operate in the greenhouse?": "Is het systeem eenvoudig te installeren en te gebruiken in de kas?",
  "Commercial value": "Commerciële waarde",
  "Does it create a clear business case for the grower?": "Levert het een duidelijke businesscase op voor de teler?",
  "Transparent on results. Deliberately private on mechanism.": "Transparant over resultaten. Bewust terughoudend over het mechanisme.",
  "Partners receive the operational information needed to run and evaluate a pilot safely. The proprietary system itself remains protected.": "Partners ontvangen de operationele informatie die nodig is om een pilot veilig uit te voeren en te beoordelen. Het eigen systeem zelf blijft beschermd.",
  "Interested in a pilot?": "Interesse in een pilot?",
  "Explore what Life⁻s could bring to your next crop cycle.": "Ontdek wat Life⁻s voor uw volgende teeltcyclus kan betekenen.",
  "Expert Perspective": "Expertperspectief",
  "“Life⁻s has demonstrated in a trial in the greenhouse of HAS Green Academy that its device can change plant growth under identical conditions, providing a promising new instrument for plant growth management.”": "‘Life⁻s heeft in een proef in de kas van HAS Green Academy aangetoond dat het apparaat onder identieke omstandigheden de plantengroei kan veranderen en daarmee een veelbelovend nieuw instrument biedt voor het sturen van plantengroei.’",
  "Former Professor of New Cultivation Systems, HAS Green Academy": "Voormalig lector Nieuwe Teeltsystemen, HAS Green Academy",
  "Supported Innovation": "Ondersteunde innovatie",
  "Life⁻s is supported through the": "Life⁻s wordt ondersteund via de",
  "and an awarded": "en een toegekend",
  "MIT Feasibility Project": "MIT-haalbaarheidsproject",
  "The MIT Feasibility Project is financially supported by the": "Het MIT-haalbaarheidsproject wordt financieel ondersteund door de",
  "Province of South Holland": "Provincie Zuid-Holland",
  "It started with a problem that felt personal.": "Het begon met een probleem dat persoonlijk voelde.",
  "On his family farm, co-founder Arda saw how hard growers could work while still being left with a low profit margin.": "Op zijn familiebedrijf zag medeoprichter Arda hoe hard telers konden werken en toch met een lage winstmarge achterbleven.",
  "Increasing production often meant spending more on inputs, labour, or equipment. The available technologies could introduce additional cost and complexity before proving their value.": "Meer produceren betekende vaak meer uitgeven aan inputs, arbeid of apparatuur. Beschikbare technologieën konden extra kosten en complexiteit toevoegen voordat hun waarde was bewezen.",
  "“Could we create a device that increases grower profit, remains easy to use, and works without demanding the grower’s attention?”": "‘Kunnen we een apparaat ontwikkelen dat de winst van de teler verhoogt, eenvoudig te gebruiken blijft en werkt zonder voortdurend aandacht van de teler te vragen?’",
  "Co-founder Arda combined his experience in farming and electronics engineering to explore a new way of supporting plant development—one focused closer to the plant itself. Through this work, Arda established the original idea and technical foundation for Life⁻s. The technology had to create measurable crop value, but it also had to respect the grower’s reality.": "Medeoprichter Arda combineerde zijn ervaring in de landbouw en elektronica om een nieuwe manier te onderzoeken om de ontwikkeling van planten te ondersteunen—met de focus dichter bij de plant zelf. Met dit werk legde Arda de basis voor het oorspronkelijke idee en de technische fundering van Life⁻s. De technologie moest meetbare gewaswaarde creëren én aansluiten op de dagelijkse realiteit van de teler.",
  "It should operate automatically in the background—without another dashboard, complicated workflow, or daily interaction.": "Het systeem moest automatisch op de achtergrond werken—zonder extra dashboard, ingewikkelde werkwijze of dagelijkse interactie.",
  "That idea became Life⁻s.": "Dat idee werd Life⁻s.",
  "Born from a grower’s problem. Built around the grower’s reality.": "Ontstaan uit een probleem van de teler. Gebouwd rond de realiteit van de teler.",
  "Built by people who understand both technology and growers.": "Gebouwd door mensen die zowel technologie als telers begrijpen.",
  "Chief Executive Officer": "Algemeen directeur",
  "Electronics engineer with direct farming experience and a clear understanding of grower economics, crop production, adoption barriers, and daily farm reality.": "Elektronica-ingenieur met directe landbouwervaring en een helder begrip van telereconomie, gewasproductie, adoptiedrempels en de dagelijkse praktijk op het bedrijf.",
  "Arda leads the company vision, product strategy, fundraising, and the connection between the technology and grower value.": "Arda leidt de bedrijfsvisie, productstrategie, fondsenwerving en de verbinding tussen technologie en waarde voor de teler.",
  "Chief Technology Officer": "Technisch directeur",
  "Electronics engineer focused on agritech systems, hardware development, product reliability, and turning technical ideas into dependable products.": "Elektronica-ingenieur gericht op agritechsystemen, hardwareontwikkeling, productbetrouwbaarheid en het omzetten van technische ideeën in betrouwbare producten.",
  "Ali leads the development and technical validation of the Life⁻s device, including product reliability and its transition from research to greenhouse use.": "Ali leidt de ontwikkeling en technische validatie van het Life⁻s-apparaat, waaronder de productbetrouwbaarheid en de stap van onderzoek naar toepassing in de kas.",
  "Chief Commercial Officer": "Commercieel directeur",
  "Commercial leader with experience in go-to-market strategy, customer development, sales, partnerships, and revenue growth.": "Commercieel leider met ervaring in marktintroductie, klantontwikkeling, verkoop, partnerschappen en omzetgroei.",
  "Douglas leads commercial strategy, fundraising, and engagement with growers and partners to build a strong business around Life⁻s.": "Douglas leidt de commerciële strategie, fondsenwerving en samenwerking met telers en partners om een sterk bedrijf rond Life⁻s op te bouwen.",
  "Life begins with plants.": "Leven begint bij planten.",
  "Before there is food on a table, oxygen in the air, or shelter for countless forms of life, there is a plant.": "Voordat er voedsel op tafel ligt, zuurstof in de lucht is of beschutting bestaat voor talloze levensvormen, is er een plant.",
  "Plants quietly sustain the world. They turn light into growth, carry life through seasons, and support nearly every living system on Earth.": "Planten houden de wereld stilletjes in stand. Ze zetten licht om in groei, dragen leven door de seizoenen en ondersteunen vrijwel elk levend systeem op aarde.",
  "Yet we still understand them mostly from the outside.": "Toch begrijpen we ze nog vooral van buitenaf.",
  "Life⁻s was created to change that.": "Life⁻s is opgericht om dat te veranderen.",
  "We believe a plant is not simply something to manage. It is a living system that senses, responds, adapts, and communicates in ways we are only beginning to understand.": "Wij geloven dat een plant niet simpelweg iets is om te beheren. Het is een levend systeem dat waarneemt, reageert, zich aanpast en communiceert op manieren die we nog maar net beginnen te begrijpen.",
  "By bringing technology closer to the plant itself, Life⁻s aims to create a new relationship between growers and crops—one built on deeper understanding, better timing, and greater respect for life.": "Door technologie dichter bij de plant zelf te brengen, wil Life⁻s een nieuwe relatie tussen telers en gewassen creëren—gebaseerd op dieper inzicht, betere timing en meer respect voor leven.",
  "Our ambition goes beyond helping greenhouses grow more.": "Onze ambitie gaat verder dan kassen helpen meer te produceren.",
  "We want to help agriculture become more intelligent, more resilient, and more connected to the living systems it depends on.": "We willen landbouw intelligenter, veerkrachtiger en meer verbonden maken met de levende systemen waarvan zij afhankelijk is.",
  "Why Life⁻s?": "Waarom Life⁻s?",
  "Plants are the foundation of life on Earth. They feed us, produce the oxygen we breathe, support ecosystems, and make human life possible.": "Planten vormen de basis van het leven op aarde. Ze voeden ons, produceren de zuurstof die we inademen, ondersteunen ecosystemen en maken menselijk leven mogelijk.",
  "That is why": "Daarom blijft",
  "stays at the center of our name.": "centraal staan in onze naam.",
  "has a double meaning. It can be read as": "heeft een dubbele betekenis. Het kan worden gelezen als",
  "“Life is”": "‘Life is’",
  "— a statement about the essential role of plants in sustaining life. It also represents the many forms of life connected through plants: growers, people, animals, ecosystems, and future generations.": "— een uitspraak over de essentiële rol van planten bij het in stand houden van leven. Het staat ook voor de vele levensvormen die via planten verbonden zijn: telers, mensen, dieren, ecosystemen en toekomstige generaties.",
  "The": "Het",
  "symbol represents the electron: the negatively charged particle whose movement and behavior make electronic systems work. This connects directly to our technology and our engineering foundation.": "-symbool staat voor het elektron: het negatief geladen deeltje waarvan beweging en gedrag elektronische systemen laten werken. Dit sluit direct aan op onze technologie en technische basis.",
  "Just as electronic engineering is built on controlling electrons and electrical signals, Life⁻s applies this principle to plants. We sense and support the plant’s internal electrical signals to better understand growth, stress, and resource use.": "Zoals elektronische techniek is gebouwd op het sturen van elektronen en elektrische signalen, past Life⁻s dit principe toe op planten. We detecteren en ondersteunen de interne elektrische signalen van de plant om groei, stress en het gebruik van hulpbronnen beter te begrijpen.",
  "Our slogan,": "Onze slogan,",
  "“for all,”": "‘for all’,",
  "reflects our belief that we stand not only for growers, but also for people and the planet. Our technology helps growers produce more efficiently, but our mission goes beyond the greenhouse.": "weerspiegelt onze overtuiging dat we er niet alleen voor telers zijn, maar ook voor mensen en de planeet. Onze technologie helpt telers efficiënter te produceren, maar onze missie gaat verder dan de kas.",
  "By supporting plant life, Life⁻s aims to help protect life on Earth — for growers, for people, for the planet, and for all.": "Door plantenleven te ondersteunen wil Life⁻s het leven op aarde helpen beschermen—voor telers, voor mensen, voor de planeet en voor iedereen.",
  "Our purpose": "Ons doel",
  "for all.": "voor iedereen.",
  "Because every life begins with another life.": "Omdat elk leven begint met ander leven.",
  "For growers": "Voor telers",
  "For people": "Voor mensen",
  "For the planet": "Voor de planeet",
  "Let’s talk about the next crop cycle.": "Laten we praten over de volgende teeltcyclus.",
  "For pilot, partnership, investment, or commercial inquiries, send us a short message.": "Stuur ons een kort bericht voor vragen over pilots, partnerschappen, investeringen of commerciële samenwerking.",
  "We will direct your inquiry to the right member of the Life⁻s team.": "Wij zorgen dat uw vraag bij het juiste lid van het Life⁻s-team terechtkomt.",
  "Name": "Naam",
  "Email": "E-mail",
  "I am a": "Ik ben een",
  "Grower": "Teler",
  "Investor": "Investeerder",
  "Partner": "Partner",
  "Research or industry organisation": "Onderzoeks- of brancheorganisatie",
  "Other": "Anders",
  "Message": "Bericht",
  "Send inquiry": "Verstuur aanvraag",
  "A new interface between plants and technology.": "Een nieuwe interface tussen planten en technologie.",
  "The Netherlands": "Nederland",
  "KvK number": "KvK-nummer",
  "© 2026 Lifes Nederland B.V. All rights reserved.": "© 2026 Lifes Nederland B.V. Alle rechten voorbehouden."
};

const language = new URLSearchParams(window.location.search).get('lang') === 'nl' ? 'nl' : 'en';
document.documentElement.lang = language;
document.querySelectorAll('[data-lang]').forEach((link) => {
  link.classList.toggle('active', link.dataset.lang === language);
  link.setAttribute('aria-current', link.dataset.lang === language ? 'page' : 'false');
});

if (language === 'nl') {
  document.title = 'Life⁻s | Een nieuwe interface tussen planten en technologie';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = 'Life⁻s helpt glastuinbouwers dichter bij het gewas te werken, prestaties te verbeteren en meer waarde te creëren zonder extra complexiteit.';

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => {
    const trimmed = node.nodeValue.trim();
    if (!trimmed || !translationsNl[trimmed]) return;
    const leading = node.nodeValue.match(/^\s*/)[0];
    const trailing = node.nodeValue.match(/\s*$/)[0];
    node.nodeValue = leading + translationsNl[trimmed] + trailing;
  });

  const message = document.querySelector('textarea[name="message"]');
  if (message) message.placeholder = 'Vertel ons kort over uw gewas, kas of interesse in samenwerking.';
  const nav = document.querySelector('.nav');
  if (nav) nav.setAttribute('aria-label', 'Hoofdnavigatie');
  const languageSwitch = document.querySelector('.language-switch');
  if (languageSwitch) languageSwitch.setAttribute('aria-label', 'Taalkeuze');
}
