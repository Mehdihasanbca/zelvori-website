'use client';

import React from 'react';

interface CookiePreferencesButtonProps {
  className?: string;
  label?: string;
}

export function CookiePreferencesButton({
  className = 'hover:text-cyan-400 transition-colors block py-0.5 text-left text-xs text-slate-400 hover:text-cyan-400 cursor-pointer',
  label = 'Cookie Preferences',
}: CookiePreferencesButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('zelvori-open-cookie-banner'));
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      aria-label="Manage cookie and advertising preferences"
    >
      {label}
    </button>
  );
}
