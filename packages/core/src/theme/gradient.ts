/**
 * @zelvori/core - CSS Gradient & Shadow Generator Engine
 */

export interface ColorStop {
  color: string;
  positionPercent: number;
}

export function createLinearGradient(angleDegrees: number, stops: ColorStop[]): string {
  const sorted = [...stops].sort((a, b) => a.positionPercent - b.positionPercent);
  const stopsString = sorted.map((s) => `${s.color} ${s.positionPercent}%`).join(', ');
  return `linear-gradient(${angleDegrees}deg, ${stopsString})`;
}

export function createRadialGradient(shape: 'circle' | 'ellipse', stops: ColorStop[]): string {
  const sorted = [...stops].sort((a, b) => a.positionPercent - b.positionPercent);
  const stopsString = sorted.map((s) => `${s.color} ${s.positionPercent}%`).join(', ');
  return `radial-gradient(${shape}, ${stopsString})`;
}

export interface BoxShadowOptions {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
  opacity?: number;
  inset?: boolean;
}

export function createBoxShadow(options: BoxShadowOptions): string {
  const { x, y, blur, spread, color, opacity = 1, inset = false } = options;
  return `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${color}`;
}

export function createCyberGlowShadow(color = '#06b6d4', opacity = 0.35): string {
  return `0 20px 35px -5px ${color}, 0 0 15px 0 ${color}`;
}
