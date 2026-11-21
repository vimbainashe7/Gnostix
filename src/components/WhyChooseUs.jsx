import React from 'react';
import { Layers, Sparkles, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuoteModal: _onOpenQuoteModal } = {}) {
  const reasons = [
    {
      title: "All-in-One Digital Breadth",
      tag: "Unified Provider",
      desc: "Eliminate vendor fragmentation. From full-stack web and custom software to AI chatbots, executive CVs, graphic branding, and pitch decks, you work with a unified engineering and creative team.",
      icon: <Layers className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Modern Tech & Design Precision",
      tag: "Built to Scale",
      desc: "We bring together clean software engineering with international aesthetic standards. Every solution is built for ultra-fast loading, military-grade security, and high user conversion.",
      icon: <Sparkles className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Transparent & Direct Partnership",
      tag: "Zero Red Tape",
      desc: "Flexible project scopes tailored to individual students or enterprise budgets. Direct accessibility via WhatsApp (+263 715 092 063) and email ensures rapid support without bureaucracy.",
      icon: <HeartHandshake className="w-5 h-5 text-blue-600" />
    }
  ];

  return (
    <section id="why-us" className="py-3 px-4 sm:px-6 lg:px-8">
      {/* Distinct Section Color: Soft Sky-Azure Mist */}
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#eaf2fd] via-[#f2f7fe] to-[#e5effd] rounded-2xl sm:rounded-3xl border border-[#cbe0fc] shadow-md shadow-blue-900/5 p-5 sm:p-7 lg:p-8 relative">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-blue-200/60">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-blue-200 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-1.5 shadow-xs">
              Why Choose Us
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Why Clients Trust Gnostix Solutions
            </h2>
          </div>
          <p className="text-xs text-blue-900/70 max-w-sm">
            Practical execution, technical depth, and clear communication focused on client success.
          </p>
        </div>

        {/* Exactly 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="bg-white rounded-2xl p-5 border border-blue-200/80 hover:border-blue-400 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    {r.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100/80 text-blue-700">
                    {r.tag}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug">
                  {r.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {r.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Pillar 0{i + 1}</span>
                <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                  ✓ Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
