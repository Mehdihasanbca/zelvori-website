import { jsx as _jsx } from "react/jsx-runtime";
export function Card({ variant = 'default', className = '', children, ...props }) {
    const baseStyles = 'rounded-3xl border p-6 sm:p-7 transition-all duration-200';
    const variantStyles = {
        default: 'border-slate-800 bg-slate-900/50 shadow-xl',
        glow: 'border-cyan-500/25 bg-gradient-to-br from-slate-900 via-[#0b1220] to-cyan-950/30 shadow-2xl',
        interactive: 'border-slate-800 bg-slate-900/50 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900/80 cursor-pointer shadow-xl',
    }[variant];
    return (_jsx("div", { className: `${baseStyles} ${variantStyles} ${className}`, ...props, children: children }));
}
//# sourceMappingURL=Card.js.map