import React from 'react';

export interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export function BrandLogo({ size = 'md', showTagline = false, className = '' }: BrandLogoProps) {
  const dimensions = {
    sm: { icon: 'h-6 w-6', text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 'h-8 w-8', text: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 'h-10 w-10', text: 'text-2xl', sub: 'text-xs' },
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Monogram Symbol */}
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20 ${dimensions.icon}`}>
        <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#070b14]">
          <span className="font-mono font-black text-cyan-300 select-none">Z</span>
        </div>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <span className={`font-extrabold tracking-tight text-white leading-none ${dimensions.text}`}>
          Zelvori
        </span>
        {showTagline && (
          <span className={`mt-0.5 font-mono uppercase tracking-widest text-cyan-400/90 ${dimensions.sub}`}>
            Digital Architecture
          </span>
        )}
      </div>
    </div>
  );
}
