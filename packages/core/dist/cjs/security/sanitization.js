"use strict";
/**
 * @zelvori/core - Input Sanitization & XSS Defense Primitives
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeHtml = escapeHtml;
exports.stripHtml = stripHtml;
exports.sanitizeUrl = sanitizeUrl;
/**
 * Escapes characters with special meaning in HTML contexts to prevent injection.
 */
function escapeHtml(str) {
    if (typeof str !== 'string')
        return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
/**
 * Strips all HTML tags from a string.
 */
function stripHtml(str) {
    if (typeof str !== 'string')
        return '';
    return str.replace(/<[^>]*>?/gm, '');
}
/**
 * Validates and sanitizes a URL, allowing only safe protocols (http:, https:, mailto:, tel:).
 * Blocks javascript:, data:, vbscript: URLs to prevent script execution.
 */
function sanitizeUrl(rawUrl, fallback = '#') {
    if (!rawUrl || typeof rawUrl !== 'string')
        return fallback;
    const trimmed = rawUrl.trim();
    // Allow relative URLs starting with / or #
    if (trimmed.startsWith('/') || trimmed.startsWith('#')) {
        return trimmed;
    }
    try {
        const parsed = new URL(trimmed);
        const safeProtocols = ['http:', 'https:', 'mailto:', 'tel:'];
        if (safeProtocols.includes(parsed.protocol)) {
            return trimmed;
        }
        return fallback;
    }
    catch {
        return fallback;
    }
}
//# sourceMappingURL=sanitization.js.map