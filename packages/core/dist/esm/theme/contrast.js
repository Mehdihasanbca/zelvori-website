/**
 * @zelvori/core - WCAG 2.1 Relative Luminance & Contrast Ratio Engine
 * Implements the official W3C sRGB formula: https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 */
export function hexToRgb(hex) {
    const clean = hex.replace('#', '').trim();
    if (clean.length === 3) {
        const r = parseInt(clean[0] + clean[0], 16);
        const g = parseInt(clean[1] + clean[1], 16);
        const b = parseInt(clean[2] + clean[2], 16);
        return isNaN(r) || isNaN(g) || isNaN(b) ? null : [r, g, b];
    }
    if (clean.length === 6) {
        const r = parseInt(clean.substring(0, 2), 16);
        const g = parseInt(clean.substring(2, 4), 16);
        const b = parseInt(clean.substring(4, 6), 16);
        return isNaN(r) || isNaN(g) || isNaN(b) ? null : [r, g, b];
    }
    return null;
}
export function getRelativeLuminance(r, g, b) {
    const [rs, gs, bs] = [r, g, b].map((c) => {
        const s = c / 255;
        return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}
export function getContrastRatio(hex1, hex2) {
    const rgb1 = hexToRgb(hex1);
    const rgb2 = hexToRgb(hex2);
    if (!rgb1 || !rgb2)
        return null;
    const lum1 = getRelativeLuminance(...rgb1);
    const lum2 = getRelativeLuminance(...rgb2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
}
export function checkWcagCompliance(hexForeground, hexBackground) {
    const ratio = getContrastRatio(hexForeground, hexBackground);
    if (ratio === null)
        return null;
    const passNormalAA = ratio >= 4.5;
    const passNormalAAA = ratio >= 7.0;
    const passLargeAA = ratio >= 3.0;
    const passLargeAAA = ratio >= 4.5;
    const passUiComponents = ratio >= 3.0;
    const summary = ratio >= 7.0
        ? 'Enhanced compliance: Exceeds WCAG AAA for all text sizes.'
        : ratio >= 4.5
            ? 'Standard compliance: Meets WCAG AA for normal text and AAA for large text.'
            : ratio >= 3.0
                ? 'Partial compliance: Meets WCAG AA only for large text (18pt+ / 14pt bold) and UI controls.'
                : 'Fails WCAG 2.1 AA requirements. Contrast is insufficient for accessible reading.';
    return {
        ratio: Math.round(ratio * 100) / 100,
        formattedRatio: `${(Math.round(ratio * 100) / 100).toFixed(2)}:1`,
        passNormalAA,
        passNormalAAA,
        passLargeAA,
        passLargeAAA,
        passUiComponents,
        summary,
    };
}
/**
 * Mandatory compliance disclaimer
 */
export function getWcagAccessibilityNotice() {
    return 'A passing contrast ratio is necessary, but does not describe a color pair as fully WCAG-compliant on its own. Complete accessibility also requires legible font sizing, line spacing, focus indicators, keyboard access, and avoiding color as the sole conveyor of information.';
}
//# sourceMappingURL=contrast.js.map