"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-b border-hairline bg-paper py-14 md:py-20 px-4 md:px-10"
    >
      <div className="max-w-[1440px] mx-auto space-y-8 md:space-y-10">
        {/* Section Header */}
        <Reveal direction="left" distance={12} duration={0.4}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-hairline pb-4 gap-4">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-cobalt uppercase block mb-1">
                05 / EXPERIENCE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
                Career Track
              </h2>
            </div>
            <p className="font-mono text-[10px] md:text-xs text-muted">
              DISPATCH MATRIX // RECRUITMENT STATUS
            </p>
          </div>
        </Reveal>

        {/* Architectural Empty-State Card Fading Up */}
        <Reveal delay={0.08} duration={0.5}>
          <div className="relative bg-surface-pure border-2 border-dashed border-hairline hover:border-cobalt/40 transition-colors duration-300 delay-0 hover:delay-[330ms] p-6 sm:p-10 md:p-14 flex flex-col items-center text-center space-y-4 md:space-y-5">
            {/* Status Indicator Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-paper border border-hairline">
              <span className="w-2 h-2 bg-cobalt animate-pulse" />
              <span className="font-mono text-[10px] md:text-[11px] font-bold tracking-wider text-cobalt uppercase">
                STATUS: READY FOR DEPLOYMENT
              </span>
            </div>

            {/* Large Clean Title */}
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-charcoal max-w-xl">
              Open to High-Impact Opportunities
            </h3>

            {/* Editorial Description */}
            <p className="font-body text-xs sm:text-sm md:text-base text-muted max-w-2xl leading-relaxed">
              Seeking full-time <strong>Full-Stack Engineer</strong> or <strong>Backend Engineer</strong> positions at high-velocity product teams, or specialized contract consulting for venture-backed startups scaling from prototype to production. Ready for deployment.
            </p>

            {/* Solid Cobalt Button */}
            <div className="pt-2 w-full sm:w-auto">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 bg-cobalt text-white font-display font-semibold text-xs sm:text-sm tracking-tight hover:bg-cobalt-dark dark:hover:bg-cobalt-dark transition-all hover:shadow-xs active:scale-[0.98] cursor-pointer"
              >
                <span>Initiate Conversation</span>
                <span>→</span>
              </Link>
            </div>

            {/* Registration Coordinates */}
            <div className="w-full flex justify-between font-mono text-[9px] md:text-[10px] text-muted-light pt-4 md:pt-6 border-t border-hairline sm:border-t-0 sm:pt-0 sm:absolute sm:bottom-3 sm:left-4 sm:right-4">
              <span className="sm:text-left">COORD: [05/EXP_NULL_POINTER]</span>
              <span className="sm:text-right">REF: DIRECT_HIRE_2025</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
