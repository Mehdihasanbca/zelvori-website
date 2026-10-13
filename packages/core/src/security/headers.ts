/**
 * @zelvori/core - HTTP Security Headers & Content-Security-Policy Generator
 */

export interface CspDirectives {
  defaultSrc?: string[];
  scriptSrc?: string[];
  styleSrc?: string[];
  imgSrc?: string[];
  connectSrc?: string[];
  fontSrc?: string[];
  objectSrc?: string[];
  frameAncestors?: string[];
  baseUri?: string[];
  formAction?: string[];
}

export function buildCspHeader(directives: CspDirectives): string {
  const parts: string[] = [];

  const mapDirective = (name: string, values?: string[]) => {
    if (values && values.length > 0) {
      parts.push(`${name} ${values.join(' ')}`);
    }
  };

  mapDirective('default-src', directives.defaultSrc || ["'self'"]);
  mapDirective('script-src', directives.scriptSrc || ["'self'"]);
  mapDirective('style-src', directives.styleSrc || ["'self'", "'unsafe-inline'"]);
  mapDirective('img-src', directives.imgSrc || ["'self'", 'data:', 'https:']);
  mapDirective('connect-src', directives.connectSrc || ["'self'"]);
  mapDirective('font-src', directives.fontSrc || ["'self'", 'https:', 'data:']);
  mapDirective('object-src', directives.objectSrc || ["'none'"]);
  mapDirective('base-uri', directives.baseUri || ["'self'"]);
  mapDirective('form-action', directives.formAction || ["'self'"]);
  mapDirective('frame-ancestors', directives.frameAncestors || ["'none'"]);

  return parts.join('; ');
}

export const RECOMMENDED_SECURITY_HEADERS: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};
