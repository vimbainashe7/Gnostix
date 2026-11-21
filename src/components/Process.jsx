import React from 'react';
import { Search, Code, Rocket, ArrowRight } from 'lucide-react';

export default function Process({ onOpenQuoteModal: _onOpenQuoteModal } = {}) {
  const processCards = [
    {
      step: "01",
      title: "Discovery & Planning",
      sub: "Phase 1: Scoping & Architecture",
      desc: "We analyze your exact objectives, target audience, and bottlenecks to map out system wireframes, technical specs, and a transparent quotation.",
      icon: <Search className="w-5 h-5 text-blue-600" />
    },
    {
      step: "02",
      title: "Design & Engineering",
      sub: "Phase 2: Code & Creative Build",
      desc: "Our team crafts responsive interfaces, writes clean and reliable code, and integrates AI or custom features strictly following agreed milestones.",
      icon: <Code className="w-5 h-5 text-blue-600" />
    },
    {
      step: "03",
      title: "Testing, Launch & Support",
      sub: "Phase 3: Quality Assurance & Go-Live",
      desc: "We conduct cross-device testing, security auditing, and client revisions before deploying live with full handover documentation and ongoing support.",
      icon: <Rocket className="w-5 h-5 text-blue-600" />
    }
  ];

  return (
    <section id="process" className="py-3 px-4 sm:px-6 lg:px-8">
      {/* Distinct Section Color: Light Frost Azure Container */}
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#f1f6fd] via-[#e7f1fc] to-[#f4f8fe] rounded-2xl sm:rounded-3xl border border-[#cadbf8] shadow-md shadow-blue-900/5 p-5 sm:p-7 lg:p-8 relative">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-blue-200/60">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-blue-200 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-1.5 shadow-xs">
              3-Stage Methodology
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Our 3-Phase Delivery Process
            </h2>
          </div>
          <p className="text-xs text-blue-900/70 max-w-sm">
            Structured execution ensuring milestone transparency and zero surprises from kickoff to launch.
          </p>
        </div>

        {/* Exactly 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {processCards.map((phase) => (
            <div
              key={phase.step}
              className="bg-white rounded-2xl p-5 border border-blue-200/80 hover:border-blue-400 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    {phase.icon}
                  </div>
                  <span className="text-2xl font-black font-mono text-blue-600/30 group-hover:text-blue-600 transition-colors">
                    {phase.step}
                  </span>
                </div>

                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 mb-1">
                  {phase.sub}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {phase.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Milestone Sign-Off <ArrowRight className="w-3 h-3" />
                </span>
                <span className="text-[11px] text-slate-400">Phase 0{phase.step.replace('0','')}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
