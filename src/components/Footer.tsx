"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";

export function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0B0F19] text-white border-t border-[#1F2A3F]">
      {/* Architectural Grid (Desktop & Mobile) */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {/* Col 1: Logo, Subtitle & Stack Tags (Cols 1-5) */}
        <div className="md:col-span-5 space-y-2.5 md:space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-cobalt" />
            <span className="font-display text-lg md:text-xl font-bold tracking-tight text-white uppercase">
              TASIF
            </span>
          </div>
          <p className="font-body text-xs text-muted-light max-w-sm leading-relaxed">
            Full-Stack Software Engineer &amp; Systems Architect. Engineered with mathematical precision on a strict 12-column Swiss typographic grid.
          </p>
          <div className="font-mono text-[10px] md:text-[11px] text-cobalt-light pt-1">
            STACK: Node.js • Express • TypeScript • PostgreSQL • Next.js
          </div>
        </div>

        {/* Col 2: Blueprint Directory Links (Cols 6-8) */}
        <div className="md:col-span-3 space-y-2 border-t border-white/10 md:border-t-0 pt-4 md:pt-0">
          <span className="font-mono text-[9px] md:text-[10px] text-muted-light uppercase tracking-widest block mb-1.5 md:mb-2">
            BLUEPRINT DIRECTORY
          </span>
          <ul className="grid grid-cols-2 md:grid-cols-1 gap-1.5 font-mono text-xs">
            <li>
              <a className="text-white/80 hover:text-white transition-colors" href="#hero">
                01 // HOME
              </a>
            </li>
            <li>
              <a className="text-white/80 hover:text-white transition-colors" href="#about">
                02 // ABOUT ME
              </a>
            </li>
            <li>
              <a className="text-white/80 hover:text-white transition-colors" href="#projects">
                03 // SELECTED WORKS
              </a>
            </li>
            <li>
              <a className="text-white/80 hover:text-white transition-colors" href="#skills">
                04 // SYSTEM SPECS
              </a>
            </li>
            <li>
              <a className="text-white/80 hover:text-white transition-colors" href="#education">
                05 // EDUCATION
              </a>
            </li>
            <li>
              <a className="text-white/80 hover:text-white transition-colors" href="#contact">
                06 // CONTACT
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Connect & System Specs (Cols 9-12) */}
        <div className="md:col-span-4 space-y-2 border-t border-white/10 md:border-t-0 pt-4 md:pt-0">
          <span className="font-mono text-[9px] md:text-[10px] text-muted-light uppercase tracking-widest block mb-1.5 md:mb-2">
            CONNECT &amp; SYSTEM SPECS
          </span>
          <ul className="space-y-1.5 font-mono text-xs">
            <li>
              <a
                className="text-cobalt-light underline hover:text-white"
                href="https://github.com/tasifhossan"
                rel="noreferrer"
                target="_blank"
              >
                GITHUB [EXT]
              </a>
            </li>
            <li>
              <a
                className="text-cobalt-light underline hover:text-white"
                href="https://linkedin.com/in/tasifhossan"
                rel="noreferrer"
                target="_blank"
              >
                LINKEDIN [EXT]
              </a>
            </li>
            <li className="text-muted-light text-[10px] md:text-[11px]">
              HOST: EDGE WORKER // NGINX REVERSE PROXY
            </li>
            <li className="flex items-center gap-1.5 text-emerald-400 text-[10px] md:text-[11px] pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>SYSTEM STATUS: OPERATIONAL &amp; AVAILABLE</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar with Conditional Animated Back to Top */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-4 md:py-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] md:text-[11px] text-muted-light">
        <div>© 2025 MOHAMMAD TASIF HOSSAN. ALL RIGHTS RESERVED. ARCHITECTURAL MINIMALISM.</div>

        <div className="min-h-[28px] flex items-center">
          <AnimatePresence>
            {showTopBtn && (
              <m.button
                type="button"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
                transition={{ duration: 0.2 }}
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white border border-white/20 hover:bg-cobalt hover:text-white hover:border-cobalt transition-colors cursor-pointer text-xs font-semibold"
              >
                <span>BACK TO TOP</span>
                <span>↑</span>
              </m.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  );
}
