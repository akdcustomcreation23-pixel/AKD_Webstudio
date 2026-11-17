import React, { useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  HelpCircle,
  MessageSquareQuote,
  Star,
} from 'lucide-react';
import { FAQ_DATA, TESTIMONIALS_DATA } from '../data/studioData';

export const TestimonialsAndFaq: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <section className="py-24 relative border-t border-white/[0.06] bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {/* PART 1: 3 Realistic 5-Star Client Reviews */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-cyan-400">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>Verified Client Feedback</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Trusted for <span className="text-gradient-brand">Speed, Clean Code &amp; Zero Stress</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg">
              Founders and product teams rely on AKD WebStudio when deadlines are tight and
              production quality is non-negotiable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {TESTIMONIALS_DATA.map((review) => (
              <div
                key={review.id}
                className="glass-surface glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Top Row: 5 Stars + Highlight Metric */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                      <span className="ml-1.5 text-xs font-mono font-bold text-white">
                        5.0
                      </span>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      {review.highlightMetric}
                    </span>
                  </div>

                  {/* Service Tag Pill */}
                  <div className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-cyan-300 border border-white/[0.08]">
                    {review.serviceTag}
                  </div>

                  {/* Review Quote */}
                  <blockquote className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Reviewer Info Footer */}
                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-display font-bold text-sm text-white">
                        {review.clientName}
                      </span>
                      <CheckCircle2
                        className="w-3.5 h-3.5 text-emerald-400"
                        aria-label="Verified Buyer"
                      />
                    </div>
                    <div className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                      <span>{review.countryFlag}</span>
                      <span>{review.country}</span>
                      <span>•</span>
                      <span>{review.role}</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    {review.deliveryTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: Expandable FAQ Accordion Section */}
        <div id="faq" className="scroll-mt-28 max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-cyan-400">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Everything You Need to Know Before{' '}
              <span className="text-gradient-brand">Hiring AKD WebStudio</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Clear answers on turnaround times, rescuing Lovable/Cursor AI apps, custom domain
              deployment, and post-launch support.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQ_DATA.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? 'bg-[#121218] border-cyan-500/40 shadow-[0_0_30px_-10px_rgba(6,182,212,0.25)]'
                      : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <span className="self-start px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shrink-0">
                        {faq.tag}
                      </span>
                      <span className="font-display font-semibold text-base sm:text-lg text-white">
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`p-2 rounded-xl bg-white/[0.05] border border-white/10 text-zinc-300 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-cyan-300 border-cyan-500/40' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/[0.06]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
