import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  hideText?: boolean;
}

export function BrandLogo({ className = '', size = 'md', hideText = false }: BrandLogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg group ${className}`}
      aria-label="Zelvori Software - Home"
    >
      <div className={`relative ${iconSizes[size]} shrink-0 transition-all duration-300 group-hover:scale-105`}>
        {/* Glow halo behind logo on hover */}
        <div className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full"
        >
          <defs>
            <linearGradient id="logoBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#060913" />
            </linearGradient>
            <linearGradient id="logoZGrad" x1="12" y1="16" x2="52" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22d3ee" />
              <stop offset="0.45" stopColor="#38bdf8" />
              <stop offset="1" stopColor="#818cf8" />
            </linearGradient>
            <linearGradient id="facetHighlight" x1="16" y1="20" x2="48" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Base rounded slate badge */}
          <rect
            width="64"
            height="64"
            rx="14"
            fill="url(#logoBgGrad)"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1.2"
          />

          {/* Subtle tech micro-grid */}
          <path
            d="M10 32H54M32 10V54"
            stroke="rgba(34, 211, 238, 0.12)"
            strokeWidth="0.8"
            strokeDasharray="2 3"
          />

          {/* Precision interlocking Z Monogram with depth */}
          <path
            d="M16 20 H48 L32 36 H48 V44 H16 L32 28 H16 Z"
            fill="url(#logoZGrad)"
            fillRule="evenodd"
          />

          {/* Top facet bevel highlight */}
          <path
            d="M16 20 H48 L44 24 H20 Z"
            fill="url(#facetHighlight)"
          />

          {/* Corner digital nodes */}
          <circle cx="16" cy="20" r="2.5" fill="#38bdf8" />
          <circle cx="48" cy="44" r="2.5" fill="#818cf8" />
        </svg>
      </div>

      {!hideText && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold tracking-tight text-white group-hover:text-cyan-100 transition-colors ${textSizes[size]}`}>
            ZELVORI
          </span>
          <span className="text-[10px] tracking-[0.24em] text-cyan-400 font-semibold uppercase mt-0.5">
            SOFTWARE
          </span>
        </div>
      )}
    </Link>
  );
}
