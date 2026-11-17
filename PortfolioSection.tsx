import React, { useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Code2,
  ExternalLink,
  FolderGit2,
  Globe,
  Lock,
  Sparkles,
  TrendingUp,
  X,
} from 'lucide-react';
import { PROJECTS_DATA, ProjectCaseStudy } from '../data/studioData';

interface PortfolioSectionProps {
  onStartSimilarProject: (projectName: string) => void;
}

type FilterTab = 'All' | 'Web Apps' | 'Bug Fixes' | 'Deployments';

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onStartSimilarProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const filterTabs: FilterTab[] = ['All', 'Web Apps', 'Bug Fixes', 'Deployments'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(
          (p) =>
            p.category === activeFilter || p.filterCategories.includes(activeFilter)
        );

  const renderCardMockup = (project: ProjectCaseStudy) => {
    if (project.mockupType === 'nexus') {
      return (
        <div className="relative h-52 w-full bg-[#0B0B10] border-b border-white/10 p-4 flex flex-col justify-between overflow-hidden group-hover:bg-[#0E0E16] transition-colors">
          {/* Glow */}
          <div className="pointer-events-none absolute -top-10 -right-10 w-36 h-36 rounded-full bg-cyan-500/20 blur-2xl" />
          {/* Browser bar */}
          <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#09090B] border border-white/[0.08] text-[10px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Lock className="w-2.5 h-2.5" /> {project.liveDomain}
            </span>
            <span className="px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300">
              99/100 Speed
            </span>
          </div>

          {/* Analytics Mockup Body */}
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="col-span-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>AI TOKEN STREAM</span>
                <span className="text-emerald-400">+42.8%</span>
              </div>
              <div className="flex items-end gap-1 h-14 pt-2">
                {[35, 50, 45, 70, 60, 85, 78, 95, 100].map((v, idx) => (
                  <div
                    key={idx}
                    className="flex-1 rounded-t bg-gradient-to-t from-cyan-500/30 to-cyan-400"
                    style={{ height: `${v}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <div className="flex-1 p-2 rounded-xl bg-violet-500/10 border border-violet-500/25 flex flex-col justify-center">
                <span className="text-[9px] font-mono text-violet-300">LATENCY</span>
                <span className="text-sm font-mono font-bold text-white">34ms</span>
              </div>
              <div className="flex-1 p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex flex-col justify-center">
                <span className="text-[9px] font-mono text-emerald-300">UPTIME</span>
                <span className="text-sm font-mono font-bold text-white">99.98%</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>React 19 + Node/Express API</span>
            <span className="text-cyan-300">Custom Vercel DNS ✓</span>
          </div>
        </div>
      );
    }

    if (project.mockupType === 'shopflow') {
      return (
        <div className="relative h-52 w-full bg-[#0B0B10] border-b border-white/10 p-4 flex flex-col justify-between overflow-hidden group-hover:bg-[#0E0E16] transition-colors">
          <div className="pointer-events-none absolute -top-10 -left-10 w-36 h-36 rounded-full bg-violet-500/20 blur-2xl" />
          <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#09090B] border border-white/[0.08] text-[10px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Lock className="w-2.5 h-2.5" /> {project.liveDomain}
            </span>
            <span className="px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300">
              14 Bugs Fixed
            </span>
          </div>

          {/* Checkout Rescue Visual */}
          <div className="space-y-2 my-1">
            <div className="flex items-center justify-between p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-[10px] font-mono text-rose-300 line-through opacity-75">
              <span>✕ Before: 6.8s Load • CORS 502 Checkout Crash</span>
              <span>Broken</span>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1.5">
              <div className="flex items-center justify-between text-[10px] font-mono text-emerald-300">
                <span>✓ After AKD Rescue: Express Webhook + Stripe</span>
                <span className="font-bold">0.4s LCP</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-full" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>Conversion Rate: +38.4%</span>
            <span className="text-emerald-400">0 Console Errors ✓</span>
          </div>
        </div>
      );
    }

    return (
      <div className="relative h-52 w-full bg-[#0B0B10] border-b border-white/10 p-4 flex flex-col justify-between overflow-hidden group-hover:bg-[#0E0E16] transition-colors">
        <div className="pointer-events-none absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-emerald-500/20 blur-2xl" />
        <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#09090B] border border-white/[0.08] text-[10px] font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <Lock className="w-2.5 h-2.5" /> {project.liveDomain}
          </span>
          <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
            48h Launch
          </span>
        </div>

        {/* Portal + DNS Visual */}
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2 my-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-display font-bold text-white">
              LaunchPad AI Client Portal
            </span>
            <span className="text-[10px] font-mono text-cyan-300">TLS 1.3 A+</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 text-[10px] font-mono">
            <div className="p-1.5 rounded bg-white/[0.04] text-zinc-300 text-center">
              DNS A/CNAME ✓
            </div>
            <div className="p-1.5 rounded bg-white/[0.04] text-zinc-300 text-center">
              Vercel Edge ✓
            </div>
            <div className="p-1.5 rounded bg-emerald-500/15 text-emerald-300 text-center">
              2.4k Signups
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
          <span>Namecheap + Vercel CI/CD</span>
          <span className="text-cyan-300">Zero-Downtime Go-Live ✓</span>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header + Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-cyan-400">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Production Case Studies</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Featured <span className="text-gradient-brand">Delivered Projects</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg">
              Real-world web applications built from scratch, rescued from critical bugs, and
              deployed to custom domains by AKD WebStudio.
            </p>
          </div>

          {/* Filter Tabs: All, Web Apps, Bug Fixes, Deployments */}
          <div
            role="tablist"
            aria-label="Filter Portfolio Projects"
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 self-start md:self-auto"
          >
            {filterTabs.map((tab) => {
              const active = activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-gradient-to-r from-cyan-500/25 to-violet-500/25 text-white border border-cyan-400/40 shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group glass-surface glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Sleek Dark UI Preview Mockup */}
                {renderCardMockup(project)}

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      {project.turnaroundTime}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1 line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Impact Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {project.impactMetrics.map((m, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                      >
                        <div className="text-[10px] font-mono text-zinc-400 truncate">
                          {m.label}
                        </div>
                        <div className="text-xs sm:text-sm font-mono font-bold text-white mt-0.5">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Tech Stack Badges & View Case Study Button */}
              <div className="px-6 pb-6 pt-3 border-t border-white/[0.06] space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.05] text-zinc-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-white/[0.06] hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-500 border border-white/10 hover:border-transparent transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Case Study Modal Popup */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-surface rounded-3xl border border-white/20 p-6 sm:p-8 text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {selectedProject.category} Case Study
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-300 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    <Globe className="w-3 h-3" /> {selectedProject.liveDomain}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    • Delivered in {selectedProject.turnaroundTime}
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-zinc-400 mt-1">{selectedProject.subtitle}</p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                aria-label="Close Case Study Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6">
              {/* Impact Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {selectedProject.impactMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/10"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                      <span>{metric.label}</span>
                      <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-mono font-bold text-white mt-1">
                      {metric.value}
                    </div>
                    <div className="text-xs font-mono text-emerald-400 mt-0.5">
                      {metric.delta}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-rose-500/[0.06] border border-rose-500/20 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-rose-300 font-semibold">
                    The Problem / Bottleneck
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/20 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-semibold">
                    AKD WebStudio Engineering Solution
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Production Code Snippet */}
              <div className="rounded-2xl bg-[#09090B] border border-white/10 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/10 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <Code2 className="w-3.5 h-3.5" />
                    {selectedProject.codeSnippet.filename}
                  </span>
                  <span className="text-emerald-400">Production Verified ✓</span>
                </div>
                <pre className="p-4 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed">
                  {selectedProject.codeSnippet.code}
                </pre>
              </div>

              {/* Deliverables & Tech Stack */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                    Key Deliverables Completed
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                    Tech Stack &amp; Infrastructure
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white/[0.06] text-white border border-white/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-zinc-400">
                    Client: <strong className="text-white">{selectedProject.clientName}</strong> —{' '}
                    {selectedProject.clientRole}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  const title = selectedProject.title;
                  setSelectedProject(null);
                  onStartSimilarProject(`Similar to ${title}`);
                }}
                className="btn-glow-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start a Similar Project</span>
              </button>

              <a
                href="https://www.fiverr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.05] hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>Hire Abdullah on Fiverr</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
