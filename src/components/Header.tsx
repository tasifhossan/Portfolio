"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, AnimatePresence, useScroll, useReducedMotion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

interface NavItem {
  name: string;
  href: string;
  id: string;
}

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isProjectsRoute = pathname.startsWith("/projects");

  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  const navItems: NavItem[] = [
    { name: "HOME", href: isHomePage ? "#hero" : "/#hero", id: "hero" },
    { name: "ABOUT ME", href: isHomePage ? "#about" : "/#about", id: "about" },
    { name: "PROJECTS", href: "/projects", id: "projects" },
    { name: "SKILLS", href: isHomePage ? "#skills" : "/#skills", id: "skills" },
    { name: "EDUCATION", href: isHomePage ? "#education" : "/#education", id: "education" },
    { name: "EXPERIENCE", href: isHomePage ? "#experience" : "/#experience", id: "experience" },
    { name: "CONTACT", href: isHomePage ? "#contact" : "/#contact", id: "contact" },
  ];

  // Auto-close menu on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      if (isHomePage) {
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
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, navItems]);

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
        className={`sticky top-0 z-50 w-full bg-surface-pure/95 backdrop-blur-xs border-b border-hairline transition-all duration-200 ${
          isScrolled ? "shadow-xs" : ""
        }`}
      >
        <div
          className={`w-full px-3 sm:px-4 md:px-10 flex items-center justify-between transition-all duration-200 ${
            isScrolled ? "h-13 md:h-14" : "h-14 md:h-16"
          }`}
        >
          {/* Brand / Monogram */}
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-cobalt shrink-0" />
            <Link
              href="/"
              className="font-display text-base md:text-xl font-bold tracking-tight text-charcoal uppercase flex items-center gap-1.5 group shrink-0"
            >
              <span>TASIF</span>
              <span className="font-mono text-[10px] text-muted font-normal hidden sm:inline md:hidden">
                [DEV.01]
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links with Sliding Active Underline */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = isProjectsRoute
                ? item.id === "projects"
                : isHomePage && activeSection === item.id;

              return (
                <Link
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
                </Link>
              );
            })}
          </nav>

          {/* Actions (Desktop, Tablet & Mobile) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Resume Button */}
            <a
              href="/resume-tasif.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-2 sm:px-2.5 py-1 md:px-3.5 md:py-1.5 border border-hairline bg-surface-pure font-mono text-[11px] md:text-xs font-semibold tracking-wider hover:border-cobalt hover:text-cobalt transition-colors"
            >
              RESUME
            </a>

            {/* Connect Button */}
            <Link
              href={isHomePage ? "#contact" : "/#contact"}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 md:px-4 py-1 md:py-1.5 bg-[#131C2A] text-white dark:bg-cobalt dark:text-white font-mono text-xs font-semibold tracking-wider hover:bg-cobalt dark:hover:bg-cobalt-dark transition-colors"
            >
              <span>CONNECT</span>
              <span>→</span>
            </Link>

            {/* Mobile / Tablet Menu Button (Visible below lg: 1024px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              className="lg:hidden inline-flex items-center justify-center gap-1.5 px-2 sm:px-2.5 py-1 md:py-1.5 border border-hairline bg-surface-pure hover:border-cobalt transition-colors font-mono text-[11px] md:text-xs text-charcoal select-none cursor-pointer"
            >
              <span className="w-3.5 h-3.5 flex flex-col justify-center gap-1">
                <span
                  className={`block h-0.5 w-3.5 bg-current transition-transform duration-200 ${
                    mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-3.5 bg-current transition-opacity duration-200 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-3.5 bg-current transition-transform duration-200 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </span>
              <span className="hidden sm:inline font-semibold">
                {mobileMenuOpen ? "CLOSE" : "MENU"}
              </span>
            </button>
          </div>
        </div>

        {/* Collapsible Mobile / Tablet Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <m.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden w-full border-t border-hairline bg-surface-pure/98 backdrop-blur-md px-3 sm:px-4 md:px-10 py-3.5 shadow-lg overflow-hidden space-y-3"
              aria-label="Mobile and Tablet Navigation"
            >
              {/* Availability Banner inside Drawer */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-paper border border-hairline text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold tracking-wider text-[11px]">
                    STATUS: AVAILABLE FOR HIRE
                  </span>
                </div>
                <span className="text-[10px] text-muted">2026</span>
              </div>

              {/* Navigation Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 font-mono text-xs">
                {navItems.map((item, idx) => {
                  const isActive = isProjectsRoute
                    ? item.id === "projects"
                    : isHomePage && activeSection === item.id;
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3 py-2.5 border transition-colors ${
                        isActive
                          ? "bg-cobalt/10 border-cobalt text-cobalt font-bold"
                          : "bg-paper border-hairline text-charcoal hover:border-cobalt hover:text-cobalt"
                      }`}
                    >
                      <span>{`0${idx + 1} // ${item.name}`}</span>
                      <span className="text-[10px] text-muted">→</span>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Quick Action Buttons */}
              <div className="flex sm:hidden items-center gap-2 pt-2 border-t border-hairline font-mono text-xs">
                <a
                  href="/resume-tasif.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center border border-hairline bg-paper text-charcoal font-semibold hover:border-cobalt hover:text-cobalt transition-colors"
                >
                  RESUME [PDF]
                </a>
                <Link
                  href={isHomePage ? "#contact" : "/#contact"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2 text-center bg-[#131C2A] text-white dark:bg-cobalt font-semibold hover:bg-cobalt transition-colors"
                >
                  CONNECT →
                </Link>
              </div>
            </m.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
