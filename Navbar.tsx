import React, { useState, useEffect } from 'react';
import { ExternalLink, Menu, X, Sparkles, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenProjectModal: (defaultService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProjectModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Live Demo', href: '#live-demo' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);

      const sections = ['services', 'live-demo', 'portfolio', 'process', 'faq'];
      const scrollPos = window.scrollY + 220;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setActiveSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090B]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-3'
          : 'bg-[#09090B]/60 backdrop-blur-md border-b border-white/[0.06] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Minimalist Geometric Logo + Brand Text */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="AKD WebStudio Home"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/15 to-violet-500/20 border border-white/15 group-hover:border-cyan-400/60 transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 opacity-20 blur-sm group-hover:opacity-50 transition-opacity" />
            {/* Custom Geometric AKD Prism Icon */}
            <svg
              className="w-5 h-5 relative z-10"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 3L25 22H19.5L14 12.2L8.5 22H3L14 3Z"
                fill="url(#akd_grad_1)"
              />
              <path
                d="M14 15.5L17.6 22H10.4L14 15.5Z"
                fill="#22D3EE"
                fillOpacity="0.9"
              />
              <defs>
                <linearGradient
                  id="akd_grad_1"
                  x1="3"
                  y1="3"
                  x2="25"
                  y2="22"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#22D3EE" />
                  <stop offset="0.5" stopColor="#818CF8" />
                  <stop offset="1" stopColor="#C084FC" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-cyan-100 transition-colors">
                AKD WebStudio
              </span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded bg-white/[0.06] text-zinc-400 border border-white/10">
                v2.5 AI
              </span>
            </div>
            <span className="text-[11px] text-zinc-400 font-medium hidden sm:block -mt-0.5">
              Founded by Abdullah • Full-Stack Studio
            </span>
          </div>
        </a>

        {/* Center: Smooth-Scroll Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/[0.09] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label === 'Live Demo' ? (
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    {link.label}
                  </span>
                ) : (
                  link.label
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Glowing CTA Button "Hire on Fiverr" */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenProjectModal('Rapid Bug Fixing & Code Rescue')}
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-all cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Quick Scope</span>
          </button>

          <a
            href="https://www.fiverr.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              // Also allow opening our interactive Fiverr Hire & Scope concierge if user wants instant brief + direct Fiverr link
              if (e.shiftKey) return;
            }}
            className="btn-glow-primary inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-sm font-semibold text-white cursor-pointer"
          >
            <span>Hire on Fiverr</span>
            <ExternalLink className="w-4 h-4 opacity-90" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://www.fiverr.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-primary inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
          >
            <span>Hire on Fiverr</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090B]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-zinc-200 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <span>{link.label}</span>
                {link.label === 'Live Demo' && (
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Interactive
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 grid grid-cols-1 gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start a Project / Instant Brief</span>
            </button>

            <a
              href="https://www.fiverr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow-primary w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white"
            >
              <span>Hire AKD WebStudio on Fiverr</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
