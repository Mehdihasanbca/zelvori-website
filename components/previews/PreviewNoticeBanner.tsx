import React from 'react';
import { Info, Sparkles } from 'lucide-react';

interface PreviewNoticeBannerProps {
  practiceName: string;
}

export function PreviewNoticeBanner({ practiceName }: PreviewNoticeBannerProps) {
  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-cyan-950/40 border border-cyan-800/60 backdrop-blur-md text-xs text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
      <div className="flex items-start gap-3">
        <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-cyan-300 block sm:inline">
            Interactive Technical Demonstration:
          </span>{' '}
          <span>
            This is an interactive simulation of Zelvori&apos;s <strong>{practiceName}</strong> capabilities. All data records, analytics metrics, and API outputs are synthetic demonstrations. No live customer servers or external databases are altered.
          </span>
        </div>
      </div>
      <div className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-900/50 border border-cyan-700/50 text-[11px] font-mono text-cyan-300">
        <Sparkles className="w-3 h-3 text-cyan-300" />
        <span>SANDBOX MODE</span>
      </div>
    </div>
  );
}
