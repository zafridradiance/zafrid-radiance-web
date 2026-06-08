/* ============================================================================
   Zafrid Radiance — site content
   This is the single source of truth for all copy and imagery on the site.
   Edit the text/links/images here; components render whatever lives below.
============================================================================ */

export const site = {
  name: "Zafrid Radiance",
  tagline: "Radiative cooling for Qatar's rooftops.",
  description:
    "Zafrid Radiance is a Qatar-based cooling infrastructure venture building radiative roofing systems for National Vision 2030. We combine advanced materials science and Cooling-as-a-Service to reduce rooftop heat and ease grid demand.",
  url: "https://zafridradiance.org",
  email: "zafridradiance@gmail.com",
  location: "Qatar",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/zafridradiance" },
    { label: "Instagram", href: "https://www.instagram.com/zafridradiance" },
    { label: "X", href: "https://x.com/zafridradiance" },
  ],
};

/* Navigation — anchors map to section ids on the single page. */
export const nav = [
  { label: "The Issue", href: "#vision" },
  { label: "Solution", href: "#approach" },
  { label: "Applications", href: "#work" },
  { label: "Contact", href: "#contact" },
];

/* ---- Hero -------------------------------------------------------------- */
export const hero = {
  title: "Radiative cooling for Qatar’s rooftops.",
  subtitle:
    "Cooler surfaces. Lower energy. A planet that doesn't have to pay for comfort.",
  primaryCta: { label: "The Science", href: "#approach" },
  secondaryCta: { label: "Applications", href: "#work" },
  image:
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2400&q=80",
  stats: [
    { value: "10–15°C", label: "Target roof cooling" },
    { value: "Cooling-as-a-Service", label: "Infrastructure-first model" },
    { value: "Qatar", label: "Qatar-based development" },
  ],
};

/* ---- Problem / The Challenge ------------------------------------------ */
export const problem = {
  eyebrow: "The Issue",
  title: "Six months of relentless heat, trapped in the city.",
  lead: "From May to October, Qatar absorbs intense solar radiation. Buildings soak up that heat and release it back, warming the surroundings until the entire city stays hot, day and night.",
  points: [
    {
      title: "Rooftops that trap heat",
      body: "Dark, exposed roofs and façades hold onto solar energy instead of shedding it, climbing far hotter than the surrounding air. Long after sunset they keep radiating that heat indoors and out, so neighbourhoods never fully cool down.",
    },
    {
      title: "Cooling load and rising bills",
      body: "All that captured heat forces buildings to lean on artificial cooling. Air conditioners run harder at peak times, placing a heavy load on the grid and pulling electricity bills steadily higher. There needs to be a way to remove this extra heat before it ever gets inside.",
    },
    {
      title: "A toll on health",
      body: "Persistent urban heat is more than discomfort. It raises the risk of heat exhaustion and heat stroke, drives dehydration and cardiovascular strain, and worsens air quality that aggravates respiratory conditions like asthma.",
    },
  ],
};

/* ---- Solution / Our Approach ------------------------------------------ */
export const solution = {
  eyebrow: "Solution",
  title: "Passive roof cooling.",
  lead: "Our coating combines two physical effects that work continuously, without electricity or moving parts, turning an ordinary roof into a surface that stays cooler on its own.",
  image:
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2000&q=80",
  pillars: [
    {
      number: "01",
      title: "Reflect the sun",
      body: "A high-reflectance paint keeps solar energy from converting into rooftop heat.",
    },
    {
      number: "02",
      title: "Radiate to the sky",
      body: "The paint reflects the heat back out to the atmosphere.",
    },
  ],
};

