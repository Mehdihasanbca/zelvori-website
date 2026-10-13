import { jsx as _jsx } from "react/jsx-runtime";
export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }) {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed';
    const sizeStyles = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2.5 text-xs sm:text-sm',
        lg: 'px-6 py-3.5 text-sm sm:text-base',
    }[size];
    const variantStyles = {
        primary: 'bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-md shadow-cyan-950/30',
        secondary: 'bg-slate-900 border border-slate-700 text-slate-200 hover:border-cyan-500/50 hover:text-white',
        outline: 'border border-cyan-500/40 bg-transparent text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200',
        ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-slate-900/50',
    }[variant];
    return (_jsx("button", { className: `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`, ...props, children: children }));
}
//# sourceMappingURL=Button.js.map