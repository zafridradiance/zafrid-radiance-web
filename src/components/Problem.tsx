import { problem } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Problem() {
  return (
    <section id="vision" className="relative bg-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={problem.eyebrow}
          title={problem.title}
          lead={problem.lead}
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-3">
          {problem.points.map((point, i) => (
            <Reveal
              key={point.title}
              delay={i * 120}
              className="group bg-ivory p-8 transition-colors duration-500 hover:bg-sand/60 lg:p-10"
            >
              <span className="font-serif text-5xl text-gold/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-serif text-2xl text-ink">
                {point.title}
              </h3>
              <p className="mt-3 leading-relaxed text-stone">{point.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
