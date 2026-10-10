import React, { useState } from 'react';
import { Download, Printer, ExternalLink, GraduationCap, Award, Briefcase, FileCode, Copy, CheckCircle2 } from 'lucide-react';
import { ProfileData, EDUCATION_LIST, PROJECTS_LIST, SKILL_CATEGORIES } from '../data/portfolioData';
import { useToast } from './Toast';

interface ResumeSectionProps {
  profile: ProfileData;
  onOpenDocPreview: (slug: string) => void;
}

export function ResumeSection({ profile, onOpenDocPreview }: ResumeSectionProps) {
  const [viewMode, setViewMode] = useState<'styled' | 'ats'>('styled');
  const { showToast } = useToast();

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxtResume = () => {
    const resumeText = `VISHESH SRIVASTAVA
Software Developer | Backend & Full-Stack Engineer | Automation and AI Enthusiast
Email: ${profile.email}
LinkedIn: ${profile.linkedin}
GitHub: ${profile.github}

PROFESSIONAL SUMMARY:
${profile.bio}

EDUCATION:
- Master of Computer Applications (MCA), SRM University (2024-2026) | CGPA: 7.89
- Bachelor of Computer Applications (BCA), United University (2021-2024) | GPA: 9.05 (First Rank / Gold Medalist)

TECHNICAL SKILLS:
- Languages: Java, Python, JavaScript, SQL, HTML, CSS
- Backend: Spring Boot, Hibernate/JPA, Flask, Django, Express.js, REST APIs
- Frontend: Angular, React, Responsive Design, TypeScript
- Databases: PostgreSQL, MySQL, Firebase Firestore
- Mobile: Flutter, Dart
- Tools: Git, Docker, Maven, Postman, Swagger/OpenAPI, Selenium, Render

KEY PROJECTS:
1. FlowForge - Automated JD & Resume Customization Tool (Python, Flask, PostgreSQL, Selenium, Angular)
2. ShelfSync - Enterprise Inventory Management System (Spring Boot, Hibernate, PostgreSQL, Angular)
3. SafeWalk - AI-Powered Crime Prediction & Safety Analysis (Flask, Google Maps API, Firebase, Twilio)
4. Music Library App - Cross-Platform Audio Player (Flutter, Dart, Provider)`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Vishesh_Srivastava_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast({ type: 'success', title: 'Resume Downloaded', description: 'Vishesh_Srivastava_Resume.txt' });
  };

  return (
    <section id="resume" className="py-20 md:py-28 border-t border-white/5 relative bg-[#0B0D10]/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 no-print">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] mb-2">
              06. Professional Resume
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F5F2]">
              Curriculum Vitae & Qualifications
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Comprehensive profile formatted for technical recruiters and hiring managers.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#13171E] border border-white/10 text-xs">
              <button
                onClick={() => setViewMode('styled')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  viewMode === 'styled' ? 'bg-[#FF6B35] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Styled Format
              </button>
              <button
                onClick={() => setViewMode('ats')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  viewMode === 'ats' ? 'bg-[#FF6B35] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                ATS Plain Text
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              title="Print resume or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadTxtResume}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FF6B35] hover:bg-[#FA571A] text-xs font-semibold text-white transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Resume Sheet Container */}
        {viewMode === 'styled' ? (
          <div className="bg-[#13171E] border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl space-y-10">
            
            {/* Header: Name and Contact info */}
            <div className="border-b border-white/10 pb-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">{profile.name}</h1>
                <p className="text-sm font-mono text-[#FF6B35] mt-1">{profile.role}</p>
                <p className="text-xs text-slate-400 mt-2 max-w-xl leading-relaxed">
                  {profile.bio}
                </p>
              </div>

              <div className="text-xs font-mono text-slate-300 space-y-1.5 shrink-0 bg-black/40 p-4 rounded-xl border border-white/5">
                <p>Email: <a href={`mailto:${profile.email}`} className="text-white hover:underline">{profile.email}</a></p>
                <p>Location: <span className="text-white">{profile.location}</span></p>
                <p>Status: <span className="text-emerald-400 font-semibold">{profile.opportunityNote}</span></p>
                <p className="pt-1 text-[11px] text-slate-500">Links: GitHub · LinkedIn</p>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B35] uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Education & Academic Merits</span>
              </div>

              <div className="space-y-4">
                {EDUCATION_LIST.map((edu) => (
                  <div key={edu.id} className="p-4 rounded-xl bg-[#0E1217] border border-white/5 flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-white">{edu.degree}</h3>
                      <p className="text-xs text-slate-300 font-medium">{edu.institution}</p>
                      <p className="text-xs text-slate-400 mt-1 max-w-xl">{edu.description}</p>
                    </div>
                    <div className="text-right sm:shrink-0 font-mono text-xs">
                      <p className="text-slate-400">{edu.period}</p>
                      <p className="text-[#FF6B35] font-bold mt-0.5">{edu.scoreLabel}: {edu.scoreValue}</p>
                      {edu.honors && (
                        <p className="text-emerald-400 text-[11px] font-sans font-medium">{edu.honors}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Breakdown */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B35] uppercase tracking-wider">
                <FileCode className="w-4 h-4" />
                <span>Technical Skills Summary</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SKILL_CATEGORIES.slice(0, 4).map((cat) => (
                  <div key={cat.id} className="p-4 rounded-xl bg-[#0E1217] border border-white/5">
                    <p className="text-xs font-mono text-[#FF6B35] uppercase mb-1.5">{cat.title}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {cat.skills.map((s) => s.name).join(' · ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Projects */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B35] uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                <span>Selected Software Projects</span>
              </div>

              <div className="space-y-4">
                {PROJECTS_LIST.filter((p) => p.featured).map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-[#0E1217] border border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                      <h4 className="text-sm font-bold text-white">{proj.title} – {proj.subtitle}</h4>
                      <span className="text-[11px] font-mono text-slate-400">{proj.technologies.slice(0, 4).join(', ')}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mb-2">
                      {proj.summary}
                    </p>
                    <div className="text-[11px] text-slate-400 flex flex-wrap gap-x-4 gap-y-1">
                      {proj.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <span key={idx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#FF6B35]" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* ATS Monospace Formatted View */
          <div className="bg-[#0A0C0E] border border-white/10 rounded-2xl p-6 sm:p-10 font-mono text-xs text-slate-300 overflow-x-auto shadow-2xl">
            <pre className="whitespace-pre-wrap leading-relaxed">
{`================================================================================
VISHESH SRIVASTAVA
Software Developer | Backend & Full-Stack Engineer | Automation and AI Enthusiast
Email: ${profile.email}
Location: ${profile.location}
LinkedIn: ${profile.linkedin}
GitHub: ${profile.github}
================================================================================

PROFESSIONAL SUMMARY
--------------------
${profile.bio}

EDUCATION
---------
1. Master of Computer Applications (MCA)
   SRM University (2024 – 2026)
   Current CGPA: 7.89
   Focus: Distributed Systems, Advanced Database Design, Cloud Architectures.

2. Bachelor of Computer Applications (BCA)
   United University (2021 – 2024)
   Graduation GPA: 9.05 (First Rank / Academic Gold Medalist)
   Focus: OOP in Java, Relational Databases (SQL), Data Structures & Algorithms.

TECHNICAL SKILLS
----------------
- Languages: Java, Python, JavaScript, SQL, HTML5, CSS3
- Backend: Spring Boot, Hibernate / JPA, Flask, Django, Express.js, REST APIs
- Frontend: Angular, React, Responsive Web Development, TypeScript
- Databases: PostgreSQL, MySQL, Firebase Firestore
- Mobile Development: Flutter, Dart
- Tools & Automation: Git, GitHub, Docker, Maven, Postman, OpenAPI, Selenium, Render

KEY PROJECTS
------------
1. FlowForge – Automated JD & Resume Customization Tool
   Stack: Python, Flask, PostgreSQL, Selenium, Angular, Spring Boot
   - Implemented automated job requirement parsing engine and match scoring matrices.
   - Built headless browser automation workflows with Selenium to verify application pipelines.

2. ShelfSync – Enterprise Inventory Management System
   Stack: Spring Boot, Hibernate / JPA, PostgreSQL, Angular, Docker
   - Architected ACID-compliant transactional inventory ledger with pessimistic locks.
   - Optimized queries via JPA EntityGraphs, reducing retrieval latency significantly.

3. TrackNinja / SafeWalk – AI-Powered Crime Prediction & Safety Analysis
   Stack: Flask, Google Maps API, Firebase, Twilio, Python
   - Integrated Google Maps API polyline routing and emergency SMS alert dispatch via Twilio.

4. Music Library App – Flutter Mobile Player
   Stack: Flutter, Dart, Provider State Management, Native Audio Service
   - Built cross-platform mobile player with real-time waveform visualization and background audio.`}
            </pre>
          </div>
        )}

      </div>
    </section>
  );
}
