import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X } from 'lucide-react';
import { blogData } from '../data/websiteData';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Exactly 3 articles
  const threePosts = blogData.slice(0, 3);

  return (
    <section id="blog" className="py-3 px-4 sm:px-6 lg:px-8">
      {/* Containerized Section with reduced height */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md shadow-blue-900/5 p-5 sm:p-7 lg:p-8 relative">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
              <BookOpen className="w-3 h-3 text-blue-600" />
              Insights & Knowledge (3 Articles)
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Tech, AI & Career Strategy
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            Practical breakdowns to help founders and professionals navigate the digital world.
          </p>
        </div>

        {/* Exactly 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {threePosts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200 hover:border-blue-400 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium mb-2.5">
                  <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-2">
                  {post.summary}
                </p>
              </div>

              <div className="p-4 pt-0 border-t border-slate-100 mt-2">
                <button
                  onClick={() => setSelectedArticle(post)}
                  className="pt-2.5 w-full flex items-center justify-between text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-3">
              {selectedArticle.category} • {selectedArticle.readTime}
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-4">
              {selectedArticle.title}
            </h3>

            <div className="prose prose-sm text-slate-700 space-y-4 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-4">
              <p className="font-semibold text-slate-900">
                {selectedArticle.summary}
              </p>
              <p>
                {selectedArticle.content}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
