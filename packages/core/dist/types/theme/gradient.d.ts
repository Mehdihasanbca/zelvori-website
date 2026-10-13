/**
 * @zelvori/core - CSS Gradient & Shadow Generator Engine
 */
export interface ColorStop {
    color: string;
    positionPercent: number;
}
export declare function createLinearGradient(angleDegrees: number, stops: ColorStop[]): string;
export declare function createRadialGradient(shape: 'circle' | 'ellipse', stops: ColorStop[]): string;
export interface BoxShadowOptions {
    x: number;
    y: number;
    blur: number;
    spread: number;
    color: string;
    opacity?: number;
    inset?: boolean;
}
export declare function createBoxShadow(options: BoxShadowOptions): string;
export declare function createCyberGlowShadow(color?: string, opacity?: number): string;
//# sourceMappingURL=gradient.d.ts.map