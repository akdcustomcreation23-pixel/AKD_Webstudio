import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Globe,
  Layers,
  Lock,
  Play,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';

interface HeroSectionProps {
  onStartProject: (defaultService?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartProject }) => {
  const [activeTab, setActiveTab] = useState<'split' | 'code' | 'preview'>('split');
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployStep, setDeployStep] = useState<string>('Ready');
  const [deployCount, setDeployCount] = useState(142);

  const triggerSimulatedDeploy = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setDeployStep('Patching React & Express API...');
    setTimeout(() => {
      setDeployStep('Verifying Namecheap DNS & TLS 1.3 SSL...');
    }, 650);
    setTimeout(() => {
      setDeployStep('Deploying to Vercel Global Edge...');
    }, 1300);
    setTimeout(() => {
      setIsDeploying(false);
      setDeployStep('Ready');
      setDeployCount((prev) => prev + 1);
    }, 2000);
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-obsidian-grid">
      {/* Ambient Radial Spotlight Glows */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[950px] h-[520px] rounded-full opacity-30 blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, rgba(6,182,212,0.45) 0%, rgba(139,92,246,0.35) 55%, rgba(9,9,11,0) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute top-64 right-10 w-[400px] h-[400px] rounded-full opacity-20 blur-[110px]"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.35) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: High-Converting Agency Copy */}
          <div className="lg:col-span-7 text-left space-y-7">
            {/* Top Glowing Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 shadow-[0_0_25px_-5px_rgba(6,182,212,0.35)] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-zinc-100 tracking-tight">
                Available for New Projects • Fast Turnaround
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 pl-2 ml-1 border-l border-white/15 text-[11px] font-mono text-cyan-300">
                <Sparkles className="w-3 h-3" />
                Abdullah
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.55rem] leading-[1.08] tracking-tight text-white">
              We{' '}
              <span className="text-gradient-brand">
                Build, Fix &amp; Deploy
              </span>{' '}
              High-Speed AI Web Applications.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-2xl font-normal">
              From rapid full-stack MVP development to urgent React &amp; Node.js bug fixing
              and live custom domain deployment—<span className="text-zinc-200 font-medium">AKD WebStudio</span> turns
              your ideas into scalable, production-ready web apps.
            </p>

            {/* Two CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <button
                type="button"
                onClick={() => onStartProject()}
                className="btn-glow-primary inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-white cursor-pointer group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-zinc-200 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/15 hover:border-cyan-400/40 transition-all duration-200"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Explore Services</span>
              </a>
            </div>

            {/* Trust Micro-Metrics Bar */}
            <div className="pt-4 border-t border-white/[0.08] grid grid-cols-3 gap-4 max-w-xl">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-white font-display font-bold text-lg sm:text-xl">
                  <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>24h–48h</span>
                </div>
                <span className="text-xs text-zinc-400">Rapid Bug &amp; MVP Turnaround</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-white font-display font-bold text-lg sm:text-xl">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Live</span>
                </div>
                <span className="text-xs text-zinc-400">Custom Domain &amp; SSL Ready</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-white font-display font-bold text-lg sm:text-xl">
                  <Cpu className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Full-Stack</span>
                </div>
                <span className="text-xs text-zinc-400">React • Node • Express • AI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Floating Code-to-Live-Preview UI Mockup Card */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Outer Halo */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-indigo-500/25 to-violet-500/30 blur-xl opacity-75 pointer-events-none" />

            <div className="relative glass-surface rounded-2xl overflow-hidden border border-white/15 animate-float">
              {/* Top macOS / IDE Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0D0D11]/90 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    akd-studio / prod-pipeline.tsx
                  </span>
                </div>

                {/* View Mode Switcher */}
                <div className="flex items-center gap-1 bg-white/[0.04] p-0.5 rounded-lg border border-white/10">
                  {(['split', 'code', 'preview'] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                        activeTab === tab
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Card Body: Code-to-Live-Preview Pipeline */}
              <div className="p-4 sm:p-5 space-y-4 bg-[#09090B]/90">
                {/* Code Editor Pane */}
                {(activeTab === 'split' || activeTab === 'code') && (
                  <div className="rounded-xl bg-[#0D0D12] border border-white/[0.08] p-3.5 font-mono text-xs leading-relaxed overflow-x-auto">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06] text-[11px] text-zinc-400">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-violet-400" />
                        server/deployController.ts
                      </span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> TypeScript Strict OK
                      </span>
                    </div>
                    <pre className="text-[11px] sm:text-xs text-zinc-300 space-y-1">
                      <div>
                        <span className="text-violet-400">const</span>{' '}
                        <span className="text-cyan-300">app</span> ={' '}
                        <span className="text-amber-300">createAIWebStudio</span>(&#123;
                      </div>
                      <div className="pl-4">
                        stack: [<span className="text-emerald-300">&apos;React 19&apos;</span>,{' '}
                        <span className="text-emerald-300">&apos;Node/Express&apos;</span>,{' '}
                        <span className="text-emerald-300">&apos;Tailwind&apos;</span>],
                      </div>
                      <div className="pl-4">
                        bugRescue: <span className="text-cyan-400">true</span>,{' '}
                        <span className="text-zinc-500">// Lovable • Cursor • Replit</span>
                      </div>
                      <div className="pl-4">
                        domainSSL: <span className="text-emerald-300">&apos;TLS_1_3_VERIFIED&apos;</span>,
                      </div>
                      <div>&#125;);</div>
                      <div className="pt-1">
                        <span className="text-violet-400">await</span> app.
                        <span className="text-cyan-300">deployToProduction</span>(
                        <span className="text-emerald-300">&apos;vercel-edge&apos;</span>);
                      </div>
                    </pre>
                  </div>
                )}

                {/* Connecting Pipeline Indicator */}
                {activeTab === 'split' && (
                  <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-violet-500/10 border border-cyan-500/20">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                      <RefreshCw
                        className={`w-3.5 h-3.5 ${isDeploying ? 'animate-spin text-amber-300' : 'text-cyan-400'}`}
                      />
                      <span>
                        {isDeploying
                          ? deployStep
                          : `Build #${deployCount} • Compiled in 1.18s`}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={triggerSimulatedDeploy}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-400/30 transition-colors cursor-pointer"
                    >
                      <Play className="w-2.5 h-2.5 fill-current" />
                      <span>{isDeploying ? 'Deploying...' : 'Test Deploy'}</span>
                    </button>
                  </div>
                )}

                {/* Live Production Preview Pane */}
                {(activeTab === 'split' || activeTab === 'preview') && (
                  <div className="rounded-xl bg-gradient-to-b from-[#13131A] to-[#0D0D12] border border-white/10 p-3.5 space-y-3">
                    {/* Simulated Browser URL Bar with SSL Padlock */}
                    <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#09090B] border border-white/[0.08]">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 truncate">
                        <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="text-emerald-400">https://</span>
                        <span className="text-white font-medium truncate">
                          app.client-ai-saas.com
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shrink-0">
                        <Globe className="w-2.5 h-2.5" /> DNS + SSL OK
                      </span>
                    </div>

                    {/* Simulated Live SaaS App Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.07]">
                        <div className="text-[10px] font-mono text-zinc-400">LIGHTHOUSE</div>
                        <div className="text-base font-display font-bold text-emerald-400 mt-0.5">
                          100 / 100
                        </div>
                        <div className="text-[10px] text-zinc-500">0.4s First Paint</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.07]">
                        <div className="text-[10px] font-mono text-zinc-400">API LATENCY</div>
                        <div className="text-base font-display font-bold text-cyan-300 mt-0.5">
                          34ms
                        </div>
                        <div className="text-[10px] text-zinc-500">Node + Express</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.07]">
                        <div className="text-[10px] font-mono text-zinc-400">CONSOLE</div>
                        <div className="text-base font-display font-bold text-white mt-0.5">
                          0 Errors
                        </div>
                        <div className="text-[10px] text-emerald-400">Production Clean</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Live Deployment Status Bar (Required Exact Copy) */}
                <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/30 shadow-[inset_0_1px_0_0_rgba(16,185,129,0.2)]">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-mono font-semibold text-emerald-300 tracking-tight">
                      Status: Live on Vercel • 99.9% Uptime • 0 Bugs
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-200">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
