import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServicesInfographic from './components/ServicesInfographic';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicesDetailModal from './components/ServicesDetailModal';
import QuoteModal from './components/QuoteModal';
import AIAssistantModal from './components/AIAssistantModal';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePreselectedService, setQuotePreselectedService] = useState(null);

  const handleOpenDetail = (service) => {
    setSelectedService(service);
  };

  const handleOpenQuote = (service = null) => {
    setQuotePreselectedService(service);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      {/* 
        Containerized Blue & White Layout:
        - Compact section heights
        - Strictly 3 cards per section
        - Ample white space outside the container on both left and right sides
      */}

      {/* Sticky Compact Header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Main Content Sections with compact spacing */}
      <main className="space-y-3 sm:space-y-4 pb-4">
        
        {/* Section 1: Hero with sliding realistic service images on the right half */}
        <Hero 
          onOpenQuoteModal={() => handleOpenQuote()} 
          onSelectService={(svc) => handleOpenDetail(svc)}
        />

        {/* Section 2: About Us (Strictly 3 cards) */}
        <About />

        {/* Section 3: Services (Replicating Image 1 - Exactly 3 circular cards & Sinusoidal ribbon) */}
        <ServicesInfographic 
          onOpenDetailModal={handleOpenDetail}
          onOpenQuoteModal={() => handleOpenQuote()}
        />

        {/* Section 4: Why Choose Us (Strictly 3 cards) */}
        <WhyChooseUs onOpenQuoteModal={() => handleOpenQuote()} />

        {/* Section 5: Filterable Portfolio (Strictly 3 cards) */}
        <Portfolio onOpenQuoteModal={() => handleOpenQuote()} />

        {/* Section 6: Pricing & Quotations (Strictly 3 cards) */}
        <Pricing onOpenQuoteModal={() => handleOpenQuote()} />

        {/* Section 7: Testimonials (Replicating Image 2 - Exactly 3 cards with offset shapes, top avatars, star badge) */}
        <Testimonials />

        {/* Section 8: FAQ */}
        <FAQ />

        {/* Section 9: Contact Us & WhatsApp */}
        <Contact />

      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Floating Gnostix AI Assistant */}
      <AIAssistantModal />

      {/* Modals */}
      <ServicesDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuoteModal={() => {
          const s = selectedService;
          setSelectedService(null);
          handleOpenQuote(s);
        }}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={quotePreselectedService}
      />
    </div>
  );
}
