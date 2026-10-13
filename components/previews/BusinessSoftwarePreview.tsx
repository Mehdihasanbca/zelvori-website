'use client';

import React, { useState } from 'react';
import {
  Users,
  Briefcase,
  Layers,
  ChevronRight,
  Plus,
  CheckCircle2,
  Clock,
  AlertCircle,
  RotateCcw,
  Building,
} from 'lucide-react';

export function BusinessSoftwarePreview() {
  const [activeModule, setActiveModule] = useState<'crm' | 'hrms' | 'inventory'>('crm');

  // Fictional CRM deals state
  const [deals, setDeals] = useState([
    { id: '1', client: 'Aether Logistics', value: '₹4,50,000', stage: 'Proposal', contact: 'Rahul Varma' },
    { id: '2', client: 'Beacon Health Systems', value: '₹8,20,000', stage: 'Negotiation', contact: 'Dr. Meera Iyer' },
    { id: '3', client: 'Solaris Fintech', value: '₹3,00,000', stage: 'Inquiry', contact: 'Arjun Sen' },
    { id: '4', client: 'Nova Retail Corp', value: '₹6,40,000', stage: 'Signed', contact: 'Priya Nair' },
  ]);

  // Fictional HRMS records
  const [employees, setEmployees] = useState([
    { id: 'E1', name: 'Tanvi Shinde', role: 'Senior Lead Architect', department: 'Engineering', status: 'Active' },
    { id: 'E2', name: 'Kabir Das', role: 'Full-Stack Developer', department: 'Product Squad', status: 'On Leave' },
    { id: 'E3', name: 'Siddharth Roy', role: 'QA Automation Lead', department: 'DevOps', status: 'Active' },
  ]);

  const advanceDeal = (id: string) => {
    setDeals((prev) =>
      prev.map((deal) => {
        if (deal.id !== id) return deal;
        const nextStage =
          deal.stage === 'Inquiry'
            ? 'Proposal'
            : deal.stage === 'Proposal'
            ? 'Negotiation'
            : deal.stage === 'Negotiation'
            ? 'Signed'
            : 'Signed';
        return { ...deal, stage: nextStage };
      })
    );
  };

  return (
    <div className="space-y-6">
      {/* Module Selector Bar */}
      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 mr-2 uppercase tracking-wider">
            Active Module:
          </span>
          <button
            type="button"
            onClick={() => setActiveModule('crm')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeModule === 'crm'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Lead CRM &amp; Pipeline</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveModule('hrms')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeModule === 'hrms'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>HRMS &amp; Staff Directory</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveModule('inventory')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeModule === 'inventory'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Operations Inventory</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            setActiveModule('crm');
            setDeals([
              { id: '1', client: 'Aether Logistics', value: '₹4,50,000', stage: 'Proposal', contact: 'Rahul Varma' },
              { id: '2', client: 'Beacon Health Systems', value: '₹8,20,000', stage: 'Negotiation', contact: 'Dr. Meera Iyer' },
              { id: '3', client: 'Solaris Fintech', value: '₹3,00,000', stage: 'Inquiry', contact: 'Arjun Sen' },
              { id: '4', client: 'Nova Retail Corp', value: '₹6,40,000', stage: 'Signed', contact: 'Priya Nair' },
            ]);
          }}
          className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-cyan-400"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Records</span>
        </button>
      </div>

      {/* Main Dashboard Canvas */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0f1d] border border-slate-800 space-y-6 shadow-2xl">
        
        {/* KPI Metric Summary Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
            <span className="text-[11px] text-slate-400">Pipeline Total Value</span>
            <div className="text-xl font-bold text-white font-mono mt-1">₹22,10,000</div>
            <span className="text-[10px] text-cyan-400 font-medium">4 active enterprise opportunities</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
            <span className="text-[11px] text-slate-400">Team Headcount</span>
            <div className="text-xl font-bold text-white font-mono mt-1">28 Staff</div>
            <span className="text-[10px] text-emerald-400 font-medium">96.4% on-site presence</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
            <span className="text-[11px] text-slate-400">Inventory SKUs</span>
            <div className="text-xl font-bold text-white font-mono mt-1">1,480 Items</div>
            <span className="text-[10px] text-amber-400 font-medium">2 reorder threshold alerts</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
            <span className="text-[11px] text-slate-400">Database Engine</span>
            <div className="text-xl font-bold text-white font-mono mt-1">PostgreSQL</div>
            <span className="text-[10px] text-slate-400 font-mono">Row-Level Security (RLS)</span>
          </div>
        </div>

        {/* MODULE 1: CRM PIPELINE */}
        {activeModule === 'crm' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-white">Commercial Deal Pipeline</h4>
                <p className="text-xs text-slate-400">
                  Click &ldquo;Advance Stage&rdquo; on any fictional deal card to test pipeline progression.
                </p>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/60">
                MODULE: CRM-OPS-01
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {(['Inquiry', 'Proposal', 'Negotiation', 'Signed'] as const).map((stage) => {
                const stageDeals = deals.filter((d) => d.stage === stage);
                return (
                  <div key={stage} className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-xs font-bold text-slate-200">{stage}</span>
                      <span className="text-[10px] font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-400">
                        {stageDeals.length}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {stageDeals.map((deal) => (
                        <div
                          key={deal.id}
                          className="p-3 rounded-xl bg-[#0e172a] border border-slate-700/80 space-y-2 shadow"
                        >
                          <div>
                            <div className="text-xs font-semibold text-white">{deal.client}</div>
                            <div className="text-[10px] text-slate-400">Contact: {deal.contact}</div>
                          </div>
                          <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-800">
                            <span className="font-mono font-bold text-cyan-300 text-[11px]">{deal.value}</span>
                            {deal.stage !== 'Signed' && (
                              <button
                                type="button"
                                onClick={() => advanceDeal(deal.id)}
                                className="text-[10px] px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors font-medium"
                              >
                                Advance →
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* MODULE 2: HRMS STAFF DIRECTORY */}
        {activeModule === 'hrms' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-white">Employee Roster &amp; Role-Based Access</h4>
                <p className="text-xs text-slate-400">Fictional internal staff records demonstrating enterprise RBAC.</p>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/60">
                MODULE: HRMS-RBAC-02
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300 border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                    <th className="py-3 px-4">EMPLOYEE</th>
                    <th className="py-3 px-4">ROLE</th>
                    <th className="py-3 px-4">DEPARTMENT</th>
                    <th className="py-3 px-4">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {employees.map((emp) => (
                    <tr key={emp.id} className="hover:bg-slate-900/40">
                      <td className="py-3 px-4 font-semibold text-white">{emp.name}</td>
                      <td className="py-3 px-4 text-slate-300">{emp.role}</td>
                      <td className="py-3 px-4 text-slate-400">{emp.department}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium ${
                            emp.status === 'Active'
                              ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60'
                              : 'bg-amber-950/80 text-amber-300 border border-amber-800/60'
                          }`}
                        >
                          {emp.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MODULE 3: INVENTORY */}
        {activeModule === 'inventory' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-white">Operations Inventory Management</h4>
                <p className="text-xs text-slate-400">Warehouse stock tracking and automatic reorder alerts.</p>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/60">
                MODULE: INVENTORY-03
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {[
                { sku: 'SKU-8921', item: 'Thermal Label Printer Heads', units: 48, status: 'Optimal' },
                { sku: 'SKU-4402', item: 'Barcode Scanner Recharge Docks', units: 6, status: 'Low Stock Alert' },
                { sku: 'SKU-1194', item: 'Industrial Packaging Rolls', units: 140, status: 'Optimal' },
              ].map((stock) => (
                <div
                  key={stock.sku}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-slate-400">
                    <span>{stock.sku}</span>
                    <span
                      className={`font-semibold ${
                        stock.status === 'Optimal' ? 'text-emerald-400' : 'text-amber-400'
                      }`}
                    >
                      {stock.status}
                    </span>
                  </div>
                  <div className="font-semibold text-white">{stock.item}</div>
                  <div className="text-lg font-bold font-mono text-cyan-300">{stock.units} Units</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
