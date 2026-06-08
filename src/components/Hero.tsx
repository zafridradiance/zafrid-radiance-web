import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-deep"
    >
      {/* Cinematic background */}
      <div
        className="absolute inset-0 animate-kenburns bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.image})` }}
        aria-hidden
      />
      <div className="absolute inset-0 cinematic-overlay" aria-hidden />
      {/* Gold vignette accent */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(900px 600px at 80% 20%, rgba(194,160,76,0.18), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-24 lg:px-10">
        <div className="max-w-3xl">
          <h1
            className="animate-fade-up mt-6 font-serif text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.25s" }}
          >
            {hero.title}
          </h1>
          <p
            className="animate-fade-up mt-7 max-w-xl text-lg leading-relaxed text-mist sm:text-xl"
            style={{ animationDelay: "0.45s" }}
          >
            {hero.subtitle}
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink-deep transition-all duration-300 hover:bg-gold-light"
            >
              {hero.primaryCta.label}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-7 py-3.5 text-sm font-semibold text-ivory transition-all duration-300 hover:border-gold hover:text-gold-light"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        {/* Hero stats */}
        <div
          className="animate-fade-up mt-20 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ivory/10 bg-ivory/5 sm:grid-cols-3"
          style={{ animationDelay: "0.8s" }}
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="bg-ink-deep/40 px-6 py-6 backdrop-blur-sm">
              <p className="font-serif text-3xl text-gold-light sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-mist">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/30 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-gold-light" />
        </div>
      </div>
    </section>
  );
}
