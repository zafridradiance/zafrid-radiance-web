import { about } from "@/lib/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-ink-deep py-28 text-ivory lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Text */}
        <div>
          <Reveal>
            <span className="eyebrow gold-rule inline-block text-gold-light">
              {about.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-serif text-4xl leading-[1.1] text-ivory sm:text-5xl">
              {about.title}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              {about.lead}
            </p>
          </Reveal>
          {about.body.map((para, i) => (
            <Reveal key={i} delay={200 + i * 80}>
              <p className="mt-4 leading-relaxed text-mist/80">{para}</p>
            </Reveal>
          ))}

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {about.values.map((value, i) => (
              <Reveal key={value.title} delay={300 + i * 90}>
                <h3 className="font-serif text-xl text-gold-light">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist/80">
                  {value.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Image */}
        <Reveal delay={120} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${about.image})` }}
              aria-hidden
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, rgba(5,15,26,0.65) 100%)",
              }}
              aria-hidden
            />
          </div>
          {/* Gold frame accent */}
          <span
            className="absolute -bottom-4 -right-4 -z-0 h-32 w-32 rounded-2xl border border-gold/40"
            aria-hidden
          />
        </Reveal>
      </div>
    </section>
  );
}
