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
export declare function buildCspHeader(directives: CspDirectives): string;
export declare const RECOMMENDED_SECURITY_HEADERS: Record<string, string>;
//# sourceMappingURL=headers.d.ts.map