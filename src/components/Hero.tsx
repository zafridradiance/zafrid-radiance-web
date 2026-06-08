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
        className="object-cover object-top"
      />
      {/* Flat scrim for text legibility (no gradients) */}
      <div className="absolute inset-0 bg-pine-deep/55" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
        <div className="ml-auto max-w-2xl text-right">
          <h1
            className="animate-fade-up font-serif text-5xl leading-[1.04] tracking-[-0.02em] text-parchment sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.15s" }}
          >
            {hero.title}
          </h1>
          <p
            className="animate-fade-up mt-7 ml-auto max-w-xl text-lg leading-relaxed text-frost/90 sm:text-xl"
            style={{ animationDelay: "0.3s" }}
          >
            {hero.subtitle}
          </p>
          <div
            className="animate-fade-up mt-10 flex justify-end"
            style={{ animationDelay: "0.45s" }}
          >
            <Button href="#contact" variant="primary">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
