"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Full display value, e.g. "10–15°C", "Vision 2030", "44". */
  value: string;
  className?: string;
};

/**
 * Stat "settle" signature interaction: counts the leading number up, slightly
 * overshoots, then settles like an analog gauge needle. Non-numeric values
 * (e.g. "Vision 2030") render as-is. Respects prefers-reduced-motion.
 */
export default function CountUp({ value, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);

  // Parse a leading integer the animation can drive: prefix? number suffix?
  const match = value.match(/^(\D*)(\d+)([\s\S]*)$/);

  useEffect(() => {
    if (!match) return;
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const target = parseInt(numStr, 10);
    setDisplay(`${prefix}0${suffix}`);

    let raf = 0;
    const start = () => {
      const t0 = performance.now();
      const duration = 1100;
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        // ease-out-back for a gentle overshoot-and-settle
        const c1 = 1.70158;
        const c3 = c1 + 1;
        const eased =
          p >= 1 ? 1 : 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2);
        const current = Math.round(eased * target);
        setDisplay(`${prefix}${current}${suffix}`);
        if (p < 1) raf = requestAnimationFrame(tick);
        else setDisplay(value);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            start();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
