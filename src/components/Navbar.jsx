import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { businessInfo } from '../data/websiteData';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 py-3 px-4 sm:px-6 lg:px-8">
      <div 
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/5 border border-slate-200/80 px-4 sm:px-6 py-3' 
            : 'bg-white/80 backdrop-blur-sm shadow-sm border border-slate-100 px-4 sm:px-6 py-3.5'
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <Logo showSlogan={true} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/70 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & WhatsApp button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-all shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              WhatsApp
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-md shadow-blue-500/25 transition-all hover:scale-[1.02]"
            >
              Start Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 text-emerald-600 bg-emerald-50 rounded-lg"
              title="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-xl transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 px-2">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-5 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-xl shadow-md shadow-blue-500/25"
              >
                Start a Project <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-emerald-700 bg-emerald-50 rounded-xl border border-emerald-200"
              >
                Chat on WhatsApp (+263 715 092 063)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

