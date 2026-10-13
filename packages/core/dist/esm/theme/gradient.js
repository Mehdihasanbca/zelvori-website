/**
 * @zelvori/core - CSS Gradient & Shadow Generator Engine
 */
export function createLinearGradient(angleDegrees, stops) {
    const sorted = [...stops].sort((a, b) => a.positionPercent - b.positionPercent);
    const stopsString = sorted.map((s) => `${s.color} ${s.positionPercent}%`).join(', ');
    return `linear-gradient(${angleDegrees}deg, ${stopsString})`;
}
export function createRadialGradient(shape, stops) {
    const sorted = [...stops].sort((a, b) => a.positionPercent - b.positionPercent);
    const stopsString = sorted.map((s) => `${s.color} ${s.positionPercent}%`).join(', ');
    return `radial-gradient(${shape}, ${stopsString})`;
}
export function createBoxShadow(options) {
    const { x, y, blur, spread, color, opacity = 1, inset = false } = options;
    return `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${color}`;
}
export function createCyberGlowShadow(color = '#06b6d4', opacity = 0.35) {
    return `0 20px 35px -5px ${color}, 0 0 15px 0 ${color}`;
}
//# sourceMappingURL=gradient.js.map