import React, { useState } from 'react';
import { Layers, Play, CheckCircle2, ArrowRight, ShieldCheck, Database, Server, Smartphone, Globe, Code2 } from 'lucide-react';
import { PROJECTS_LIST, ArchitectureNode } from '../data/portfolioData';

export function InteractiveArchitecture() {
  const [selectedProjectSlug, setSelectedProjectSlug] = useState('shelf-sync');
  const [activeNodeId, setActiveNodeId] = useState<string | null>('controller');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const currentProject = PROJECTS_LIST.find((p) => p.slug === selectedProjectSlug) || PROJECTS_LIST[1];
  const activeNode = currentProject.architectureNodes.find((n) => n.id === activeNodeId) || currentProject.architectureNodes[0];

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep(0);

    const totalSteps = currentProject.dataFlow.length;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      if (step < totalSteps) {
        setSimStep(step);
        // Automatically highlight matching node if applicable
        const targetNode = currentProject.architectureNodes[step % currentProject.architectureNodes.length];
        if (targetNode) setActiveNodeId(targetNode.id);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1200);
  };

  const getNodeIcon = (type: ArchitectureNode['type']) => {
    switch (type) {
      case 'client':
        return <Globe className="w-4 h-4 text-sky-400" />;
      case 'gateway':
        return <Server className="w-4 h-4 text-[#FF6B35]" />;
      case 'service':
        return <Layers className="w-4 h-4 text-amber-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'external':
        return <ShieldCheck className="w-4 h-4 text-purple-400" />;
      case 'cache':
        return <Code2 className="w-4 h-4 text-rose-400" />;
      default:
        return <Layers className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="architecture" className="py-20 md:py-28 border-t border-white/5 bg-[#0B0D10]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] mb-2">
              02. Interactive Architecture Visualizer
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F5F2]">
              Explore system topologies and request lifecycles.
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Click any node in the pipeline below to inspect its boundaries, protocols, and implementation responsibilities.
            </p>
          </div>

          {/* Project Switcher Segmented Control */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#13171E] border border-white/10 shrink-0 self-start md:self-auto">
            {['shelf-sync', 'flowforge', 'safewalk'].map((slug) => {
              const proj = PROJECTS_LIST.find((p) => p.slug === slug);
              if (!proj) return null;
              const isSelected = selectedProjectSlug === slug;
              return (
                <button
                  key={slug}
                  onClick={() => {
                    setSelectedProjectSlug(slug);
                    setActiveNodeId(proj.architectureNodes[0]?.id || null);
                    setIsSimulating(false);
                    setSimStep(0);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isSelected
                      ? 'bg-[#FF6B35] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {proj.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Visual Canvas and Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Node Graph Canvas (7 cols) */}
          <div className="lg:col-span-7 bg-[#13171E]/80 border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white font-mono">{currentProject.title}</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400">{currentProject.subtitle}</span>
              </div>
              <button
                onClick={handleSimulate}
                disabled={isSimulating}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors disabled:opacity-50"
              >
                <Play className="w-3 h-3 text-[#FF6B35]" />
                <span>{isSimulating ? `Step ${simStep + 1}/${currentProject.dataFlow.length}...` : 'Simulate Request Flow'}</span>
              </button>
            </div>

            {/* Architecture Flow Nodes */}
            <div className="space-y-4 relative py-2">
              {currentProject.architectureNodes.map((node, index) => {
                const isActive = activeNodeId === node.id;
                const isCurrentSimStep = isSimulating && simStep % currentProject.architectureNodes.length === index;

                return (
                  <div key={node.id} className="relative group">
                    <button
                      onClick={() => setActiveNodeId(node.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                        isActive || isCurrentSimStep
                          ? 'bg-[#1A1F29] border-[#FF6B35] shadow-lg shadow-[#FF6B35]/10 scale-[1.01]'
                          : 'bg-[#0E1217] border-white/10 hover:border-white/20 hover:bg-[#151A22]'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`p-2.5 rounded-lg border ${
                          isActive ? 'bg-[#FF6B35]/15 border-[#FF6B35]/40' : 'bg-white/5 border-white/10'
                        }`}>
                          {getNodeIcon(node.type)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-white">{node.label}</span>
                            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                              {node.type}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1 line-clamp-1">{node.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="hidden sm:inline text-[11px] font-mono text-slate-500">
                          {node.technologies.join(', ')}
                        </span>
                        <ArrowRight className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-[#FF6B35] translate-x-1' : 'text-slate-600'
                        }`} />
                      </div>
                    </button>

                    {/* Connecting line to next node */}
                    {index < currentProject.architectureNodes.length - 1 && (
                      <div className="h-4 w-0.5 bg-gradient-to-b from-[#FF6B35]/50 to-white/10 mx-auto my-0.5" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Request step breakdown */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Operational Data Flow:
              </p>
              <div className="space-y-1.5 text-xs text-slate-300">
                {currentProject.dataFlow.map((step, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded-lg transition-colors font-mono text-[11px] ${
                      simStep === idx && isSimulating
                        ? 'bg-[#FF6B35]/20 text-[#FF6B35] font-semibold border border-[#FF6B35]/30'
                        : 'text-slate-400'
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Node Detail Inspector (5 cols) */}
          <div className="lg:col-span-5 bg-[#13171E] border border-white/10 rounded-2xl p-6 shadow-xl sticky top-24">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B35] mb-2 uppercase">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Inspecting Node Specification</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
              {activeNode.label}
            </h3>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
              Tier Type: {activeNode.type}
            </p>

            <div className="space-y-5 text-xs text-slate-300">
              <div>
                <p className="font-semibold text-slate-200 mb-1">Core Responsibilities</p>
                <p className="text-slate-400 leading-relaxed bg-[#0B0D10] p-3 rounded-xl border border-white/5">
                  {activeNode.description}
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-200 mb-1.5">Technologies & Libraries</p>
                <div className="flex flex-wrap gap-1.5">
                  {activeNode.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 font-mono text-xs border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-semibold text-slate-200 mb-1">Architectural Guarantee</p>
                <p className="text-slate-400 leading-relaxed text-[11px]">
                  Engineered with strict separation of concerns, ensuring high cohesiveness, testability, and isolated failure domains across the application boundary.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Associated Project: {currentProject.title}</span>
                <a
                  href={`#projects`}
                  className="text-[#FF6B35] hover:underline"
                >
                  View Case Study →
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
