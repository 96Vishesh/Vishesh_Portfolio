import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { ProfileData } from '../data/portfolioData';
import { useToast } from './Toast';

interface ContactSectionProps {
  profile: ProfileData;
}

export function ContactSection({ profile }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWhatsapp, setCopiedWhatsapp] = useState(false);
  const { showToast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    showToast({ type: 'success', title: 'Email Copied!', description: profile.email });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyWhatsapp = () => {
    navigator.clipboard.writeText(profile.whatsappUsername);
    setCopiedWhatsapp(true);
    showToast({ type: 'success', title: 'Username Copied!', description: profile.whatsappUsername });
    setTimeout(() => setCopiedWhatsapp(false), 2500);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text = [
      `Hi Vishesh, I'm ${formData.name} (${formData.email}).`,
      `Subject: ${formData.subject}`,
      '',
      formData.message
    ].join('\n');
    window.open(`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');

    setIsSubmitted(true);
    showToast({
      type: 'success',
      title: 'Opening WhatsApp',
      description: `Thank you, ${formData.name}. Tap send in WhatsApp to deliver your message.`
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/5 relative bg-[#0B0D10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] mb-2">
            07. Initiate Collaboration
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F2] text-balance">
            Have an interesting problem to solve? Let's build something meaningful.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            I am currently <span className="text-[#FF6B35] font-semibold">{profile.opportunityNote}</span>. Whether you have an open engineering position, a system to architect, or want to discuss backend systems, feel free to reach out.
          </p>
        </div>

        {/* 2-Column Contact Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Professional Profiles (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Copy Card */}
            <div className="p-6 rounded-2xl bg-[#13171E] border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B35] uppercase">
                <Mail className="w-4 h-4" />
                <span>Direct Electronic Mail</span>
              </div>
              <p className="text-sm text-slate-300">
                Preferred communication for opportunities and technical inquiries:
              </p>
              
              <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5">
                <span className="font-mono text-xs text-white truncate mr-2 select-all">
                  {profile.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors shrink-0"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${profile.email}?subject=Software%20Engineering%20Opportunity%20-%20Vishesh%20Srivastava`}
                  className="inline-flex items-center gap-1.5 text-xs text-[#FF6B35] hover:underline font-mono"
                >
                  <span>Open in default email client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-[#13171E] border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B35] uppercase">
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </div>
              <p className="text-sm text-slate-300">
                Find me on WhatsApp by username:
              </p>

              <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5">
                <span className="font-mono text-xs text-white truncate mr-2 select-all">
                  @{profile.whatsappUsername}
                </span>
                <button
                  onClick={handleCopyWhatsapp}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors shrink-0"
                >
                  {copiedWhatsapp ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedWhatsapp ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${profile.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#FF6B35] hover:underline font-mono"
                >
                  <span>Start a chat now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-[#13171E] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-4">
                  <Github className="w-5 h-5 text-slate-300 group-hover:text-white" />
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#FF6B35] transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">GitHub Profile</p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">Explore repositories</p>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-[#13171E] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-4">
                  <Linkedin className="w-5 h-5 text-sky-400 group-hover:text-white" />
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#FF6B35] transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">LinkedIn</p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">Professional network</p>
                </div>
              </a>
            </div>

            {/* Availability Banner */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Availability Status: Active</span>
              </p>
              <p className="text-[11px]">
                Open for Full-Time Software Engineering, Backend & Full-Stack roles.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#13171E] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B35] mb-2 uppercase">
              <MessageSquare className="w-4 h-4" />
              <span>Send a Message</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-6">Let's start a conversation</h3>

            {isSubmitted ? (
              <div className="p-8 rounded-xl bg-black/40 border border-emerald-500/30 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">WhatsApp Opened!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, {formData.name}. Tap send in WhatsApp to deliver your message. If the chat didn't open, search <span className="text-white font-mono">@{profile.whatsappUsername}</span> in WhatsApp, <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" className="text-[#FF6B35] underline">open the chat here</a>, or email <span className="text-[#FF6B35] font-mono">{profile.email}</span>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-[#FF6B35]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0E1217] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF6B35]/50 transition-colors"
                    />
                    {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email <span className="text-[#FF6B35]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0E1217] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF6B35]/50 transition-colors"
                    />
                    {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Topic <span className="text-[#FF6B35]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack Engineer Role / Backend Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0E1217] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF6B35]/50 transition-colors"
                  />
                  {errors.subject && <p className="text-[11px] text-rose-400 mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-[#FF6B35]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role, team, or project requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0E1217] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF6B35]/50 transition-colors resize-none"
                  />
                  {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <p className="text-[11px] text-slate-500 font-mono">
                    Sends via WhatsApp
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF6B35] hover:bg-[#FA571A] text-xs font-semibold text-white transition-all shadow-md shadow-[#FF6B35]/25 active:scale-[0.98] disabled:opacity-50"
                  >
                    <span>Send on WhatsApp</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
