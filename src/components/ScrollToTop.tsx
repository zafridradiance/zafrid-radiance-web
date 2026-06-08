"use client";

import { useEffect } from "react";

/**
 * Always land at the top (hero) on load/refresh instead of restoring the
 * browser's previous scroll position. Renders nothing.
 */
export default function ScrollToTop() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}
