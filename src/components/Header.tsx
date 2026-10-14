"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { m, useScroll, useReducedMotion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: "HOME", href: "#hero", id: "hero" },
  { name: "ABOUT ME", href: "#about", id: "about" },
  { name: "PROJECTS", href: "#projects", id: "projects" },
  { name: "SKILLS", href: "#skills", id: "skills" },
  { name: "EDUCATION", href: "#education", id: "education" },
  { name: "EXPERIENCE", href: "#experience", id: "experience" },
  { name: "CONTACT", href: "#contact", id: "contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const scrollPos = window.scrollY + 160;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          return;
        }
      }
      setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      {!shouldReduceMotion && (
        <m.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-cobalt z-[60] origin-left pointer-events-none"
          style={{ scaleX: scrollYProgress }}
        />
      )}

      <header
        className={`sticky top-0 z-50 w-full bg-surface-pure/95 backdrop-blur-xs border-b border-hairline px-4 md:px-10 flex items-center justify-between transition-all duration-200 ${
          isScrolled ? "h-13 md:h-14 shadow-xs" : "h-14 md:h-16"
        }`}
      >
        {/* Brand / Monogram */}
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-cobalt" />
          <Link
            href="#hero"
            className="font-display text-base md:text-xl font-bold tracking-tight text-charcoal uppercase flex items-center gap-1.5 group"
          >
            <span>TASIF</span>
            <span className="font-mono text-[10px] text-muted font-normal md:hidden">
              [DEV.01]
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links with Sliding Active Underline */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative py-1 font-mono text-xs tracking-wider transition-colors ${
                  isActive
                    ? "text-cobalt font-semibold"
                    : "text-muted hover:text-cobalt"
                }`}
              >
                {item.name}
                {isActive && !shouldReduceMotion && (
                  <m.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cobalt"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {isActive && shouldReduceMotion && (
                  <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cobalt" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions (Desktop & Mobile) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Availability Pill */}
          <div className="flex sm:hidden items-center gap-1 px-2 py-0.5 bg-paper border border-hairline">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="font-mono text-[9px] font-bold text-emerald-700 dark:text-emerald-400 uppercase">
              AVAIL
            </span>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Resume Button */}
          <a
            href="/resume-tasif.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-2.5 py-1 md:px-3.5 md:py-1.5 border border-hairline bg-surface-pure font-mono text-[11px] md:text-xs font-semibold tracking-wider hover:border-cobalt hover:text-cobalt transition-colors"
          >
            RESUME
          </a>

          {/* Desktop Connect Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#131C2A] text-white dark:bg-cobalt dark:text-white font-mono text-xs font-semibold tracking-wider hover:bg-cobalt dark:hover:bg-cobalt-dark transition-colors"
          >
            <span>CONNECT</span>
            <span>→</span>
          </a>

          {/* Mobile Quick Email Button */}
          <a
            href="#contact"
            aria-label="Direct Dispatch"
            className="sm:hidden w-7 h-7 flex items-center justify-center border border-hairline text-charcoal hover:border-cobalt transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 text-charcoal fill-none stroke-current stroke-2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </header>
    </>
  );
}
