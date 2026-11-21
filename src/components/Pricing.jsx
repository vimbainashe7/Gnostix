import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export default function Pricing({ onOpenQuoteModal }) {
  const threePackages = [
    {
      service: "Career & CV Design",
      category: "Personal Branding",
      pricingType: "Starting price to be confirmed",
      description: "Designed for tertiary students, graduates, and executives seeking international ATS standard resumes.",
      features: [
        "ATS-Optimised Layout (98% Pass)",
        "Academic & Skill Formatting",
        "PDF & Editable Word Formats",
        "Cover Letter Template Included"
      ],
      recommended: false,
      ctaText: "Request CV Quote"
    },
    {
      service: "Professional Business Website",
      category: "Corporate Web & E-Commerce",
      pricingType: "Custom Project Quotation",
      description: "Modern high-converting web platform that establishes corporate credibility and captures 24/7 client inquiries.",
      features: [
        "Mobile-First & Ultra Fast Loading",
        "Direct WhatsApp & Enquiry Forms",
        "Portfolio & Capability Showcase",
        "Domain & Hosting Setup Support"
      ],
      recommended: true,
      ctaText: "Request Website Quote"
    },
    {
      service: "Custom Software & AI Systems",
      category: "Enterprise Tech & Automation",
      pricingType: "Project-Based Quotation",
      description: "Tailored databases, internal ERP dashboards, and 24/7 AI WhatsApp customer assistants built for scale.",
      features: [
        "Custom Database & System Architecture",
        "Role-Based User Permissions",
        "AI WhatsApp Bot & Workflow Automation",
        "Dedicated Technical Handover & Support"
      ],
      recommended: false,
      ctaText: "Request Tech Scope"
    }
  ];

  return (
    <section id="pricing" className="py-3 px-4 sm:px-6 lg:px-8">
      {/* Distinct Section Color: Deep Sapphire Blue Container */}
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#0b1739] via-[#0f2150] to-[#08132e] text-white rounded-2xl sm:rounded-3xl border border-blue-900/60 shadow-xl shadow-blue-950/20 p-5 sm:p-7 lg:p-8 relative overflow-hidden">
        
        {/* Subtle ambient sapphire glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-blue-800/60 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-teal-300 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3 h-3 text-teal-300" />
              Transparent Pricing (3 Tiers)
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Honest, Scope-Based Quotations
            </h2>
          </div>
          <p className="text-xs text-blue-200/80 max-w-sm">
            We do not invent arbitrary price tiers—every quotation is tailored to your exact scope and budget.
          </p>
        </div>

        {/* Exactly 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
          {threePackages.map((pkg) => (
            <div
              key={pkg.service}
              className={`rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between relative ${
                pkg.recommended
                  ? 'bg-gradient-to-b from-blue-700 to-indigo-900 text-white shadow-xl shadow-blue-600/30 border-2 border-cyan-400 scale-[1.02]'
                  : 'bg-white/10 hover:bg-white/15 text-white border border-white/15 shadow-xs hover:shadow-md backdrop-blur-sm'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 text-[10px] font-black uppercase tracking-wider rounded-full shadow-sm">
                  Most Requested
                </div>
              )}

              <div>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${pkg.recommended ? 'text-cyan-300' : 'text-blue-300'}`}>
                  {pkg.category}
                </span>

                <h3 className="text-base font-bold mt-1 text-white">
                  {pkg.service}
                </h3>

                {/* Price Approach Tag */}
                <div className="mt-2.5 mb-3 p-2 rounded-xl border bg-black/20 border-white/10">
                  <div className="text-xs font-mono font-bold text-white">
                    {pkg.pricingType}
                  </div>
                  <div className="text-[10px] text-blue-200/70">
                    Confirmed during discovery consultation
                  </div>
                </div>

                <p className="text-xs leading-relaxed mb-4 text-blue-100/90">
                  {pkg.description}
                </p>

                {/* Checklist */}
                <div className="space-y-2 border-t border-white/15 pt-3">
                  {pkg.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs">
                      <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${pkg.recommended ? 'text-cyan-300' : 'text-teal-400'}`} />
                      <span className="text-white/90">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-3 border-t border-white/15">
                <button
                  onClick={onOpenQuoteModal}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                    pkg.recommended
                      ? 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-md shadow-cyan-400/30'
                      : 'bg-white hover:bg-blue-50 text-blue-900 border border-white shadow-xs'
                  }`}
                >
                  {pkg.ctaText}
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
