import React, { useState } from 'react';
import { Cpu, ArrowRight, Layers, Database, Sparkles, Smartphone, Terminal, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsSectionProps {
  onSelectSkillFilter: (skillName: string) => void;
}

export function SkillsSection({ onSelectSkillFilter }: SkillsSectionProps) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-white/5 relative bg-[#0B0D10]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] mb-2">
            04. Technical Capabilities & Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F5F2]">
            Competencies grounded in practical application.
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Click any technology below to inspect real application in projects. No arbitrary 99% progress bars or unsupported claims.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/5">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategoryIndex === idx
                  ? 'bg-[#FF6B35] text-white shadow-md shadow-[#FF6B35]/20'
                  : 'bg-[#13171E] text-slate-400 hover:text-white hover:bg-white/5 border border-white/5'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Category Display & Skill Chips */}
        <div className="p-8 rounded-2xl bg-[#13171E] border border-white/10 shadow-2xl">
          <div className="max-w-xl mb-8">
            <h3 className="text-xl font-bold text-white mb-1">{activeCategory.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{activeCategory.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-[#0E1217] border border-white/5 hover:border-[#FF6B35]/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-[#F5F5F2] font-mono group-hover:text-[#FF6B35] transition-colors">
                      {skill.name}
                    </span>
                    {skill.highlighted && (
                      <span className="text-[10px] font-mono uppercase text-[#FF6B35] bg-[#FF6B35]/10 px-2 py-0.5 rounded border border-[#FF6B35]/20">
                        Primary Focus
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {skill.levelDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500">
                    {skill.relatedProjects.length} related project{skill.relatedProjects.length !== 1 ? 's' : ''}
                  </span>
                  <button
                    onClick={() => onSelectSkillFilter(skill.name)}
                    className="inline-flex items-center gap-1 text-[#FF6B35] hover:underline"
                  >
                    <span>Filter projects</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick summary footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-mono">
            <span>Enterprise frameworks · Relational data modeling · End-to-end automation</span>
            <a
              href="#projects"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Jump to Project Gallery ↑
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
