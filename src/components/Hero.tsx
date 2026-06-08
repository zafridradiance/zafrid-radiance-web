import { hero } from "@/lib/content";
import Button from "./Button";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <section
      id="top"
      className="paper-grain relative flex min-h-screen items-center overflow-hidden bg-parchment"
    >
      {/* Warm-to-cool ambient field: flat color blocks, no gradients */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-linen" />
        <div className="absolute bottom-0 right-0 h-1/3 w-1/2 bg-frost/40" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 pt-36 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10">
        {/* Copy */}
        <div className="max-w-2xl">
          <p
            className="eyebrow animate-fade-up text-glacier"
            style={{ animationDelay: "0.1s" }}
          >
            Radiative Cooling Infrastructure
          </p>
          <h1
            className="animate-fade-up mt-6 font-serif text-5xl leading-[1.04] tracking-[-0.02em] text-ink sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.25s" }}
          >
            {hero.title}
          </h1>
          <p
            className="animate-fade-up mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            style={{ animationDelay: "0.45s" }}
          >
            {hero.subtitle}
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.6s" }}
          >
            <Button href="#contact" variant="primary">
              Request an assessment
            </Button>
            <Button href="#approach" variant="secondary">
              {hero.primaryCta.label}
            </Button>
          </div>
        </div>

        {/* Thermometer motif: warm reading cooling toward the target */}
        <div
          className="animate-fade-up relative hidden lg:block"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="rounded-lg border border-line bg-parchment/70 p-8 backdrop-blur-sm">
            <p className="eyebrow text-glacier">Surface temperature</p>
            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="text-sm text-muted">Untreated roof</p>
                <p className="figure mt-1 text-4xl text-terracotta">68°C</p>
              </div>
              <span className="mb-2 text-2xl text-glacier">→</span>
              <div className="text-right">
                <p className="text-sm text-muted">With Radiance</p>
                <p className="figure mt-1 text-4xl text-glacier">
                  <CountUp value="53°C" />
                </p>
              </div>
            </div>
            {/* Flat thermal bar */}
            <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-linen">
              <div className="h-full w-2/3 rounded-full bg-glacier" />
            </div>
            <p className="mt-3 text-sm text-muted">
              Target reduction of {hero.stats[0].value} on exposed surfaces.
            </p>
          </div>
        </div>
      </div>

      {/* Stats band — hairline almanac grid with mono figures */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 border-t border-line sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-line px-2 py-6 sm:border-l sm:px-6 sm:first:border-l-0"
              >
                <p className="figure text-2xl text-ink sm:text-3xl">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
