"use strict";
/**
 * @zelvori/core - HTTP Security Headers & Content-Security-Policy Generator
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RECOMMENDED_SECURITY_HEADERS = void 0;
exports.buildCspHeader = buildCspHeader;
function buildCspHeader(directives) {
    const parts = [];
    const mapDirective = (name, values) => {
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
exports.RECOMMENDED_SECURITY_HEADERS = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};
//# sourceMappingURL=headers.js.map