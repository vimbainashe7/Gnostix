import React, { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { businessInfo } from '../data/websiteData';

export default function AIAssistantModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I'm Gnostix AI. How can I assist your business or project today?",
      suggestions: ["What services do you offer?", "Where is Gnostix located?", "How does pricing work?", "Chat with a Human on WhatsApp"]
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInputValue('');

    // Generate intelligent response based on Gnostix Solutions business data
    setTimeout(() => {
      let botResponse = "";
      const lower = query.toLowerCase();

      if (lower.includes('service') || lower.includes('offer') || lower.includes('capability')) {
        botResponse = "Gnostix Solutions provides 7 core services:\n1. Website Development (Corporate, E-Commerce, Portals)\n2. Custom Software Development (ERPs, Databases, APIs)\n3. AI & Intelligent Automation (Chatbots & WhatsApp Bots)\n4. CV & Resume Design (Executive & Student ATS-optimised)\n5. Graphic Design (Brand Identity, Posters & Flyers)\n6. PowerPoint Presentation Design (Pitch Decks & Defense Slides)\n7. Digital Products & Educational Assets.";
      } else if (lower.includes('location') || lower.includes('where') || lower.includes('harare') || lower.includes('glaudina') || lower.includes('address')) {
        botResponse = `We are based at ${businessInfo.location}. We work with clients locally in Harare, across Zimbabwe, and internationally around the globe via remote collaboration.`;
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('quote') || lower.includes('how much')) {
        botResponse = "We do not believe in rigid or inflated pricing. Every quotation is tailored to your exact scope, features, and timeline. You can request a free discovery quotation via our form or directly on WhatsApp.";
      } else if (lower.includes('cv') || lower.includes('resume')) {
        botResponse = "We design high-impact ATS-optimized resumes for students, graduates, and C-level executives with a 98% pass rate and prompt 48-hour turnarounds.";
      } else if (lower.includes('whatsapp') || lower.includes('phone') || lower.includes('contact') || lower.includes('human') || lower.includes('talk')) {
        botResponse = `You can chat directly with our technical team on WhatsApp at ${businessInfo.phone} (+263 715 092 063) or email gnostixsolutions@gmail.com.`;
      } else if (lower.includes('time') || lower.includes('long') || lower.includes('turnaround')) {
        botResponse = "Small projects like CVs and graphic flyers take 2 to 4 days. Full websites and software systems typically take between 1 to 4 weeks depending on requirements.";
      } else {
        botResponse = "Thank you for asking! Gnostix Solutions unites technology, software engineering, and creative design to transform ideas into practical digital solutions. Would you like to request a quotation or chat with our team on WhatsApp?";
      }

      setMessages([...newMessages, { 
        sender: 'bot', 
        text: botResponse,
        suggestions: ["Request a Quote", "Contact on WhatsApp", "Explore Services"]
      }]);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-teal-500 hover:from-blue-800 hover:to-teal-600 text-white rounded-full shadow-2xl shadow-blue-600/40 hover:scale-105 transition-all group"
          aria-label="Open Gnostix AI Assistant"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs font-bold tracking-wide">
            Gnostix AI
          </span>
          <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-[90vw] sm:w-[380px] h-[520px] flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-teal-500 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs font-black tracking-wide flex items-center gap-1.5">
                  Gnostix AI Assistant
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-ping"></span>
                </div>
                <div className="text-[10px] text-blue-100">
                  Online • Harare & Global Support
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl leading-relaxed whitespace-pre-line ${
                    m.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-white text-slate-800 rounded-tl-none border border-slate-200/80 shadow-xs'
                  }`}
                >
                  {m.text}
                </div>

                {/* Suggestions pills if any */}
                {m.suggestions && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {m.suggestions.map((sug) => (
                      <button
                        key={sug}
                        onClick={() => {
                          if (sug.includes('WhatsApp')) {
                            window.open(businessInfo.whatsappUrl, '_blank');
                          } else {
                            handleSend(sug);
                          }
                        }}
                        className="px-2.5 py-1 bg-white hover:bg-blue-50 text-blue-700 text-[10px] font-semibold rounded-lg border border-blue-200 transition"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-3 bg-white border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about services, pricing, Harare location..."
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-xs transition"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-2 text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
              <span>Prefer WhatsApp?</span>
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:underline font-bold"
              >
                Chat directly +263 715 092 063
              </a>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

