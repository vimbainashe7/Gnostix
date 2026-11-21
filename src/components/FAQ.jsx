import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { faqData, businessInfo } from '../data/websiteData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-3 px-4 sm:px-6 lg:px-8">
      {/* Distinct Section Color: Soft Powder Blue Container */}
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#f3f7fd] via-[#eaf2fc] to-[#f8faff] rounded-2xl sm:rounded-3xl border border-[#d2e3fa] shadow-md shadow-blue-900/5 p-5 sm:p-7 lg:p-8 relative">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-blue-200/60">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-blue-200 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-1.5 shadow-xs">
              <HelpCircle className="w-3 h-3 text-blue-600" />
              Frequently Asked Questions
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Got Questions? Quick Answers
            </h2>
          </div>
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-white px-3 py-1.5 rounded-lg border border-emerald-200 hover:bg-emerald-50 transition self-start sm:self-auto shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            WhatsApp Us Directly
          </a>
        </div>

        {/* Compact Accordion */}
        <div className="max-w-3xl mx-auto space-y-2">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.question}
                className="border border-blue-200/80 rounded-xl overflow-hidden transition-colors shadow-2xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-3 sm:p-4 text-left flex items-center justify-between gap-3 bg-white hover:bg-blue-50/70 transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-blue-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-3 sm:p-4 bg-white/90 text-xs text-slate-600 leading-relaxed border-t border-blue-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
