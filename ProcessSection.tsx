import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  FileSearch,
  Rocket,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/studioData';

interface ProcessSectionProps {
  onStartProject: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProject }) => {
  const getStepIcon = (num: string) => {
    if (num === '01') return <FileSearch className="w-6 h-6 text-cyan-400" />;
    if (num === '02') return <Code2 className="w-6 h-6 text-violet-400" />;
    return <Rocket className="w-6 h-6 text-emerald-400" />;
  };

  return (
    <section id="process" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-cyan-400">
            <Workflow className="w-3.5 h-3.5" />
            <span>Frictionless Workflow</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            From Broken or Blank to{' '}
            <span className="text-gradient-brand">Live in 3 Simple Steps</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            No agency bloat or endless meetings. Work directly with Abdullah for rapid,
            transparent engineering and stress-free deployment.
          </p>
        </div>

        {/* 3-Step Pipeline Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-7">
          {/* Desktop Connecting Gradient Line */}
          <div className="hidden lg:block pointer-events-none absolute top-14 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-cyan-500/50 via-violet-500/50 to-emerald-500/50" />

          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="group glass-surface glass-card-hover rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between"
            >
              <div>
                {/* Top Number Node + Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[#09090B] border border-white/15 group-hover:border-cyan-400/60 shadow-[0_0_25px_-5px_rgba(6,182,212,0.3)] transition-all">
                    <span className="font-mono font-bold text-lg text-gradient-brand">
                      {step.number}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.05] text-zinc-300 border border-white/10">
                    {step.badge}
                  </span>
                </div>

                {/* Title + Description */}
                <div className="flex items-center gap-3 mb-3">
                  {getStepIcon(step.number)}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {step.title}
                  </h3>
                </div>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Step Checkpoints */}
                <ul className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                  {step.checkpoints.map((cp, cpIdx) => (
                    <li
                      key={cpIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{cp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>STEP {step.number} OF 03</span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                  {idx === 2 ? '100% Production Live ✓' : 'Next Milestone →'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Founder Direct Assurance Bar */}
        <div className="mt-12 glass-surface rounded-2xl p-6 sm:p-7 border border-cyan-500/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center font-display font-bold text-lg text-white shrink-0 shadow-lg">
              AK
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-display font-bold text-base sm:text-lg text-white">
                  Direct Founder Execution by Abdullah
                </h4>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3" /> 100% Clean Code Guarantee
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Every line of React/Node code, bug fix, and DNS record is personally engineered and
                tested by Abdullah at AKD WebStudio.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onStartProject}
            className="btn-glow-primary shrink-0 w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white cursor-pointer"
          >
            <span>Share Your Project or Bug</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
