import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { projectsData } from "@/data/projects";
import { ProjectsFilterGrid } from "./ProjectsFilterGrid";

export const metadata: Metadata = {
  title: "Projects // Mohammad Tasif Hossan (Tasif)",
  description:
    "Comprehensive directory of full-stack systems, high-throughput distributed backends, and deterministic web applications engineered by Mohammad Tasif Hossan.",
};

export default function ProjectsIndexPage() {
  // Only display non-hidden projects in the directory
  const visibleProjects = projectsData.filter((p) => !p.hidden);

  return (
    <div className="min-h-screen bg-paper py-10 md:py-16 px-4 md:px-10">
      <div className="max-w-[1440px] mx-auto space-y-10 md:space-y-12">
        {/* Top Header / Breadcrumbs and Title */}
        <Reveal>
          <div className="space-y-4 border-b border-hairline pb-6">
            <div className="flex items-center justify-between font-mono text-[10px] md:text-xs text-muted-light select-none">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-1.5 text-cobalt hover:text-charcoal font-semibold transition-colors"
              >
                <span>←</span>
                <span>BACK TO HOME</span>
              </Link>
              <span>INDEX: [02/ALL_SELECTED_WORKS]</span>
            </div>

            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-cobalt uppercase block mb-1">
                02 / SELECTED WORK // ALL PROJECTS
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
                Engineered Systems
              </h1>
            </div>
          </div>
        </Reveal>

        {/* Filter Bar and Grid Component */}
        <ProjectsFilterGrid projects={visibleProjects} />
      </div>
    </div>
  );
}
