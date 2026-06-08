import { about } from "@/lib/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-pine-deep py-24 text-parchment lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Text */}
        <div>
          <Reveal>
            <span className="eyebrow brand-rule inline-block text-frost">
              {about.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-serif text-4xl leading-[1.1] tracking-[-0.015em] text-parchment sm:text-5xl">
              {about.title}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-lg leading-relaxed text-frost/80">
              {about.lead}
            </p>
          </Reveal>
          {about.body.map((para, i) => (
            <Reveal key={i} delay={200 + i * 80}>
              <p className="mt-4 leading-relaxed text-frost/70">{para}</p>
            </Reveal>
          ))}

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {about.values.map((value, i) => (
              <Reveal key={value.title} delay={300 + i * 90}>
                <h3 className="font-serif text-xl text-frost">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-frost/70">
                  {value.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Image */}
        <Reveal delay={120} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${about.image})`,
                filter: "sepia(0.3) saturate(1.1)",
              }}
              aria-hidden
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(27,48,44,0.35)" }}
              aria-hidden
            />
          </div>
          {/* Glacier frame accent */}
          <span
            className="absolute -bottom-4 -right-4 -z-0 h-32 w-32 rounded-md border border-glacier/40"
            aria-hidden
          />
        </Reveal>
      </div>
    </section>
  );
}
