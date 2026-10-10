import React from 'react';
import { GraduationCap, Award, Compass, Layers, Database, Workflow, Smartphone, Bug } from 'lucide-react';
import { ProfileData, EDUCATION_LIST } from '../data/portfolioData';

interface AboutSectionProps {
  profile: ProfileData;
}

const HOW_I_BUILD_PRINCIPLES = [
  {
    index: '01',
    title: 'Systems Thinking & Architecture',
    description: 'Deconstructing user requirements into modular service boundaries, clear contracts, and resilient communication paths before writing code.',
    icon: <Layers className="w-5 h-5 text-[#FF6B35]" />
  },
  {
    index: '02',
    title: 'Backend Services & API Design',
    description: 'Developing clean, idiomatic REST endpoints using Spring Boot, Hibernate, and Flask with strict payload validation, DTOs, and error handling.',
    icon: <Compass className="w-5 h-5 text-[#FF6B35]" />
  },
  {
    index: '03',
    title: 'Database Modelling & Data Flow',
    description: 'Engineering normalized relational schemas in PostgreSQL and MySQL, maintaining ACID guarantees, foreign keys, and performant indexes.',
    icon: <Database className="w-5 h-5 text-[#FF6B35]" />
  },
  {
    index: '04',
    title: 'Automation & Integration Workflows',
    description: 'Bridging disconnected services through Selenium browser automation, webhook event listeners, and programmatic document pipelines.',
    icon: <Workflow className="w-5 h-5 text-[#FF6B35]" />
  },
  {
    index: '05',
    title: 'Frontend Usability & Responsive UI',
    description: 'Constructing focused, responsive interfaces using Angular, React, and Flutter that communicate clearly with backend systems.',
    icon: <Smartphone className="w-5 h-5 text-[#FF6B35]" />
  },
  {
    index: '06',
    title: 'Testing, Debugging & Maintainability',
    description: 'Writing maintainable code with clear documentation, Postman test suites, reproducible Docker setups, and robust exception handling.',
    icon: <Bug className="w-5 h-5 text-[#FF6B35]" />
  }
];

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] mb-2">
            01. Professional Profile & Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F5F2]">
            Engineering foundations built on rigor, curiosity, and execution.
          </h2>
        </div>

        {/* Biography & Editorial Portrait Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Portrait Column (4 cols) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group max-w-sm w-full">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#13171E] shadow-2xl relative">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-slate-300">
                  <p className="font-semibold text-white">{profile.name}</p>
                  <p className="text-slate-400 text-[11px] mt-0.5">{profile.location} · {profile.opportunityNote}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="font-medium text-white text-xl leading-relaxed">
              "{profile.bio}"
            </p>
            {profile.extendedBio.map((paragraph, idx) => (
              <p key={idx} className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

        </div>

        {/* Academic Journey Timeline */}
        <div className="mb-24">
          <div className="mb-10">
            <p className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] mb-1">
              Academic Background
            </p>
            <h3 className="text-2xl font-bold text-[#F5F5F2]">
              Education & Academic Honors
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Verified university degrees in Computer Applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION_LIST.map((edu) => (
              <div
                key={edu.id}
                className="p-6 rounded-2xl bg-[#13171E]/70 border border-white/10 shadow-lg hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-mono text-[#FF6B35]">{edu.period}</span>
                      <h4 className="text-lg font-bold text-white mt-0.5">{edu.degree}</h4>
                      <p className="text-sm text-slate-300 font-medium">{edu.institution}</p>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 shrink-0">
                      <GraduationCap className="w-5 h-5 text-[#FF6B35]" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 py-2.5 px-3 rounded-xl bg-black/40 border border-white/5 mb-4 text-xs font-mono">
                    <span className="text-slate-400">{edu.scoreLabel}:</span>
                    <span className="text-[#FF6B35] font-bold text-sm">{edu.scoreValue}</span>
                    {edu.honors && (
                      <span className="ml-auto inline-flex items-center gap-1 text-emerald-400 font-sans font-medium text-xs">
                        <Award className="w-3.5 h-3.5" />
                        {edu.honors}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {edu.description}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                    Key Coursework
                  </p>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-400">
                    {edu.courses.map((course, idx) => (
                      <span key={idx} className="after:content-['·'] last:after:content-none after:ml-1.5 mr-1 text-[11px]">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How I Build Section */}
        <div>
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] mb-1">
              Engineering Mindset
            </p>
            <h3 className="text-2xl font-bold text-[#F5F5F2]">
              How I Build
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Core technical practices and architecture decisions guiding my software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_I_BUILD_PRINCIPLES.map((principle) => (
              <div
                key={principle.index}
                className="p-6 rounded-2xl bg-[#13171E]/50 border border-white/10 hover:border-white/20 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#FF6B35]">{principle.index}</span>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-[#FF6B35]/30 transition-colors">
                      {principle.icon}
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {principle.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
