"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  FolderGit2,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { projectsData } from "@/data/projects";
import { Reveal } from "@/components/motion/Reveal";

export default function ProjectsDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    projectsData.forEach((project) => {
      project.tags.forEach((tag) => tagSet.add(tag));
    });
    return ["All", ...Array.from(tagSet).sort()];
  }, []);

  // Filter projects based on search query and selected tag
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesTag =
        selectedTag === "All" || project.tags.includes(selectedTag);

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.tags.some((t) => t.toLowerCase().includes(query)) ||
        project.summary.toLowerCase().includes(query);

      return matchesTag && matchesSearch;
    });
  }, [searchQuery, selectedTag]);

  return (
    <Reveal duration={0.4} className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Back to Home & Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
        <Link
          href="/"
          className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <span>/</span>
        <span className="text-neutral-800 dark:text-neutral-200 font-semibold">
          Projects Directory
        </span>
      </div>

      {/* Hero Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold">
          <FolderGit2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>PORTFOLIO CATALOG</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          All Projects
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Explore complete applications, systems, and platforms with live links, client source code, and architectural breakdowns.
        </p>
      </div>

      {/* Controls: Search and Tag Filters */}
      <div className="space-y-6 pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, tag, or category..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#121620] text-neutral-900 dark:text-white placeholder-neutral-400 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all shadow-xs"
            />
          </div>

          {/* Result Count Indicator */}
          <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0">
            Showing <span className="font-bold text-neutral-900 dark:text-white">{filteredProjects.length}</span> of{" "}
            {projectsData.length} projects
          </div>
        </div>

        {/* Tag Pills Filter */}
        <div className="flex flex-wrap items-center gap-2">
          {allTags.map((tag) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-colors ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const cleanLiveUrl = project.liveUrl.replace("[LIVE URL] ", "");
            const cleanClientRepoUrl = project.clientRepoUrl.replace("[GITHUB CLIENT URL] ", "");
            const cleanThumbnail = project.thumbnail.replace("[IMAGE] ", "");

            return (
              <article
                key={project.slug}
                className="group flex flex-col rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121620] overflow-hidden hover:border-blue-500/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Visual Thumbnail */}
                <Link
                  href={`/project/${project.slug}`}
                  className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950 block"
                >
                  <Image
                    src={cleanThumbnail}
                    alt={`${project.title} - ${project.tagline}`}
                    width={600}
                    height={380}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-neutral-900/85 backdrop-blur-md text-white text-[11px] font-mono tracking-wider border border-neutral-700/60">
                    {project.category}
                  </div>
                </Link>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <Link href={`/project/${project.slug}`}>
                        <h2 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h2>
                      </Link>

                      {/* Direct External Action Links */}
                      <div className="flex items-center gap-1.5">
                        <a
                          href={cleanClientRepoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub client repo for ${project.title}`}
                          className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                        <a
                          href={cleanLiveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo for ${project.title}`}
                          className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-500">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* View Details Button */}
                    <Link
                      href={`/project/${project.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-2xs"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 space-y-3 rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800">
          <p className="text-lg font-semibold text-neutral-900 dark:text-white">
            No projects found matching your criteria.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Try adjusting your search query or selecting &ldquo;All&rdquo; tags.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedTag("All");
            }}
            className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      )}
    </Reveal>
  );
}
