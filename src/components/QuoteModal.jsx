import React, { useState } from 'react';
import { X, Send, MessageSquare, CheckCircle, Calculator } from 'lucide-react';
import { businessInfo, servicesData } from '../data/websiteData';

export default function QuoteModal({ isOpen, onClose, preselectedService }) {
  const [service, setService] = useState(preselectedService?.title || 'Website Development');
  const [timeline, setTimeline] = useState('Standard (1-2 weeks)');
  const [budgetTier, setBudgetTier] = useState('Flexible / Custom Quotation');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [prevPreselected, setPrevPreselected] = useState(preselectedService);

  if (preselectedService !== prevPreselected) {
    setPrevPreselected(preselectedService);
    if (preselectedService?.title) {
      setService(preselectedService.title);
    }
  }

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleWhatsAppInstant = () => {
    const text = `*Instant Project Quotation Request - Gnostix Solutions*%0A%0A*Service:* ${encodeURIComponent(service)}%0A*Timeline:* ${encodeURIComponent(timeline)}%0A*Budget Tier:* ${encodeURIComponent(budgetTier)}%0A*Client Name:* ${encodeURIComponent(name || 'Anonymous')}%0A*Phone/Email:* ${encodeURIComponent(phone || email || 'Provided in chat')}%0A*Project Scope:* ${encodeURIComponent(notes || 'I would like a formal quotation.')}`;
    window.open(`https://wa.me/${businessInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-teal-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            Project Scope & Quotation Builder
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            Request a Custom Quotation
          </h3>
          <p className="text-xs text-blue-100 mt-1">
            Gnostix Solutions • 1556 Glaudina, Harare & Global Delivery
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Scope Received Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{name || 'Client'}</strong>. Our engineering and design team in Harare is preparing your custom proposal.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={handleWhatsAppInstant}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Fast-Track on WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Service Select */}
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Selected Service Category *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Custom Multi-Service Bundle">Full Multi-Service Bundle</option>
                </select>
              </div>

              {/* Timeline & Budget Tier */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Desired Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-medium text-slate-800"
                  >
                    <option value="Urgent (2-4 days)">Urgent (2 to 4 days)</option>
                    <option value="Standard (1-2 weeks)">Standard (1 to 2 weeks)</option>
                    <option value="Comprehensive (3-4 weeks)">Comprehensive (3 to 4 weeks)</option>
                    <option value="Flexible / Phased">Phased Milestone Delivery</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Quotation Model
                  </label>
                  <select
                    value={budgetTier}
                    onChange={(e) => setBudgetTier(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-medium text-slate-800"
                  >
                    <option value="Flexible / Custom Quotation">Flexible / Custom Quotation</option>
                    <option value="Subsidized Student CV">Subsidized Student CV</option>
                    <option value="SME Startup Package">SME Startup Package</option>
                    <option value="Corporate Enterprise">Corporate Enterprise Scope</option>
                  </select>
                </div>
              </div>

              {/* Client Name & Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp or Email *
                  </label>
                  <input
                    type="text"
                    required
                    value={phone || email}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setEmail(e.target.value);
                    }}
                    placeholder="+263 ... or name@mail.com"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-900"
                  />
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Brief Project Outline / Requirements
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Outline key features, target audience, or current bottlenecks..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-900"
                ></textarea>
              </div>

              {/* Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Request
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInstant}
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Instant WhatsApp
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
