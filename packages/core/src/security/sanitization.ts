/**
 * @zelvori/core - Input Sanitization & XSS Defense Primitives
 */

/**
 * Escapes characters with special meaning in HTML contexts to prevent injection.
 */
export function escapeHtml(str: string): string {
  if (typeof str !== 'string') return '';
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
export function stripHtml(str: string): string {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>?/gm, '');
}

/**
 * Validates and sanitizes a URL, allowing only safe protocols (http:, https:, mailto:, tel:).
 * Blocks javascript:, data:, vbscript: URLs to prevent script execution.
 */
export function sanitizeUrl(rawUrl: string, fallback = '#'): string {
  if (!rawUrl || typeof rawUrl !== 'string') return fallback;
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
  } catch {
    return fallback;
  }
}
