"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { m, useScroll, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

export function FeaturedProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress for vertical timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  });

  return (
    <section
      id="projects"
      className="border-b border-hairline bg-paper py-12 md:py-16 px-4 md:px-10"
    >
      <div className="max-w-[1440px] mx-auto space-y-10 md:space-y-12">
        {/* Section Header */}
        <Reveal direction="left" distance={12} duration={0.4}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-hairline pb-4 gap-4">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-cobalt uppercase block mb-1">
                02 / SELECTED WORK
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
                Projects
              </h2>
            </div>
            <a
              href="https://github.com/tasifhossan"
              rel="noreferrer"
              target="_blank"
              className="inline-flex items-center gap-2 font-mono text-xs text-cobalt hover:text-charcoal font-semibold"
            >
              <span>View all projects (14+ repos)</span>
              <span>→</span>
            </a>
          </div>
        </Reveal>

        {/* Timeline Wrapper with Scroll-Drawn Line */}
        <div
          ref={containerRef}
          className="relative border-l-2 border-hairline ml-1.5 md:ml-6 pl-3.5 md:pl-8 space-y-8 md:space-y-12"
        >
          {/* Animated Dynamic Cobalt Fill Line */}
          {!shouldReduceMotion && (
            <m.div
              style={{ scaleY: scrollYProgress, originY: 0 }}
              className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-cobalt pointer-events-none"
            />
          )}

          {/* ROW 01: CareFlow AI (Slide Left, Content Right) */}
          <article className="relative group min-h-[auto] lg:min-h-[50vh] flex flex-col justify-center">
            <div className="absolute -left-[21px] md:-left-[39px] top-6 w-3 h-3 bg-cobalt border-2 border-surface-pure z-10 transition-transform duration-300 delay-0 group-hover:delay-[330ms] group-hover:scale-125" />
            <Reveal direction="left" distance={20} duration={0.5}>
              <div className="bg-surface-pure border border-hairline grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden shadow-none group-hover:border-cobalt/40 transition-all duration-300 delay-0 group-hover:delay-[330ms] group-hover:-translate-y-1 group-hover:shadow-md">
                {/* Image Left */}
                <div className="lg:col-span-7 bg-[#0B0F1A] border-b lg:border-b-0 lg:border-r border-hairline flex items-center justify-center p-2 overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida/AEtjO1XWCdKwOFcKepRXBLma0gvq7TD8uX2rKnH9U8F-PNk839t-eukwiEGme2QSPSwWQHFcYFoTUIsY8CpADoZDDvCKN1EIKYNRmSAD1jTLo5eeXgHX-ys8XSrEysGgySLR69CtqTxLATyBS-9_T9JTvvDttLi0D5iZG0CYgletzYZoXU3HySmQZYgra-3L7zJNKhWwpjc7kwui3dD78R85OYg4e0uwye5WDkP-sTMD3zLDbIzWpIX4OmXdECY"
                    alt="CareFlow AI Clinical Workflow and Patient Analytics Platform"
                    width={720}
                    height={380}
                    unoptimized
                    className="w-full h-auto max-h-[380px] object-cover object-top hover:scale-[1.03] transition-transform duration-500 ease-out delay-0 hover:delay-[330ms]"
                  />
                </div>
                {/* Content Right */}
                <div className="lg:col-span-5 p-5 md:p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-hairline pb-2">
                      <span className="font-mono text-xs font-bold text-cobalt">PROJECT // 01</span>
                      <span className="font-mono text-[10px] uppercase px-2 py-0.5 bg-paper border border-hairline text-charcoal">
                        2024 · PRODUCTION
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-charcoal">
                      CareFlow AI
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                      Clinical workflow orchestration and patient analytics platform with real-time FHIR sync. Features interactive admission trend forecasting, automated pathway status monitoring, and low-latency clinical alerting.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">Next.js</span>
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">TypeScript</span>
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">PostgreSQL</span>
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">Prisma</span>
                    </div>
                  </div>
                  <div className="border-t border-hairline pt-3 flex items-center justify-between">
                    <Link
                      href="#contact"
                      className="font-display font-semibold text-xs sm:text-sm text-cobalt hover:text-charcoal flex items-center gap-1.5 group/link"
                    >
                      <span>View Details</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                    <span className="font-mono text-[10px] text-muted-light">FHIR R4 PROTOCOL</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </article>

          {/* ROW 02: EduFlow (Slide Right, Image Right on Desktop) */}
          <article className="relative group min-h-[auto] lg:min-h-[50vh] flex flex-col justify-center">
            <div className="absolute -left-[21px] md:-left-[39px] top-6 w-3 h-3 bg-charcoal border-2 border-surface-pure z-10 transition-transform duration-300 delay-0 group-hover:delay-[330ms] group-hover:scale-125" />
            <Reveal direction="right" distance={20} duration={0.5}>
              <div className="bg-surface-pure border border-hairline grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden shadow-none group-hover:border-cobalt/40 transition-all duration-300 delay-0 group-hover:delay-[330ms] group-hover:-translate-y-1 group-hover:shadow-md">
                {/* Content Left (Order 2 on mobile, Order 1 on Desktop) */}
                <div className="lg:col-span-5 p-5 md:p-8 flex flex-col justify-between space-y-4 order-2 lg:order-1">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-hairline pb-2">
                      <span className="font-mono text-xs font-bold text-cobalt">PROJECT // 02</span>
                      <span className="font-mono text-[10px] uppercase px-2 py-0.5 bg-paper border border-hairline text-charcoal">
                        2024 · PRODUCTION
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-charcoal">
                      EduFlow
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                      Coaching management platform designed for Bangladeshi academic tutoring and admission prep centers (Medical, Engineering, Varsity). Streamlines batch scheduling, attendance logging, automated MCQ test merit lists, and fee tracking.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">Next.js</span>
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">TypeScript</span>
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">PostgreSQL</span>
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">Tailwind CSS</span>
                    </div>
                  </div>
                  <div className="border-t border-hairline pt-3 flex items-center justify-between">
                    <Link
                      href="#contact"
                      className="font-display font-semibold text-xs sm:text-sm text-cobalt hover:text-charcoal flex items-center gap-1.5 group/link"
                    >
                      <span>View Details</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                    <span className="font-mono text-[10px] text-muted-light">COACHING AUTOMATION</span>
                  </div>
                </div>
                {/* Image Right (Order 1 on mobile, Order 2 on Desktop) */}
                <div className="lg:col-span-7 bg-[#0B0F1A] border-b lg:border-b-0 lg:border-l border-hairline flex items-center justify-center p-2 order-1 lg:order-2 overflow-hidden">
                  <Image
                    src="/images/projects/eduflow.png"
                    alt="EduFlow Coaching Center Management System Interface"
                    width={720}
                    height={380}
                    className="w-full h-auto max-h-[380px] object-cover object-top hover:scale-[1.03] transition-transform duration-500 ease-out delay-0 hover:delay-[330ms]"
                  />
                </div>
              </div>
            </Reveal>
          </article>

          {/* ROW 03: Fix It Now (Slide Left, Image Left) */}
          <article className="relative group min-h-[auto] lg:min-h-[50vh] flex flex-col justify-center">
            <div className="absolute -left-[21px] md:-left-[39px] top-6 w-3 h-3 bg-cobalt border-2 border-surface-pure z-10 transition-transform duration-300 delay-0 group-hover:delay-[330ms] group-hover:scale-125" />
            <Reveal direction="left" distance={20} duration={0.5}>
              <div className="bg-surface-pure border border-hairline grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden shadow-none group-hover:border-cobalt/40 transition-all duration-300 delay-0 group-hover:delay-[330ms] group-hover:-translate-y-1 group-hover:shadow-md">
                {/* Image Left */}
                <div className="lg:col-span-7 bg-[#0B0F1A] border-b lg:border-b-0 lg:border-r border-hairline flex items-center justify-center p-2 overflow-hidden">
                  <Image
                    src="/images/projects/fix-it-now.png"
                    alt="FixItNow On-Demand Trusted Home Services Platform"
                    width={720}
                    height={380}
                    className="w-full h-auto max-h-[380px] object-cover object-top hover:scale-[1.03] transition-transform duration-500 ease-out delay-0 hover:delay-[330ms]"
                  />
                </div>
                {/* Content Right */}
                <div className="lg:col-span-5 p-5 md:p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-hairline pb-2">
                      <span className="font-mono text-xs font-bold text-cobalt">PROJECT // 03</span>
                      <span className="font-mono text-[10px] uppercase px-2 py-0.5 bg-paper border border-hairline text-charcoal">
                        2023 · PRODUCTION
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-charcoal">
                      Fix It Now
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                      On-demand home services portal connecting verified technicians for maintenance, plumbing, electrical, and appliance repairs. Built with geospatial technician matching and automated job dispatch.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">React</span>
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">Express.js</span>
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">PostgreSQL</span>
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">TypeScript</span>
                    </div>
                  </div>
                  <div className="border-t border-hairline pt-3 flex items-center justify-between">
                    <Link
                      href="#contact"
                      className="font-display font-semibold text-xs sm:text-sm text-cobalt hover:text-charcoal flex items-center gap-1.5 group/link"
                    >
                      <span>View Details</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                    <span className="font-mono text-[10px] text-muted-light">DISPATCH ENGINE</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </article>

          {/* ROW 04: MuniFix Ctg (Slide Right, Image Right) */}
          <article className="relative group min-h-[auto] lg:min-h-[50vh] flex flex-col justify-center">
            <div className="absolute -left-[21px] md:-left-[39px] top-6 w-3 h-3 bg-charcoal border-2 border-surface-pure z-10 transition-transform duration-300 delay-0 group-hover:delay-[330ms] group-hover:scale-125" />
            <Reveal direction="right" distance={20} duration={0.5}>
              <div className="bg-surface-pure border border-hairline grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden shadow-none group-hover:border-cobalt/40 transition-all duration-300 delay-0 group-hover:delay-[330ms] group-hover:-translate-y-1 group-hover:shadow-md">
                {/* Content Left (Order 2 on mobile, 1 on desktop) */}
                <div className="lg:col-span-5 p-5 md:p-8 flex flex-col justify-between space-y-4 order-2 lg:order-1">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-hairline pb-2">
                      <span className="font-mono text-xs font-bold text-cobalt">PROJECT // 04</span>
                      <span className="font-mono text-[10px] uppercase px-2 py-0.5 bg-paper border border-hairline text-charcoal">
                        2023 · SENSE TECH
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-charcoal">
                      MuniFix Ctg
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                      Civic issue reporting portal for Chittagong municipality empowering citizens to report waterlogging, broken roads, and waste issues directly to city officials. Features department routing and 5,000+ resolved tickets.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">Node.js</span>
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">PostgreSQL</span>
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">Next.js</span>
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">Tailwind</span>
                    </div>
                  </div>
                  <div className="border-t border-hairline pt-3 flex items-center justify-between">
                    <Link
                      href="#contact"
                      className="font-display font-semibold text-xs sm:text-sm text-cobalt hover:text-charcoal flex items-center gap-1.5 group/link"
                    >
                      <span>View Details</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                    <span className="font-mono text-[10px] text-muted-light">MUNICIPAL SLA ENGINE</span>
                  </div>
                </div>
                {/* Image Right (Order 1 on mobile, 2 on desktop) */}
                <div className="lg:col-span-7 bg-[#0B0F1A] border-b lg:border-b-0 lg:border-l border-hairline flex items-center justify-center p-2 order-1 lg:order-2 overflow-hidden">
                  <Image
                    src="/images/projects/munifix-ctg.png"
                    alt="MuniFix Ctg Municipal Civic Reporting Portal"
                    width={720}
                    height={380}
                    className="w-full h-auto max-h-[380px] object-cover object-top hover:scale-[1.03] transition-transform duration-500 ease-out delay-0 hover:delay-[330ms]"
                  />
                </div>
              </div>
            </Reveal>
          </article>

          {/* ROW 05: RoadResQ (Slide Left, Image Left) */}
          <article className="relative group min-h-[auto] lg:min-h-[50vh] flex flex-col justify-center">
            <div className="absolute -left-[21px] md:-left-[39px] top-6 w-3 h-3 bg-cobalt border-2 border-surface-pure z-10 transition-transform duration-300 delay-0 group-hover:delay-[330ms] group-hover:scale-125" />
            <Reveal direction="left" distance={20} duration={0.5}>
              <div className="bg-surface-pure border border-hairline grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden shadow-none group-hover:border-cobalt/40 transition-all duration-300 delay-0 group-hover:delay-[330ms] group-hover:-translate-y-1 group-hover:shadow-md">
                {/* Image Left */}
                <div className="lg:col-span-7 bg-[#0B0F1A] border-b lg:border-b-0 lg:border-r border-hairline flex items-center justify-center p-2 overflow-hidden">
                  <Image
                    src="/images/projects/roadresq.png"
                    alt="RoadResQ On-Demand Roadside Emergency Assistance Platform"
                    width={720}
                    height={380}
                    className="w-full h-auto max-h-[380px] object-cover object-top hover:scale-[1.03] transition-transform duration-500 ease-out delay-0 hover:delay-[330ms]"
                  />
                </div>
                {/* Content Right */}
                <div className="lg:col-span-5 p-5 md:p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-hairline pb-2">
                      <span className="font-mono text-xs font-bold text-cobalt">PROJECT // 05</span>
                      <span className="font-mono text-[10px] uppercase px-2 py-0.5 bg-paper border border-hairline text-charcoal">
                        2022 · DEPLOYED
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-charcoal">
                      RoadResQ
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                      Emergency roadside assistance platform connecting stranded motorists with mechanics within 3.2 km. Features live triage workflow tracking, frozen parts pricing, itemized invoices, and digital payments via SSLCommerz.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">Express.js</span>
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">TypeScript</span>
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">Socket.io</span>
                      <span className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal">SSLCommerz</span>
                    </div>
                  </div>
                  <div className="border-t border-hairline pt-3 flex items-center justify-between">
                    <Link
                      href="#contact"
                      className="font-display font-semibold text-xs sm:text-sm text-cobalt hover:text-charcoal flex items-center gap-1.5 group/link"
                    >
                      <span>View Details</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                    <span className="font-mono text-[10px] text-muted-light">REALTIME RESCUE DISPATCH</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </article>
        </div>
      </div>
    </section>
  );
}
