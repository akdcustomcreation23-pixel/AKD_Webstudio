import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { PortfolioSection } from './components/PortfolioSection';
import { TechStackSection } from './components/TechStackSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { FooterAndCta } from './components/FooterAndCta';
import { ProjectModal } from './components/ProjectModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenProjectModal = (defaultService?: string) => {
    setSelectedService(defaultService);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA] selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* 1. Sticky Glassmorphism Navbar */}
      <Navbar onOpenProjectModal={handleOpenProjectModal} />

      {/* Main Content */}
      <main>
        {/* 2. Hero Section (Above the Fold) */}
        <HeroSection onStartProject={handleOpenProjectModal} />

        {/* 3. Core Services Section (3-Column Bento Grid matching Fiverr Gigs) */}
        <ServicesSection onSelectService={handleOpenProjectModal} />

        {/* 4. Interactive "Bug Fix & Speed" Before/After Showcase */}
        <BeforeAfterShowcase
          onRequestFix={() =>
            handleOpenProjectModal('Rapid Bug Fixing & Code Rescue')
          }
        />

        {/* 5. Featured Projects Portfolio Grid (Filter Tabs + View Case Study Modal) */}
        <PortfolioSection onStartSimilarProject={handleOpenProjectModal} />

        {/* 6. Tech Stack Marquee / Monochrome-to-Color Grid */}
        <TechStackSection />

        {/* 7. 3-Step Working Process */}
        <ProcessSection onStartProject={() => handleOpenProjectModal()} />

        {/* 8. Client Testimonials & FAQ Accordion */}
        <TestimonialsAndFaq />
      </main>

      {/* 9. High-Impact Footer & CTA Banner */}
      <FooterAndCta onMessageStudio={() => handleOpenProjectModal()} />

      {/* Interactive Project Brief & Fiverr Concierge Modal */}
      <ProjectModal
        isOpen={modalOpen}
        initialService={selectedService}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

export default App;
