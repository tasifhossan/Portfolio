import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { projectsData } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData
    .filter((p) => !p.hidden)
    .map((p) => ({
      slug: p.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project || project.hidden) {
    return {
      title: "Project Not Found // Tasif",
    };
  }

  return {
    title: `${project.title} // Tasif`,
    description: project.tagline || project.summary,
    openGraph: {
      title: `${project.title} // Tasif`,
      description: project.tagline || project.summary,
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const visibleProjects = projectsData.filter((p) => !p.hidden);
  const projectIndex = visibleProjects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = visibleProjects[projectIndex];
  const isSvg = project.thumbnail.endsWith(".svg");

  // Navigation wrap-around for Previous / Next projects (skips hidden projects)
  const prevProject =
    visibleProjects[(projectIndex - 1 + visibleProjects.length) % visibleProjects.length];
  const nextProject =
    visibleProjects[(projectIndex + 1) % visibleProjects.length];

  // Helper for github links
  const frontendRepoUrl =
    typeof project.githubUrl === "string"
      ? project.githubUrl
      : project.githubUrl?.client;
  const backendRepoUrl =
    project.backendRepoUrl ||
    (typeof project.githubUrl === "object"
      ? project.githubUrl.server
      : undefined);

  // Track dynamic section numbering
  let sectionIndex = 1;
  const getSectionNum = () => {
    const num = sectionIndex < 10 ? `0${sectionIndex}` : `${sectionIndex}`;
    sectionIndex++;
    return num;
  };

  return (
    <div className="min-h-screen bg-paper py-8 md:py-14 px-4 md:px-10">
      <div className="max-w-[1440px] mx-auto space-y-8 md:space-y-10">
        {/* 1. Breadcrumb Navigation */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-hairline pb-3 gap-2 font-mono text-[10px] md:text-xs text-muted-light select-none">
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-cobalt transition-colors">
                HOME
              </Link>
              <span>/</span>
              <Link href="/projects" className="hover:text-cobalt transition-colors">
                PROJECTS
              </Link>
              <span>/</span>
              <span className="text-charcoal font-semibold uppercase">
                {project.title}
              </span>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-cobalt hover:text-charcoal font-semibold transition-colors"
            >
              <span>←</span>
              <span>ALL PROJECTS</span>
            </Link>
          </div>
        </Reveal>

        {/* 2. Hero Section */}
        <Reveal delay={0.06}>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold tracking-widest text-cobalt uppercase">
                PROJECT // {projectIndex + 1 < 10 ? `0${projectIndex + 1}` : projectIndex + 1}
              </span>
              <span className="font-mono text-[10px] uppercase px-2 py-0.5 bg-surface-pure border border-hairline text-charcoal">
                {project.status || "Deployed"} · {project.year || "2024"}
              </span>
              {project.role && (
                <span className="hidden sm:inline font-mono text-[10px] uppercase px-2 py-0.5 bg-surface-pure border border-hairline text-muted">
                  [ {project.role} ]
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-charcoal tracking-tight uppercase leading-[0.95]">
              {project.title}
            </h1>

            <p className="font-body text-sm sm:text-lg text-muted max-w-3xl leading-relaxed">
              {project.tagline}
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-surface-pure border border-hairline font-mono text-[10px] md:text-[11px] text-charcoal"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Live Demo and GitHub buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-cobalt text-white font-display font-semibold text-xs sm:text-sm tracking-tight hover:bg-cobalt-dark transition-colors"
                >
                  <span>Live Demo</span>
                  <span>↗</span>
                </a>
              )}
              {frontendRepoUrl && (
                <a
                  href={frontendRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-surface-pure border border-hairline text-charcoal font-display font-semibold text-xs sm:text-sm tracking-tight hover:border-charcoal hover:bg-paper transition-colors"
                >
                  <span>{backendRepoUrl ? "Frontend repo" : "GitHub Repository"}</span>
                  <span>↗</span>
                </a>
              )}
              {backendRepoUrl && (
                <a
                  href={backendRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-surface-pure border border-hairline text-charcoal font-display font-semibold text-xs sm:text-sm tracking-tight hover:border-charcoal hover:bg-paper transition-colors"
                >
                  <span>Backend repo</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>
        </Reveal>

        {/* 3. Main Image in Blueprint Framed Container with Corner Tick Marks */}
        <Reveal delay={0.12}>
          <div className="relative border border-hairline bg-surface-pure dark:bg-[#0B0F1A] p-2 sm:p-3 my-6 select-none">
            {/* Architectural Corner Tick Marks */}
            <div className="absolute -top-1.5 -left-1.5 w-3 sm:w-4 h-3 sm:w-4 border-t-2 border-l-2 border-cobalt pointer-events-none" />
            <div className="absolute -top-1.5 -right-1.5 w-3 sm:w-4 h-3 sm:w-4 border-t-2 border-r-2 border-cobalt pointer-events-none" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3 sm:w-4 h-3 sm:w-4 border-b-2 border-l-2 border-cobalt pointer-events-none" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 sm:w-4 h-3 sm:w-4 border-b-2 border-r-2 border-cobalt pointer-events-none" />

            <div className="relative aspect-[21/9] sm:aspect-[2/1] w-full overflow-hidden border border-hairline bg-paper dark:bg-[#0B0F1A]">
              <Image
                src={project.thumbnail}
                alt={`${project.title} Architectural Specification Interface`}
                fill
                priority
                sizes="(min-width: 1440px) 1360px, 100vw"
                unoptimized={isSvg}
                className="object-contain object-center"
              />
            </div>
          </div>
        </Reveal>

        {/* 4. Two-Column Area: Specs Sidebar & Detail Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Specs Sidebar (Sticky on lg, Above on mobile) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 order-1 lg:order-1">
            <Reveal delay={0.08}>
              <div className="bg-surface-pure border border-hairline p-5 sm:p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-hairline pb-2 font-mono text-[10px] text-muted">
                  <span className="text-cobalt font-bold tracking-wider">[ SPECS ]</span>
                  <span>REF: {project.slug.toUpperCase()}</span>
                </div>

                <dl className="space-y-4 font-mono text-xs">
                  {project.status && (
                    <div className="flex items-start justify-between border-b border-hairline/60 pb-2">
                      <dt className="text-muted uppercase text-[11px]">STATUS</dt>
                      <dd className="font-bold text-charcoal text-right">
                        {project.status}
                      </dd>
                    </div>
                  )}

                  {project.year && (
                    <div className="flex items-start justify-between border-b border-hairline/60 pb-2">
                      <dt className="text-muted uppercase text-[11px]">YEAR</dt>
                      <dd className="font-bold text-charcoal text-right">
                        {project.year}
                      </dd>
                    </div>
                  )}

                  {project.role && (
                    <div className="flex items-start justify-between border-b border-hairline/60 pb-2">
                      <dt className="text-muted uppercase text-[11px]">ROLE</dt>
                      <dd className="font-bold text-charcoal text-right max-w-[180px]">
                        {project.role}
                      </dd>
                    </div>
                  )}

                  {project.category && (
                    <div className="flex items-start justify-between border-b border-hairline/60 pb-2">
                      <dt className="text-muted uppercase text-[11px]">CATEGORY</dt>
                      <dd className="font-bold text-charcoal text-right">
                        {project.category}
                      </dd>
                    </div>
                  )}

                  {project.tags && project.tags.length > 0 && (
                    <div className="space-y-1.5 border-b border-hairline/60 pb-3">
                      <dt className="text-muted uppercase text-[11px]">STACK</dt>
                      <dd className="flex flex-wrap gap-1 pt-1">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 bg-paper border border-hairline text-[10px] text-charcoal"
                          >
                            {t}
                          </span>
                        ))}
                      </dd>
                    </div>
                  )}

                  {/* External links */}
                  <div className="space-y-2 pt-1">
                    <dt className="text-muted uppercase text-[11px]">LINKS</dt>
                    <dd className="space-y-1.5">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-cobalt hover:underline text-[11px] truncate"
                        >
                          DEPLOYED APP ↗
                        </a>
                      )}
                      {frontendRepoUrl && (
                        <a
                          href={frontendRepoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-muted hover:text-charcoal text-[11px] truncate"
                        >
                          {backendRepoUrl ? "FRONTEND REPO ↗" : "GITHUB [SOURCE] ↗"}
                        </a>
                      )}
                      {backendRepoUrl && (
                        <a
                          href={backendRepoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-muted hover:text-charcoal text-[11px] truncate"
                        >
                          BACKEND REPO ↗
                        </a>
                      )}
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </aside>

          {/* Right Column: Architectural Detail Sections (Only render if data exists) */}
          <main className="lg:col-span-8 space-y-10 order-2 lg:order-2">
            {/* Overview Section */}
            {project.overview && (
              <Reveal>
                <section className="space-y-3">
                  <span className="font-mono text-xs font-bold tracking-widest text-cobalt uppercase block">
                    {getSectionNum()} // OVERVIEW
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
                    System Architecture &amp; Scope
                  </h2>
                  <p className="font-body text-xs sm:text-base text-muted leading-relaxed">
                    {project.overview}
                  </p>
                </section>
              </Reveal>
            )}

            {/* Problem & Solution Sections */}
            {(project.problem || project.solution) && (
              <Reveal>
                <section className="space-y-4">
                  <span className="font-mono text-xs font-bold tracking-widest text-cobalt uppercase block">
                    {getSectionNum()} // PROBLEM &amp; SOLUTION
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.problem && (
                      <div className="bg-surface-pure border border-hairline p-5 space-y-2">
                        <span className="font-mono text-[10px] text-rose-500 font-bold uppercase tracking-wider block">
                          [ THE CHALLENGE ]
                        </span>
                        <p className="font-body text-xs text-muted leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                    )}
                    {project.solution && (
                      <div className="bg-surface-pure border border-hairline p-5 space-y-2">
                        <span className="font-mono text-[10px] text-emerald-500 font-bold uppercase tracking-wider block">
                          [ ARCHITECTURAL SOLUTION ]
                        </span>
                        <p className="font-body text-xs text-muted leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              </Reveal>
            )}

            {/* Key Features Grid */}
            {project.features && project.features.length > 0 && (
              <Reveal>
                <section className="space-y-3">
                  <span className="font-mono text-xs font-bold tracking-widest text-cobalt uppercase block">
                    {getSectionNum()} // KEY FEATURES
                  </span>
                  <h2 className="font-display text-2xl font-bold text-charcoal tracking-tight">
                    Core Engineering Capabilities
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {project.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="bg-surface-pure border border-hairline p-4 space-y-1.5"
                      >
                        <span className="font-mono text-[9px] text-cobalt font-bold">
                          [ FEAT_{fIdx + 1 < 10 ? `0${fIdx + 1}` : fIdx + 1} ]
                        </span>
                        <p className="font-body text-xs text-charcoal leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            {/* Architecture Section */}
            {project.architecture && project.architecture.length > 0 && (
              <Reveal>
                <section className="space-y-3">
                  <span className="font-mono text-xs font-bold tracking-widest text-cobalt uppercase block">
                    {getSectionNum()} // ARCHITECTURE SPECIFICATION
                  </span>
                  <h2 className="font-display text-2xl font-bold text-charcoal tracking-tight">
                    System Design &amp; Data Pipeline
                  </h2>
                  <ul className="space-y-2.5 pt-1 font-mono text-xs">
                    {project.architecture.map((arch, aIdx) => (
                      <li
                        key={aIdx}
                        className="p-3 bg-surface-pure border border-hairline flex items-start gap-2.5 text-muted"
                      >
                        <span className="text-cobalt font-bold select-none">→</span>
                        <span className="leading-relaxed text-charcoal">{arch}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            )}

            {/* Challenges Section */}
            {project.challenges && project.challenges.length > 0 && (
              <Reveal>
                <section className="space-y-3">
                  <span className="font-mono text-xs font-bold tracking-widest text-cobalt uppercase block">
                    {getSectionNum()} // ENGINEERING CHALLENGES
                  </span>
                  <h2 className="font-display text-2xl font-bold text-charcoal tracking-tight">
                    Friction Points &amp; Technical Mitigations
                  </h2>
                  <div className="space-y-3 pt-1">
                    {project.challenges.map((c, cIdx) => (
                      <div
                        key={cIdx}
                        className="bg-surface-pure border border-hairline p-4 sm:p-5 space-y-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-cobalt font-bold">
                            [ RISK_{cIdx + 1 < 10 ? `0${cIdx + 1}` : cIdx + 1} ]
                          </span>
                          <h3 className="font-display text-sm sm:text-base font-bold text-charcoal">
                            {c.title}
                          </h3>
                        </div>
                        <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                          {c.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            {/* Outcomes Section */}
            {project.outcomes && project.outcomes.length > 0 && (
              <Reveal>
                <section className="space-y-3">
                  <span className="font-mono text-xs font-bold tracking-widest text-cobalt uppercase block">
                    {getSectionNum()} // OUTCOMES &amp; IMPACT
                  </span>
                  <h2 className="font-display text-2xl font-bold text-charcoal tracking-tight">
                    Operational Results
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {project.outcomes.map((outcome, oIdx) => (
                      <div
                        key={oIdx}
                        className="bg-surface-pure border border-hairline p-4 space-y-1"
                      >
                        <span className="font-mono text-[9px] text-emerald-500 font-bold">
                          [ RESULT_{oIdx + 1} ]
                        </span>
                        <p className="font-body text-xs text-charcoal leading-relaxed">
                          {outcome}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            {/* 5. Optional Gallery Grid */}
            {project.gallery && project.gallery.length > 0 && (
              <Reveal>
                <section className="space-y-3">
                  <span className="font-mono text-xs font-bold tracking-widest text-cobalt uppercase block">
                    {getSectionNum()} // SYSTEM GALLERY
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery.map((img, gIdx) => (
                      <div
                        key={gIdx}
                        className="relative aspect-video bg-paper dark:bg-[#0B0F1A] border border-hairline overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} Architectural Interface view ${gIdx + 1}`}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}
          </main>
        </div>

        {/* 6. Previous / Next Project Navigation (Wraps around) */}
        <div className="border-t border-hairline pt-8">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex-1 flex flex-col items-start gap-1 p-4 bg-surface-pure border border-hairline hover:border-cobalt transition-colors"
            >
              <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
                ← PREV_SPEC
              </span>
              <span className="font-display text-sm font-bold text-charcoal group-hover:text-cobalt transition-colors truncate w-full">
                {prevProject.title}
              </span>
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex-1 flex flex-col items-end gap-1 p-4 bg-surface-pure border border-hairline hover:border-cobalt transition-colors text-right"
            >
              <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
                NEXT_SPEC →
              </span>
              <span className="font-display text-sm font-bold text-charcoal group-hover:text-cobalt transition-colors truncate w-full">
                {nextProject.title}
              </span>
            </Link>
          </div>
        </div>

        {/* 7. Call To Action (Let's build something together) */}
        <Reveal>
          <div className="bg-surface-pure border border-hairline p-8 md:p-14 text-center space-y-4">
            <span className="font-mono text-[10px] text-cobalt uppercase tracking-widest font-bold">
              [ DISPATCH_INQUIRY // ARCHITECTURAL ENGAGEMENT ]
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal tracking-tight">
              Let&apos;s build something together
            </h3>
            <p className="font-body text-xs sm:text-sm text-muted max-w-xl mx-auto leading-relaxed">
              Seeking reliable distributed backend architectures or mathematically precise web applications? I&apos;m available for full-time engineering deployments and technical consulting.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 bg-cobalt text-white font-display font-semibold text-xs sm:text-sm tracking-tight hover:bg-cobalt-dark transition-colors"
              >
                <span>Initiate Conversation</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
