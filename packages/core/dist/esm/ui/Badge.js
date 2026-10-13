import { jsx as _jsx } from "react/jsx-runtime";
export function Badge({ variant = 'cyan', className = '', children, ...props }) {
    const baseStyles = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium';
    const variantStyles = {
        cyan: 'border border-cyan-500/30 bg-cyan-950/40 text-cyan-300',
        slate: 'border border-slate-800 bg-slate-950 text-slate-300',
        emerald: 'border border-emerald-500/30 bg-emerald-950/40 text-emerald-300',
        amber: 'border border-amber-500/30 bg-amber-950/40 text-amber-300',
    }[variant];
    return (_jsx("span", { className: `${baseStyles} ${variantStyles} ${className}`, ...props, children: children }));
}
//# sourceMappingURL=Badge.js.map