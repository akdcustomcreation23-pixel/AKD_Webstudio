import React from 'react';
import {
  ArrowUpRight,
  ExternalLink,
  Globe,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

interface FooterAndCtaProps {
  onMessageStudio: () => void;
}

export const FooterAndCta: React.FC<FooterAndCtaProps> = ({ onMessageStudio }) => {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#09090B] pt-20 pb-12 overflow-hidden">
      {/* Ambient Footer Glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[950px] h-[380px] rounded-full opacity-25 blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, rgba(6,182,212,0.5) 0%, rgba(139,92,246,0.45) 60%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bold Gradient CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 mb-20 border border-cyan-500/35 shadow-[0_0_60px_-15px_rgba(6,182,212,0.3)] bg-gradient-to-br from-[#0F172A] via-[#131129] to-[#1E1035]">
          {/* Subtle Grid Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-obsidian-grid opacity-50" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-cyan-200">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>Available Now on Fiverr • Fast Response by Abdullah</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Ready to Launch or Fix Your Web App?
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you need a custom full-stack React &amp; Node.js MVP, urgent bug rescue
              for a Cursor/Lovable project, or complete custom domain &amp; SSL deployment—let&apos;s
              get your app live today.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <button
                type="button"
                onClick={onMessageStudio}
                className="btn-glow-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message AKD WebStudio</span>
              </button>

              <a
                href="https://www.fiverr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all"
              >
                <span>Order Directly on Fiverr</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Micro Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-300">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-cyan-400" /> Avg. Response: &lt; 15 Mins
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Clean Code Handover
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-violet-400" /> Custom Domain &amp; SSL Included
              </span>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-white/15">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 3L25 22H19.5L14 12.2L8.5 22H3L14 3Z"
                    fill="url(#akd_footer_grad)"
                  />
                  <defs>
                    <linearGradient
                      id="akd_footer_grad"
                      x1="3"
                      y1="3"
                      x2="25"
                      y2="22"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#22D3EE" />
                      <stop offset="1" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-white">
                AKD WebStudio
              </span>
            </div>

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Full-Stack AI Web Development Studio founded by <strong className="text-zinc-200">Abdullah</strong>.
              Specializing in high-speed React &amp; Node.js web apps, rapid AI code debugging,
              and end-to-end cloud &amp; custom domain deployments.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational • Accepting New Orders</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Studio Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Core Services &amp; Gigs
                </a>
              </li>
              <li>
                <a href="#live-demo" className="hover:text-cyan-300 transition-colors">
                  Before / After Speed Demo
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-300 transition-colors">
                  Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-cyan-300 transition-colors">
                  3-Step Working Process
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-300 transition-colors">
                  Buyer FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Core Specialties (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Fiverr Gig Specialties
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li className="flex items-center justify-between">
                <span>AI &amp; Full-Stack Web Apps</span>
                <span className="text-xs font-mono text-cyan-400">React + Node</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Lovable / Cursor / Replit Bug Fix</span>
                <span className="text-xs font-mono text-violet-400">24h Rescue</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Vercel &amp; Cloud Hosting Setup</span>
                <span className="text-xs font-mono text-emerald-400">CI/CD Live</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Namecheap &amp; GoDaddy DNS / SSL</span>
                <span className="text-xs font-mono text-cyan-300">TLS 1.3</span>
              </li>
            </ul>
            <div className="pt-2">
              <a
                href="https://www.fiverr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-300 hover:text-cyan-200"
              >
                <span>Visit Official Fiverr Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-zinc-300">AKD WebStudio</strong>{' '}
            (Founded by Abdullah). All rights reserved.
          </div>
          <div className="flex items-center gap-4 font-mono">
            <span>Built with React • TypeScript • Tailwind CSS</span>
            <span className="text-emerald-400">● 100/100 Lighthouse</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
