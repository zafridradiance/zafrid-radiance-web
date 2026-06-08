"use client";

import { useState } from "react";
import { work } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const VISIBLE = 5;

export default function Work() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? work.projects : work.projects.slice(0, VISIBLE);
  const hidden = work.projects.length - VISIBLE;

  return (
    <section id="work" className="relative bg-linen py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={work.eyebrow}
          title={work.title}
          lead={work.lead}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 3) * 110}
              as="article"
              className="group relative h-80 overflow-hidden rounded-md border border-line bg-pine"
            >
              {/* Thermal-reveal image: warm at rest, cools to blue on hover */}
              {project.image && (
                <div
                  className="absolute inset-0 scale-100 bg-cover bg-center transition-all duration-[1.1s] ease-out group-hover:scale-105 group-hover:hue-rotate-[150deg] group-hover:saturate-150"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    filter: "sepia(0.35) saturate(1.1)",
                  }}
                  aria-hidden
                />
              )}
              <div className="scrim absolute inset-0" aria-hidden />

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

        {!showAll && hidden > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="rounded-sm border border-line-strong bg-linen px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink/[0.06]"
            >
              Load more
            </button>
          </div>
        )}

        {/* Scaling flow: single surface -> cooler nation */}
        <Reveal className="mt-16">
          <p className="eyebrow brand-rule inline-block text-glacier">
            {work.scale.eyebrow}
          </p>
          <h3 className="mt-4 max-w-2xl font-serif text-2xl text-ink lg:text-3xl">
            {work.scale.title}
          </h3>

          <ol className="mt-10 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
            {work.scale.steps.map((step, i) => {
              const last = i === work.scale.steps.length - 1;
              return (
                <li
                  key={step.label}
                  className="flex flex-col items-stretch gap-3 lg:flex-1 lg:flex-row lg:items-center"
                >
                  <div className="flex-1 rounded-md border border-line bg-parchment p-5 text-center text-ink">
                    <span className="figure text-xs text-glacier">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1.5 font-serif text-lg leading-tight">
                      {step.label}
                    </p>
                    <p className="mt-1 text-xs text-muted">{step.caption}</p>
                  </div>

                  {!last && (
                    <span
                      className="mx-auto text-xl text-glacier lg:mx-1"
                      aria-hidden
                    >
                      <span className="hidden lg:inline">→</span>
                      <span className="lg:hidden">↓</span>
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
