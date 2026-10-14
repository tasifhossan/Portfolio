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
          {/* Degree 1: B.Sc. CSE */}
          <Reveal delay={0.06} duration={0.45}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 bg-surface-pure border border-hairline p-5 md:p-8 hover:border-cobalt/30 transition-all duration-300 delay-0 hover:delay-[330ms] hover:shadow-xs">
              <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-hairline pb-4 md:pb-0 md:pr-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xl md:text-2xl font-bold text-cobalt block">
                    2020 – 2024
                  </span>
                  <span className="font-mono text-[9px] md:text-[10px] text-muted uppercase mt-1 block tracking-wider">
                    UNDERGRADUATE DEGREE
                  </span>
                </div>
                <div className="font-mono text-xs text-charcoal pt-3 md:pt-4">
                  CGPA: <strong className="text-cobalt">3.82</strong> / 4.00
                </div>
              </div>
              <div className="md:col-span-9 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-charcoal">
                    B.Sc. in Computer Science &amp; Engineering
                  </h3>
                  <span className="inline-block font-mono text-[9px] md:text-[10px] px-2.5 py-0.5 bg-paper border border-hairline text-cobalt font-semibold w-fit">
                    INTERNATIONAL ISLAMIC UNIV. CHITTAGONG
                  </span>
                </div>
                <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                  Curriculum focused on Advanced Data Structures, Algorithmic Analysis, Operating Systems Internals, Database Management Systems, and Distributed Computing.
                </p>
                <div className="p-3 bg-paper border border-hairline space-y-1">
                  <span className="font-mono text-[9px] md:text-[10px] text-muted uppercase tracking-wider block">
                    FINAL THESIS:
                  </span>
                  <p className="font-body text-xs font-medium text-charcoal">
                    &quot;Real-Time Distributed Queue Optimization and Dynamic Backpressure Control in Event-Driven Node.js Microservices&quot;
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Degree 2: HSC */}
          <Reveal delay={0.14} duration={0.45}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 bg-surface-pure border border-hairline p-5 md:p-8 hover:border-cobalt/30 transition-all duration-300 delay-0 hover:delay-[330ms] hover:shadow-xs">
              <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-hairline pb-4 md:pb-0 md:pr-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xl md:text-2xl font-bold text-charcoal block">
                    2018 – 2020
                  </span>
                  <span className="font-mono text-[9px] md:text-[10px] text-muted uppercase mt-1 block tracking-wider">
                    HIGHER SECONDARY
                  </span>
                </div>
                <div className="font-mono text-xs text-charcoal pt-3 md:pt-4">
                  GPA: <strong className="text-charcoal">5.00</strong> / 5.00
                </div>
              </div>
              <div className="md:col-span-9 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-charcoal">
                    Higher Secondary Certificate (HSC)
                  </h3>
                  <span className="inline-block font-mono text-[9px] md:text-[10px] px-2.5 py-0.5 bg-paper border border-hairline text-muted font-semibold w-fit">
                    PRE-ENGINEERING
                  </span>
                </div>
                <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                  Science Division — Board of Intermediate &amp; Secondary Education. Concentration in Higher Mathematics (Calculus &amp; Linear Algebra), Theoretical Physics, and Computer Fundamentals. Graduated with highest honors.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
