import React, { useState } from 'react';
import { Search, FolderGit2, ArrowUpRight, X, Filter, Sparkles, Layers, ShieldCheck, Smartphone, Cpu } from 'lucide-react';
import { PROJECTS_LIST, ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (slug: string) => void;
  activeTechFilter: string | null;
  onClearTechFilter: () => void;
  onSelectTech: (tech: string) => void;
}

const CATEGORIES = [
  'All',
  'Full-Stack Development',
  'Backend Engineering',
  'AI and Machine Learning',
  'Mobile Applications'
];

export function ProjectsSection({
  onSelectProject,
  activeTechFilter,
  onClearTechFilter,
  onSelectTech
}: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = PROJECTS_LIST.filter((proj) => {
    // Category filter
    if (selectedCategory !== 'All' && proj.category !== selectedCategory) {
      return false;
    }
    // Tech filter
    if (activeTechFilter) {
      const hasTech = proj.technologies.some(
        (t) => t.toLowerCase() === activeTechFilter.toLowerCase()
      );
      if (!hasTech) return false;
    }
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = proj.title.toLowerCase().includes(q);
      const matchSubtitle = proj.subtitle.toLowerCase().includes(q);
      const matchSummary = proj.summary.toLowerCase().includes(q);
      const matchTech = proj.technologies.some((t) => t.toLowerCase().includes(q));
      if (!matchTitle && !matchSubtitle && !matchSummary && !matchTech) {
        return false;
      }
    }
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] mb-2">
              03. Selected Software Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F5F2]">
              Engineered for reliability, correctness, and scale.
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Explore 9 full-stack applications, enterprise backend services, automation pipelines, and machine learning utilities.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or stack..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#13171E] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF6B35]/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Bar: Category Tabs & Active Tech Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-white/5">
          {/* Functional Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#13171E] border border-white/10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#FF6B35] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Active Tech Indicator with clear action */}
          {activeTechFilter && (
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-400">Filtering by:</span>
              <span className="text-[#FF6B35] font-semibold">{activeTechFilter}</span>
              <button
                onClick={onClearTechFilter}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-slate-200 text-[11px] transition-colors"
                title="Clear technology filter"
              >
                <span>Clear</span>
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-16 text-center rounded-2xl bg-[#13171E]/50 border border-white/10 space-y-3">
            <FolderGit2 className="w-8 h-8 text-slate-500 mx-auto" />
            <p className="text-base font-semibold text-white">No projects found</p>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              No software projects match the current search query or active filter. Try resetting your filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                onClearTechFilter();
              }}
              className="mt-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-medium text-white transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const isHeroCard = project.featured && (project.slug === 'shelf-sync' || project.slug === 'flowforge');

              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project.slug)}
                  className={`group relative rounded-2xl bg-[#13171E] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-1 ${
                    isHeroCard ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  {/* Visual card banner / image preview if available */}
                  {project.imageUrl && (
                    <div className="h-48 sm:h-56 w-full overflow-hidden relative bg-[#0B0D10]">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#13171E] via-[#13171E]/30 to-transparent" />
                      <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white group-hover:bg-[#FF6B35] group-hover:border-[#FF6B35] transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  )}

                  {/* Card Content Area */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Clean unboxed metadata header */}
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-2">
                        <span className="text-[#FF6B35] font-semibold">{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.status}</span>
                      </div>

                      {/* Title & Subtitle */}
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-xl font-bold text-[#F5F5F2] group-hover:text-[#FF6B35] transition-colors">
                          {project.title}
                        </h3>
                        {!project.imageUrl && (
                          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 group-hover:text-white transition-colors shrink-0">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        )}
                      </div>

                      <p className="text-xs font-medium text-slate-300 mb-3">
                        {project.subtitle}
                      </p>

                      <p className="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-3">
                        {project.summary}
                      </p>
                    </div>

                    {/* Tech tags and CTA */}
                    <div className="pt-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <button
                            key={tech}
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectTech(tech);
                            }}
                            className="px-2 py-0.5 rounded bg-black/40 hover:bg-[#FF6B35]/20 text-slate-300 hover:text-[#FF6B35] font-mono text-[11px] border border-white/5 transition-colors"
                            title={`Filter by ${tech}`}
                          >
                            {tech}
                          </button>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="text-[11px] font-mono text-slate-500 self-center">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                        <span className="group-hover:text-white transition-colors">
                          Inspect System Design & Case Study →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
