'use client';

import React, { useState } from 'react';
import {
  Home,
  Calendar,
  User,
  Bell,
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  ChevronRight,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';

export function MobileAppPreview() {
  const [activeTab, setActiveTab] = useState<'home' | 'schedule' | 'profile'>('home');
  const [booked, setBooked] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('10:30 AM');

  const slots = ['09:00 AM', '10:30 AM', '02:00 PM', '04:30 PM'];

  return (
    <div className="space-y-6">
      {/* Overview & Instructions Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
        <div className="space-y-0.5">
          <div className="text-xs font-semibold text-white">Cross-Platform Mobile Simulator</div>
          <p className="text-[11px] text-slate-400">
            Interactive React Native / Flutter experience. Tap tabs below to test navigation flows and state synchronization.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setActiveTab('home');
            setBooked(false);
            setSelectedSlot('10:30 AM');
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white bg-slate-800/80 border border-slate-700/60"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Demo</span>
        </button>
      </div>

      {/* Smartphone Mockup */}
      <div className="flex justify-center p-4 sm:p-8 bg-slate-950/60 rounded-3xl border border-slate-800/80 min-h-[640px]">
        {/* Device Frame */}
        <div className="relative w-[340px] sm:w-[360px] h-[640px] bg-[#070b14] rounded-[48px] p-3.5 border-4 border-slate-800 shadow-2xl shadow-cyan-950/20 flex flex-col overflow-hidden">
          {/* Dynamic Island / Bezel notch */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-full z-30 flex items-center justify-between px-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800" />
          </div>

          {/* Internal Screen Area */}
          <div className="relative flex-1 bg-gradient-to-b from-[#0b1220] to-[#060913] rounded-[36px] overflow-hidden flex flex-col pt-8">
            {/* Top Status Bar */}
            <div className="px-6 py-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>09:41</span>
              <div className="flex items-center gap-1.5">
                <span>5G</span>
                <span className="w-4 h-2 rounded-sm border border-slate-500 flex items-center p-0.5">
                  <span className="w-full h-full bg-emerald-400 rounded-2xs" />
                </span>
              </div>
            </div>

            {/* Screen Content Viewport */}
            <div className="flex-1 overflow-y-auto px-5 py-3 space-y-4">
              
              {/* SCREEN 1: HOME */}
              {activeTab === 'home' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-slate-400">Welcome back,</p>
                      <h4 className="text-base font-bold text-white tracking-tight">Elena Rostova</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs">
                      <Bell className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Active Booking Banner */}
                  {booked ? (
                    <div className="p-4 rounded-2xl bg-gradient-to-tr from-emerald-950/80 to-slate-900 border border-emerald-500/40 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Scheduled Consultation Confirmed</span>
                      </div>
                      <div className="text-xs text-white font-medium flex items-center gap-2">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>Today at {selectedSlot}</span>
                      </div>
                      <div className="text-[10px] text-slate-300 flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>Virtual Video Room · Link Dispatched</span>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/60 to-indigo-950/60 border border-cyan-500/30 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                        Sprint Delivery
                      </span>
                      <h5 className="text-xs font-bold text-white leading-tight">
                        Architecture Review Ready
                      </h5>
                      <p className="text-[11px] text-slate-300">
                        Your mobile staging build (v1.0.4) is signed and ready for testing.
                      </p>
                      <button
                        type="button"
                        onClick={() => setActiveTab('schedule')}
                        className="w-full mt-1 py-2 px-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-semibold flex items-center justify-center gap-1.5 shadow"
                      >
                        <span>Schedule Review Session</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  {/* Quick Action Tiles */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Recent Activity
                    </div>
                    {[
                      { title: 'API Integration Verified', time: '12m ago', state: 'Deployed' },
                      { title: 'Biometric Auth Module', time: '2h ago', state: 'Passed' },
                      { title: 'Offline Database Cache', time: 'Yesterday', state: 'Synced' },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between text-xs"
                      >
                        <div>
                          <div className="text-white font-medium text-[11px]">{item.title}</div>
                          <div className="text-slate-400 text-[10px]">{item.time}</div>
                        </div>
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                          {item.state}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SCREEN 2: SCHEDULE */}
              {activeTab === 'schedule' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-white tracking-tight">Reserve Engineering Slot</h4>
                    <p className="text-[11px] text-slate-400">Pick an available sprint consultation window.</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-medium text-slate-300 block">Available Time Slots</label>
                    <div className="grid grid-cols-2 gap-2">
                      {slots.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSelectedSlot(s)}
                          className={`p-2.5 rounded-xl text-xs font-mono transition-all text-center ${
                            selectedSlot === s
                              ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                              : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 text-xs">
                    <div className="text-slate-400 text-[11px]">Selected Window:</div>
                    <div className="text-white font-semibold">Today · {selectedSlot}</div>
                    <div className="text-slate-400 text-[10px]">Senior Mobile Technical Architect</div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setBooked(true);
                      setActiveTab('home');
                    }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 text-slate-950 font-semibold text-xs shadow-lg transition-all"
                  >
                    Confirm Demo Booking
                  </button>
                </div>
              )}

              {/* SCREEN 3: PROFILE */}
              {activeTab === 'profile' && (
                <div className="space-y-4">
                  <div className="text-center pt-2">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 mx-auto flex items-center justify-center text-white font-bold text-lg">
                      ER
                    </div>
                    <h4 className="text-sm font-bold text-white mt-2">Elena Rostova</h4>
                    <p className="text-[11px] text-slate-400">CTO · Horizon Fintech</p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs text-slate-200">
                      <span className="flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Biometric App Lock</span>
                      </span>
                      <span className="text-cyan-400 font-mono text-[10px]">ENABLED</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs text-slate-200">
                      <span>Offline Cache Mode</span>
                      <span className="text-emerald-400 font-mono text-[10px]">ENCRYPTED</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs text-slate-200">
                      <span>App Version</span>
                      <span className="text-slate-400 font-mono text-[10px]">v1.0.4-staging</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Tab Navigation Bar */}
            <nav className="h-14 bg-slate-900/95 border-t border-slate-800/90 px-6 flex items-center justify-around z-20">
              <button
                type="button"
                onClick={() => setActiveTab('home')}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  activeTab === 'home' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Home tab"
              >
                <Home className="w-4 h-4" />
                <span className="text-[9px] font-semibold">Feed</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('schedule')}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  activeTab === 'schedule' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Schedule tab"
              >
                <Calendar className="w-4 h-4" />
                <span className="text-[9px] font-semibold">Schedule</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('profile')}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  activeTab === 'profile' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Profile tab"
              >
                <User className="w-4 h-4" />
                <span className="text-[9px] font-semibold">Account</span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
