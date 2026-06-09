"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { hero } from "@/lib/content";
import Button from "./Button";

export default function Hero() {
  // On mobile the description stays hidden until the user starts scrolling,
  // then it expands open beneath the title. On larger screens it's always shown.
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 24) setRevealed(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-pine-deep"
    >
      {/* Full-bleed Doha skyline — portrait crop on mobile, wide on larger screens */}
      <Image
        src="/hero-mobile.jpg"
        alt="The Doha skyline across the bay"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center sm:hidden"
      />
      <Image
        src="/hero.jpg"
        alt="Aerial view of the Doha skyline across the bay"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-top sm:block"
      />
      {/* Flat scrim for text legibility (no gradients) */}
      <div className="absolute inset-0 bg-pine-deep/55" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
        <div className="mx-auto max-w-2xl text-center sm:ml-auto sm:mr-0 sm:text-right">
          <h1
            className="animate-fade-up font-serif text-5xl leading-[1.04] tracking-[-0.02em] text-parchment sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.15s" }}
          >
            {hero.title}
          </h1>

          <p
            className={`mx-auto max-w-xl text-lg leading-relaxed text-frost/90 transition-all duration-700 ease-out sm:ml-auto sm:mr-0 sm:mt-7 sm:max-h-40 sm:text-xl sm:opacity-100 ${
              revealed
                ? "mt-7 max-h-40 opacity-100"
                : "mt-0 max-h-0 overflow-hidden opacity-0"
            }`}
          >
            {hero.subtitle}
          </p>

          <div
            className="animate-fade-up mt-10 flex justify-center sm:justify-end"
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
