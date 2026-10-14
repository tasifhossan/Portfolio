"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const rotatingRoles = [
  "Full-Stack Developer",
  "Backend Systems Architect",
  "Deterministic UI Builder",
];

export function HeroSection() {
  const [localTime, setLocalTime] = useState("14:28 GMT+6");
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState(rotatingRoles[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  // Magnetic button state (max 6px)
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLAnchorElement>(null);

  // Dynamic local time
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
        setLocalTime(`${timeStr} GMT+6`);
      } catch {
        // fallback to default
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for rotating roles
  useEffect(() => {
    const currentRole = rotatingRoles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedRole === currentRole) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && displayedRole === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
      }, 100);
    } else {
      const delta = isDeleting ? 30 : 65;
      timer = setTimeout(() => {
        setDisplayedRole((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    // Restrained to max 6px
    const maxOffset = 6;
    const x = Math.max(-maxOffset, Math.min(maxOffset, distanceX * 0.25));
    const y = Math.max(-maxOffset, Math.min(maxOffset, distanceY * 0.25));
    setMagneticOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMagneticOffset({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      className="relative lg:h-[calc(100vh-4rem)] lg:min-h-[640px] lg:max-h-[920px] flex flex-col justify-between border-b border-hairline bg-paper drafting-grid overflow-hidden pt-3 lg:pt-0 pb-0"
    >
      {/* Top Blueprint Metadata Hairlines */}
      <div className="w-full border-b border-hairline px-4 md:px-10 py-1.5 flex items-center justify-between font-mono text-[9px] md:text-[11px] text-muted-light select-none">
        <span>+ 22.3569° N, 91.7832° E // ARCHITECTURAL DRAFTING SYSTEM</span>
        <span>[SYS_RUN: ACTIVE // NODE v20.x]</span>
      </div>

      {/* Hero Main Stage */}
      <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4">
        {/* Left Hero Column: Typography & Direct Action */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-4">
          {/* Open to Work Status Pill (Step 1: 330ms) */}
          <div
            className="animate-hero-fade inline-flex items-center gap-2 px-2.5 md:px-3 py-1 bg-surface-pure border border-hairline"
            style={{ animationDelay: "330ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-[10px] md:text-xs font-semibold text-charcoal uppercase tracking-wider">
              Open to work <span className="hidden sm:inline">{"// Q2-Q3 2025"}</span>
            </span>
          </div>

          {/* Oversized Display Headline (Step 2: 390ms) */}
          <h1
            className="animate-hero-fade font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-charcoal uppercase leading-[0.95]"
            style={{ animationDelay: "390ms" }}
          >
            Hi, I&apos;m Tasif
          </h1>

          {/* Role Line & Short Intro (Step 3: 450ms) */}
          <div
            className="animate-hero-fade border-l-2 border-cobalt pl-3 md:pl-4 space-y-1"
            style={{ animationDelay: "450ms" }}
          >
            <h2 className="font-display text-lg sm:text-2xl font-bold tracking-tight text-charcoal flex items-center min-h-[32px]">
              <span>{displayedRole}</span>
              <span className="w-1.5 h-5 bg-cobalt ml-1 animate-pulse" />
            </h2>
            <p className="font-body text-xs sm:text-base text-muted max-w-xl leading-relaxed">
              Building reliable, high-throughput backends and clean, mathematically precise web applications.
            </p>
          </div>

          {/* Action Buttons (Step 4: 510ms) */}
          <div
            className="animate-hero-fade w-full sm:w-auto pt-1 sm:pt-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"
            style={{ animationDelay: "510ms" }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                ref={buttonRef}
                href="#projects"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `translate3d(${magneticOffset.x}px, ${magneticOffset.y}px, 0)`,
                  transition: magneticOffset.x === 0 ? "transform 0.25s ease-out" : "none",
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-cobalt text-white font-display font-semibold text-xs sm:text-sm tracking-tight hover:bg-cobalt-dark dark:hover:bg-cobalt-dark transition-colors shadow-none cursor-pointer"
              >
                <span>View Projects</span>
                <span>→</span>
              </a>
              <a
                href="/resume-tasif.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-surface-pure border border-hairline text-charcoal font-display font-semibold text-xs sm:text-sm tracking-tight hover:border-charcoal hover:bg-paper transition-colors"
              >
                Download Resume
              </a>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center sm:justify-start gap-1.5 px-3 py-1.5 sm:py-2 text-charcoal font-mono text-xs hover:text-cobalt underline decoration-1 underline-offset-4 transition-colors"
            >
              <span>Contact &amp; Dispatch</span>
              <span>→</span>
            </a>
          </div>

          {/* Row of 3 Quick Facts in Mono Uppercase Tags (Step 5: 570ms) */}
          <div
            className="animate-hero-fade hidden sm:flex pt-2 flex-wrap gap-2"
            style={{ animationDelay: "570ms" }}
          >
            <span className="px-2.5 py-1 bg-surface-pure border border-hairline font-mono text-[10px] text-muted tracking-wider uppercase">
              [ ROLE: FULL-STACK / BACKEND ARCHITECT ]
            </span>
            <span className="px-2.5 py-1 bg-surface-pure border border-hairline font-mono text-[10px] text-muted tracking-wider uppercase">
              [ STACK: NODE · TS · POSTGRES · NEXT.JS ]
            </span>
            <span className="px-2.5 py-1 bg-surface-pure border border-hairline font-mono text-[10px] text-muted tracking-wider uppercase">
              [ AVAILABILITY: IMMEDIATE / Q2-Q3 2025 ]
            </span>
          </div>

          {/* Mobile Stack Info Box List */}
          <div className="w-full sm:hidden grid grid-cols-1 gap-1.5 pt-1 font-mono text-[10px]">
            <div className="p-2 bg-surface-pure border border-hairline flex items-center justify-between">
              <span className="text-muted uppercase">ROLE</span>
              <span className="font-bold text-charcoal">FULL-STACK / SYSTEMS ARCHITECT</span>
            </div>
            <div className="p-2 bg-surface-pure border border-hairline flex items-center justify-between">
              <span className="text-muted uppercase">CORE STACK</span>
              <span className="font-bold text-cobalt">NODE · TS · POSTGRES · NEXT.JS</span>
            </div>
            <div className="p-2 bg-surface-pure border border-hairline flex items-center justify-between">
              <span className="text-muted uppercase">LOCATION</span>
              <span className="font-bold text-charcoal">CHITTAGONG, BD (UTC+6)</span>
            </div>
          </div>
        </div>

        {/* Right Hero Column: Arch Portrait + Floating Chips + Status Card */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center pt-2 sm:pt-0">
          <div className="relative w-[240px] sm:w-[280px] lg:w-[300px] h-[300px] sm:h-[400px] lg:h-[420px]">
            {/* Offset Cobalt Hairline Frame */}
            <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 lg:translate-x-3 lg:translate-y-3 border-2 border-cobalt arch-frame pointer-events-none" />

            {/* Image Container with Geometric Clip-Path Wipe */}
            <div
              className="animate-arch-reveal relative w-full h-full arch-frame border border-hairline overflow-hidden bg-surface-pure z-10 flex items-center justify-center"
              style={{ animationDelay: "330ms" }}
            >
              <Image
                src="/images/profile.png"
                alt="Mohammad Tasif Hossan (Tasif) Full-Stack Developer Architectural Portrait"
                width={300}
                height={420}
                priority
                className="w-full h-full object-cover object-top grayscale contrast-110"
              />
            </div>

            {/* Gently Floating Tech Chips (2-4px drift keyframes) */}
            <div
              className="animate-chip-float absolute -top-2 -left-2 sm:-left-4 z-20 bg-surface-pure border border-hairline px-2 sm:px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold text-charcoal shadow-none select-none"
              style={{ animationDelay: "0.33s" }}
            >
              [Node.js]
            </div>
            <div
              className="animate-chip-float-alt absolute top-14 sm:top-16 -right-3 sm:-right-6 z-20 bg-surface-pure border border-hairline px-2 sm:px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold text-cobalt shadow-none select-none"
              style={{ animationDelay: "1.13s" }}
            >
              [Express]
            </div>
            <div
              className="animate-chip-float absolute top-1/2 -left-4 sm:-left-8 z-20 bg-surface-pure border border-hairline px-2 sm:px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold text-charcoal shadow-none select-none"
              style={{ animationDelay: "1.73s" }}
            >
              [TypeScript]
            </div>
            <div
              className="animate-chip-float-alt absolute bottom-16 sm:bottom-24 -right-3 sm:-right-6 z-20 bg-surface-pure border border-hairline px-2 sm:px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold text-cobalt sm:text-charcoal shadow-none select-none"
              style={{ animationDelay: "2.43s" }}
            >
              [PostgreSQL]
            </div>
            <div
              className="animate-chip-float hidden sm:block absolute bottom-10 -left-6 z-20 bg-surface-pure border border-hairline px-2.5 py-0.5 font-mono text-[11px] font-bold text-charcoal shadow-none select-none"
              style={{ animationDelay: "0.83s" }}
            >
              [Prisma]
            </div>
            <div
              className="animate-chip-float-alt hidden sm:block absolute -bottom-2 right-4 z-20 bg-surface-pure border border-hairline px-2.5 py-0.5 font-mono text-[11px] font-bold text-cobalt shadow-none select-none"
              style={{ animationDelay: "2.03s" }}
            >
              [Next.js]
            </div>

            {/* Architectural Floating Status Card (Desktop) */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 z-30 bg-surface-pure border border-hairline p-3 max-w-[200px] space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-muted tracking-widest uppercase">LOCATION</span>
                <span className="font-mono text-[10px] font-bold text-charcoal">CHITTAGONG, BD</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                  Open to work
                </span>
              </div>
              <p className="font-mono text-[10px] text-muted border-t border-hairline pt-1">
                {localTime} • Local Time
              </p>
            </div>

            {/* Mobile Time Tag */}
            <div className="sm:hidden absolute -bottom-3 left-2 z-20 bg-surface-pure border border-hairline px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>{localTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Edge: Continuous Marquee Strip of Tech Stack Names */}
      <div className="w-full border-t border-hairline bg-surface-pure overflow-hidden py-2 select-none">
        <div className="animate-marquee font-mono text-[11px] md:text-xs tracking-widest uppercase text-muted">
          <span className="mx-3 text-cobalt font-bold">NODE.JS</span> /
          <span className="mx-3">EXPRESS</span> /
          <span className="mx-3 text-cobalt font-bold">TYPESCRIPT</span> /
          <span className="mx-3">POSTGRESQL</span> /
          <span className="mx-3 text-cobalt font-bold">NEXT.JS</span> /
          <span className="mx-3">PRISMA ORM</span> /
          <span className="mx-3 text-cobalt font-bold">DOCKER</span> /
          <span className="mx-3">REDIS</span> /
          <span className="mx-3">TAILWIND CSS</span> /
          <span className="mx-3 text-cobalt font-bold">REST &amp; GRAPHQL</span> /
          <span className="mx-3 text-cobalt font-bold">NODE.JS</span> /
          <span className="mx-3">EXPRESS</span> /
          <span className="mx-3 text-cobalt font-bold">TYPESCRIPT</span> /
          <span className="mx-3">POSTGRESQL</span> /
          <span className="mx-3 text-cobalt font-bold">NEXT.JS</span> /
          <span className="mx-3">PRISMA ORM</span> /
          <span className="mx-3 text-cobalt font-bold">DOCKER</span> /
          <span className="mx-3">REDIS</span> /
          <span className="mx-3">TAILWIND CSS</span> /
          <span className="mx-3 text-cobalt font-bold">REST &amp; GRAPHQL</span>
        </div>
      </div>
    </section>
  );
}
