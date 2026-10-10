import React, { useState } from 'react';
import { X, Save, Copy, Check, Info, FileText, Settings, Upload } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';
import { useToast } from './Toast';

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSaveProfile: (updated: ProfileData) => void;
}

export function ProfileEditModal({
  isOpen,
  onClose,
  profile,
  onSaveProfile
}: ProfileEditModalProps) {
  const [formData, setFormData] = useState<ProfileData>({ ...profile });
  const [activeTab, setActiveTab] = useState<'edit' | 'instructions' | 'json'>('edit');
  const [copiedJson, setCopiedJson] = useState(false);
  const { showToast } = useToast();

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    showToast({ type: 'success', title: 'Profile Updated', description: 'Changes reflected across all sections.' });
    onClose();
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    setCopiedJson(true);
    showToast({ type: 'success', title: 'JSON Copied to Clipboard', description: 'Paste into src/data/portfolioData.ts' });
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#13171E] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#0B0D10]/70">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-[#FF6B35]" />
            <div>
              <h2 className="text-base font-bold text-white">Profile & Credentials Configuration</h2>
              <p className="text-xs text-slate-400">Edit live metadata or view asset update instructions</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 px-5 py-2 border-b border-white/5 bg-[#0E1217] text-xs">
          <button
            onClick={() => setActiveTab('edit')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'edit' ? 'bg-white/10 text-[#FF6B35]' : 'text-slate-400 hover:text-white'
            }`}
          >
            Live Editor
          </button>
          <button
            onClick={() => setActiveTab('instructions')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'instructions' ? 'bg-white/10 text-[#FF6B35]' : 'text-slate-400 hover:text-white'
            }`}
          >
            Asset & Document Guide
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'json' ? 'bg-white/10 text-[#FF6B35]' : 'text-slate-400 hover:text-white'
            }`}
          >
            Raw JSON Export
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
          {activeTab === 'edit' && (
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1 font-mono">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0E1217] border border-white/10 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 font-mono">Short Name / Monogram</label>
                  <input
                    type="text"
                    value={formData.shortName}
                    onChange={(e) => setFormData({ ...formData, shortName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0E1217] border border-white/10 text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-mono">Professional Headline / Role</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#0E1217] border border-white/10 text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1 font-mono">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0E1217] border border-white/10 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 font-mono">Opportunity Note</label>
                  <input
                    type="text"
                    value={formData.opportunityNote}
                    onChange={(e) => setFormData({ ...formData, opportunityNote: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0E1217] border border-white/10 text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1 font-mono">GitHub Profile URL</label>
                  <input
                    type="text"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0E1217] border border-white/10 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 font-mono">LinkedIn Profile URL</label>
                  <input
                    type="text"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0E1217] border border-white/10 text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-mono">Professional Biography</label>
                <textarea
                  rows={3}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#0E1217] border border-white/10 text-white focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FF6B35] hover:bg-[#FA571A] text-white font-semibold"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          )}

          {activeTab === 'instructions' && (
            <div className="space-y-4 leading-relaxed text-slate-300">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <h3 className="font-bold text-white flex items-center gap-1.5 text-sm">
                  <Upload className="w-4 h-4 text-[#FF6B35]" />
                  <span>How to Add Your Actual Resume PDF</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Place your actual PDF file in the <code className="text-[#FF6B35] font-mono">public/</code> directory as <code className="text-white font-mono">Vishesh_Srivastava_Resume.pdf</code>.
                </p>
                <p className="text-xs text-slate-400">
                  In <code className="text-white font-mono">src/data/portfolioData.ts</code>, update the <code className="font-mono text-emerald-400">doc-resume</code> item with the file path.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <h3 className="font-bold text-white flex items-center gap-1.5 text-sm">
                  <FileText className="w-4 h-4 text-[#FF6B35]" />
                  <span>Adding New Projects & Architecture Diagrams</span>
                </h3>
                <p className="text-xs text-slate-400">
                  To add a new project, append an entry to <code className="text-white font-mono">PROJECTS_LIST</code> in <code className="text-white font-mono">src/data/portfolioData.ts</code> with problem statement, architecture nodes, and challenges.
                </p>
                <p className="text-xs text-slate-400">
                  All components (Projects, Architecture visualizer, Command Palette, Docs) will automatically index and display the new project without writing any additional React code!
                </p>
              </div>
            </div>
          )}

          {activeTab === 'json' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-mono">Current Profile JSON</span>
                <button
                  onClick={handleCopyJson}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-mono"
                >
                  {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedJson ? 'Copied' : 'Copy JSON'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-[#0A0C0E] border border-white/10 text-[11px] font-mono text-slate-300 max-h-72 overflow-y-auto">
                {JSON.stringify(formData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
