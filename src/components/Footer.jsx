import React, { useState } from 'react';
import { ArrowUp, Mail, Phone, MapPin, Globe, Shield, FileCheck, X } from 'lucide-react';
import Logo from './Logo';
import { businessInfo, servicesData } from '../data/websiteData';

export default function Footer({ onOpenQuoteModal }) {
  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | null

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Containerized Footer matching the card deck containerized styling */}
      <div className="max-w-7xl mx-auto bg-slate-900 text-slate-300 rounded-3xl border border-slate-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        
        {/* Top subtle glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Slogan */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-2 bg-slate-950/60 rounded-2xl inline-block border border-slate-800">
              <Logo showSlogan={false} />
            </div>

            <div className="text-sm font-semibold text-blue-400">
              Think Beyond. Build Beyond.
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Gnostix Solutions is a technology and digital solutions company in Harare, Zimbabwe dedicated to helping individuals, entrepreneurs and businesses turn ideas into practical, high-impact digital experiences.
            </p>

            <div className="pt-2 text-xs text-slate-500">
              Technology • Creativity • Innovation
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition">FAQ</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Our 7 Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-blue-400 transition flex items-center gap-1.5">
                    <span className="text-[10px] text-blue-500 font-mono">0{s.number.replace('0','')}</span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Gnostix Headquarters
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>1556 Glaudina, Harare, Zimbabwe</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={businessInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  {businessInfo.phone} (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-white transition break-all">
                  {businessInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{businessInfo.domain}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-md shadow-blue-600/30 text-center"
              >
                Request Quotation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {businessInfo.copyrightYear} {businessInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-white transition underline underline-offset-4"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-white transition underline underline-offset-4"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {activeModal === 'privacy' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 text-slate-800 relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-1 rounded-full bg-slate-100 hover:bg-slate-200"
            >
              <X className="w-5 h-5 text-slate-700" />
            </button>
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Shield className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Legal Document</span>
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Privacy Policy</h3>
            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                At Gnostix Solutions (1556 Glaudina, Harare, Zimbabwe), your privacy is paramount. We only collect project information and contact data (name, email, phone) that you voluntarily submit to receive quotations or service delivery.
              </p>
              <p>
                We do not sell, rent, or trade client data to third parties. All client source code, strategic documents, CV contents, and confidential business metrics remain strictly proprietary to you under standard non-disclosure practices.
              </p>
              <p>
                For any privacy questions or data requests, contact us at <strong>gnostixsolutions@gmail.com</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Terms and Conditions Modal */}
      {activeModal === 'terms' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 text-slate-800 relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-1 rounded-full bg-slate-100 hover:bg-slate-200"
            >
              <X className="w-5 h-5 text-slate-700" />
            </button>
            <div className="flex items-center gap-2 text-teal-600 mb-2">
              <FileCheck className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Service Agreement</span>
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Terms & Conditions</h3>
            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                All project scopes, deliverables, timelines, and payment terms for Gnostix Solutions services are formalized through explicit quotations and discovery agreements prior to work commencement.
              </p>
              <p>
                Clients retain full ownership of finished intellectual property (custom software, websites, design deliverables, presentation slides) once the agreed quotation balances are cleared.
              </p>
              <p>
                Timelines are estimated in good faith and depend on timely client feedback, assets, and milestone approvals.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

