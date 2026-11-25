"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import type { Project } from "@/data/projects";

interface Props {
  projects: Project[];
}

export function ProjectsFilterGrid({ projects }: Props) {
  const [selectedTag, setSelectedTag] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  // Exclude hidden projects defensively
  const visibleProjects = useMemo(() => projects.filter((p) => !p.hidden), [projects]);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    visibleProjects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
    return ["All", ...Array.from(tagSet).sort()];
  }, [visibleProjects]);

  const filtered = useMemo(() => {
    if (selectedTag === "All") return visibleProjects;
    return visibleProjects.filter((p) => p.tags.includes(selectedTag));
  }, [visibleProjects, selectedTag]);

  return (
    <div className="space-y-8">
      {/* Tech-stack filter bar */}
      <Reveal delay={0.06}>
        <div className="space-y-2.5 border-b border-hairline pb-4 pt-1">
          <div className="flex items-center justify-between font-mono text-[10px] text-muted uppercase tracking-wider select-none">
            <span className="flex items-center gap-1.5 font-semibold text-charcoal">
              <span className="w-1.5 h-1.5 bg-cobalt inline-block" />
              [ FILTER_BY_TECH ]
            </span>
            <span className="text-[9px] text-muted-light">
              {filtered.length} {filtered.length === 1 ? "SPEC" : "SPECS"} LOADED
            </span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {allTags.map((tag) => {
              const isActive = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`relative px-2.5 py-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider transition-colors cursor-pointer select-none border ${
                    isActive
                      ? "text-white border-cobalt bg-cobalt font-semibold shadow-xs"
                      : "text-muted hover:text-charcoal bg-surface-pure border-hairline hover:border-charcoal/40"
                  }`}
                >
                  {isActive && !shouldReduceMotion && (
                    <m.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-cobalt"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tag}</span>
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* Responsive Grid of Project Cards */}
      <m.div
        layout={!shouldReduceMotion}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => {
            const isSvg = project.thumbnail.endsWith(".svg");
            return (
              <m.div
                key={project.slug}
                layout={!shouldReduceMotion}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <Reveal delay={Math.min(idx * 0.08, 0.4)}>
                  <article className="group h-full bg-surface-pure border border-hairline flex flex-col justify-between overflow-hidden shadow-none hover:border-cobalt/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    {/* Top Blueprint Card Metadata Hairlines */}
                    <div className="w-full border-b border-hairline px-3 py-1 flex items-center justify-between font-mono text-[9px] text-muted-light select-none">
                      <span className="text-cobalt font-semibold">
                        [ {project.category.toUpperCase()} ]
                      </span>
                      <span>REF: {project.slug.toUpperCase()}</span>
                    </div>

                    {/* Image Container */}
                    <div className="relative aspect-[21/9] w-full bg-paper dark:bg-[#0B0F1A] border-b border-hairline overflow-hidden flex items-center justify-center p-1 sm:p-2">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        unoptimized={isSvg}
                        className="object-contain object-center hover:scale-[1.02] transition-transform duration-500 ease-out"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between border-b border-hairline pb-2">
                          <h3 className="font-display text-lg sm:text-xl font-bold text-charcoal">
                            {project.title}
                          </h3>
                          <span className="font-mono text-[9px] uppercase px-2 py-0.5 bg-paper border border-hairline text-charcoal shrink-0">
                            {project.status || "Deployed"} · {project.year || "2024"}
                          </span>
                        </div>

                        <p className="font-body text-xs text-muted leading-relaxed line-clamp-3">
                          {project.overview || project.summary || project.tagline}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-paper border border-hairline font-mono text-[10px] text-charcoal"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action Link */}
                      <div className="border-t border-hairline pt-3 flex items-center justify-between">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="font-display font-semibold text-xs sm:text-sm text-cobalt hover:text-charcoal flex items-center gap-1.5 group/link"
                        >
                          <span>View Details</span>
                          <span className="group-hover/link:translate-x-1 transition-transform">
                            →
                          </span>
                        </Link>
                        <span className="font-mono text-[10px] text-muted-light">
                          ARCH SPEC [DOC]
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </m.div>
            );
          })}
        </AnimatePresence>
      </m.div>
    </div>
  );
}
