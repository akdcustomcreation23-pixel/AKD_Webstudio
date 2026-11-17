import React from 'react';
import {
  Bot,
  Braces,
  Cloud,
  Code2,
  Cpu,
  FileCode2,
  GitBranch,
  Palette,
  Server,
  ShieldCheck,
  Webhook,
} from 'lucide-react';
import { TECH_STACK_ITEMS, TechItem } from '../data/studioData';

export const TechStackSection: React.FC = () => {
  const renderTechIcon = (item: TechItem) => {
    const baseClass =
      'w-5 h-5 text-zinc-400 transition-colors duration-300 group-hover:scale-110 transform';

    switch (item.iconKey) {
      case 'react':
        return <Code2 className={`${baseClass} group-hover:text-cyan-400`} />;
      case 'node':
        return <Server className={`${baseClass} group-hover:text-emerald-400`} />;
      case 'express':
        return <Cpu className={`${baseClass} group-hover:text-zinc-100`} />;
      case 'js':
        return <Braces className={`${baseClass} group-hover:text-yellow-400`} />;
      case 'ts':
        return <FileCode2 className={`${baseClass} group-hover:text-blue-400`} />;
      case 'tailwind':
        return <Palette className={`${baseClass} group-hover:text-sky-400`} />;
      case 'ai':
        return <Bot className={`${baseClass} group-hover:text-purple-400`} />;
      case 'api':
        return <Webhook className={`${baseClass} group-hover:text-cyan-400`} />;
      case 'vercel':
        return <Cloud className={`${baseClass} group-hover:text-white`} />;
      case 'github':
        return <GitBranch className={`${baseClass} group-hover:text-zinc-100`} />;
      case 'dns':
      default:
        return <ShieldCheck className={`${baseClass} group-hover:text-emerald-400`} />;
    }
  };

  // Duplicate list for seamless infinite marquee
  const marqueeList = [...TECH_STACK_ITEMS, ...TECH_STACK_ITEMS];

  return (
    <section className="py-20 relative border-t border-white/[0.06] bg-[#0B0B0F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Production Stack</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Engineered with <span className="text-gradient-brand">Battle-Tested Technologies</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Hover over any technology below—from full-stack React &amp; Node.js to AI code rescue
            and custom DNS/SSL edge deployment.
          </p>
        </div>
      </div>

      {/* Infinite Smooth Marquee Strip */}
      <div className="relative w-full overflow-hidden py-3 mb-12 border-y border-white/[0.06] bg-[#09090B]/80">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#09090B] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#09090B] to-transparent z-10" />

        <div className="animate-marquee flex items-center gap-4">
          {marqueeList.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 shrink-0 cursor-default"
            >
              {renderTechIcon(tech)}
              <span className="font-mono text-xs sm:text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-500 group-hover:text-cyan-300 transition-colors">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Monochrome-to-Color Bento Tech Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {TECH_STACK_ITEMS.map((item) => (
            <div
              key={item.name}
              className={`group rounded-2xl p-4 sm:p-5 bg-[#121216]/80 border border-white/[0.07] ${item.borderHover} transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div
                  className={`p-2.5 rounded-xl bg-white/[0.04] ${item.glowBg} border border-white/10 transition-colors duration-300`}
                >
                  {renderTechIcon(item)}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  {item.category}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-base text-zinc-300 group-hover:text-white transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-zinc-500 group-hover:text-zinc-300 mt-1 leading-relaxed transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* 12th Card: Custom Stack / Lovable / Cursor / Replit Badge */}
          <div className="group rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-violet-500/10 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                AI Tooling Compatible
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white">
                Lovable • Cursor • Replit
              </h3>
              <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                Seamless debugging, refactoring &amp; production deployment for any AI-generated repo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
