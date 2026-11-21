import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioProjects, businessInfo } from '../data/websiteData';

export default function Portfolio({ onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter projects and strictly limit to 3 cards only
  const allFiltered = activeCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.categorySlug === activeCategory);

  const displayProjects = allFiltered.slice(0, 3);

  const filters = [
    { label: 'Featured Tech', value: 'all' },
    { label: 'Web & Apps', value: 'web' },
    { label: 'Custom Software', value: 'software' },
    { label: 'AI Solutions', value: 'ai' },
    { label: 'CV & Creative', value: 'cv' },
  ];

  return (
    <section id="portfolio" className="py-3 px-4 sm:px-6 lg:px-8">
      {/* Containerized Section with reduced height */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md shadow-blue-900/5 p-5 sm:p-7 lg:p-8 relative">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3 text-blue-600" />
              Portfolio Showcase (3 Highlights)
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Demonstrating What We Build
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {filters.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat.value
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Exactly 3 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Preview Banner */}
              <div className={`h-36 bg-gradient-to-br ${project.accentColor} p-4 flex flex-col justify-between text-white relative`}>
                <div className="flex items-center justify-between z-10 text-[10px]">
                  <span className="font-mono font-bold uppercase tracking-wider bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/20">
                    {project.category}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-md font-semibold text-white border border-white/30">
                    Demo Project
                  </span>
                </div>

                <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-2.5 border border-white/10">
                  <div className="text-xs font-bold text-white truncate">
                    {project.title}
                  </div>
                  <div className="text-[10px] text-teal-300 font-mono">
                    {project.metrics}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="mt-3 pt-2 flex items-center justify-between text-xs">
                    <a
                      href={`https://wa.me/${businessInfo.whatsappNumber}?text=Hello%20Gnostix,%20I%20am%20interested%20in%20a%20solution%20similar%20to%20${encodeURIComponent(project.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group-hover:underline"
                    >
                      Request Similar <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <button
                      onClick={onOpenQuoteModal}
                      className="text-slate-500 hover:text-slate-800 font-medium text-[11px]"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
