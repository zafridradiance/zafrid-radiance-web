import type { ReactNode } from "react";

type Variant = "primary" | "secondary";
type Tone = "light" | "dark";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Background context the button sits on. */
  tone?: Tone;
  className?: string;
};

/**
 * Brand button. Primary = the single Terracotta CTA (one per view).
 * Secondary = hairline ghost. Flat fills only, small radius, arrow nudge.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  tone = "light",
  className = "",
}: Props) {
  const base =
    "group inline-flex items-center gap-2 rounded-sm px-7 py-3.5 text-sm font-semibold transition-all duration-250";

  const styles =
    variant === "primary"
      ? "bg-terracotta text-parchment hover:bg-terracotta-hover"
      : tone === "dark"
        ? "border border-frost/40 text-frost hover:border-frost hover:text-parchment"
        : "border border-line-strong text-ink hover:border-glacier hover:text-glacier";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <span className="transition-transform duration-250 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
