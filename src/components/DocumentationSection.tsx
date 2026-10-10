import React, { useState } from 'react';
import { Search, FileText, Database, Code2, Layers, Download, LayoutGrid, List, ArrowUpRight, X } from 'lucide-react';
import { DOCUMENT_CATALOG, DocumentItem } from '../data/portfolioData';
import { useToast } from './Toast';

interface DocumentationSectionProps {
  onSelectDocument: (slug: string) => void;
}

const DOC_CATEGORIES = [
  'All',
  'Resume & Profile',
  'System Architecture',
  'Database Schemas',
  'API Documentation',
  'Project Reports',
  'Implementation Guides'
];

export function DocumentationSection({ onSelectDocument }: DocumentationSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'recent' | 'title' | 'project'>('recent');
  const { showToast } = useToast();

  const handleDownload = (e: React.MouseEvent, doc: DocumentItem) => {
    e.stopPropagation();
    const url = doc.fileUrl ?? URL.createObjectURL(new Blob([doc.content], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = doc.downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    if (!doc.fileUrl) URL.revokeObjectURL(url);
    showToast({ type: 'success', title: 'File Downloaded', description: doc.downloadFileName });
  };

  const getDocIcon = (type: DocumentItem['fileType']) => {
    switch (type) {
      case 'SQL':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'OpenAPI':
        return <Code2 className="w-4 h-4 text-[#FF6B35]" />;
      case 'Markdown':
        return <Layers className="w-4 h-4 text-sky-400" />;
      default:
        return <FileText className="w-4 h-4 text-amber-400" />;
    }
  };

  const filteredDocs = DOCUMENT_CATALOG.filter((doc) => {
    if (selectedCategory !== 'All' && doc.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = doc.title.toLowerCase().includes(q);
      const matchDesc = doc.description.toLowerCase().includes(q);
      const matchProj = doc.projectName?.toLowerCase().includes(q);
      const matchTech = doc.technologies.some((t) => t.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchProj && !matchTech) return false;
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === 'title') return a.title.localeCompare(b.title);
    if (sortBy === 'project') return (a.projectName || '').localeCompare(b.projectName || '');
    return 0; // recent
  });

  return (
    <section id="documentation" className="py-20 md:py-28 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] mb-2">
              05. Engineering Documentation Hub
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F5F2]">
              Technical reports, database schemas & API contracts.
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Inspect verified system architecture specifications, DDL schemas, OpenAPI JSON definitions, and my official resume.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documents or schemas..."
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

        {/* Toolbar: Category Filters, Sort, View Mode */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/5">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#13171E] border border-white/10">
            {DOC_CATEGORIES.map((cat) => (
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

          {/* Controls: Sort and Grid/List Toggle */}
          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#13171E] border border-white/10 text-xs text-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none"
            >
              <option value="recent">Sort: Default / Recent</option>
              <option value="title">Sort: Title (A-Z)</option>
              <option value="project">Sort: By Project</option>
            </select>

            <div className="flex items-center gap-1 p-1 rounded-lg bg-[#13171E] border border-white/10">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1 rounded ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}
                title="Grid view"
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1 rounded ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}
                title="List view"
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Documents Content */}
        {filteredDocs.length === 0 ? (
          <div className="p-16 text-center rounded-2xl bg-[#13171E]/50 border border-white/10 space-y-3">
            <FileText className="w-8 h-8 text-slate-500 mx-auto" />
            <p className="text-base font-semibold text-white">No documents found</p>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              No technical documents match your criteria. Try resetting category or search query.
            </p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                onClick={() => onSelectDocument(doc.slug)}
                className="group p-6 rounded-2xl bg-[#13171E] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#FF6B35]/40 transition-colors">
                      {getDocIcon(doc.fileType)}
                    </div>
                    <button
                      onClick={(e) => handleDownload(e, doc)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                      title="Download file directly"
                      aria-label="Download document"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                    <span className="text-[#FF6B35] font-semibold">{doc.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{doc.fileType}</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#FF6B35] transition-colors mb-2">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-slate-500">{doc.projectName || 'General Specification'}</span>
                  <span className="flex items-center gap-1 group-hover:text-white transition-colors">
                    Read & Inspect <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="divide-y divide-white/5 rounded-2xl bg-[#13171E] border border-white/10 overflow-hidden shadow-lg">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                onClick={() => onSelectDocument(doc.slug)}
                className="group p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                  <div className="p-2 rounded-lg bg-white/5 shrink-0 mt-0.5 sm:mt-0">
                    {getDocIcon(doc.fileType)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-white group-hover:text-[#FF6B35] transition-colors truncate">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-slate-400 truncate mt-0.5">
                      {doc.category} · {doc.projectName || 'General Artifact'} · {doc.fileType}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
                  <button
                    onClick={(e) => handleDownload(e, doc)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                  <span className="text-xs font-mono text-[#FF6B35] group-hover:translate-x-0.5 transition-transform">
                    Inspect →
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
