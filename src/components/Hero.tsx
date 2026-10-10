import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Mail, Terminal, Sparkles, Check, Database, Layers, ShieldCheck } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';

interface HeroProps {
  profile: ProfileData;
  onOpenResume: () => void;
  onExploreProjects: () => void;
}

const TERMINAL_SNIPPETS = [
  {
    lang: 'java',
    file: 'InventoryService.java',
    lines: [
      '@Transactional(isolation = Isolation.REPEATABLE_READ)',
      'public StockResult adjustInventory(Long skuId, int delta) {',
      '    Product item = productRepo.findByIdWithLock(skuId);',
      '    item.applyDelta(delta);',
      '    return auditLedger.record(item);',
      '}'
    ]
  },
  {
    lang: 'python',
    file: 'job_parser.py',
    lines: [
      'def parse_requirements(job_description: str) -> MatchReport:',
      '    tokens = tokenize_and_weight(job_description)',
      '    candidate_graph = load_profile_graph(user_id)',
      '    overlap = calculate_cosine_similarity(tokens, candidate_graph)',
      '    return format_gap_matrix(overlap)'
    ]
  },
  {
    lang: 'sql',
    file: 'audit_migration.sql',
    lines: [
      'CREATE INDEX idx_orders_customer_date',
      'ON customer_orders (customer_id, created_at DESC);',
      '-- Query performance optimized: 140ms -> 3.8ms execution time',
      'EXPLAIN ANALYZE SELECT * FROM customer_orders WHERE customer_id = $1;'
    ]
  }
];

export function Hero({ profile, onOpenResume, onExploreProjects }: HeroProps) {
  const [snippetIndex, setSnippetIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSnippetIndex((prev) => (prev + 1) % TERMINAL_SNIPPETS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const activeSnippet = TERMINAL_SNIPPETS[snippetIndex];

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF6B35]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* 2-Column Balanced Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          
          {/* Left Column: Typographic Hierarchy & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              {/* Clean unboxed metadata eyebrow */}
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#FF6B35] mb-5">
                <span className="w-2 h-2 rounded-full bg-[#FF6B35]"></span>
                <span>SOFTWARE ENGINEER</span>
                <span className="text-slate-600">/</span>
                <span>BACKEND ARCHITECT</span>
                <span className="text-slate-600">/</span>
                <span>PROBLEM SOLVER</span>
              </div>

              {/* Dominant Headline with balanced wrap */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F5F2] leading-[1.08] max-w-2xl text-balance">
                I build software that turns <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F2] via-[#F5F5F2] to-[#FF6B35]">complex problems</span> into elegant systems.
              </h1>

              {/* Supporting Lead Copy */}
              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                {profile.role}. Focused on backend engineering, full-stack applications, intelligent automation, and practical AI-powered solutions.
              </p>

              {/* CTA Group: Primary, Secondary, Tertiary */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onExploreProjects}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#FF6B35] hover:bg-[#FA571A] rounded-xl transition-all shadow-lg shadow-[#FF6B35]/25 active:scale-[0.98]"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all active:scale-[0.98]"
                >
                  <FileText className="w-4 h-4 text-[#FF6B35]" />
                  <span>Resume & CV</span>
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-400 hover:text-[#F5F5F2] transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>

            {/* Academic Credential strip */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-[#FF6B35] font-semibold">MCA</span>
                <span>SRM University</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-300">CGPA 7.89</span>
              </div>
              <div className="hidden sm:inline text-slate-700">|</div>
              <div className="flex items-center gap-2">
                <span className="text-[#FF6B35] font-semibold">BCA</span>
                <span>United University</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-300">9.05 GPA (First Rank)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Engineering Workspace & Living Terminal (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Visual Workspace Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#13171E] shadow-2xl group aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-64">
              <img
                src={profile.heroWorkspaceUrl}
                alt="Vishesh Srivastava Engineering Workspace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/90 via-[#0B0D10]/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B35]"></span>
                  <span>Architecture Lab</span>
                </span>
                <span className="text-slate-400">REST · Spring Boot · PostgreSQL</span>
              </div>
            </div>

            {/* Live Terminal Panel */}
            <div className="rounded-2xl border border-white/10 bg-[#0E1217] p-4 shadow-xl font-mono text-xs text-slate-300">
              {/* Terminal header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#FF6B35]" />
                  <span className="text-slate-300 font-semibold">{activeSnippet.file}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-500">
                  <span>{activeSnippet.lang.toUpperCase()}</span>
                  <span className="text-slate-700">·</span>
                  <span className="text-emerald-400">Compiled</span>
                </div>
              </div>

              {/* Code lines */}
              <div className="space-y-1 overflow-x-auto text-[11px] leading-relaxed text-slate-300">
                {activeSnippet.lines.map((line, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-slate-600 select-none w-4 text-right">{idx + 1}</span>
                    <span className={line.startsWith('--') ? 'text-slate-500 italic' : line.startsWith('@') ? 'text-[#FF6B35]' : 'text-slate-200'}>
                      {line}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500">
                <span>Production-grade engineering principles</span>
                <div className="flex gap-1.5">
                  {TERMINAL_SNIPPETS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSnippetIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === snippetIndex ? 'w-5 bg-[#FF6B35]' : 'w-1.5 bg-white/20'
                      }`}
                      aria-label={`View snippet ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Full-Width Key Capabilities Strip Below the Hero Split (Following Domain Rule) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#13171E]/60 border border-white/10 backdrop-blur-sm">
          <div className="space-y-1 p-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B35]">
              <Layers className="w-3.5 h-3.5" />
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <p className="text-base font-bold text-[#F5F5F2]">Layered Services</p>
            <p className="text-xs text-slate-400">Spring Boot & Flask REST micro-services</p>
          </div>

          <div className="space-y-1 p-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B35]">
              <Database className="w-3.5 h-3.5" />
              <span>DATA INTEGRITY</span>
            </div>
            <p className="text-base font-bold text-[#F5F5F2]">ACID Transactions</p>
            <p className="text-xs text-slate-400">PostgreSQL & MySQL normalized schemas</p>
          </div>

          <div className="space-y-1 p-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B35]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WORKFLOW AUTOMATION</span>
            </div>
            <p className="text-base font-bold text-[#F5F5F2]">Headless Pipelines</p>
            <p className="text-xs text-slate-400">Selenium, APIs, and document heuristics</p>
          </div>

          <div className="space-y-1 p-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B35]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ACADEMIC MERIT</span>
            </div>
            <p className="text-base font-bold text-[#F5F5F2]">Top Rank Graduate</p>
            <p className="text-xs text-slate-400">9.05 GPA United Univ · 7.89 MCA SRM</p>
          </div>
        </div>

      </div>
    </section>
  );
}
