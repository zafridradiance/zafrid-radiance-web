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
      title: "School buses",
      category: "Vehicles",
      body: "Parked in open lots all day, buses turn into ovens by home time. A reflective coating on the roof sends sunlight back, so children step into a cooler cabin and the air conditioning works far less to catch up.",
      image:
        "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Rooftop water tanks",
      category: "Industrial & residential",
      body: "Across buildings and industrial areas, exposed tanks soak up six months of heat until the water inside runs scalding, hot enough to burn at the pump. Coating them reflects that heat and keeps stored water cooler and safer.",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Building roofs",
      category: "Any building",
      body: "Hot roofs drive heat straight into the floors below, forcing air conditioners to run harder, pushing bills up and wearing the system down over time. The coating reflects that radiation before it ever gets inside.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Shelters & sheds",
      category: "Public & outdoor",
      body: "Parking shelters, park canopies, and car sheds collect heat all day. A reflective layer keeps these everyday shaded spaces noticeably cooler for the people using them.",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
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
