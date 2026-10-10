import React, { useState } from 'react';
import { X, ExternalLink, Github, FileText, ArrowRight, CheckCircle2, AlertTriangle, Layers, Database, ShieldCheck, Terminal, Copy } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { useToast } from './Toast';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectDoc: (slug: string) => void;
  onFilterTech: (tech: string) => void;
}

export function ProjectDetailModal({
  project,
  onClose,
  onSelectDoc,
  onFilterTech
}: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'challenges' | 'deliverables'>('overview');
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const { showToast } = useToast();

  if (!project) return null;

  const activeArchitectureNode = project.architectureNodes.find((n) => n.id === selectedNode) || project.architectureNodes[0];

  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#project-${project.slug}`;
    navigator.clipboard.writeText(url);
    showToast({ type: 'success', title: 'Case Study Link Copied!', description: url });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-[#13171E] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-white/10 bg-[#0B0D10]/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B35] mb-1">
              <span>{project.category}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">{project.status}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">{project.title}</h2>
            <p className="text-xs text-slate-300 mt-0.5">{project.subtitle}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              title="Copy link to this case study"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 py-2.5 border-b border-white/5 bg-[#0E1217] text-xs">
          {[
            { id: 'overview', label: '1. Overview & Problem' },
            { id: 'architecture', label: '2. System Architecture & Flow' },
            { id: 'challenges', label: '3. Challenges & Decisions' },
            { id: 'deliverables', label: '4. Deliverables & Docs' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white/10 text-[#FF6B35] font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 text-sm">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Summary */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">Project Summary</h4>
                <p className="text-slate-200 leading-relaxed bg-[#0B0D10]/50 p-4 rounded-xl border border-white/5">
                  {project.summary}
                </p>
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-mono text-rose-400 mb-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>The Problem Statement</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.problem}</p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Engineered Solution</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* My Role */}
              <div className="p-4 rounded-xl bg-[#1A1F29]/60 border border-white/10">
                <p className="text-xs font-mono uppercase text-[#FF6B35] tracking-wider mb-1">My Role & Engineering Contribution</p>
                <p className="text-xs text-slate-200 leading-relaxed">{project.myRole}</p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">Key Features Implemented</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-black/30 border border-white/5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Tags */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => {
                        onFilterTech(tech);
                        onClose();
                      }}
                      className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-[#FF6B35]/20 hover:text-[#FF6B35] text-slate-300 font-mono text-xs border border-white/10 transition-colors"
                      title={`Filter portfolio by ${tech}`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE & FLOW */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">Architecture Overview</h4>
                <p className="text-xs text-slate-300 leading-relaxed bg-[#0B0D10]/50 p-4 rounded-xl border border-white/5">
                  {project.architectureOverview}
                </p>
              </div>

              {/* Interactive Node breakdown */}
              <div>
                <h4 className="text-xs font-mono uppercase text-[#FF6B35] tracking-wider mb-3">Component Topology & Responsibilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {project.architectureNodes.map((node) => {
                    const isSelected = (selectedNode || project.architectureNodes[0]?.id) === node.id;
                    return (
                      <button
                        key={node.id}
                        onClick={() => setSelectedNode(node.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-[#1A1F29] border-[#FF6B35] shadow-md'
                            : 'bg-black/30 border-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-white text-xs">{node.label}</span>
                          <span className="text-[10px] font-mono uppercase text-slate-400">{node.type}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-2">{node.description}</p>
                      </button>
                    );
                  })}
                </div>

                {activeArchitectureNode && (
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-xs text-slate-300">
                    <p className="font-bold text-white mb-1">{activeArchitectureNode.label} Detailed Spec</p>
                    <p className="text-slate-400 mb-2">{activeArchitectureNode.description}</p>
                    <div className="flex gap-1.5 font-mono text-[11px] text-[#FF6B35]">
                      <span>Technologies:</span>
                      <span className="text-slate-300">{activeArchitectureNode.technologies.join(', ')}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Data Flow */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">Operational Data Flow</h4>
                <div className="space-y-2">
                  {project.dataFlow.map((step, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs text-slate-300 font-mono">
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CHALLENGES & DECISIONS */}
          {activeTab === 'challenges' && (
            <div className="space-y-6">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">Key Engineering Challenges & Trade-offs</h4>
              
              <div className="space-y-4">
                {project.challengesAndDecisions.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
                    <div>
                      <p className="text-xs font-mono text-rose-400 uppercase tracking-wider">The Challenge</p>
                      <p className="text-xs text-slate-200 font-medium mt-0.5">{item.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono text-amber-400 uppercase tracking-wider">Architectural Decision</p>
                      <p className="text-xs text-slate-300 mt-0.5">{item.decision}</p>
                    </div>
                    <div className="pt-2 border-t border-white/5">
                      <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Engineering Rationale</p>
                      <p className="text-xs text-slate-400 mt-0.5">{item.rationale}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testing & Validation */}
              <div className="p-4 rounded-xl bg-[#1A1F29]/50 border border-white/10">
                <p className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-1">Testing & Verification</p>
                <p className="text-xs text-slate-300 leading-relaxed">{project.testingAndValidation}</p>
              </div>

              {/* Results & Lessons */}
              <div className="p-4 rounded-xl bg-[#1A1F29]/50 border border-white/10">
                <p className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-1">Results & Lessons Learned</p>
                <p className="text-xs text-slate-300 leading-relaxed">{project.resultsAndLessons}</p>
              </div>
            </div>
          )}

          {/* TAB 4: DELIVERABLES & DOCS */}
          {activeTab === 'deliverables' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">Associated Technical Documents</h4>
                {project.documentationSlugs.length === 0 ? (
                  <p className="text-xs text-slate-400 italic bg-black/30 p-4 rounded-xl">
                    Additional architectural documents for this project can be requested or added in future iterations.
                  </p>
                ) : (
                  <div className="space-y-2.5">
                    {project.documentationSlugs.map((slug) => (
                      <div
                        key={slug}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/10"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-4 h-4 text-[#FF6B35]" />
                          <div>
                            <p className="text-xs font-semibold text-white font-mono">{slug}</p>
                            <p className="text-[11px] text-slate-400">View schema, specification, or architectural guide</p>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            onSelectDoc(slug);
                            onClose();
                          }}
                          className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-200 hover:text-white transition-colors"
                        >
                          Open Document
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Links & Repository Status */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">Source Code & Live Staging</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/10">
                    <div className="flex items-center gap-3">
                      <Github className="w-4 h-4 text-slate-300" />
                      <div>
                        <p className="text-xs font-semibold text-white">GitHub Repository</p>
                        <p className="text-[11px] text-slate-400 font-mono">
                          {project.repoUrl || 'Repository link configurable'}
                        </p>
                      </div>
                    </div>
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors"
                      >
                        <span>View Repository</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-500">Available on request</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-4 border-t border-white/10 bg-[#0B0D10]/80 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Case Study Verified</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
