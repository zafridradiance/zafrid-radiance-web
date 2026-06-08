import Image from "next/image";
import { hero } from "@/lib/content";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-pine-deep"
    >
      {/* Full-bleed Doha skyline */}
      <Image
        src="/hero.jpg"
        alt="Aerial view of the Doha skyline across the bay"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Subtle flat tint for palette cohesion (no gradients) */}
      <div className="absolute inset-0 bg-pine-deep/20" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
        <div className="ml-auto max-w-xl">
          <div className="paper-grain rounded-md border border-line bg-parchment/95 p-8 shadow-soft backdrop-blur-sm sm:p-10 lg:p-12">
            <h1
              className="animate-fade-up font-serif text-4xl leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.15s" }}
            >
              {hero.title}
            </h1>
            <p
              className="animate-fade-up mt-6 text-base leading-relaxed text-muted sm:text-lg"
              style={{ animationDelay: "0.3s" }}
            >
              {hero.subtitle}
            </p>
            <div
              className="animate-fade-up mt-8"
              style={{ animationDelay: "0.45s" }}
            >
              <Button href="#contact" variant="primary">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
