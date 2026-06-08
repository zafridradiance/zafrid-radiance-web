import { impact } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";

export default function Impact() {
  return (
    <section
      id="impact"
      className="paper-grain relative bg-parchment py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={impact.eyebrow}
          title={impact.title}
          lead={impact.lead}
          align="center"
        />

        {/* Metrics band — almanac-style hairline grid, mono numerals */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line lg:grid-cols-4">
          {impact.metrics.map((metric, i) => (
            <Reveal
              key={metric.label}
              delay={i * 90}
              className="bg-parchment px-6 py-10 text-center"
            >
              <p className="figure text-3xl text-pine lg:text-4xl">
                <CountUp value={metric.value} />
              </p>
              <p className="mt-2 text-sm leading-snug text-muted">
                {metric.label}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {impact.highlights.map((h, i) => (
            <Reveal
              key={h.title}
              delay={i * 120}
              className="relative overflow-hidden rounded-md bg-pine p-8 text-parchment lg:p-10"
            >
              <span
                className="figure absolute -right-4 -top-6 text-8xl text-frost/10"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="relative font-serif text-2xl text-parchment">
                {h.title}
              </h3>
              <p className="relative mt-3 leading-relaxed text-frost/80">
                {h.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
