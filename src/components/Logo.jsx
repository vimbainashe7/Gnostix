import React from 'react';

export default function Logo({ className = "", showSlogan = false }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Modern stylized letter G logo symbol */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 via-blue-600 to-teal-400 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background subtle hexagon/circle base */}
          <rect width="100" height="100" rx="26" fill="#0f172a" />
          
          {/* Outer glowing arc */}
          <path
            d="M 68 28 C 55 18, 32 18, 22 34 C 12 50, 15 72, 32 82 C 48 91, 72 88, 80 72 C 84 64, 84 56, 84 52 L 48 52"
            stroke="url(#g-gradient)"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Central spark/connector dot */}
          <circle cx="50" cy="52" r="5" fill="#38bdf8" />
          <path
            d="M 68 52 L 82 52"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
          />

          <defs>
            <linearGradient id="g-gradient" x1="15" y1="20" x2="85" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60a5fa" />
              <stop offset="0.5" stopColor="#3b82f6" />
              <stop offset="1" stopColor="#2dd4bf" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span className="font-extrabold text-xl tracking-tight text-slate-900">
            GNOSTIX<span className="text-blue-600">.</span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            SOLUTIONS
          </span>
        </div>
        {showSlogan && (
          <span className="text-[10px] font-medium tracking-wide text-blue-600/80 mt-0.5">
            Think Beyond. Build Beyond.
          </span>
        )}
      </div>
    </div>
  );
}

