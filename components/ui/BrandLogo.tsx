import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'badge';
  hideText?: boolean;
}

export function BrandLogo({
  className = '',
  size = 'md',
  variant = 'full',
  hideText = false,
}: BrandLogoProps) {
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-10',
    lg: 'h-11 sm:h-12',
    xl: 'h-14 sm:h-16',
  };

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14',
  };

  // If icon-only is requested
  if (hideText || variant === 'icon') {
    return (
      <Link
        href="/"
        className={`inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg group ${className}`}
        aria-label="Zelvori - Home"
      >
        <div className={`relative ${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
          <div className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <svg
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative w-full h-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="zTopIcon" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#21D4E8" />
                <stop offset="1" stopColor="#2478F2" />
              </linearGradient>
              <linearGradient id="zDiagIcon" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2478F2" />
                <stop offset="1" stopColor="#21D4E8" />
              </linearGradient>
              <linearGradient id="zBottomIcon" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#2478F2" />
                <stop offset="1" stopColor="#28BFD1" />
              </linearGradient>
            </defs>
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
            <g transform="translate(31 43) scale(1.05)">
              <path
                d="M18 14 H154 Q160 14 156 20 L127 53 H60 Q54 53 59 47 L80 25 H18 Q10 25 13 19 Q14 14 18 14 Z"
                fill="url(#zTopIcon)"
              />
              <path
                d="M148 20 L176 20 Q182 20 179 26 L91 124 Q88 128 82 128 H51 Q44 128 49 122 L137 24 Q141 20 148 20 Z"
                fill="url(#zDiagIcon)"
              />
              <path
                d="M54 89 H121 Q127 89 132 94 L157 117 Q162 123 154 123 H29 Q22 123 27 116 L44 96 Q48 89 54 89 Z"
                fill="url(#zBottomIcon)"
              />
              <path
                d="M19 14 H154 Q160 14 156 20 L127 53"
                fill="none"
                stroke="#A4F7FF"
                strokeOpacity="0.75"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M29 123 H154"
                fill="none"
                stroke="#0A6FEF"
                strokeOpacity="0.5"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </Link>
    );
  }

  // Official Full Brand Horizontal Logo Lockup from Zelvori Brand Assets Bundle
  return (
    <Link
      href="/"
      className={`inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg group select-none ${className}`}
      aria-label="Zelvori - Home"
    >
      <div className={`relative ${heightClasses[size]} shrink-0 transition-all duration-300 group-hover:scale-[1.02]`}>
        {/* Soft specular glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

        <svg
          viewBox="0 0 660 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative h-full w-auto"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="zelTop" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#21D4E8" />
              <stop offset="1" stopColor="#2478F2" />
            </linearGradient>
            <linearGradient id="zelDiag" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2478F2" />
              <stop offset="1" stopColor="#21D4E8" />
            </linearGradient>
            <linearGradient id="zelBottom" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#2478F2" />
              <stop offset="1" stopColor="#28BFD1" />
            </linearGradient>
          </defs>

          {/* Optional subtle badge backdrop for container mode */}
          {variant === 'badge' && (
            <rect
              width="660"
              height="210"
              rx="24"
              fill="#0B1220"
              stroke="rgba(33, 212, 232, 0.25)"
              strokeWidth="2"
            />
          )}

          {/* Geometric Z Symbol Mark from Official Brand Bundle */}
          <g id="zelvori-mark" transform="translate(14, 18)">
            <path
              d="M18 14 H154 Q160 14 156 20 L127 53 H60 Q54 53 59 47 L80 25 H18 Q10 25 13 19 Q14 14 18 14 Z"
              fill="url(#zelTop)"
            />
            <path
              d="M148 20 L176 20 Q182 20 179 26 L91 124 Q88 128 82 128 H51 Q44 128 49 122 L137 24 Q141 20 148 20 Z"
              fill="url(#zelDiag)"
            />
            <path
              d="M54 89 H121 Q127 89 132 94 L157 117 Q162 123 154 123 H29 Q22 123 27 116 L44 96 Q48 89 54 89 Z"
              fill="url(#zelBottom)"
            />
            <path
              d="M19 14 H154 Q160 14 156 20 L127 53"
              fill="none"
              stroke="#A4F7FF"
              strokeOpacity="0.75"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M29 123 H154"
              fill="none"
              stroke="#0A6FEF"
              strokeOpacity="0.5"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* Authentic Styled Wordmark from Official Brand Bundle */}
          <text
            x="228"
            y="126"
            fontFamily="DejaVu Sans, Inter, Arial, sans-serif"
            fontSize="110"
            fontWeight="700"
            letterSpacing="-3.5"
            fill="#F8FAFC"
            className="transition-colors duration-200 group-hover:fill-cyan-100"
          >
            Zelvori
          </text>

          {/* Accent Underline Rule from Brand Bundle */}
          <path
            d="M232 150 H580"
            stroke="#2478F2"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.95"
            className="transition-all duration-200 group-hover:stroke-cyan-400"
          />

          {/* Official Tagline from Brand Bundle */}
          <text
            x="234"
            y="182"
            fontFamily="DejaVu Sans, Inter, Arial, sans-serif"
            fontSize="19.5"
            fontWeight="600"
            letterSpacing="5"
            fill="#94A3B8"
            className="transition-colors duration-200 group-hover:fill-slate-200"
          >
            IDEAS INTO DIGITAL REALITY
          </text>
        </svg>
      </div>
    </Link>
  );
}
