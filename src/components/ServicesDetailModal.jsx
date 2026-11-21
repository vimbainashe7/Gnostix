import React from 'react';
import { X, AlertCircle, TrendingUp, MessageSquare, ArrowRight } from 'lucide-react';
import { businessInfo } from '../data/websiteData';

export default function ServicesDetailModal({ service, onClose, onOpenQuoteModal }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-teal-500 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-white/20 text-white">
              {service.number}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase bg-teal-400/30 text-teal-100">
              {service.badge || "Professional Capability"}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 mt-1">
            Gnostix Solutions • 1556 Glaudina, Harare & Worldwide
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          
          {/* What Gnostix Offers */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              What Gnostix Solutions Offers
            </h4>
            <p className="text-sm text-slate-800 leading-relaxed font-medium bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              {service.offers}
            </p>
          </div>

          {/* Problem Solved & Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-rose-50/60 border border-rose-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-rose-700 text-xs font-bold uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4" />
                Problems Solved
              </div>
              <p className="text-xs text-rose-900/90 leading-relaxed">
                {service.problemsSolved}
              </p>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                Tangible Benefits
              </div>
              <p className="text-xs text-emerald-900/90 leading-relaxed">
                {service.benefits}
              </p>
            </div>
          </div>

          {/* Pricing & Terms Approach */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900">
            <span className="font-semibold">Pricing Structure:</span>
            <span className="font-mono font-bold bg-white px-3 py-1 rounded-lg border border-blue-200">
              {service.pricingApproach}
            </span>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenQuoteModal();
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2"
          >
            Request Quotation <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={`https://wa.me/${businessInfo.whatsappNumber}?text=Hello%20Gnostix%20Solutions,%20I%20would%20like%20to%20discuss%20${encodeURIComponent(service.title)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}

