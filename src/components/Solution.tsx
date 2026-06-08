import { solution } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Solution() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-pine py-24 text-parchment lg:py-32"
    >
      {/* Ambient imagery with flat scrim (no gradients) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${solution.image})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-pine/85" aria-hidden />
      {/* Isotherm contour texture */}
      <Isotherms className="absolute inset-0 text-frost/[0.07]" />

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
              className="relative rounded-md border border-frost/15 bg-parchment/[0.04] p-8 lg:p-10"
            >
              <div className="flex items-baseline gap-4">
                <span className="figure text-2xl text-glacier">
                  {pillar.number}
                </span>
                <h3 className="font-serif text-2xl text-parchment">
                  {pillar.title}
                </h3>
              </div>
              <p className="mt-4 leading-relaxed text-frost/80">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Thin topographic contour lines as decorative scientific texture. */
function Isotherms({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${60 + i * 70} Q 360 ${10 + i * 70}, 720 ${
            60 + i * 70
          } T 1440 ${60 + i * 70}`}
        />
      ))}
    </svg>
  );
}
