"use client";

import { Reveal } from "@/components/motion/Reveal";

export function EducationSection() {
  return (
    <section
      id="education"
      className="border-b border-hairline bg-paper py-14 md:py-20 px-4 md:px-10"
    >
      <div className="max-w-[1440px] mx-auto space-y-8 md:space-y-10">
        {/* Section Header */}
        <Reveal direction="left" distance={12} duration={0.4}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-hairline pb-4 gap-4">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-cobalt uppercase block mb-1">
                04 / EDUCATION
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
                Academic Background
              </h2>
            </div>
            <p className="font-mono text-[10px] md:text-xs text-muted">
              RIGOROUS COMPUTER SCIENCE DISCIPLINE
            </p>
          </div>
        </Reveal>

        {/* Two Timeline Cards with Sticky Year on Left */}
        <div className="space-y-5 md:space-y-6">
          {/* Degree 1: B.Sc. CSE at IIUC */}
          <Reveal delay={0.06} duration={0.45}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 bg-surface-pure border border-hairline p-5 md:p-8 hover:border-cobalt/30 transition-all duration-300 delay-0 hover:delay-[330ms] hover:shadow-xs">
              <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-hairline pb-4 md:pb-0 md:pr-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xl md:text-2xl font-bold text-cobalt block">
                    2023 – Present
                  </span>
                  <span className="font-mono text-[9px] md:text-[10px] text-muted uppercase mt-1 block tracking-wider">
                    UNDERGRADUATE // B.SC.
                  </span>
                </div>
                <div className="font-mono text-xs text-charcoal pt-3 md:pt-4 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Currently Enrolled</span>
                </div>
              </div>
              <div className="md:col-span-9 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-charcoal">
                    B.Sc. in Computer Science &amp; Engineering
                  </h3>
                  <span className="inline-block font-mono text-[9px] md:text-[10px] px-2.5 py-0.5 bg-paper border border-hairline text-cobalt font-semibold w-fit">
                    IIUC — CHITTAGONG
                  </span>
                </div>
                <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                  International Islamic University Chittagong (IIUC). Curriculum focused on Algorithmic Problem Solving, Advanced Data Structures, Relational Database Management Systems, Operating Systems, Computer Architecture, and Object-Oriented Software Engineering.
                </p>
                <div className="p-3 bg-paper border border-hairline space-y-1">
                  <span className="font-mono text-[9px] md:text-[10px] text-muted uppercase tracking-wider block">
                    ACADEMIC FOCUS &amp; COURSEWORK:
                  </span>
                  <p className="font-body text-xs font-medium text-charcoal">
                    Distributed Systems Foundations, Database Systems (PostgreSQL/SQL), Web Technologies, and Computational Algorithms.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Degree 2: HSC at Chittagong Cantonment Public College */}
          <Reveal delay={0.14} duration={0.45}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 bg-surface-pure border border-hairline p-5 md:p-8 hover:border-cobalt/30 transition-all duration-300 delay-0 hover:delay-[330ms] hover:shadow-xs">
              <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-hairline pb-4 md:pb-0 md:pr-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xl md:text-2xl font-bold text-charcoal block">
                    2020 – 2022
                  </span>
                  <span className="font-mono text-[9px] md:text-[10px] text-muted uppercase mt-1 block tracking-wider">
                    HIGHER SECONDARY (HSC)
                  </span>
                </div>
                <div className="font-mono text-xs text-charcoal pt-3 md:pt-4">
                  Division: <strong className="text-charcoal font-semibold">Science</strong>
                </div>
              </div>
              <div className="md:col-span-9 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-charcoal">
                    Higher Secondary Certificate (HSC)
                  </h3>
                  <span className="inline-block font-mono text-[9px] md:text-[10px] px-2.5 py-0.5 bg-paper border border-hairline text-charcoal font-semibold w-fit">
                    CHITTAGONG CANTONMENT PUBLIC COLLEGE
                  </span>
                </div>
                <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                  Science Division — Chittagong Cantonment Public College (CCPC). Core concentrations in Higher Mathematics (Calculus, Trigonometry &amp; Algebra), Physics, Chemistry, and Information &amp; Communication Technology (ICT).
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
