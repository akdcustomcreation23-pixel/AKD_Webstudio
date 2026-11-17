import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Copy,
  ExternalLink,
  Send,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  initialService,
  onClose,
}) => {
  const [selectedService, setSelectedService] = useState(
    initialService || 'AI & Full-Stack Web Development'
  );
  const [urgency, setUrgency] = useState<'Express 24h' | '2–4 Days' | '1 Week MVP'>('Express 24h');
  const [repoOrDomain, setRepoOrDomain] = useState('');
  const [details, setDetails] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const serviceOptions = [
    'AI & Full-Stack Web Development',
    'Rapid Bug Fixing & Code Rescue',
    'Complete Deployment & Hosting Setup',
  ];

  const generatedBrief = `Hi Abdullah (AKD WebStudio),
I'm interested in: ${selectedService}
Target Turnaround: ${urgency}
${repoOrDomain ? `Repo / Domain: ${repoOrDomain}\n` : ''}Project / Issue Details: ${
    details || 'Need help building, fixing, or deploying my web application.'
  }`;

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(generatedBrief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto glass-surface rounded-3xl border border-white/20 p-6 sm:p-8 text-left shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-2">
              <Sparkles className="w-3 h-3" /> Direct Studio Brief • Abdullah
            </div>
            <h3 className="font-display font-bold text-2xl text-white">
              Start a Project with AKD WebStudio
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Configure your project or bug-rescue request below to message Abdullah directly or
              copy a ready-to-send Fiverr brief.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              <h4 className="font-display font-bold text-2xl text-white">
                Project Brief Ready for Abdullah!
              </h4>
              <p className="text-sm text-zinc-300">
                Your scope for <strong className="text-cyan-300">{selectedService}</strong> ({urgency})
                has been prepared. Copy your brief below or continue to Fiverr for instant priority
                onboarding.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#09090B] border border-white/10 text-left font-mono text-xs text-zinc-300 whitespace-pre-wrap max-w-lg mx-auto">
              {generatedBrief}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopyBrief}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-cyan-200 bg-cyan-500/20 border border-cyan-500/40 cursor-pointer"
              >
                <Copy className="w-4 h-4" />
                <span>{copied ? 'Copied to Clipboard ✓' : 'Copy Brief Text'}</span>
              </button>

              <a
                href="https://www.fiverr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
              >
                <span>Open Fiverr &amp; Paste Brief</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-4 py-3 rounded-xl text-xs font-mono text-zinc-400 hover:text-white cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="py-6 space-y-5">
            {/* Step 1: Service Selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                1. Select Service / Gig Category
              </label>
              <div className="grid grid-cols-1 gap-2">
                {serviceOptions.map((option) => {
                  const active = selectedService === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedService(option)}
                      className={`px-4 py-3 rounded-xl text-left text-sm font-medium transition-all flex items-center justify-between border cursor-pointer ${
                        active
                          ? 'bg-cyan-500/15 text-white border-cyan-400/50 shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)]'
                          : 'bg-white/[0.03] text-zinc-300 border-white/10 hover:bg-white/[0.06]'
                      }`}
                    >
                      <span>{option}</span>
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          active ? 'bg-cyan-400' : 'bg-zinc-600'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Urgency / Turnaround */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                2. Desired Turnaround Speed
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {(['Express 24h', '2–4 Days', '1 Week MVP'] as const).map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setUrgency(tier)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-mono font-semibold border transition-all cursor-pointer ${
                      urgency === tier
                        ? 'bg-violet-500/20 text-violet-200 border-violet-400/50'
                        : 'bg-white/[0.03] text-zinc-400 border-white/10 hover:text-white'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: GitHub Repo / Domain / App Link */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                3. GitHub Repo, Lovable/Cursor Link, or Domain (Optional)
              </label>
              <input
                type="text"
                value={repoOrDomain}
                onChange={(e) => setRepoOrDomain(e.target.value)}
                placeholder="e.g. github.com/username/app or mydomain.com (Namecheap/GoDaddy)"
                className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/15 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Step 4: Project or Bug Description */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                4. Tell Abdullah About Your Idea or Bug
              </label>
              <textarea
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Describe the features you want built, the React/Node console error you're seeing, or the hosting/domain setup you need..."
                className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-white/15 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Live Generated Brief Preview */}
            <div className="p-3.5 rounded-xl bg-[#09090B]/90 border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <Terminal className="w-3.5 h-3.5" /> Auto-Formatted Fiverr Message
                </span>
                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copied ? 'Copied ✓' : 'Copy Text'}</span>
                </button>
              </div>
              <pre className="text-[11px] font-mono text-zinc-300 whitespace-pre-wrap leading-relaxed">
                {generatedBrief}
              </pre>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="submit"
                className="btn-glow-primary w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Generate Brief &amp; Connect</span>
              </button>

              <a
                href="https://www.fiverr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-zinc-200 hover:text-white bg-white/[0.06] hover:bg-white/10 border border-white/15 transition-colors"
              >
                <span>Hire Directly on Fiverr</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
