/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ToastProvider, useToast } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { InteractiveArchitecture } from './components/InteractiveArchitecture';
import { SkillsSection } from './components/SkillsSection';
import { DocumentationSection } from './components/DocumentationSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { DocumentModal } from './components/DocumentModal';
import { CommandPalette } from './components/CommandPalette';
import { ProfileEditModal } from './components/ProfileEditModal';
import {
  INITIAL_PROFILE,
  ProfileData,
  PROJECTS_LIST,
  DOCUMENT_CATALOG,
  ProjectItem,
  DocumentItem
} from './data/portfolioData';

function PortfolioApp() {
  const [profile, setProfile] = useState<ProfileData>(INITIAL_PROFILE);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [profileEditorOpen, setProfileEditorOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(null);
  const [activeTechFilter, setActiveTechFilter] = useState<string | null>(null);

  const { showToast } = useToast();

  // Sync theme to root class
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  // Deep linking hash listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const slug = hash.replace('#project-', '');
        const proj = PROJECTS_LIST.find((p) => p.slug === slug);
        if (proj) setSelectedProject(proj);
      } else if (hash.startsWith('#doc-')) {
        const slug = hash.replace('#doc-', '');
        const doc = DOCUMENT_CATALOG.find((d) => d.slug === slug);
        if (doc) setSelectedDocument(doc);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    showToast({
      type: 'info',
      title: `${nextTheme === 'dark' ? 'Dark' : 'Light'} Mode Enabled`
    });
  };

  const handleSelectProjectSlug = (slug: string) => {
    const proj = PROJECTS_LIST.find((p) => p.slug === slug);
    if (proj) {
      setSelectedProject(proj);
      window.history.pushState(null, '', `#project-${slug}`);
    }
  };

  const handleSelectDocumentSlug = (slug: string) => {
    const doc = DOCUMENT_CATALOG.find((d) => d.slug === slug);
    if (doc) {
      setSelectedDocument(doc);
      window.history.pushState(null, '', `#doc-${slug}`);
    }
  };

  const handleFilterTech = (tech: string) => {
    setActiveTechFilter(tech);
    showToast({
      type: 'info',
      title: `Filtered Projects by: ${tech}`
    });
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearTechFilter = () => {
    setActiveTechFilter(null);
  };

  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#F5F5F2] font-sans transition-colors duration-200">
      {/* Background subtle technical grid */}
      <div className="fixed inset-0 bg-tech-grid opacity-40 pointer-events-none" />

      {/* Top Navbar */}
      <Navbar
        profile={profile}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          profile={profile}
          onOpenResume={() => {
            const el = document.getElementById('resume');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreProjects={() => {
            const el = document.getElementById('projects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <AboutSection profile={profile} />

        <InteractiveArchitecture />

        <ProjectsSection
          onSelectProject={handleSelectProjectSlug}
          activeTechFilter={activeTechFilter}
          onClearTechFilter={handleClearTechFilter}
          onSelectTech={handleFilterTech}
        />

        <SkillsSection onSelectSkillFilter={handleFilterTech} />

        <DocumentationSection onSelectDocument={handleSelectDocumentSlug} />

        <ResumeSection
          profile={profile}
          onOpenDocPreview={handleSelectDocumentSlug}
        />

        <ContactSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onOpenProfileEditor={() => setProfileEditorOpen(true)}
      />

      {/* Modals & Overlays */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => {
          setSelectedProject(null);
          if (window.location.hash.startsWith('#project-')) {
            window.history.pushState(null, '', window.location.pathname);
          }
        }}
        onSelectDoc={handleSelectDocumentSlug}
        onFilterTech={handleFilterTech}
      />

      <DocumentModal
        document={selectedDocument}
        onClose={() => {
          setSelectedDocument(null);
          if (window.location.hash.startsWith('#doc-')) {
            window.history.pushState(null, '', window.location.pathname);
          }
        }}
        onSelectProject={handleSelectProjectSlug}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={handleSelectProjectSlug}
        onSelectDocument={handleSelectDocumentSlug}
        onSelectSkill={handleFilterTech}
        profile={profile}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenProfileEditor={() => setProfileEditorOpen(true)}
      />

      <ProfileEditModal
        isOpen={profileEditorOpen}
        onClose={() => setProfileEditorOpen(false)}
        profile={profile}
        onSaveProfile={(updated) => setProfile(updated)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <PortfolioApp />
    </ToastProvider>
  );
}
