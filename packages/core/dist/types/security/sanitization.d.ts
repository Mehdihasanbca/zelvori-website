/**
 * @zelvori/core - Input Sanitization & XSS Defense Primitives
 */
/**
 * Escapes characters with special meaning in HTML contexts to prevent injection.
 */
export declare function escapeHtml(str: string): string;
/**
 * Strips all HTML tags from a string.
 */
export declare function stripHtml(str: string): string;
/**
 * Validates and sanitizes a URL, allowing only safe protocols (http:, https:, mailto:, tel:).
 * Blocks javascript:, data:, vbscript: URLs to prevent script execution.
 */
export declare function sanitizeUrl(rawUrl: string, fallback?: string): string;
//# sourceMappingURL=sanitization.d.ts.map