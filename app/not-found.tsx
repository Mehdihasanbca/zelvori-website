import React from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { ArrowLeft, Home, MessageSquare } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <BrandLogo size="lg" hideText />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Error 404 · Route Not Found
          </span>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Page Not Located
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            The requested digital resource does not exist or has been relocated to another route in the Zelvori system.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 rounded-lg shadow-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Desk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
