import React, { useState } from 'react';
import { X, Download, Copy, Check, FileText, Code2, Database, Layers, ExternalLink } from 'lucide-react';
import { DocumentItem } from '../data/portfolioData';
import { useToast } from './Toast';

interface DocumentModalProps {
  document: DocumentItem | null;
  onClose: () => void;
  onSelectProject?: (slug: string) => void;
}

export function DocumentModal({ document, onClose, onSelectProject }: DocumentModalProps) {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  if (!document) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(document.content);
    setCopied(true);
    showToast({ type: 'success', title: 'Content Copied!', description: 'Document code copied to clipboard.' });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const url = document.fileUrl ?? URL.createObjectURL(new Blob([document.content], { type: 'text/plain;charset=utf-8' }));
    const link = window.document.createElement('a');
    link.href = url;
    link.download = document.downloadFileName;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
    if (!document.fileUrl) URL.revokeObjectURL(url);
    showToast({ type: 'success', title: 'Download Started', description: document.downloadFileName });
  };

  const getDocIcon = () => {
    switch (document.fileType) {
      case 'SQL':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'OpenAPI':
        return <Code2 className="w-5 h-5 text-[#FF6B35]" />;
      case 'Markdown':
        return <Layers className="w-5 h-5 text-sky-400" />;
      default:
        return <FileText className="w-5 h-5 text-amber-400" />;
    }
  };

  const lines = document.content.split('\n');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-[#13171E] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-white/10 bg-[#0B0D10]/80">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
              {getDocIcon()}
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B35] mb-1">
                <span>{document.category}</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400">{document.fileType} Format</span>
                {document.projectName && (
                  <>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-300">Project: {document.projectName}</span>
                  </>
                )}
              </div>
              <h2 className="text-xl font-bold text-white">{document.title}</h2>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl">{document.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              title="Copy document content"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF6B35] hover:bg-[#FA571A] text-xs font-semibold text-white transition-colors shadow-sm"
              title="Download file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Code / Markdown Content Viewer with Line Numbers */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#0A0C0E] font-mono text-xs">
          <div className="space-y-0.5">
            {lines.map((line, idx) => (
              <div key={idx} className="flex hover:bg-white/[0.02] py-0.5 px-2 rounded">
                <span className="text-slate-600 select-none w-10 text-right pr-4 shrink-0">
                  {idx + 1}
                </span>
                <span className="text-slate-200 whitespace-pre-wrap font-mono text-[11px] leading-relaxed break-all">
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-4 border-t border-white/10 bg-[#0B0D10]/80 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <span>File: {document.downloadFileName}</span>
            <span className="text-slate-600">·</span>
            <span>{lines.length} lines</span>
          </div>
          {document.projectSlug && onSelectProject && (
            <button
              onClick={() => {
                onSelectProject(document.projectSlug!);
                onClose();
              }}
              className="text-[#FF6B35] hover:underline"
            >
              View Associated Project →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
