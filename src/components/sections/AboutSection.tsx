"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Subtle architectural parallax on portrait container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="border-b border-hairline bg-paper py-10 lg:py-16 px-4 md:px-10 flex flex-col justify-between"
    >
      <div className="max-w-[1440px] w-full mx-auto space-y-6 md:space-y-8 my-auto">
        {/* Section Header with Metadata Index */}
        <Reveal direction="left" distance={12} duration={0.4}>
          <div className="flex items-center justify-between border-b border-hairline pb-3">
            <span className="font-mono text-xs font-bold tracking-widest text-cobalt uppercase">
              01 / ABOUT ME
            </span>
            <span className="font-mono text-[10px] md:text-xs text-muted-light select-none">
              ENGINEERING SPECIFICATION // SYSTEM PROFILE
            </span>
          </div>
        </Reveal>

        {/* 12-Column Split: Portrait Left (5 Cols), Editorial Content Right (7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-center flex-1 py-1">
          {/* Left: Large Portrait Card with Parallax (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <m.div
              style={{ y: shouldReduceMotion ? 0 : parallaxY }}
              className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] h-[320px] sm:h-[400px] lg:h-[450px] bg-surface-pure border border-hairline p-2.5 sm:p-3 flex flex-col justify-between"
            >
              {/* Architectural Cobalt Corner Brackets */}
              <div className="absolute -top-1.5 -left-1.5 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-l-2 border-cobalt" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-r-2 border-cobalt" />

              {/* Portrait Photo Frame with Monospace Vertical Label */}
              <div className="relative w-full h-full overflow-hidden bg-paper border border-hairline flex items-center justify-center">
                <Image
                  src="/images/profile.png"
                  alt="Mohammad Tasif Hossan Portrait"
                  width={380}
                  height={450}
                  priority
                  className="w-full h-full object-cover object-top grayscale contrast-110"
                />
                {/* Rotated Vertical Monospace Label */}
                <div className="absolute top-3 sm:top-4 left-2 z-10 writing-vertical rotate-180 font-mono text-[9px] sm:text-[10px] tracking-widest text-white/90 bg-[#0B0F19]/90 px-1 py-1.5 sm:py-2 backdrop-blur-xs">
                  TASIF / FULL-STACK / BANGLADESH
                </div>
              </div>

              {/* Distinctive Monogram Badge "T." overlapping the bottom corner */}
              <div className="absolute -bottom-2.5 sm:-bottom-3 -right-2.5 sm:-right-3 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-cobalt text-white flex items-center justify-center font-display text-lg sm:text-xl font-bold border-2 border-surface-pure shadow-sm">
                T.
              </div>
            </m.div>
          </div>

          {/* Right: Editorial Content taking full freed space (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Big Editorial Headline & Rich Body Narrative */}
            <Reveal delay={0.08}>
              <div className="space-y-4">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-charcoal leading-[1.1]">
                  Engineering backends that endure. <br className="hidden sm:inline" />
                  Interfaces that feel simple.
                </h3>
                <div className="space-y-3.5 font-body text-sm sm:text-base text-muted leading-relaxed">
                  <p>
                    I am <strong className="text-charcoal font-semibold">Mohammad Tasif Hossan</strong> (Tasif)—a full-stack software engineer and systems architect specializing in high-throughput Node.js microservices, strict TypeScript contracts, PostgreSQL relational optimization, and deterministic Next.js applications.
                  </p>
                  <p>
                    With four years of disciplined engineering rooted in algorithmic problem-solving and distributed system foundations, I design resilient data layers, low-latency API architectures, and accessible interfaces that perform effortlessly under heavy production load.
                  </p>
                  <p>
                    My approach treats software as structural engineering: strict type safety across boundaries, optimized database execution plans, clean asynchronous pipelines, and interfaces that eliminate cognitive friction for end users.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Metadata Spec Row */}
            <Reveal delay={0.18}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-hairline pt-4 font-mono text-[11px]">
                <div className="space-y-0.5">
                  <span className="text-muted block text-[10px] uppercase">[ ROLE ]</span>
                  <span className="font-semibold text-charcoal">Full-Stack / Systems Architect</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-muted block text-[10px] uppercase">[ LOCATION ]</span>
                  <span className="font-semibold text-charcoal">Chittagong, BD (UTC+6)</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-muted block text-[10px] uppercase">[ AVAILABILITY ]</span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Open to work
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
              <a
                href="#contact"
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-cobalt text-white font-display font-semibold text-xs tracking-wide hover:bg-cobalt-dark dark:hover:bg-cobalt-dark transition-colors cursor-pointer"
              >
                Let&apos;s Work Together →
              </a>
              <a
                href="/resume-tasif.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-surface-pure border border-hairline text-charcoal font-display font-semibold text-xs tracking-wide hover:border-charcoal hover:bg-paper transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom of About Me: Row of 4 Numbered Highlight Mini-Cards Staggered */}
        <Stagger staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-2 border-t border-hairline">
          <StaggerItem className="bg-surface-pure border border-hairline p-2.5 flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-cobalt">01 //</span>
            <span className="font-mono text-[11px] text-charcoal truncate">
              Relational &amp; Spatial DBs (Postgres, PostGIS)
            </span>
          </StaggerItem>
          <StaggerItem className="bg-surface-pure border border-hairline p-2.5 flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-cobalt">02 //</span>
            <span className="font-mono text-[11px] text-charcoal truncate">
              Distributed Queues &amp; Real-time Sockets
            </span>
          </StaggerItem>
          <StaggerItem className="bg-surface-pure border border-hairline p-2.5 flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-cobalt">03 //</span>
            <span className="font-mono text-[11px] text-charcoal truncate">
              Strict Type Safety &amp; Production Resiliency
            </span>
          </StaggerItem>
          <StaggerItem className="bg-surface-pure border border-hairline p-2.5 flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-cobalt">04 //</span>
            <span className="font-mono text-[11px] text-charcoal truncate">
              Mathematical Polish &amp; Sub-50ms Interaction
            </span>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
