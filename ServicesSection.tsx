import React from 'react';
import {
  ArrowUpRight,
  Bug,
  Check,
  Clock,
  CloudUpload,
  Code2,
  Cpu,
  Globe,
  Sparkles,
  Terminal,
  Wrench,
} from 'lucide-react';
import { SERVICES_DATA, ServiceCardData } from '../data/studioData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const renderBentoVisual = (service: ServiceCardData) => {
    if (service.id === 'fullstack-ai') {
      return (
        <div className="mb-6 rounded-xl bg-[#09090B]/90 border border-white/[0.08] p-3.5 font-mono text-xs relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
          <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2.5 pb-2 border-b border-white/[0.06]">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <Cpu className="w-3.5 h-3.5" /> Full-Stack Architecture
            </span>
            <span className="px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 text-[10px]">
              React + Node
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <div className="text-[10px] text-zinc-400">Frontend</div>
              <div className="text-xs font-semibold text-white mt-0.5">React + TW</div>
            </div>
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/25">
              <div className="text-[10px] text-cyan-300">API Engine</div>
              <div className="text-xs font-semibold text-white mt-0.5">Node/Express</div>
            </div>
            <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/25">
              <div className="text-[10px] text-violet-300">Intelligence</div>
              <div className="text-xs font-semibold text-white mt-0.5">AI / LLMs</div>
            </div>
          </div>
        </div>
      );
    }

    if (service.id === 'bug-fixing') {
      return (
        <div className="mb-6 rounded-xl bg-[#09090B]/90 border border-white/[0.08] p-3.5 font-mono text-xs relative overflow-hidden group-hover:border-violet-500/30 transition-colors">
          <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2.5 pb-2 border-b border-white/[0.06]">
            <span className="flex items-center gap-1.5 text-violet-300">
              <Terminal className="w-3.5 h-3.5" /> AI App Code Rescue
            </span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 text-[10px]">
              Patched ✓
            </span>
          </div>
          <div className="space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between px-2 py-1 rounded bg-rose-500/10 text-rose-300/90 line-through opacity-75">
              <span>✕ TypeError / CORS 500 Crash</span>
              <span>Lovable/Cursor</span>
            </div>
            <div className="flex items-center justify-between px-2 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
              <span>✓ Clean API + Mobile Layout Fixed</span>
              <span>0 Bugs</span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="mb-6 rounded-xl bg-[#09090B]/90 border border-white/[0.08] p-3.5 font-mono text-xs relative overflow-hidden group-hover:border-emerald-500/30 transition-colors">
        <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2.5 pb-2 border-b border-white/[0.06]">
          <span className="flex items-center gap-1.5 text-emerald-300">
            <Globe className="w-3.5 h-3.5" /> Custom Domain &amp; DNS
          </span>
          <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 text-[10px]">
            SSL Active
          </span>
        </div>
        <div className="space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between px-2 py-1 rounded bg-white/[0.03] text-zinc-300">
            <span>A Record @ → 76.76.21.21</span>
            <span className="text-emerald-400">Propagated</span>
          </div>
          <div className="flex items-center justify-between px-2 py-1 rounded bg-white/[0.03] text-zinc-300">
            <span>CNAME www → cname.vercel-dns</span>
            <span className="text-cyan-300">TLS 1.3</span>
          </div>
        </div>
      </div>
    );
  };

  const getIcon = (id: string) => {
    if (id === 'fullstack-ai') return <Code2 className="w-6 h-6 text-cyan-400" />;
    if (id === 'bug-fixing') return <Bug className="w-6 h-6 text-violet-400" />;
    return <CloudUpload className="w-6 h-6 text-emerald-400" />;
  };

  return (
    <section id="services" className="py-24 relative border-t border-white/[0.06]">
      {/* Subtle Ambient Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full opacity-15 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(139,92,246,0.3) 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Fiverr Studio Services</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Everything You Need to{' '}
            <span className="text-gradient-brand">Build, Rescue &amp; Launch</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Whether you need a complete full-stack AI SaaS built from scratch, urgent debugging
            for a stalled Cursor/Lovable project, or stress-free custom domain deployment.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group glass-surface glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Corner Gradient Accent */}
              <div
                className={`pointer-events-none absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl opacity-20 group-hover:opacity-45 transition-opacity ${
                  service.accentColor === 'cyan'
                    ? 'bg-cyan-500'
                    : service.accentColor === 'violet'
                    ? 'bg-violet-500'
                    : 'bg-emerald-500'
                }`}
              />

              <div>
                {/* Top Gig Badge + Turnaround Pill */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.05] text-zinc-300 border border-white/10">
                    {service.gigBadge}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-cyan-300">
                    <Clock className="w-3.5 h-3.5" />
                    {service.turnaround}
                  </span>
                </div>

                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 shrink-0 group-hover:scale-105 transition-transform">
                    {getIcon(service.id)}
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Mini Interactive Bento Visual */}
                {renderBentoVisual(service)}

                {/* Key Deliverables List */}
                <ul className="space-y-2.5 mb-6">
                  {service.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <span className="mt-0.5 p-0.5 rounded-full bg-cyan-500/20 text-cyan-300 shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Tags & Action */}
              <div className="pt-5 border-t border-white/[0.08] space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.07]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-white/[0.06] hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-500 border border-white/10 hover:border-transparent transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>Select This Service</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Reassurance Strip */}
        <div className="mt-10 glass-surface rounded-2xl p-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10">
          <div className="flex items-center gap-3 text-sm text-zinc-300">
            <span className="p-2 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              <Wrench className="w-4 h-4" />
            </span>
            <span>
              <strong className="text-white">Stuck with an AI-generated app?</strong> We rescue
              broken Lovable, Cursor, Replit &amp; Bolt projects and deploy them live within 24 hours.
            </span>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('Rapid Bug Fixing & Code Rescue')}
            className="shrink-0 text-xs font-mono font-semibold text-cyan-300 hover:text-cyan-200 underline underline-offset-4 cursor-pointer"
          >
            Request Urgent Code Rescue →
          </button>
        </div>
      </div>
    </section>
  );
};
