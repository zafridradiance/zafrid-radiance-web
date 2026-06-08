import { hero } from "@/lib/content";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="top"
      className="paper-grain relative flex min-h-screen flex-col justify-center overflow-hidden bg-parchment"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 pt-36 pb-16 lg:px-10">
        <div className="max-w-3xl">
          <h1
            className="animate-fade-up font-serif text-5xl leading-[1.04] tracking-[-0.02em] text-ink sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.25s" }}
          >
            {hero.title}
          </h1>
          <p
            className="animate-fade-up mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            style={{ animationDelay: "0.45s" }}
          >
            {hero.subtitle}
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.6s" }}
          >
            <Button href="#contact" variant="primary">
              Request an assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
