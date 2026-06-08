import { work } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" className="relative bg-linen py-20 lg:py-28">
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
              className="group relative h-80 overflow-hidden rounded-md border border-line bg-pine"
            >
              {/* Thermal-reveal image: warm at rest, cools to blue on hover */}
              <div
                className="absolute inset-0 scale-100 bg-cover bg-center transition-all duration-[1.1s] ease-out group-hover:scale-105 group-hover:hue-rotate-[150deg] group-hover:saturate-150"
                style={{
                  backgroundImage: `url(${project.image})`,
                  filter: "sepia(0.35) saturate(1.1)",
                }}
                aria-hidden
              />
              <div className="scrim absolute inset-0" aria-hidden />

              {/* "Thermal view" cue appears on hover */}
              <span className="eyebrow absolute right-4 top-4 rounded-full bg-pine-deep/60 px-3 py-1 text-[0.65rem] text-frost opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Thermal view
              </span>

              {/* Content */}
              <div className="relative flex h-full flex-col justify-end p-7">
                <span className="eyebrow text-frost">{project.category}</span>
                <h3 className="mt-2 font-serif text-2xl text-parchment">
                  {project.title}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-frost/85 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                  {project.body}
                </p>
              </div>

              {/* Glacier top border on hover */}
              <span className="absolute inset-x-0 top-0 h-px w-0 bg-glacier transition-all duration-500 group-hover:w-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
