import { type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Kept for API compatibility; no longer animates. */
  delay?: number;
};

/**
 * Pass-through wrapper. Scroll-reveal animation was removed — children render
 * immediately and visibly. Props are kept so call sites don't need changes.
 */
export default function Reveal({ children, as, className = "" }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  return <Tag className={className}>{children}</Tag>;
}
