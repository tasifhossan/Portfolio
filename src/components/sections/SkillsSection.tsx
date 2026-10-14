"use client";

import { useRef, useState, useEffect } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

interface SkillItem {
  name: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  countText: string;
  iconType: "frontend" | "backend" | "database" | "tools" | "design";
  iconBg: string;
  colSpan?: string;
  footerNote?: string;
  skills: SkillItem[];
}

function CategoryIcon({ type }: { type: SkillCategory["iconType"] }) {
  switch (type) {
    case "frontend":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-white stroke-2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    case "backend":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-white stroke-2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="8" x="2" y="2" rx="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
          <line x1="10" y1="6" x2="18" y2="6" />
          <line x1="10" y1="18" x2="18" y2="18" />
        </svg>
      );
    case "database":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-white stroke-2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case "tools":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-white stroke-2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="18" height="12" x="3" y="4" rx="2" />
          <line x1="6" y1="16" x2="6" y2="20" />
          <line x1="18" y1="16" x2="18" y2="20" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      );
    case "design":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-white stroke-2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    default:
      return null;
  }
}

function SkillBarItem({ skill }: { skill: SkillItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(() => (shouldReduceMotion ? skill.percentage : 0));

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return;

    let frameId: number;
    let startTime: number;
    const duration = 650; // ms

    const timer = setTimeout(() => {
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // easeOutExpo
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.round(ease * skill.percentage));

        if (progress < 1) {
          frameId = requestAnimationFrame(animateCount);
        }
      };

      frameId = requestAnimationFrame(animateCount);
    }, 330);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frameId);
    };
  }, [isInView, skill.percentage, shouldReduceMotion]);

  return (
    <div
      ref={ref}
      className="bg-paper border border-hairline p-2.5 sm:p-3 flex flex-col justify-between space-y-2.5"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`w-5 h-5 sm:w-6 sm:h-6 ${skill.badgeBg} ${skill.badgeText} font-mono font-bold text-[9px] sm:text-[10px] flex items-center justify-center`}
          >
            {skill.badge}
          </span>
          <span className="font-display text-xs font-bold text-charcoal">
            {skill.name}
          </span>
        </div>
        <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-cobalt tabular-nums">
          {count}%
        </span>
      </div>
      <div className="w-full bg-hairline h-1.5 overflow-hidden">
        {shouldReduceMotion ? (
          <div className="bg-cobalt h-full" style={{ width: `${skill.percentage}%` }} />
        ) : (
          <m.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
            transition={{ duration: 0.65, delay: 0.33, ease: [0.22, 1, 0.36, 1] }}
            className="bg-cobalt h-full"
          />
        )}
      </div>
    </div>
  );
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    countText: "7 TECHNOLOGIES",
    iconType: "frontend",
    iconBg: "bg-cobalt",
    skills: [
      { name: "JavaScript", badge: "JS", badgeBg: "bg-[#F7DF1E]", badgeText: "text-charcoal", percentage: 98 },
      { name: "TypeScript", badge: "TS", badgeBg: "bg-[#3178C6]", badgeText: "text-white", percentage: 92 },
      { name: "React.js", badge: "⚛", badgeBg: "bg-cobalt", badgeText: "text-white", percentage: 90 },
      { name: "Next.js", badge: "N", badgeBg: "bg-[#111726] border border-white/20", badgeText: "text-white", percentage: 88 },
      { name: "Tailwind CSS", badge: "TW", badgeBg: "bg-[#06B6D4]", badgeText: "text-white", percentage: 92 },
      { name: "HTML5", badge: "5", badgeBg: "bg-[#E34F26]", badgeText: "text-white", percentage: 95 },
      { name: "CSS3", badge: "3", badgeBg: "bg-[#1572B6]", badgeText: "text-white", percentage: 90 },
    ],
  },
  {
    title: "Backend",
    countText: "5 TECHNOLOGIES",
    iconType: "backend",
    iconBg: "bg-emerald-500",
    skills: [
      { name: "Node.js", badge: "JS", badgeBg: "bg-emerald-500", badgeText: "text-white", percentage: 92 },
      { name: "Express.js", badge: "EX", badgeBg: "bg-[#1E293B] border border-white/10", badgeText: "text-white", percentage: 90 },
      { name: "REST API", badge: "API", badgeBg: "bg-cobalt", badgeText: "text-white", percentage: 95 },
      { name: "JWT Auth", badge: "JWT", badgeBg: "bg-[#9333EA]", badgeText: "text-white", percentage: 88 },
      { name: "Prisma ORM", badge: "▲", badgeBg: "bg-cobalt", badgeText: "text-white", percentage: 90 },
    ],
  },
  {
    title: "Database",
    countText: "3 TECHNOLOGIES",
    iconType: "database",
    iconBg: "bg-[#4F46E5] dark:bg-[#6366F1]",
    footerNote: "ACID COMPLIANCE · DISTRIBUTED REPLICATION · MEMORY TIERS",
    skills: [
      { name: "PostgreSQL & SQL", badge: "PG", badgeBg: "bg-[#336791]", badgeText: "text-white", percentage: 90 },
      { name: "MongoDB", badge: "🍃", badgeBg: "bg-[#47A248]", badgeText: "text-white", percentage: 85 },
      { name: "Redis Caching", badge: "RD", badgeBg: "bg-[#DC382D]", badgeText: "text-white", percentage: 85 },
    ],
  },
  {
    title: "Tools & DevOps",
    countText: "5 TECHNOLOGIES",
    iconType: "tools",
    iconBg: "bg-[#EA580C]",
    skills: [
      { name: "Git & GitHub", badge: "GIT", badgeBg: "bg-[#F05032]", badgeText: "text-white", percentage: 92 },
      { name: "Docker", badge: "DK", badgeBg: "bg-[#2496ED]", badgeText: "text-white", percentage: 85 },
      { name: "VS Code", badge: "VS", badgeBg: "bg-[#007ACC]", badgeText: "text-white", percentage: 95 },
      { name: "Linux / Bash", badge: "SH", badgeBg: "bg-[#1E293B] border border-white/10", badgeText: "text-white", percentage: 85 },
      { name: "CI/CD Pipelines", badge: "CI", badgeBg: "bg-cobalt", badgeText: "text-white", percentage: 80 },
    ],
  },
  {
    title: "UI/UX & Design",
    countText: "3 TECHNOLOGIES",
    iconType: "design",
    iconBg: "bg-[#E11D48]",
    colSpan: "md:col-span-2 lg:col-span-2",
    footerNote: "SWISS DESIGN SYSTEM · ACCESSIBILITY WCAG 2.1 AA · MICRO-INTERACTIONS",
    skills: [
      { name: "Figma", badge: "FG", badgeBg: "bg-[#F24E1E]", badgeText: "text-white", percentage: 85 },
      { name: "Responsive UI", badge: "UI", badgeBg: "bg-cobalt", badgeText: "text-white", percentage: 95 },
      { name: "Framer Motion", badge: "FM", badgeBg: "bg-[#FF0055]", badgeText: "text-white", percentage: 82 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-b border-hairline bg-paper py-14 md:py-20 px-4 md:px-10"
    >
      <div className="max-w-[1440px] mx-auto space-y-8 md:space-y-10">
        {/* Section Header */}
        <Reveal direction="left" distance={12} duration={0.4}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-hairline pb-4 gap-4">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-cobalt uppercase block mb-1">
                03 / TECHNICAL STACK
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
                Disciplined Mastery
              </h2>
            </div>
            <p className="font-mono text-[10px] md:text-xs text-muted">
              STANDARDS: RIGOROUS TYPE SAFETY // 99.9% COVERAGE
            </p>
          </div>
        </Reveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" id="skills-grid">
          {skillCategories.map((category, idx) => (
            <Reveal
              key={category.title}
              delay={idx * 0.08}
              duration={0.45}
              className={`bg-surface-pure border border-hairline p-5 md:p-6 flex flex-col justify-start space-y-4 md:space-y-5 hover:border-cobalt/30 transition-colors duration-300 delay-0 hover:delay-[330ms] ${
                category.colSpan || ""
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-hairline">
                <div
                  className={`w-9 h-9 md:w-10 md:h-10 ${category.iconBg} text-white flex items-center justify-center font-mono font-bold text-sm select-none`}
                >
                  <CategoryIcon type={category.iconType} />
                </div>
                <div>
                  <h3 className="font-display text-base md:text-lg font-bold text-charcoal leading-none">
                    {category.title}
                  </h3>
                  <span className="font-mono text-[9px] md:text-[10px] text-muted uppercase tracking-wider mt-1 block">
                    {category.countText}
                  </span>
                </div>
              </div>

              {/* Tech Items with In-View Animated Width & Count-Up */}
              <div
                className={`grid gap-2.5 sm:gap-3 ${
                  category.colSpan ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1"
                }`}
              >
                {category.skills.map((skill) => (
                  <SkillBarItem key={skill.name} skill={skill} />
                ))}
              </div>

              {/* Optional Footer Note */}
              {category.footerNote && (
                <div className="border-t border-hairline pt-3 font-mono text-[9px] md:text-[10px] text-muted mt-auto">
                  {category.footerNote}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
