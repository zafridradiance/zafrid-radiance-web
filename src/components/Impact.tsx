import { impact } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";

export default function Impact() {
  return (
    <section
      id="impact"
      className="paper-grain relative bg-parchment py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={impact.eyebrow}
          title={impact.title}
          lead={impact.lead}
          align="center"
        />

        {/* Metrics band — almanac-style hairline grid, mono numerals */}
        <div className="mt-16 grid overflow-hidden border border-line divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {impact.metrics.map((metric, i) => (
            <Reveal
              key={metric.label}
              delay={i * 90}
              className="bg-parchment px-6 py-10 text-center"
            >
              <p className="figure text-3xl text-pine lg:text-4xl">
                <CountUp value={metric.value} />
              </p>
              <p className="mt-2 text-sm leading-snug text-muted">
                {metric.label}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Surface temperature comparison */}
        <Reveal className="mt-12">
          <div className="mx-auto max-w-2xl rounded-md border border-line bg-linen/50 p-8 lg:p-10">
            <p className="eyebrow text-glacier">Surface temperature</p>
            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="text-sm text-muted">Untreated roof</p>
                <p className="figure mt-1 text-4xl text-terracotta">68°C</p>
              </div>
              <span className="mb-2 text-2xl text-glacier">→</span>
              <div className="text-right">
                <p className="text-sm text-muted">With Radiance</p>
                <p className="figure mt-1 text-4xl text-glacier">
                  <CountUp value="53°C" />
                </p>
              </div>
            </div>
            {/* Flat thermal bar */}
            <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-linen">
              <div className="h-full w-2/3 rounded-full bg-glacier" />
            </div>
            <p className="mt-3 text-sm text-muted">
              Target reduction of {impact.metrics[0].value} on exposed surfaces.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
