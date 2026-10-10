import React, { useState, useEffect } from 'react';
import { Search, Moon, Sun, Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';

interface NavbarProps {
  profile: ProfileData;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenCommandPalette: () => void;
}

export function Navbar({
  profile,
  theme,
  onToggleTheme,
  onOpenCommandPalette
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Skills', href: '#skills' },
    { label: 'Docs', href: '#documentation' },
    { label: 'Resume', href: '#resume' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0D10]/85 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus:outline-none"
            aria-label="Home"
          >
            <span className="font-mono text-base font-bold tracking-tight text-[#F5F5F2] group-hover:text-[#FF6B35] transition-colors">
              {profile.monogram}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
            <span className="text-sm font-semibold tracking-tight text-[#F5F5F2] hidden sm:inline">
              {profile.shortName}
            </span>
          </a>

          {/* Zone 2: Concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#F5F5F2] hover:underline underline-offset-4 decoration-[#FF6B35] transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Interactive tools & 1 primary action */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition-colors"
              title="Open Command Palette (Ctrl+K or ⌘K)"
              aria-label="Open command palette"
            >
              <Search className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span className="hidden lg:inline text-slate-400">Search</span>
              <kbd className="hidden sm:inline-flex text-[10px] font-mono text-slate-400 bg-white/10 px-1 rounded">
                ⌘K
              </kbd>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400" />
              )}
            </button>

            {/* 1 Primary Action */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#FF6B35] hover:bg-[#FA571A] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-[#FF6B35]/20"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#13171E] border border-white/10 rounded-xl flex flex-col gap-3 shadow-2xl animate-in fade-in duration-150">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-[#FF6B35] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 mt-2 py-2.5 text-xs font-semibold text-white bg-[#FF6B35] rounded-lg text-center"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
