'use client';

import React, { useState } from 'react';
import {
  Play,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldAlert,
  Bot,
  UserCheck,
  Send,
  Cpu,
} from 'lucide-react';

export function AiAutomationPreview() {
  const [pipelineState, setPipelineState] = useState<'idle' | 'running' | 'review' | 'completed'>('idle');
  const [approvalStatus, setApprovalStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');

  const startPipeline = () => {
    setPipelineState('running');
    setApprovalStatus('pending');
    setTimeout(() => {
      setPipelineState('review');
    }, 1500);
  };

  const handleApproval = (approved: boolean) => {
    if (approved) {
      setApprovalStatus('approved');
      setPipelineState('completed');
    } else {
      setApprovalStatus('rejected');
      setPipelineState('completed');
    }
  };

  const resetPipeline = () => {
    setPipelineState('idle');
    setApprovalStatus('pending');
  };

  return (
    <div className="space-y-6">
      {/* Top Controller Bar */}
      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-0.5">
          <div className="text-xs font-semibold text-white flex items-center gap-2">
            <Bot className="w-4 h-4 text-cyan-400" />
            <span>AI Orchestration Pipeline Simulation</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Simulated Trigger → LLM Structuring → Human Review Threshold → Action Dispatch.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={resetPipeline}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white bg-slate-800"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Flow</span>
          </button>

          {pipelineState === 'idle' && (
            <button
              type="button"
              onClick={startPipeline}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 text-slate-950 font-bold text-xs shadow-md transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Trigger Pipeline Run</span>
            </button>
          )}
        </div>
      </div>

      {/* Interactive 4-Stage Visualizer */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0f1d] border border-slate-800 space-y-8 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          
          {/* STAGE 1: INBOUND TRIGGER */}
          <div
            className={`p-5 rounded-2xl border transition-all space-y-3 ${
              pipelineState !== 'idle'
                ? 'bg-slate-900/90 border-cyan-500/50 shadow-md'
                : 'bg-slate-900/40 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-cyan-400">STAGE 01</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <h5 className="text-xs font-bold text-white">Event Trigger</h5>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 font-mono space-y-1">
              <div className="text-cyan-400 text-[10px]">INBOUND WEBHOOK:</div>
              <div>From: &ldquo;Alex Chen &lt;alex@acme.ai&gt;&rdquo;</div>
              <div className="text-slate-400 text-[10px] truncate">&ldquo;Need secure enterprise API gateway...&rdquo;</div>
            </div>
          </div>

          {/* STAGE 2: LLM STRUCTURING */}
          <div
            className={`p-5 rounded-2xl border transition-all space-y-3 ${
              pipelineState === 'running'
                ? 'bg-cyan-950/40 border-cyan-400 animate-pulse shadow-lg'
                : pipelineState === 'review' || pipelineState === 'completed'
                ? 'bg-slate-900/90 border-cyan-500/50'
                : 'bg-slate-900/40 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-cyan-400">STAGE 02</span>
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <h5 className="text-xs font-bold text-white">LLM Extraction</h5>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] space-y-1 text-slate-300 font-mono">
              <div className="text-[10px] text-emerald-400">STRUCTURED OUTPUT:</div>
              <div>• Budget: ₹2,00,000+</div>
              <div>• Intent: High Probability</div>
              <div>• Stack: Next.js + OAuth2</div>
            </div>
          </div>

          {/* STAGE 3: HUMAN REVIEW THRESHOLD */}
          <div
            className={`p-5 rounded-2xl border transition-all space-y-3 ${
              pipelineState === 'review'
                ? 'bg-amber-950/40 border-amber-400 shadow-xl'
                : pipelineState === 'completed'
                ? 'bg-slate-900/90 border-slate-700'
                : 'bg-slate-900/40 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-amber-400">STAGE 03</span>
              <UserCheck className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <h5 className="text-xs font-bold text-white">Human Approval</h5>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 space-y-2">
              <div className="text-[10px] text-amber-300">THRESHOLD GATE:</div>
              {pipelineState === 'review' ? (
                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] text-slate-300">Approve proposed scope?</div>
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleApproval(true)}
                      className="flex-1 py-1 px-2 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[10px] shadow"
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      onClick={() => handleApproval(false)}
                      className="py-1 px-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px]"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ) : pipelineState === 'completed' ? (
                <div className="text-[10px] text-emerald-400 font-bold">
                  {approvalStatus === 'approved' ? '✓ MANUALLY APPROVED' : '✕ REJECTED'}
                </div>
              ) : (
                <div className="text-[10px] text-slate-500">Waiting for trigger...</div>
              )}
            </div>
          </div>

          {/* STAGE 4: ACTION DISPATCH */}
          <div
            className={`p-5 rounded-2xl border transition-all space-y-3 ${
              pipelineState === 'completed'
                ? 'bg-emerald-950/40 border-emerald-500 shadow-xl'
                : 'bg-slate-900/40 border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-emerald-400">STAGE 04</span>
              <Send className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <h5 className="text-xs font-bold text-white">Action Dispatch</h5>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 space-y-1 font-mono">
              <div className="text-[10px] text-cyan-400">DISPATCH STATUS:</div>
              {pipelineState === 'completed' && approvalStatus === 'approved' ? (
                <>
                  <div className="text-emerald-300 text-[10px]">✓ CRM Opportunity Created</div>
                  <div className="text-emerald-300 text-[10px]">✓ Slack Notification Sent</div>
                </>
              ) : pipelineState === 'completed' && approvalStatus === 'rejected' ? (
                <div className="text-rose-400 text-[10px]">Dispatched to quarantine queue</div>
              ) : (
                <div className="text-slate-500 text-[10px]">Awaiting review approval...</div>
              )}
            </div>
          </div>

        </div>

        {/* Live Execution Log Window */}
        <div className="p-4 rounded-2xl bg-black/60 border border-slate-800 font-mono text-xs space-y-2">
          <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800/80 text-[11px]">
            <span>ENGINEERING PIPELINE LOGS</span>
            <span className="text-cyan-400 font-bold">DETERMINISTIC ZOD SCHEMA</span>
          </div>

          <div className="space-y-1 text-[11px] text-slate-400 max-h-36 overflow-y-auto">
            <div>[00:00.00] Worker daemon listening on endpoint /v1/workflow/inbound</div>
            {pipelineState !== 'idle' && (
              <>
                <div className="text-cyan-300">[00:00.12] Inbound webhook verified with HMAC-SHA256 signature</div>
                <div className="text-cyan-300">[00:00.45] Payload sanitized. Zero PII leaked to public training</div>
                <div className="text-cyan-300">[00:01.10] Structured schema validation passed (Zod schema: ProjectInquirySchema)</div>
              </>
            )}
            {pipelineState === 'review' && (
              <div className="text-amber-300 font-semibold">[00:01.50] Paused at Human-in-the-Loop gate. Awaiting engineer sign-off...</div>
            )}
            {pipelineState === 'completed' && (
              <div className="text-emerald-300 font-semibold">
                [00:02.15] Pipeline completed with status: {approvalStatus.toUpperCase()}. Telemetry saved to PostgreSQL audit trail.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
