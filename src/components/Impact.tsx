import { impact } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Impact() {
  return (
    <section id="impact" className="relative bg-sand/40 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={impact.eyebrow}
          title={impact.title}
          lead={impact.lead}
          align="center"
        />

        {/* Metrics band */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 lg:grid-cols-4">
          {impact.metrics.map((metric, i) => (
            <Reveal
              key={metric.label}
              delay={i * 90}
              className="bg-ivory px-6 py-10 text-center"
            >
              <p className="font-serif text-4xl text-ink lg:text-5xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-stone">
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
              className="relative overflow-hidden rounded-2xl bg-ink p-8 text-ivory lg:p-10"
            >
              <span
                className="absolute -right-6 -top-6 font-serif text-8xl text-gold/15"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="relative font-serif text-2xl text-ivory">
                {h.title}
              </h3>
              <p className="relative mt-3 leading-relaxed text-mist">
                {h.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
