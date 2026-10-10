import React, { useState, useEffect, useRef } from 'react';
import { Search, FolderGit2, FileText, Cpu, ExternalLink, Moon, Sun, Copy, ArrowRight, CornerDownLeft, Sparkles } from 'lucide-react';
import { PROJECTS_LIST, DOCUMENT_CATALOG, SKILL_CATEGORIES, ProfileData } from '../data/portfolioData';
import { useToast } from './Toast';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (slug: string) => void;
  onSelectDocument: (slug: string) => void;
  onSelectSkill: (skillName: string) => void;
  profile: ProfileData;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenProfileEditor: () => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onSelectProject,
  onSelectDocument,
  onSelectSkill,
  profile,
  theme,
  onToggleTheme,
  onOpenProfileEditor
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { showToast } = useToast();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Aggregate searchable items
  interface SearchItem {
    id: string;
    type: 'section' | 'project' | 'document' | 'skill' | 'action';
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    action: () => void;
  }

  const items: SearchItem[] = [
    // Sections
    {
      id: 'sec-home',
      type: 'section',
      title: 'Go to Home / Hero',
      subtitle: 'Overview and introduction',
      icon: <ArrowRight className="w-4 h-4 text-[#FF6B35]" />,
      action: () => {
        window.location.hash = '#home';
        onClose();
      }
    },
    {
      id: 'sec-about',
      type: 'section',
      title: 'Go to About & Education',
      subtitle: 'SRM University MCA, United University BCA, and engineering philosophy',
      icon: <ArrowRight className="w-4 h-4 text-[#FF6B35]" />,
      action: () => {
        window.location.hash = '#about';
        onClose();
      }
    },
    {
      id: 'sec-projects',
      type: 'section',
      title: 'Go to Projects Gallery',
      subtitle: 'Explore all 9 software engineering projects',
      icon: <FolderGit2 className="w-4 h-4 text-[#FF6B35]" />,
      action: () => {
        window.location.hash = '#projects';
        onClose();
      }
    },
    {
      id: 'sec-architecture',
      type: 'section',
      title: 'Interactive System Architecture Visualizer',
      subtitle: 'Explore multi-tier backend and data-flow topology',
      icon: <Cpu className="w-4 h-4 text-[#FF6B35]" />,
      action: () => {
        window.location.hash = '#architecture';
        onClose();
      }
    },
    {
      id: 'sec-skills',
      type: 'section',
      title: 'Go to Technical Skills',
      subtitle: 'Spring Boot, Python, Java, PostgreSQL, Angular, Docker',
      icon: <Cpu className="w-4 h-4 text-[#FF6B35]" />,
      action: () => {
        window.location.hash = '#skills';
        onClose();
      }
    },
    {
      id: 'sec-docs',
      type: 'section',
      title: 'Go to Engineering Documentation Hub',
      subtitle: 'Searchable technical reports, schemas, and API specs',
      icon: <FileText className="w-4 h-4 text-[#FF6B35]" />,
      action: () => {
        window.location.hash = '#documentation';
        onClose();
      }
    },
    {
      id: 'sec-resume',
      type: 'section',
      title: 'View ATS Resume & Print Layout',
      subtitle: 'Structured CV, education details, and export options',
      icon: <FileText className="w-4 h-4 text-[#FF6B35]" />,
      action: () => {
        window.location.hash = '#resume';
        onClose();
      }
    },
    {
      id: 'sec-contact',
      type: 'section',
      title: 'Go to Contact Form',
      subtitle: 'Send a message or collaborate',
      icon: <ArrowRight className="w-4 h-4 text-[#FF6B35]" />,
      action: () => {
        window.location.hash = '#contact';
        onClose();
      }
    },
    // Quick Actions
    {
      id: 'act-copy-email',
      type: 'action',
      title: `Copy Email: ${profile.email}`,
      subtitle: 'Copy email address to clipboard',
      icon: <Copy className="w-4 h-4 text-emerald-400" />,
      action: () => {
        navigator.clipboard.writeText(profile.email);
        showToast({ type: 'success', title: 'Email Copied!', description: profile.email });
        onClose();
      }
    },
    {
      id: 'act-theme',
      type: 'action',
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      subtitle: 'Toggle theme appearance',
      icon: theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />,
      action: () => {
        onToggleTheme();
        onClose();
      }
    },
    {
      id: 'act-edit-profile',
      type: 'action',
      title: 'Configure Profile & Educational Data',
      subtitle: 'Update GPA, dates, or contact info in live session',
      icon: <Sparkles className="w-4 h-4 text-[#FF6B35]" />,
      action: () => {
        onOpenProfileEditor();
        onClose();
      }
    },
    // Projects
    ...PROJECTS_LIST.map((proj) => ({
      id: `proj-${proj.slug}`,
      type: 'project' as const,
      title: proj.title,
      subtitle: `${proj.category} · ${proj.technologies.slice(0, 3).join(', ')}`,
      icon: <FolderGit2 className="w-4 h-4 text-[#FF6B35]" />,
      action: () => {
        onSelectProject(proj.slug);
        onClose();
      }
    })),
    // Documents
    ...DOCUMENT_CATALOG.map((doc) => ({
      id: `doc-${doc.slug}`,
      type: 'document' as const,
      title: doc.title,
      subtitle: `${doc.category} · ${doc.fileType}`,
      icon: <FileText className="w-4 h-4 text-sky-400" />,
      action: () => {
        onSelectDocument(doc.slug);
        onClose();
      }
    })),
    // Key Skills
    ...SKILL_CATEGORIES.flatMap((cat) =>
      cat.skills.map((skill) => ({
        id: `skill-${skill.name}`,
        type: 'skill' as const,
        title: `Filter Projects by: ${skill.name}`,
        subtitle: `${cat.title} · ${skill.levelDescription}`,
        icon: <Cpu className="w-4 h-4 text-amber-400" />,
        action: () => {
          onSelectSkill(skill.name);
          onClose();
        }
      }))
    )
  ];

  const filteredItems = items.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q)
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-28 px-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#13171E] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-[#0B0D10]/50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type a command, project, document, or skill..."
            className="w-full bg-transparent text-sm text-[#F5F5F2] placeholder-slate-500 focus:outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[11px] font-mono text-slate-400 bg-white/5 border border-white/10 rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 divide-y divide-white/5">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              No matching commands or projects found for "{query}"
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                    isSelected ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-1.5 rounded-md bg-white/5 shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate text-[#F5F5F2]">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-400 truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  {isSelected && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-[#FF6B35] shrink-0">
                      Select <CornerDownLeft className="w-3 h-3" />
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/10 bg-[#0B0D10]/40 text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="font-mono">Vishesh Srivastava Portfolio</span>
        </div>
      </div>
    </div>
  );
}
