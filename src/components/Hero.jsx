import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  Monitor
} from 'lucide-react';
import { businessInfo } from '../data/websiteData';

export default function Hero({ onOpenQuoteModal, onSelectService: _onSelectService }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Realistic local photos of people showcasing software and websites on computers (100% offline ready)
  const showcaseSlides = [
    {
      id: "web-dev",
      serviceName: "Website Development",
      category: "Full-Stack Web & E-Commerce",
      tagline: "High-converting corporate websites & responsive web apps",
      image: "/images/hero-web.jpg",
      caption: "Engineers building modern web platforms on laptops"
    },
    {
      id: "software-dev",
      serviceName: "Custom Software Development",
      category: "Enterprise Systems & Databases",
      tagline: "Scalable business portals, cloud databases & management systems",
      image: "/images/hero-software.jpg",
      caption: "Developers engineering software systems on multi-screens"
    },
    {
      id: "ai-automation",
      serviceName: "AI & Intelligent Automation",
      category: "Smart Chatbots & Automated Workflows",
      tagline: "24/7 WhatsApp AI customer bots and automated workflows",
      image: "/images/hero-ai.jpg",
      caption: "Tech specialists collaborating on AI automation interfaces"
    },
    {
      id: "cv-resume",
      serviceName: "CV & Resume Design",
      category: "Career Engineering & Personal Branding",
      tagline: "ATS-optimized executive resumes that command top interviews",
      image: "/images/hero-cv.jpg",
      caption: "Executive reviewing tailored career portfolio on laptop"
    },
    {
      id: "graphic-design",
      serviceName: "Graphic & Brand Design",
      category: "Corporate Identity & Marketing Media",
      tagline: "Distinctive logo marks, corporate collateral, and flyers",
      image: "/images/hero-design.jpg",
      caption: "Designer crafting brand vectors on a desktop computer"
    },
    {
      id: "presentation-design",
      serviceName: "PowerPoint & Pitch Decks",
      category: "Venture Pitching & Executive Slides",
      tagline: "Compelling slide storytelling that wins deals and funding",
      image: "/images/hero-presentation.jpg",
      caption: "Founders presenting business pitch deck on screens"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, showcaseSlides.length]);

  const activeSlide = showcaseSlides[currentSlide];

  return (
    <section id="home" className="py-3 px-4 sm:px-6 lg:px-8">
      {/* Containerized Section with reduced height and compact whitespace */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md shadow-blue-900/5 p-5 sm:p-7 lg:p-8 overflow-hidden relative">
        
        {/* Ambient subtle light glows */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          
          {/* Left Column: Headlines & Action Buttons */}
          <div className="lg:col-span-6 space-y-4 text-left">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping"></span>
              <span>1556 Glaudina, Harare, Zimbabwe • Worldwide Delivery</span>
            </div>

            <h1 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Technology Meets Creativity.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-teal-500">
                Possibilities Become Reality.
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              We build digital experiences, intelligent solutions and creative products that help individuals and businesses move forward.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-600/25 transition-all hover:scale-[1.02]"
              >
                Explore Services
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all"
              >
                Start a Project
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-1 px-4 py-2.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 rounded-xl transition-all"
              >
                View Work
              </a>
            </div>

            {/* Compact Trust Highlights */}
            <div className="pt-3 border-t border-slate-100 grid grid-cols-3 gap-2">
              <div>
                <div className="text-lg font-black text-slate-900">7 Core</div>
                <div className="text-[10px] text-slate-500 font-medium">Digital Disciplines</div>
              </div>
              <div>
                <div className="text-lg font-black text-blue-600">100%</div>
                <div className="text-[10px] text-slate-500 font-medium">Tailored Solutions</div>
              </div>
              <div>
                <div className="text-lg font-black text-teal-600">Rapid</div>
                <div className="text-[10px] text-slate-500 font-medium">Project Delivery</div>
              </div>
            </div>

          </div>

          {/* Right Column: Sliding Realistic Images of People on Computers */}
          <div 
            className="lg:col-span-6 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Mockup Frame around real photographs */}
            <div className="bg-slate-900 text-white rounded-2xl p-2.5 sm:p-3 shadow-xl border border-slate-800 relative overflow-hidden">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-2 px-1 mb-2 border-b border-slate-800 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                  <span className="ml-2 font-mono text-slate-400 text-[10px] hidden sm:inline flex items-center gap-1">
                    <Monitor className="w-3 h-3 text-blue-400" />
                    gnostix.co.zw/capabilities/{activeSlide.id}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    Live Showcase
                  </span>
                  <span className="text-slate-400 font-mono text-[10px]">
                    {currentSlide + 1} / {showcaseSlides.length}
                  </span>
                </div>
              </div>

              {/* Realistic Image Showcase Screen */}
              <div className="relative h-[230px] sm:h-[260px] rounded-xl overflow-hidden group">
                
                {/* Real photo of people showcasing software/websites on computers */}
                <img 
                  src={activeSlide.image} 
                  alt={activeSlide.serviceName}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                {/* Caption / Overlay details */}
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-white z-10 flex flex-col justify-end">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-teal-300 bg-teal-950/70 px-2 py-0.5 rounded border border-teal-500/30 mb-1">
                        {activeSlide.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {activeSlide.serviceName}
                      </h3>
                      <p className="text-[11px] text-slate-200 line-clamp-1 mt-0.5">
                        {activeSlide.tagline}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/${businessInfo.whatsappNumber}?text=Hello%20Gnostix,%20I%20am%20interested%20in%20your%20${encodeURIComponent(activeSlide.serviceName)}%20services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-1 shadow-md transition"
                    >
                      Quote <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between pt-2.5 px-1">
                {/* Dots */}
                <div className="flex items-center gap-1">
                  {showcaseSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentSlide ? 'w-5 bg-blue-500' : 'w-1.5 bg-slate-700'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length)}
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % showcaseSlides.length)}
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
