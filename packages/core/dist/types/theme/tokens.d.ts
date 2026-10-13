/**
 * @zelvori/core - Design System Tokens & Brand Visual Constants
 */
export declare const ZELVORI_COLORS: {
    readonly cyan: {
        readonly 50: "#ecfeff";
        readonly 100: "#cffafe";
        readonly 200: "#a5f3fc";
        readonly 300: "#67e8f9";
        readonly 400: "#22d3ee";
        readonly 500: "#06b6d4";
        readonly 600: "#0891b2";
        readonly 700: "#0e7490";
        readonly 800: "#155e75";
        readonly 900: "#164e63";
        readonly 950: "#082f49";
    };
    readonly slate: {
        readonly 50: "#f8fafc";
        readonly 100: "#f1f5f9";
        readonly 200: "#e2e8f0";
        readonly 300: "#cbd5e1";
        readonly 400: "#94a3b8";
        readonly 500: "#64748b";
        readonly 600: "#475569";
        readonly 700: "#334155";
        readonly 800: "#1e293b";
        readonly 900: "#0f172a";
        readonly 950: "#020617";
    };
    readonly dark: {
        readonly background: "#070b14";
        readonly surface: "#0d1424";
        readonly card: "#0f172a";
        readonly cardMuted: "#161f33";
        readonly border: "#1e293b";
        readonly borderGlow: "rgba(6, 182, 212, 0.25)";
    };
    readonly status: {
        readonly success: "#10b981";
        readonly warning: "#f59e0b";
        readonly error: "#ef4444";
        readonly info: "#38bdf8";
    };
};
export declare const ZELVORI_TYPOGRAPHY: {
    readonly fontSans: "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif";
    readonly fontMono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace";
    readonly fontSize: {
        readonly xs: "0.75rem";
        readonly sm: "0.875rem";
        readonly base: "1rem";
        readonly lg: "1.125rem";
        readonly xl: "1.25rem";
        readonly '2xl': "1.5rem";
        readonly '3xl': "1.875rem";
        readonly '4xl': "2.25rem";
        readonly '5xl': "3rem";
    };
    readonly fontWeight: {
        readonly normal: "400";
        readonly medium: "500";
        readonly semibold: "600";
        readonly bold: "700";
        readonly extrabold: "800";
    };
};
export declare const ZELVORI_RADII: {
    readonly sm: "0.375rem";
    readonly md: "0.5rem";
    readonly lg: "0.75rem";
    readonly xl: "1rem";
    readonly '2xl': "1.25rem";
    readonly '3xl': "1.5rem";
    readonly full: "9999px";
};
export declare const ZELVORI_ELEVATION: {
    readonly card: "0 4px 20px -2px rgba(0, 0, 0, 0.5)";
    readonly glow: "0 0 25px -5px rgba(6, 182, 212, 0.35)";
    readonly elevatedGlow: "0 20px 35px -10px rgba(6, 182, 212, 0.25), 0 0 15px -3px rgba(6, 182, 212, 0.15)";
};
/**
 * Generate standard Zelvori CSS custom properties (variables)
 */
export declare function getZelvoriCssVariables(): Record<string, string>;
//# sourceMappingURL=tokens.d.ts.map