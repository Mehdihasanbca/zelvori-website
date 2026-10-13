/**
 * @zelvori/core - Design System Tokens & Brand Visual Constants
 */
export const ZELVORI_COLORS = {
    // Brand Cyber Accent Palette
    cyan: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
        950: '#082f49',
    },
    // Core Dark Surfaces
    slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617',
    },
    // Signature Theme Dark
    dark: {
        background: '#070b14',
        surface: '#0d1424',
        card: '#0f172a',
        cardMuted: '#161f33',
        border: '#1e293b',
        borderGlow: 'rgba(6, 182, 212, 0.25)',
    },
    // Status Accents
    status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#38bdf8',
    },
};
export const ZELVORI_TYPOGRAPHY = {
    fontSans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
    },
    fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
    },
};
export const ZELVORI_RADII = {
    sm: '0.375rem', // 6px
    md: '0.5rem', // 8px
    lg: '0.75rem', // 12px
    xl: '1rem', // 16px
    '2xl': '1.25rem', // 20px
    '3xl': '1.5rem', // 24px
    full: '9999px',
};
export const ZELVORI_ELEVATION = {
    card: '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
    glow: '0 0 25px -5px rgba(6, 182, 212, 0.35)',
    elevatedGlow: '0 20px 35px -10px rgba(6, 182, 212, 0.25), 0 0 15px -3px rgba(6, 182, 212, 0.15)',
};
/**
 * Generate standard Zelvori CSS custom properties (variables)
 */
export function getZelvoriCssVariables() {
    return {
        '--zelvori-bg': ZELVORI_COLORS.dark.background,
        '--zelvori-surface': ZELVORI_COLORS.dark.surface,
        '--zelvori-card': ZELVORI_COLORS.dark.card,
        '--zelvori-border': ZELVORI_COLORS.dark.border,
        '--zelvori-cyan': ZELVORI_COLORS.cyan[400],
        '--zelvori-cyan-glow': ZELVORI_COLORS.dark.borderGlow,
        '--zelvori-font-sans': ZELVORI_TYPOGRAPHY.fontSans,
        '--zelvori-font-mono': ZELVORI_TYPOGRAPHY.fontMono,
    };
}
//# sourceMappingURL=tokens.js.map