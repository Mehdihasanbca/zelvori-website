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
      aria-label="Zelvori - Home"
    >
      <div className={`relative ${iconSizes[size]} shrink-0 transition-all duration-300 group-hover:scale-105`}>
        {/* Glow halo behind logo on hover */}
        <div className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <svg
          viewBox="0 0 256 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="zTop" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#21D4E8" />
              <stop offset="1" stopColor="#2478F2" />
            </linearGradient>
            <linearGradient id="zDiag" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2478F2" />
              <stop offset="1" stopColor="#21D4E8" />
            </linearGradient>
            <linearGradient id="zBottom" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#2478F2" />
              <stop offset="1" stopColor="#28BFD1" />
            </linearGradient>
          </defs>

          {/* Rounded base badge */}
          <rect
            x="8"
            y="8"
            width="240"
            height="240"
            rx="52"
            fill="#0B1220"
            stroke="rgba(33, 212, 232, 0.25)"
            strokeWidth="2.5"
          />

          {/* Approved Geometric Z mark */}
          <g transform="translate(31 43) scale(1.05)">
            <path
              d="M18 14 H154 Q160 14 156 20 L127 53 H60 Q54 53 59 47 L80 25 H18 Q10 25 13 19 Q14 14 18 14 Z"
              fill="url(#zTop)"
            />
            <path
              d="M148 20 L176 20 Q182 20 179 26 L91 124 Q88 128 82 128 H51 Q44 128 49 122 L137 24 Q141 20 148 20 Z"
              fill="url(#zDiag)"
            />
            <path
              d="M54 89 H121 Q127 89 132 94 L157 117 Q162 123 154 123 H29 Q22 123 27 116 L44 96 Q48 89 54 89 Z"
              fill="url(#zBottom)"
            />
          </g>
        </svg>
      </div>

      {!hideText && (
        <span className={`font-bold tracking-wider text-white group-hover:text-cyan-200 transition-colors ${textSizes[size]}`}>
          ZELVORI
        </span>
      )}
    </Link>
  );
}
