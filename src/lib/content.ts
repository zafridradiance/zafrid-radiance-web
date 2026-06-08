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
  { label: "The Science", href: "#approach" },
  { label: "Impact", href: "#impact" },
  { label: "Applications", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* ---- Hero -------------------------------------------------------------- */
export const hero = {
  title: "Radiative cooling for Qatar’s rooftops.",
  subtitle:
    "A service-first roofing system engineered to reflect sunlight, emit heat through the sky, and make sustainable cooling infrastructure real in Qatar.",
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
  lead: "From May to October, Qatar absorbs intense solar radiation. Buildings soak up that heat and release it back, warming the surroundings until the entire city stays hot — day and night.",
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
  eyebrow: "The Science",
  title: "Passive roof cooling designed for Qatar.",
  lead: "Our coating combines two physical effects that work continuously, without electricity or moving parts — turning an ordinary roof into a surface that stays cooler on its own.",
  image:
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2000&q=80",
  pillars: [
    {
      number: "01",
      title: "Reflect the sun",
      body: "A high-reflectance coating keeps solar energy from converting into rooftop heat, reducing the energy pushed into buildings below.",
    },
    {
      number: "02",
      title: "Radiate to the sky",
      body: "The roof emits thermal energy through the 8–13µm atmospheric window, cooling surfaces without consuming electricity.",
    },
    {
      number: "03",
      title: "Scale as infrastructure",
      body: "Delivered as Cooling-as-a-Service, the system is intended for rooftops, water tanks, and vehicle surfaces across Qatar.",
    },
    {
      number: "04",
      title: "Align with Vision 2030",
      body: "Our model is built to reduce grid load and support sustainable construction in line with the country’s long-term goals.",
    },
  ],
};

/* ---- Impact ------------------------------------------------------------ */
export const impact = {
  eyebrow: "The Vision",
  title: "A national cooling strategy for Qatar.",
  lead: "We are framing rooftop radiative cooling as the next layer of sustainable built infrastructure, with measurable goals and Qatar-first delivery.",
  metrics: [
    { value: "10–15°C", label: "Target roof temperature drop" },
    { value: "Lower peak", label: "Grid-load reduction" },
    { value: "Vision 2030", label: "Sustainability alignment" },
  ],
  highlights: [
    {
      title: "Goals before claims",
      body: "Performance is presented as our first targets and validation objectives, not as already established results.",
    },
    {
      title: "Built for Qatar",
      body: "From formulation to on-site testing, our work is designed for the region’s climate, economy, and long-term vision.",
    },
  ],
};

/* ---- Work / Applications -------------------------------------------- */
export const work = {
  eyebrow: "Applications",
  title: "Where cooling infrastructure can make the biggest difference.",
  lead: "We are focused on roofs and surfaces that shape Qatar’s built environment, starting with the places that matter most for grid demand and resilience.",
  projects: [
    {
      title: "Commercial and government roofs",
      category: "Primary deployment",
      body: "Large exposed roofs are the first priority, where cooler surfaces can have the greatest impact on energy use and peak demand.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Residential compounds",
      category: "Community scale",
      body: "Multi-home compounds and regional developments can benefit from managed cooling infrastructure across many buildings.",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Water tanks and service structures",
      category: "Supporting assets",
      body: "Coating water tanks, pump houses, and other exposed surfaces helps lower ambient heat and protect critical infrastructure.",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "How we prove it",
      category: "Validation",
      body: "We are planning side-by-side thermal testing in real Qatar conditions to demonstrate how radiative cooling performs on representative roofs.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    },
  ],
};

/* ---- About ------------------------------------------------------------- */
export const about = {
  eyebrow: "About",
  title: "Qatar-born cooling infrastructure for the built environment.",
  lead: "Based in Qatar, we are developing passive rooftop cooling services that support sustainable resilience and cleaner grids.",
  body: [
    "We treat rooftop cooling as infrastructure, not a one-off coating — delivered, monitored, and maintained as an ongoing service so performance holds up year after year.",
    "We are building for the long term — partnering with building owners, developers, and public bodies to make cooler, lower-demand surfaces a standard part of how Qatar builds.",
  ],
  image:
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2000&q=80",
  values: [
    {
      title: "Qatar-first",
      body: "Designed for local climate, local customers, and local supply chains.",
    },
    {
      title: "Service-led",
      body: "Cooling-as-a-Service makes deployment, maintenance, and long-term resilience easier.",
    },
    {
      title: "Scientific",
      body: "We prioritize rigorous validation and clear goals over unverified performance claims.",
    },
  ],
};

/* ---- Contact ----------------------------------------------------------- */
export const contact = {
  eyebrow: "Get in Touch",
  title: "Ready to talk about cooling infrastructure.",
  lead: "For partnerships, research inquiries, or early deployment conversations, connect with us in Qatar.",
};

/* ---- Footer ------------------------------------------------------------ */
export const footer = {
  blurb: "Passive cooling infrastructure, engineered in Qatar for the way Qatar lives and builds.",
  columns: [
    {
      heading: "Explore",
      links: [
        { label: "The Issue", href: "#vision" },
        { label: "The Science", href: "#approach" },
        { label: "About", href: "#about" },
      ],
    },
    {
      heading: "Connect",
      links: [
        { label: "Applications", href: "#work" },
        { label: "Impact", href: "#impact" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
};
