import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { projectsData } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Tasif",
    };
  }

  return {
    title: `${project.title} — Architectural Case Study | Tasif`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Tasif`,
      description: project.tagline,
      images: [
        {
          url: project.thumbnail.replace("[IMAGE] ", ""),
          width: 800,
          height: 500,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject =
    projectIndex > 0 ? projectsData[projectIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : projectsData[0];

  const cleanLiveUrl = project.liveUrl.replace("[LIVE URL] ", "");
  const cleanClientRepoUrl = project.clientRepoUrl.replace("[GITHUB CLIENT URL] ", "");
  const cleanThumbnail = project.thumbnail.replace("[IMAGE] ", "");

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* 7. Top Navigation: Back to Projects & Breadcrumb */}
      <div className="flex items-center justify-between gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link
            href="/project"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Projects
          </Link>
          <span>/</span>
          <span className="text-neutral-900 dark:text-white font-semibold truncate max-w-[200px]">
            {project.title}
          </span>
        </div>

        <Link
          href="/project"
          className="inline-flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Main Header */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-mono font-bold">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-500" />
              Featured Project
            </span>
          )}
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            {project.title}
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 font-medium leading-relaxed">
            {project.tagline}
          </p>
        </div>
      </header>

      {/* Visual Media Banner */}
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl bg-neutral-950">
        <Image
          src={cleanThumbnail}
          alt={`${project.title} Preview`}
          width={800}
          height={500}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      {/* 1. Main Technology Stack (icon chips) */}
      <section className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#121620] space-y-3">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Main Technology Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 shadow-2xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* 2. Brief Description */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
          Brief Description
        </h2>
        <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121620] text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
          <p>{project.summary}</p>
        </div>
      </section>

      {/* 3 & 4. Project Links: Live Demo & GitHub Client Repository Only */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
          Project Links
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          {/* 3. Live Project Link */}
          <a
            href={cleanLiveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-sm hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Live Project Link</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* 4. GitHub Repository Link (Client Repo Only) */}
          <a
            href={cleanClientRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#121620] text-neutral-800 dark:text-neutral-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-sm transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-2xs"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository (Client)</span>
          </a>
        </div>
      </section>

      {/* 5. Challenges Faced While Developing */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
          <AlertTriangle className="w-5 h-5" />
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Challenges Faced While Developing
          </h2>
        </div>
        <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121620] space-y-3">
          <ul className="space-y-3">
            {project.challenges.map((challenge, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Potential Improvements & Future Plans */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
          <Lightbulb className="w-5 h-5" />
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Potential Improvements &amp; Future Plans
          </h2>
        </div>
        <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121620] space-y-3">
          <ul className="space-y-3">
            {project.futureImprovements.map((improvement, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                <span>{improvement}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Previous / Next Project Navigation + Back to Projects */}
      <nav
        aria-label="Project Navigation"
        className="pt-10 border-t border-neutral-200/80 dark:border-neutral-800/80 space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Previous Project */}
          <Link
            href={`/project/${prevProject.slug}`}
            className="group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121620] hover:border-blue-500/40 transition-all text-left space-y-2 shadow-xs"
          >
            <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Previous Project</span>
            </div>
            <h3 className="font-bold text-base text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {prevProject.title}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">
              {prevProject.tagline}
            </p>
          </Link>

          {/* Next Project */}
          <Link
            href={`/project/${nextProject.slug}`}
            className="group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121620] hover:border-blue-500/40 transition-all text-right space-y-2 shadow-xs"
          >
            <div className="flex items-center justify-end gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              <span>Next Project</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="font-bold text-base text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {nextProject.title}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">
              {nextProject.tagline}
            </p>
          </Link>
        </div>

        <div className="text-center pt-2">
          <Link
            href="/project"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#121620] text-neutral-800 dark:text-neutral-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-xs font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
