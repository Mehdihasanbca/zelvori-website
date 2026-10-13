'use client';

import React, { useState } from 'react';
import {
  Code,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  RotateCcw,
  ShieldCheck,
  FileCode,
  Minimize2,
  Trash2,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';

const SAMPLE_VALID_JSON = `{
  "projectName": "Zelvori Cloud Platform",
  "version": "2.4.0",
  "status": "active",
  "architecture": {
    "engine": "Next.js App Router",
    "deployment": "Edge Static CDN",
    "security": {
      "cors": "strict-origin",
      "rlsEnabled": true,
      "auditLogging": true
    }
  },
  "modules": [
    { "id": "auth", "provider": "OAuth2", "mfa": true },
    { "id": "billing", "provider": "Razorpay", "mode": "production-quotation" },
    { "id": "analytics", "privacyFirst": true, "cookies": false }
  ],
  "clusterMetrics": {
    "nodes": 4,
    "uptimePercent": 99.98
  }
}`;

const SAMPLE_INVALID_JSON = `{
  "projectName": "Broken Payload",
  // Single-line comments are invalid in standard JSON
  "items": [
    "alpha",
    "beta",
  ], /* Trailing comma above is invalid */
  'singleQuotes': 'Invalid in JSON - keys and strings require double quotes'
}`;

interface ParseErrorDetail {
  message: string;
  line?: number;
  column?: number;
}

function parseJsonWithDiagnostics(text: string): { data: unknown; error: ParseErrorDetail | null } {
  try {
    const data = JSON.parse(text);
    return { data, error: null };
  } catch (err: unknown) {
    const e = err as Error;
    const msg = e.message || 'Invalid JSON syntax';

    // Parse V8 error message format: "Unexpected token X in JSON at position 123"
    // or "... at line 4 column 12 of the JSON data"
    let line: number | undefined;
    let column: number | undefined;

    const lineColMatch = msg.match(/line\s+(\d+)\s+column\s+(\d+)/i);
    if (lineColMatch) {
      line = parseInt(lineColMatch[1], 10);
      column = parseInt(lineColMatch[2], 10);
    } else {
      const posMatch = msg.match(/at\s+position\s+(\d+)/i);
      if (posMatch) {
        const pos = parseInt(posMatch[1], 10);
        const upToPos = text.substring(0, pos);
        const lines = upToPos.split('\n');
        line = lines.length;
        column = lines[lines.length - 1].length + 1;
      }
    }

    return {
      data: null,
      error: { message: msg, line, column },
    };
  }
}

export function JsonFormatterTool() {
  const [inputJson, setInputJson] = useState(SAMPLE_VALID_JSON);
  const [indentOption, setIndentOption] = useState<'2' | '4' | 'tab' | 'minify'>('2');
  const [copied, setCopied] = useState(false);
  const [autoFormatOnType, setAutoFormatOnType] = useState(false);

  const { data: parsedData, error: parseError } = parseJsonWithDiagnostics(inputJson);
  const isValid = parseError === null && inputJson.trim().length > 0;

  // Format logic
  const formattedOutput = (() => {
    if (!isValid || parsedData === null) return '';
    if (indentOption === 'minify') {
      return JSON.stringify(parsedData);
    }
    const indent = indentOption === 'tab' ? '\t' : parseInt(indentOption, 10);
    return JSON.stringify(parsedData, null, indent);
  })();

  const handleCopy = async () => {
    if (!formattedOutput) return;
    try {
      await navigator.clipboard.writeText(formattedOutput);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleFormat = () => {
    if (isValid && formattedOutput) {
      setInputJson(formattedOutput);
    }
  };

  const handleClear = () => {
    setInputJson('');
  };

  // Metrics
  const originalBytes = new Blob([inputJson]).size;
  const formattedBytes = formattedOutput ? new Blob([formattedOutput]).size : 0;

  return (
    <div className="space-y-10">
      {/* Privacy Guarantee & Demo Presets */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <div className="flex items-center gap-2.5 text-xs text-slate-300">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>
            <strong className="text-white font-medium">100% Client-Side Memory:</strong> Parsed strictly in browser memory. Never evaluated as JavaScript or sent over the network.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400">Samples:</span>
          <button
            type="button"
            onClick={() => setInputJson(SAMPLE_VALID_JSON)}
            className="rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
          >
            Valid API Sample
          </button>
          <button
            type="button"
            onClick={() => setInputJson(SAMPLE_INVALID_JSON)}
            className="rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-1 text-xs font-medium text-amber-300 hover:border-amber-500/40 transition-colors"
          >
            Broken Syntax Sample
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950/50 px-2.5 py-1 text-xs text-slate-400 hover:text-white transition-colors"
            title="Clear editor"
          >
            <Trash2 className="h-3 w-3" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Main Formatter Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column: Input Editor */}
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <FileCode className="h-4 w-4 text-cyan-400" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">JSON Source Input</h2>
            </div>
            <span className="text-xs font-mono text-slate-400">{originalBytes} bytes</span>
          </div>

          <div>
            <label htmlFor="json-input-editor" className="sr-only">Raw JSON Source Input</label>
            <textarea
              id="json-input-editor"
              value={inputJson}
              onChange={(e) => setInputJson(e.target.value)}
              placeholder="Paste raw JSON here to validate and format..."
              rows={18}
              className="w-full rounded-2xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-200 placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none leading-relaxed"
              spellCheck={false}
            />
          </div>

          {/* Validation Status Indicator */}
          {inputJson.trim().length === 0 ? (
            <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-xs text-slate-400">
              <Code className="h-4 w-4 text-slate-500" />
              <span>Awaiting JSON input...</span>
            </div>
          ) : isValid ? (
            <div className="flex items-center justify-between rounded-xl border border-emerald-500/25 bg-emerald-950/20 p-3 text-xs text-emerald-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">Valid JSON (RFC 8259 Compliant)</span>
              </div>
              <button
                type="button"
                onClick={handleFormat}
                className="rounded-lg bg-emerald-500/20 px-3 py-1 font-semibold text-emerald-200 hover:bg-emerald-500/30 transition"
              >
                Apply Format in Place
              </button>
            </div>
          ) : (
            <div className="rounded-xl border border-red-500/30 bg-red-950/25 p-3.5 text-xs text-red-200 space-y-1">
              <div className="flex items-center gap-2 font-bold text-red-400">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>Invalid JSON Syntax</span>
              </div>
              <p className="font-mono text-[11px] text-red-300/90 break-words">
                {parseError?.message}
              </p>
              {parseError?.line && (
                <div className="text-[11px] text-red-400/80 font-mono">
                  Location: Line {parseError.line}, Column {parseError.column}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Output & Controls */}
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-cyan-400" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Formatted Output</h3>
            </div>

            {/* Indentation controls */}
            <div className="flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-950 p-1 text-xs">
              <button
                type="button"
                onClick={() => setIndentOption('2')}
                className={`rounded-lg px-2.5 py-1 font-medium transition ${
                  indentOption === '2' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                2 Spaces
              </button>
              <button
                type="button"
                onClick={() => setIndentOption('4')}
                className={`rounded-lg px-2.5 py-1 font-medium transition ${
                  indentOption === '4' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                4 Spaces
              </button>
              <button
                type="button"
                onClick={() => setIndentOption('tab')}
                className={`rounded-lg px-2.5 py-1 font-medium transition ${
                  indentOption === 'tab' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Tab
              </button>
              <button
                type="button"
                onClick={() => setIndentOption('minify')}
                className={`flex items-center gap-1 rounded-lg px-2.5 py-1 font-medium transition ${
                  indentOption === 'minify' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Minimize2 className="h-3 w-3" />
                <span>Minify</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <textarea
              readOnly
              aria-label="Formatted JSON output"
              value={formattedOutput}
              rows={18}
              placeholder={isValid ? '' : 'Provide valid JSON on the left to see formatted output.'}
              className="w-full rounded-2xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-cyan-200/90 placeholder-slate-600 focus:outline-none resize-none leading-relaxed"
              spellCheck={false}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <span className="text-xs font-mono text-slate-400">
              {isValid
                ? `${formattedBytes} bytes (${
                    originalBytes > 0
                      ? Math.round(((formattedBytes - originalBytes) / originalBytes) * 100)
                      : 0
                  }% size delta)`
                : 'Waiting for valid input'}
            </span>

            <button
              type="button"
              disabled={!isValid}
              onClick={handleCopy}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold transition shadow-md ${
                isValid
                  ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-cyan-950/30'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied JSON' : 'Copy Formatted JSON'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Explanatory Guide: RFC 8259 Standard Pitfalls */}
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white">Common JSON Format Errors &amp; Best Practices</h3>
        <div className="mt-4 grid gap-6 md:grid-cols-3 text-xs text-slate-300 leading-relaxed">
          <div>
            <h4 className="font-semibold text-cyan-300 uppercase tracking-wide">1. Double Quotes Required</h4>
            <p className="mt-1.5 text-slate-400">
              Unlike JavaScript object literals, RFC 8259 strictly requires double quotes (<code className="text-cyan-200">&quot;key&quot;</code>) around all object keys and string values. Single quotes cause syntax failure.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-300 uppercase tracking-wide">2. No Trailing Commas</h4>
            <p className="mt-1.5 text-slate-400">
              Trailing commas after the final item in an array or object property list are invalid in standard JSON. Always omit commas before closing braces or brackets.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-300 uppercase tracking-wide">3. Disallowed Types</h4>
            <p className="mt-1.5 text-slate-400">
              Standard JSON does not support <code className="text-cyan-200">undefined</code>, functions, <code className="text-cyan-200">NaN</code>, or comments (<code className="text-cyan-200">{`//`}</code> or <code className="text-cyan-200">{`/* */`}</code>). Use JSON5 or YAML if comments are essential.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Need custom backend API development, data transformation or database schema design?
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/services/business-software/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200"
            >
              <span>Explore Custom Business Software</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
            <span className="text-slate-600">·</span>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-cyan-300"
            >
              <span>Discuss Engineering with Zelvori</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
