import { solution } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Solution() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-ink py-28 text-ivory lg:py-36"
    >
      {/* Ambient imagery */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${solution.image})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--color-ink) 0%, rgba(10,28,46,0.85) 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={solution.eyebrow}
          title={solution.title}
          lead={solution.lead}
          tone="dark"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {solution.pillars.map((pillar, i) => (
            <Reveal
              key={pillar.number}
              delay={i * 100}
              className="group relative rounded-2xl border border-ivory/10 bg-ivory/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-gold/40 hover:bg-ivory/[0.06] lg:p-10"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-3xl text-gold">
                  {pillar.number}
                </span>
                <h3 className="font-serif text-2xl text-ivory">
                  {pillar.title}
                </h3>
              </div>
              <p className="mt-4 leading-relaxed text-mist">{pillar.body}</p>
              <span className="mt-6 block h-px w-12 bg-gradient-to-r from-gold to-transparent transition-all duration-500 group-hover:w-24" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
