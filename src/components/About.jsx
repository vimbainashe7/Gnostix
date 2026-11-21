import React from 'react';
import { Lightbulb, Award, Users, MapPin, Sparkles } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Innovation & Technology",
      meaning: "Modern tools & forward-thinking execution",
      desc: "We build with modern frameworks, AI workflows, and clean architectures to give your business an enduring competitive edge.",
      icon: <Lightbulb className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Quality & Reliability",
      meaning: "High-performance digital engineering",
      desc: "Every web platform, custom software codebase, and executive document is meticulously crafted to meet international standards.",
      icon: <Award className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Integrity & Client Focus",
      meaning: "Transparent scopes & personal attention",
      desc: "We offer honest project timelines, transparent milestone quotations, and direct communication to fit your exact goals.",
      icon: <Users className="w-5 h-5 text-blue-600" />
    }
  ];

  return (
    <section id="about" className="py-3 px-4 sm:px-6 lg:px-8">
      {/* Distinct Section Color: Glacier Ice Blue Container */}
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#f0f6ff] via-[#e8f1fd] to-[#f4f8fe] rounded-2xl sm:rounded-3xl border border-[#cce0fc] shadow-md shadow-blue-900/5 p-5 sm:p-7 lg:p-8 relative overflow-hidden">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-blue-200/70">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-blue-200 text-blue-800 text-[11px] font-semibold uppercase tracking-wider mb-1.5 shadow-xs">
              <Sparkles className="w-3 h-3 text-blue-600" />
              About Gnostix Solutions
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Technology Driven. Creatively Delivered.
            </h2>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-blue-900/80 font-medium bg-white/70 px-3 py-1 rounded-full border border-blue-200/60">
            <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>1556 Glaudina, Harare, Zimbabwe</span>
          </div>
        </div>

        {/* Mission & Vision Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center mb-6 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-blue-200/70 shadow-xs">
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              Gnostix Solutions is a technology and digital solutions provider in Harare, Zimbabwe. We unite software engineering, AI automation, and creative media to make technology accessible, dependable, and transformative.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-2 text-xs">
            <div className="bg-[#f0f6ff] p-2.5 rounded-lg border border-blue-200">
              <span className="text-[10px] uppercase font-bold text-blue-700 block">Mission</span>
              <span className="text-slate-800 text-[11px] font-medium line-clamp-2">Reliable & accessible digital innovation</span>
            </div>
            <div className="bg-[#e8f5f3] p-2.5 rounded-lg border border-teal-200">
              <span className="text-[10px] uppercase font-bold text-teal-700 block">Vision</span>
              <span className="text-slate-800 text-[11px] font-medium line-clamp-2">Connecting local & global opportunities</span>
            </div>
          </div>
        </div>

        {/* Exactly 3 Cards */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900/70 mb-3">
            Core Operating Principles
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((v) => (
              <div 
                key={v.title}
                className="bg-white rounded-xl p-4 border border-blue-200/80 hover:border-blue-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      {v.icon}
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">{v.title}</h3>
                      <div className="text-[10px] text-blue-600 font-semibold">{v.meaning}</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
