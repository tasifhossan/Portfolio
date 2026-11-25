"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const NetworkCanvas = dynamic(() => import("./NetworkCanvas"), {
  ssr: false,
});

export function HeroBackground() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const minWidthQuery = window.matchMedia("(min-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const checkSupport = () => {
      const isDesktop = minWidthQuery.matches;
      const isReduced = motionQuery.matches;
      setEnabled(isDesktop && !isReduced);
    };

    checkSupport();

    minWidthQuery.addEventListener("change", checkSupport);
    motionQuery.addEventListener("change", checkSupport);

    return () => {
      minWidthQuery.removeEventListener("change", checkSupport);
      motionQuery.removeEventListener("change", checkSupport);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
      <NetworkCanvas />
    </div>
  );
}
