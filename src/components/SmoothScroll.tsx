"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function SmoothScroll() {
  useEffect(() => {
    // Skip Lenis if prefers-reduced-motion is reduce
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.1,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Anchor links in the navbar (#about, /#about, #projects, etc.) must scroll correctly with Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      const isSamePageHash =
        (href.startsWith("#") && href.length > 1) ||
        (href.startsWith("/#") && window.location.pathname === "/" && href.length > 2);

      if (isSamePageHash) {
        const hash = href.startsWith("/#") ? href.substring(1) : href;
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          e.preventDefault();
          if (hash === "#hero") {
            lenis.scrollTo(0);
          } else {
            lenis.scrollTo(targetElement as HTMLElement, { offset: -64 });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
