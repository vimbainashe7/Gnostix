import React, { useState } from 'react';
import { 
  Globe, 
  Code2, 
  Cpu, 
  FileText, 
  Palette, 
  Presentation, 
  Package, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { servicesData, businessInfo } from '../data/websiteData';

export default function ServicesInfographic({ onOpenDetailModal, onOpenQuoteModal: _onOpenQuoteModal }) {
  const [activeGroup, setActiveGroup] = useState('tech'); // 'tech' | 'creative' | 'products'

  // Filter into groups of 3 cards each, matching the exact 3-circle sinusoidal template
  const techServices = servicesData.filter(s => ['web-dev', 'software-dev', 'ai-automation'].includes(s.id));
  const creativeServices = servicesData.filter(s => ['cv-resume', 'graphic-design', 'presentation-design'].includes(s.id));
  const productServices = [
    servicesData.find(s => s.id === 'digital-products'),
    {
      id: "cloud-starter",
      number: "08",
      shortTitle: "Starter Bundles",
      title: "Startup Digital Launchpad",
      category: "products",
      iconName: "Globe",
      summary: "Turnkey digital bundles: modern corporate website, custom domain, professional emails, and marketing identity pack.",
      offers: "Full digital setup for new ventures: high-converting website, company email system, and marketing collateral.",
      problemsSolved: "Fragmented vendors, high startup costs, and delayed market entry.",
      benefits: "Go to market in under 7 days with complete brand legitimacy.",
      pricingApproach: "Special Launchpad bundle quote",
      badge: "Turnkey Pack"
    },
    {
      id: "ai-retainer",
      number: "09",
      shortTitle: "Support & AI Retainers",
      title: "Monthly Technical Retainers",
      category: "products",
      iconName: "Cpu",
      summary: "Continuous security updates, AI bot fine-tuning, system maintenance, and priority technical support.",
      offers: "Dedicated ongoing technical support, server uptime assurance, feature upgrades, and rapid incident resolution.",
      problemsSolved: "Unmaintained websites getting hacked, broken integrations, and lack of dedicated in-house tech staff.",
      benefits: "Peace of mind, zero downtime, and instant access to a dedicated tech team in Harare.",
      pricingApproach: "Monthly retainer quotation",
      badge: "Full Care"
    }
  ];

  const currentDisplayServices = 
    activeGroup === 'tech' ? techServices :
    activeGroup === 'creative' ? creativeServices : productServices;

  const getIcon = (name) => {
    switch (name) {
      case 'Globe': return <Globe className="w-6 h-6 text-blue-600" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-blue-600" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'FileText': return <FileText className="w-6 h-6 text-blue-600" />;
      case 'Palette': return <Palette className="w-6 h-6 text-blue-600" />;
      case 'Presentation': return <Presentation className="w-6 h-6 text-blue-600" />;
      default: return <Package className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-3 px-4 sm:px-6 lg:px-8">
      {/* Containerized Section with reduced height */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md shadow-blue-900/5 p-5 sm:p-7 lg:p-8 relative">
        
        {/* Compact Header with Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3 text-blue-600" />
              Template Architecture (3 Connected Nodes)
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Our Services & Capabilities
            </h2>
          </div>

          {/* Category Switcher Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs">
            <button
              onClick={() => setActiveGroup('tech')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeGroup === 'tech'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tech & AI 
            </button>
            <button
              onClick={() => setActiveGroup('creative')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeGroup === 'creative'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Creative & CV 
            </button>
            <button
              onClick={() => setActiveGroup('products')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeGroup === 'products'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Products & Care 
            </button>
          </div>
        </div>

        {/* 
          EXACT REPLICATION OF IMAGE 1:
          - Exactly 3 Circular Cards
          - Connected by Sinusoidal Ribbon
          - Arch over 1st, dip under 2nd, arch over 3rd
        */}
        <div className="relative py-4 sm:py-6 px-2">
          
          {/* Desktop SVG Sinusoidal Ribbon connecting the 3 circles */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 1000 300" 
              fill="none" 
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="compactRibbonGrad" x1="50" y1="50" x2="950" y2="250" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1E40AF" />
                  <stop offset="40%" stopColor="#2563EB" />
                  <stop offset="70%" stopColor="#0EA5E9" />
                  <stop offset="100%" stopColor="#14B8A6" />
                </linearGradient>
                <filter id="compactRibbonShadow" x="-10%" y="-10%" width="120%" height="130%" filterUnits="userSpaceOnUse">
                  <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#1e3a8a" floodOpacity="0.15" />
                </filter>
              </defs>

              {/* Shadow Track */}
              <path
                d="M 80 150 
                   A 85 85 0 0 1 260 150 
                   C 320 150, 420 235, 500 235 
                   C 580 235, 680 150, 740 150 
                   A 85 85 0 0 1 920 150"
                stroke="#e2e8f0"
                strokeWidth="16"
                strokeLinecap="round"
                fill="none"
              />

              {/* Gradient Ribbon */}
              <path
                d="M 80 150 
                   A 85 85 0 0 1 260 150 
                   C 320 150, 420 235, 500 235 
                   C 580 235, 680 150, 740 150 
                   A 85 85 0 0 1 920 150"
                stroke="url(#compactRibbonGrad)"
                strokeWidth="11"
                strokeLinecap="round"
                fill="none"
                filter="url(#compactRibbonShadow)"
              />
            </svg>
          </div>

          {/* Exactly 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {currentDisplayServices.map((service, index) => {
              const isMiddle = index === 1;

              return (
                <div key={service.id} className="flex flex-col items-center text-center group">
                  
                  {/* Circular Container matching Image 1 */}
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-white p-2.5 shadow-lg border border-slate-200/90 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400 flex items-center justify-center">
                    
                    {/* Inner Content Circle */}
                    <div className="w-full h-full rounded-full border border-slate-100 flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-slate-50 relative">
                      
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200/80 flex items-center justify-center mb-2 shadow-xs group-hover:scale-110 transition-transform">
                        {getIcon(service.iconName)}
                      </div>

                      {/* INFODATA Header */}
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 mb-0.5">
                         {service.number}
                      </div>

                      {/* Title */}
                      <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight leading-tight mb-1.5 px-2">
                        {service.title}
                      </h3>

                      {/* Summary text */}
                      <p className="text-[11px] text-slate-500 leading-tight line-clamp-2 px-2">
                        {service.summary}
                      </p>

                      {/* Click prompt */}
                      <button
                        onClick={() => onOpenDetailModal(service)}
                        className="mt-2 text-[10px] font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group-hover:underline"
                      >
                        Details <ArrowRight className="w-2.5 h-2.5" />
                      </button>

                    </div>

                    {/* Ribbon badge */}
                    <div 
                      className={`absolute ${isMiddle ? '-bottom-2.5' : '-top-2.5'} px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-700 to-teal-500 shadow-sm`}
                    >
                      {service.badge || `Stage ${service.number}`}
                    </div>

                  </div>

                  {/* Actions under card */}
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => onOpenDetailModal(service)}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
                    >
                      Scope
                    </button>
                    <a
                      href={`https://wa.me/${businessInfo.whatsappNumber}?text=Hello%20Gnostix,%20I%20would%20like%20a%20quotation%20for%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg text-[11px] font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 inline-flex items-center gap-1 transition"
                    >
                      WhatsApp Quote
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
