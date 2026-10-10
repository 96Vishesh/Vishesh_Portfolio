import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Settings } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';

interface FooterProps {
  profile: ProfileData;
  onOpenProfileEditor: () => void;
}

export function Footer({ profile, onOpenProfileEditor }: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#080A0D] py-12 text-slate-400 text-xs font-mono relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand mark */}
          <div className="flex items-center gap-3">
            <span className="text-base font-bold text-white tracking-tight">
              {profile.monogram}
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-300 font-sans text-sm font-semibold">
              {profile.name}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400 text-xs hidden sm:inline">
              Software Developer Portfolio
            </span>
          </div>

          {/* Clean nav anchors */}
          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#documentation" className="hover:text-white transition-colors">Docs</a>
            <a href="#resume" className="hover:text-white transition-colors">Resume</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Socials & Editor trigger */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="GitHub"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Email"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenProfileEditor}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-[#FF6B35] transition-colors"
              title="Edit Profile Settings"
              aria-label="Edit Profile Settings"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Quiet copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Built with React, TypeScript & Tailwind CSS</span>
            <span>·</span>
            <span>Dark Editorial Aesthetic</span>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-xl bg-[#13171E] border border-white/10 text-slate-300 hover:text-white hover:border-[#FF6B35] shadow-2xl transition-all duration-200 group"
          title="Back to Top"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </footer>
  );
}
