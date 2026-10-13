"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandLogo = BrandLogo;
const jsx_runtime_1 = require("react/jsx-runtime");
function BrandLogo({ size = 'md', showTagline = false, className = '' }) {
    const dimensions = {
        sm: { icon: 'h-6 w-6', text: 'text-base', sub: 'text-[9px]' },
        md: { icon: 'h-8 w-8', text: 'text-xl', sub: 'text-[10px]' },
        lg: { icon: 'h-10 w-10', text: 'text-2xl', sub: 'text-xs' },
    }[size];
    return ((0, jsx_runtime_1.jsxs)("div", { className: `flex items-center gap-3 ${className}`, children: [(0, jsx_runtime_1.jsx)("div", { className: `relative flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20 ${dimensions.icon}`, children: (0, jsx_runtime_1.jsx)("div", { className: "flex h-full w-full items-center justify-center rounded-[11px] bg-[#070b14]", children: (0, jsx_runtime_1.jsx)("span", { className: "font-mono font-black text-cyan-300 select-none", children: "Z" }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)("span", { className: `font-extrabold tracking-tight text-white leading-none ${dimensions.text}`, children: "Zelvori" }), showTagline && ((0, jsx_runtime_1.jsx)("span", { className: `mt-0.5 font-mono uppercase tracking-widest text-cyan-400/90 ${dimensions.sub}`, children: "Digital Architecture" }))] })] }));
}
//# sourceMappingURL=BrandLogo.js.map