/* ---- Work / Applications -------------------------------------------- */
export const work = {
  eyebrow: "Applications",
  title: "Where cooling infrastructure can make the biggest difference.",
  lead: "We focus on every surface that takes the full force of the sun, the everyday roofs, vehicles, and structures where reflecting heat makes the biggest difference.",
  projects: [
    {
      title: "Building roofs",
      category: "Any building",
      body: "Hot roofs drive heat straight into the floors below, forcing air conditioners to run harder, pushing bills up and wearing the system down over time. The coating reflects that radiation before it ever gets inside.",
      image: "/app-roofs.jpg",
    },
    {
      title: "Public transportation",
      category: "Buses & transit",
      body: "Buses and transit vehicles bake in open lots all day and turn into ovens by the time people board. A reflective coating on the roof sends sunlight back, so passengers step into a cooler cabin and the air conditioning works far less to catch up.",
      image: "/app-transport.jpg",
    },
    {
      title: "Rooftop water tanks",
      category: "Stored water",
      body: "Across buildings and industrial areas, exposed tanks soak up six months of heat until the water inside runs scalding, hot enough to burn at the pump. Coating them reflects that heat and keeps stored water cooler and safer.",
      image: "/app-tanks.jpg",
    },
    {
      title: "Metro stations & bus stops",
      category: "Transit stops",
      body: "Station canopies and bus-stop shelters sit fully exposed while people wait in the heat. Coating their roofs reflects the sun, keeping these waiting spaces cooler and more bearable through the day.",
      image: "/app-stations.jpg",
    },
    {
      title: "Shelters & sheds",
      category: "Shade structures",
      body: "Parking shelters, park canopies, and car sheds collect heat all day. A reflective layer keeps these everyday shaded spaces noticeably cooler for the people using them.",
      image: "/app-shelters.jpg",
    },
    {
      title: "Schools & hospitals",
      category: "Sensitive spaces",
      body: "Children and patients feel the heat most. Cooler roofs keep classrooms and wards more comfortable while cutting the energy these buildings run around the clock.",
      image: "",
    },
    {
      title: "Stadiums & sports facilities",
      category: "Sports & events",
      body: "Vast roofs and open stands trap the sun over crowds and athletes. Reflective coating lowers surface heat across the venue and eases cooling demand on event days.",
      image: "",
    },
    {
      title: "Warehouses & logistics",
      category: "Industrial roofs",
      body: "Huge metal roofs turn warehouses into heat traps. Coating them keeps stored goods and workers cooler and takes a major load off industrial cooling.",
      image: "",
    },
    {
      title: "Mosques",
      category: "Community spaces",
      body: "Domes and courtyards sit fully exposed through the day. A reflective layer keeps prayer halls and shaded areas cooler for everyone who gathers there.",
      image: "",
    },
    {
      title: "Parking garages & car parks",
      category: "Parking decks",
      body: "Open rooftop decks and top floors bake all day, heating the cars and the levels below. Coating the exposed deck keeps the whole structure cooler.",
      image: "",
    },
    {
      title: "Cold storage & data centres",
      category: "Heat-critical",
      body: "These facilities fight heat every second. Reflecting solar gain off the roof means less work for the systems keeping contents cold and servers running.",
      image: "",
    },
    {
      title: "Airports & terminals",
      category: "Aviation",
      body: "Sprawling terminal roofs and jet bridges face constant sun. Cooler surfaces reduce the enormous cooling load of moving thousands of people through the heat.",
      image: "",
    },
    {
      title: "Worker housing",
      category: "Residential welfare",
      body: "Comfort and safety matter most where people rest after long days in the sun. Cooler roofs make accommodation more livable and easier to cool.",
      image: "",
    },
    {
      title: "Ports & shipping containers",
      category: "Freight & logistics",
      body: "Metal containers turn into ovens on the dock. A reflective coating keeps contents and surfaces cooler across exposed port yards.",
      image: "",
    },
    {
      title: "Fuel & storage facilities",
      category: "Storage depots",
      body: "Exposed tanks and depots absorb relentless heat, raising temperatures and risk. Reflective coating helps keep stored material cooler and safer.",
      image: "",
    },
    {
      title: "Petrol stations",
      category: "Forecourt canopies",
      body: "Forecourt canopies and pumps sit in full sun all day. A reflective coating keeps the canopy and the area beneath it cooler for staff, customers, and fuelling equipment.",
      image: "",
    },
    {
      title: "Industrial areas",
      category: "Plants & facilities",
      body: "Factories, plants, and yards run hot machinery under relentless sun. Coating roofs and exposed surfaces lowers ambient heat across the site and protects equipment and workers.",
      image: "",
    },
  ],
  scale: {
    eyebrow: "How it scales",
    title: "From a single surface to a cooler nation.",
    steps: [
      { label: "Buildings, shelters & buses", caption: "Individual surfaces" },
      { label: "Whole communities", caption: "Compounds & districts" },
      { label: "Cities", caption: "Urban-scale deployment" },
      { label: "A cool Qatar", caption: "National impact" },
    ],
  },
};

/* ---- Contact ----------------------------------------------------------- */
export const contact = {
  eyebrow: "Get in Touch",
  title: "Ready to talk about cooling infrastructure.",
  lead: "For partnerships, research inquiries, or early deployment conversations connect below.",
};

/* ---- Footer ------------------------------------------------------------ */
export const footer = {
  blurb: "Passive cooling infrastructure, engineered in Qatar for the way Qatar lives and builds.",
  columns: [
    {
      heading: "Explore",
      links: [
        { label: "The Issue", href: "#vision" },
        { label: "Solution", href: "#approach" },
      ],
    },
    {
      heading: "Connect",
      links: [
        { label: "Applications", href: "#work" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
};
