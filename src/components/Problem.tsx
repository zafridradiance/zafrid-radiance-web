import { problem } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Problem() {
  return (
    <section
      id="vision"
      className="paper-grain relative bg-linen py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={problem.eyebrow}
          title={problem.title}
          lead={problem.lead}
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {problem.points.map((point, i) => (
            <Reveal
              key={point.title}
              delay={i * 120}
              className="group bg-parchment p-8 transition-colors duration-500 hover:bg-linen lg:p-10"
            >
              <span className="figure text-4xl text-terracotta/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-serif text-2xl text-ink">
                {point.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{point.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
