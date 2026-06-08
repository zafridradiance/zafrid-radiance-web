import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  /** "dark" = light text for dark backgrounds; "light" = ink text. */
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "left",
  className = "",
}: Props) {
  const isDark = tone === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}
    >
      <Reveal>
        <span
          className={`eyebrow ${isDark ? "text-frost" : "text-glacier"} ${
            isCenter ? "" : "brand-rule"
          } inline-block`}
        >
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={`mt-5 font-serif text-4xl leading-[1.1] tracking-[-0.015em] sm:text-5xl ${
            isDark ? "text-parchment" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={160}>
          <p
            className={`mt-6 text-lg leading-relaxed ${
              isDark ? "text-frost/80" : "text-muted"
            }`}
          >
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
