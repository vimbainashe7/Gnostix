import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { businessInfo, servicesData } from '../data/websiteData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development',
    budget: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*New Project Enquiry - Gnostix Solutions*%0A%0A*Name:* ${encodeURIComponent(formData.name || 'Not provided')}%0A*Contact:* ${encodeURIComponent(formData.phone || formData.email || 'Direct')}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Budget:* ${encodeURIComponent(formData.budget || 'Flexible')}%0A*Message:* ${encodeURIComponent(formData.message || 'I would like a quotation.')}`;
    window.open(`https://wa.me/${businessInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-3 px-4 sm:px-6 lg:px-8">
      {/* Distinct Section Color: Light Ice-Azure Container */}
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#edf4fd] via-[#f6f9fe] to-[#e7f1fc] rounded-2xl sm:rounded-3xl border border-[#d0e1f9] shadow-md shadow-blue-900/5 p-5 sm:p-7 lg:p-8 relative">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-blue-200/60">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-blue-200 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-1.5 shadow-xs">
              <Sparkles className="w-3 h-3 text-blue-600" />
              Let's Build Something Great
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Get in Touch With Gnostix Solutions
            </h2>
          </div>
          <p className="text-xs text-blue-900/70 max-w-sm">
            1556 Glaudina, Harare, Zimbabwe • Serving local and international clients.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Direct Contact Info (Deep Sapphire Card) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0c1a3e] via-[#102454] to-[#0a1636] text-white p-5 rounded-2xl border border-blue-900 shadow-md space-y-4">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-teal-300 font-bold mb-0.5">
                Gnostix Solutions
              </div>
              <h3 className="text-base font-black text-white">
                Technology & Digital Solutions
              </h3>
              <p className="text-[11px] text-blue-200">
                Think Beyond. Build Beyond.
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-blue-900 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>1556 Glaudina, Harare, Zimbabwe</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={businessInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:underline font-semibold">
                  {businessInfo.phone} (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="text-blue-300 hover:underline">
                  {businessInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{businessInfo.domain}</span>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Chat on WhatsApp
              </a>
              <a
                href={`mailto:${businessInfo.email}`}
                className="flex-1 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition border border-white/10"
              >
                <Mail className="w-3.5 h-3.5" />
                Email
              </a>
            </div>
          </div>

          {/* Right Column: Compact Form */}
          <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs">
            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Enquiry Received!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Our team will review your specifications and contact you shortly.
                </p>
                <button
                  onClick={handleSendViaWhatsApp}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition"
                >
                  Send Copy to WhatsApp
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">WhatsApp or Email *</label>
                    <input
                      type="text"
                      required
                      value={formData.phone || formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value, email: e.target.value });
                      }}
                      placeholder="+263 ... or email"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Service Category *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 text-slate-900"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Approximate Budget (Optional)</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 text-slate-900"
                    >
                      <option value="Flexible">Open / To be quoted</option>
                      <option value="Student / Entry">Student / Subsidized CV</option>
                      <option value="SME / Startup">Startup Website MVP</option>
                      <option value="Enterprise">Enterprise / Custom Software</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Project Details *</label>
                  <textarea
                    required
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Brief description of requirements..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 text-slate-900"
                  ></textarea>
                </div>

                <div className="pt-1 flex flex-col sm:flex-row gap-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-sm transition flex items-center justify-center gap-1.5"
                  >
                    <span>Submit Enquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="py-2.5 px-4 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-bold rounded-xl transition flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp Direct
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
