import React from 'react';
import { Star } from 'lucide-react';
import { testimonialsData } from '../data/websiteData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-3 px-4 sm:px-6 lg:px-8">
      {/* Containerized Section with reduced height */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md shadow-blue-900/5 p-5 sm:p-7 lg:p-8 relative">
        
        {/* Section Header exactly formatted as Image 2 */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-slate-900">
            OUR TESTIMONIALS
          </h2>
          
          {/* Subtle two-tone decorative underline bar beneath title, as in Image 2 */}
          <div className="flex items-center justify-center gap-1 my-2">
            <span className="w-6 h-1 bg-blue-600 rounded-full"></span>
            <span className="w-5 h-1 bg-teal-400 rounded-full"></span>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
            Real feedback from business owners, healthcare directors, and ambitious professionals transformed by Gnostix Solutions.
          </p>
        </div>

        {/* 
          EXACT REPLICATION OF IMAGE 2:
          - Exactly 3 cards side by side
          - Offset colored background shape behind each card (Blue, Green/Teal, Teal/Cyan)
          - Crisp white card in front
          - Circular avatar photo centered at top overlapping card boundary
          - Name (bold), position (italic)
          - Center card features golden star badge at bottom border
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8 lg:gap-8 pt-4 pb-4">
          {testimonialsData.map((item, index) => {
            const offsetBgColor = 
              index === 0 ? "bg-blue-600" :
              index === 1 ? "bg-emerald-500" : "bg-teal-600";

            return (
              <div key={item.id} className="relative flex justify-center group">
                
                {/* Offset colored pill/rounded background shape behind white card */}
                <div 
                  className={`absolute -inset-2 rounded-[28px] ${offsetBgColor} opacity-90 transition-transform duration-300 group-hover:scale-105`}
                  style={{
                    transform: index === 0 ? 'rotate(-2.5deg)' : index === 1 ? 'rotate(1.5deg)' : 'rotate(-2deg)'
                  }}
                ></div>

                {/* Crisp White Foreground Card */}
                <div className="relative w-full bg-white rounded-[24px] shadow-lg border border-slate-100 p-5 sm:p-6 pt-12 text-center flex flex-col justify-between z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  
                  {/* Avatar circle centered at top edge, overlapping boundary */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
                    <div className="w-16 h-16 rounded-full p-1 bg-white shadow-md shadow-slate-900/10">
                      <img 
                        src={item.avatar} 
                        alt={item.name}
                        className="w-full h-full rounded-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      {item.name}
                    </h3>

                    <div className="text-xs text-slate-500 italic font-normal">
                      {item.role}
                    </div>

                    <div className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                      {item.service}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1 line-clamp-4">
                      "{item.feedback}"
                    </p>
                  </div>

                  {/* Golden star badge on center card (overlapping bottom edge) */}
                  {item.hasStarBadge && (
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="w-8 h-8 rounded-full bg-amber-400 p-1 shadow-md shadow-amber-500/30 flex items-center justify-center border-2 border-white">
                        <Star className="w-4 h-4 fill-white text-white" />
                      </div>
                    </div>
                  )}

                  {/* Rating stars for other cards */}
                  {!item.hasStarBadge && (
                    <div className="flex items-center justify-center gap-1 mt-3 pt-2 border-t border-slate-100">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
