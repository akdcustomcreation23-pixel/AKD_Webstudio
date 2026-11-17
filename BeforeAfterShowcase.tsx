import React, { useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Gauge,
  Globe,
  Lock,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  XCircle,
  Zap,
} from 'lucide-react';

interface BeforeAfterShowcaseProps {
  onRequestFix: () => void;
}

export const BeforeAfterShowcase: React.FC<BeforeAfterShowcaseProps> = ({ onRequestFix }) => {
  const [mode, setMode] = useState<'before' | 'after'>('after');
  const [isScanning, setIsScanning] = useState(false);

  const isAfter = mode === 'after';

  const handleRunLiveFix = () => {
    setMode('before');
    setIsScanning(true);
    setTimeout(() => {
      setMode('after');
      setIsScanning(false);
    }, 1100);
  };

  // Lighthouse Circular Progress SVG helper
  const score = isAfter ? 100 : 42;
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <section
      id="live-demo"
      className="py-24 relative border-t border-white/[0.06] bg-[#0B0B0F] overflow-hidden"
    >
      {/* Dynamic Ambient Background Glow based on state */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] rounded-full opacity-20 blur-[140px] transition-all duration-700"
        style={{
          background: isAfter
            ? 'radial-gradient(circle, rgba(16,185,129,0.45) 0%, rgba(6,182,212,0.35) 60%, transparent 100%)'
            : 'radial-gradient(circle, rgba(239,68,68,0.45) 0%, rgba(245,158,11,0.3) 60%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-cyan-400">
            <Gauge className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic Sandbox</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            See the <span className="text-gradient-brand">Bug Fix &amp; Speed</span> Transformation
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg">
            Toggle between a broken, slow web app and the optimized production build after AKD
            WebStudio resolves React/Node errors, fixes mobile layouts, and deploys with SSL.
          </p>

          {/* Interactive Toggle Switch Control */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div
              role="group"
              aria-label="Switch between Before AKD Fix and After AKD Optimization"
              className="inline-flex items-center p-1.5 rounded-2xl bg-[#121217] border border-white/15 shadow-inner"
            >
              <button
                type="button"
                onClick={() => setMode('before')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  !isAfter
                    ? 'bg-rose-500/20 text-rose-200 border border-rose-500/50 shadow-[0_0_20px_-3px_rgba(239,68,68,0.4)]'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <AlertTriangle className={`w-4 h-4 ${!isAfter ? 'text-rose-400' : 'text-zinc-500'}`} />
                <span>Before AKD Fix</span>
              </button>

              <button
                type="button"
                onClick={() => setMode('after')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isAfter
                    ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/50 shadow-[0_0_25px_-3px_rgba(16,185,129,0.45)]'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <CheckCircle2 className={`w-4 h-4 ${isAfter ? 'text-emerald-400' : 'text-zinc-500'}`} />
                <span>After AKD Optimization</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleRunLiveFix}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
              <span>{isScanning ? 'Applying Code Rescue...' : 'Simulate Live Rescue'}</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Comparison Dashboard */}
        <div
          className={`rounded-3xl p-5 sm:p-8 transition-all duration-500 glass-surface border ${
            isAfter
              ? 'border-emerald-500/35 shadow-[0_0_50px_-15px_rgba(16,185,129,0.2)]'
              : 'border-rose-500/35 shadow-[0_0_50px_-15px_rgba(239,68,68,0.2)]'
          }`}
        >
          {/* Top Status Banner */}
          <div
            className={`flex flex-wrap items-center justify-between gap-4 px-4 py-3 rounded-2xl mb-6 border transition-colors duration-300 ${
              isAfter
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-200'
            }`}
          >
            <div className="flex items-center gap-2.5">
              {isAfter ? (
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              ) : (
                <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0" />
              )}
              <span className="font-mono text-xs sm:text-sm font-semibold">
                {isAfter
                  ? 'AFTER AKD OPTIMIZATION: 100/100 Lighthouse • Zero Console Errors • Live Custom Domain SSL'
                  : 'BEFORE AKD FIX: 6.8s Slow Load • 4 Critical React/API Console Crashes • Broken Mobile Layout'}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span
                className={`px-2.5 py-1 rounded-md font-semibold ${
                  isAfter
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                }`}
              >
                {isAfter ? 'PRODUCTION READY' : 'NEEDS RESCUE'}
              </span>
            </div>
          </div>

          {/* 2-Column Split: Left = Lighthouse + Console Log | Right = Mobile & SSL Layout Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Column (7 cols): Performance Telemetry & Console Output */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              {/* Lighthouse Score + Vital Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-5 rounded-2xl bg-[#09090B]/90 border border-white/10">
                {/* Circular Lighthouse Score Gauge */}
                <div className="sm:col-span-4 flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0 sm:pr-4">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke={isAfter ? '#10B981' : '#EF4444'}
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        fill="transparent"
                        className="transition-all duration-700 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span
                        className={`font-mono font-bold text-2xl ${
                          isAfter ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {score}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase">
                        / 100
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-300 mt-2">
                    Lighthouse Performance
                  </span>
                </div>

                {/* Core Web Vitals & Server Metrics */}
                <div className="sm:col-span-8 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                    <div className="text-[11px] font-mono text-zinc-400">PAGE LOAD (LCP)</div>
                    <div
                      className={`text-xl font-mono font-bold mt-1 ${
                        isAfter ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {isAfter ? '0.4s' : '6.8s'}
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">
                      {isAfter ? 'Instant Edge Render' : 'Unbundled JS Bloat'}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                    <div className="text-[11px] font-mono text-zinc-400">API RESPONSE</div>
                    <div
                      className={`text-xl font-mono font-bold mt-1 ${
                        isAfter ? 'text-cyan-300' : 'text-amber-400'
                      }`}
                    >
                      {isAfter ? '34ms' : '2,450ms'}
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">
                      {isAfter ? '200 OK • Express API' : '502 CORS / Timeout'}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                    <div className="text-[11px] font-mono text-zinc-400">CONSOLE STATUS</div>
                    <div
                      className={`text-xl font-mono font-bold mt-1 ${
                        isAfter ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {isAfter ? '0 Errors' : '14 Errors'}
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">
                      {isAfter ? 'Strict TypeScript Clean' : 'Unhandled State Loops'}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                    <div className="text-[11px] font-mono text-zinc-400">DOMAIN &amp; SSL</div>
                    <div
                      className={`text-xl font-mono font-bold mt-1 ${
                        isAfter ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {isAfter ? 'TLS 1.3' : 'Invalid'}
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">
                      {isAfter ? 'Custom DNS Propagated' : 'DNS Record Mismatch'}
                    </div>
                  </div>
                </div>
              </div>

              {/* DevTools Console / Build Terminal Box */}
              <div className="rounded-2xl bg-[#09090B] border border-white/10 overflow-hidden flex-1 flex flex-col">
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#121217] border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Chrome DevTools Console &amp; Server Log</span>
                  </div>
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                      isAfter
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-rose-500/20 text-rose-300'
                    }`}
                  >
                    {isAfter ? '0 errors • 0 warnings' : '4 fatal errors'}
                  </span>
                </div>

                <div className="p-4 font-mono text-xs space-y-2.5 flex-1">
                  {!isAfter ? (
                    <>
                      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/25 text-rose-300">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">Uncaught TypeError:</span> Cannot read
                          properties of undefined (reading &apos;map&apos;) at{' '}
                          <span className="underline">DashboardView.tsx:84</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/25 text-rose-300">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">CORS Error:</span> Access to fetch at
                          &apos;https://api.client-app.io/v1/auth&apos; blocked by No
                          &apos;Access-Control-Allow-Origin&apos; header.
                        </div>
                      </div>
                      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-300">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">Layout Overflow:</span> Mobile viewport
                          horizontal overflow detected (width: 540px on 375px screen).
                        </div>
                      </div>
                      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/25 text-rose-300">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">NET::ERR_SSL_PROTOCOL_ERROR:</span>{' '}
                          Custom domain CNAME record not pointing to Vercel DNS.
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">[AKD Fix ✓]</span> Refactored React state
                          &amp; added null-safe TypeScript guards in{' '}
                          <span className="text-white">DashboardView.tsx</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">[AKD Fix ✓]</span> Configured Express.js
                          CORS whitelist, JWT middleware &amp; 34ms response caching.
                        </div>
                      </div>
                      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">[AKD Fix ✓]</span> Rebuilt responsive
                          Tailwind mobile grid — 100% fluid across iOS &amp; Android.
                        </div>
                      </div>
                      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/25 text-cyan-300">
                        <Globe className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">[Deployed ✓]</span> Connected Namecheap
                          custom domain + verified active Let&apos;s Encrypt TLS 1.3 SSL.
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Live Mobile Layout & Browser SSL Preview */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#09090B] border border-white/10 p-5 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <Smartphone className="w-4 h-4 text-cyan-400" />
                  <span>Mobile Viewport &amp; SSL Inspector</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">390 × 844 px</span>
              </div>

              {/* Simulated Phone / Browser Frame */}
              <div
                className={`rounded-2xl border p-4 transition-all duration-500 ${
                  isAfter
                    ? 'bg-[#101016] border-emerald-500/30'
                    : 'bg-[#140D10] border-rose-500/40'
                }`}
              >
                {/* Browser Address Bar */}
                <div
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono mb-4 border ${
                    isAfter
                      ? 'bg-[#09090B] border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
                  }`}
                >
                  <div className="flex items-center gap-1.5 truncate">
                    {isAfter ? (
                      <>
                        <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">https://app.nexusai.io</span>
                      </>
                    ) : (
                      <>
                        <ShieldAlert className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                        <span className="truncate">Not Secure • app.nexusai.io</span>
                      </>
                    )}
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 shrink-0">
                    {isAfter ? 'SSL Valid' : 'ERR_SSL'}
                  </span>
                </div>

                {/* Viewport UI Content */}
                {!isAfter ? (
                  /* BROKEN MOBILE UI STATE */
                  <div className="space-y-3 overflow-hidden">
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-dashed border-rose-500/40 flex items-center justify-between">
                      <span className="text-xs font-mono text-rose-300">
                        [Broken Flex Header]
                      </span>
                      <span className="text-[10px] font-mono bg-rose-500/30 text-white px-2 py-0.5 rounded -mr-8">
                        OVERFLOWING BUTTON →
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-rose-500/20">
                        <div className="text-[10px] font-mono text-zinc-500">REVENUE API</div>
                        <div className="text-sm font-mono font-bold text-rose-400 mt-1">
                          $NaN.undefined
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-rose-500/20 flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-amber-400 animate-spin shrink-0" />
                        <span className="text-[11px] font-mono text-amber-300">
                          Stuck 99%...
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-500/30 text-[11px] font-mono text-rose-200">
                      Error 500: Internal Server Exception at /api/v1/checkout
                    </div>

                    <button
                      type="button"
                      disabled
                      className="w-[115%] py-2.5 px-4 rounded-lg bg-rose-600/40 text-rose-200 font-mono text-xs border border-rose-400/40 text-left"
                    >
                      Submit Order [Click Handler Disconnected]
                    </button>
                  </div>
                ) : (
                  /* OPTIMIZED PRODUCTION MOBILE UI STATE */
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10">
                      <div>
                        <div className="text-[10px] font-mono text-cyan-300 uppercase">
                          NexusAI Production
                        </div>
                        <div className="text-sm font-display font-bold text-white">
                          Realtime Revenue &amp; API
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        ● 99.9% Live
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                        <div className="text-[10px] font-mono text-zinc-400">MRR VOLUME</div>
                        <div className="text-base font-display font-bold text-white mt-0.5">
                          $48,920.00
                        </div>
                        <div className="text-[10px] font-mono text-emerald-400">+24.8% today</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                        <div className="text-[10px] font-mono text-zinc-400">API STREAM</div>
                        <div className="text-base font-display font-bold text-cyan-300 mt-0.5">
                          34ms OK
                        </div>
                        <div className="text-[10px] font-mono text-zinc-400">0 failed reqs</div>
                      </div>
                    </div>

                    {/* Mini Sparkline Bar Graphic */}
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.07] flex items-end justify-between gap-1.5 h-16">
                      {[38, 52, 46, 68, 74, 62, 85, 92, 88, 100].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-cyan-500/40 to-emerald-400/90 transition-all duration-500"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>

                    <div className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold text-xs text-center shadow-md flex items-center justify-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Responsive Mobile Checkout Ready</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom CTA inside Right Panel */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <span className="text-xs text-zinc-400">
                  Have a slow or broken app right now?
                </span>
                <button
                  type="button"
                  onClick={onRequestFix}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-white/[0.08] hover:bg-cyan-500/20 hover:text-cyan-200 border border-white/15 hover:border-cyan-500/40 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Fix My App Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
