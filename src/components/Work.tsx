import { work } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" className="relative bg-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={work.eyebrow}
          title={work.title}
          lead={work.lead}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {work.projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 3) * 110}
              as="article"
              className="group relative h-80 overflow-hidden rounded-2xl bg-ink"
            >
              {/* Image */}
              <div
                className="absolute inset-0 scale-100 bg-cover bg-center transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
                aria-hidden
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(5,15,26,0.6)" }}
                aria-hidden
              />

              {/* Content */}
              <div className="relative flex h-full flex-col justify-end p-7">
                <span className="eyebrow text-gold-light">
                  {project.category}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-ivory">
                  {project.title}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-mist opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100">
                  {project.body}
                </p>
              </div>

              {/* Gold top border on hover */}
              <span className="absolute inset-x-0 top-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
