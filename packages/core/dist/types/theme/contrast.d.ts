/**
 * @zelvori/core - WCAG 2.1 Relative Luminance & Contrast Ratio Engine
 * Implements the official W3C sRGB formula: https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 */
export interface WcagComplianceResult {
    ratio: number;
    formattedRatio: string;
    passNormalAA: boolean;
    passNormalAAA: boolean;
    passLargeAA: boolean;
    passLargeAAA: boolean;
    passUiComponents: boolean;
    summary: string;
}
export declare function hexToRgb(hex: string): [number, number, number] | null;
export declare function getRelativeLuminance(r: number, g: number, b: number): number;
export declare function getContrastRatio(hex1: string, hex2: string): number | null;
export declare function checkWcagCompliance(hexForeground: string, hexBackground: string): WcagComplianceResult | null;
/**
 * Mandatory compliance disclaimer
 */
export declare function getWcagAccessibilityNotice(): string;
//# sourceMappingURL=contrast.d.ts.map