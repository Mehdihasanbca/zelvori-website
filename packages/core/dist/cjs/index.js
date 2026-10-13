"use strict";
/**
 * @zelvori/core - Official Core Framework & Architecture SDK for Zelvori
 *
 * Modules:
 * - /theme: Design tokens, contrast calculation, and CSS styling
 * - /security: XSS sanitization, safe JSON parsing, and CSP headers
 * - /seo: OpenGraph 2.0, Twitter Cards, and Schema.org JSON-LD
 * - /config: Brand identity, engineering taxonomy, and quotation models
 * - /utils: Clipboard writers, string/byte/currency formatters
 * - /ui: Reusable UI primitives (BrandLogo, Button, Card, Badge)
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./theme/index.js"), exports);
__exportStar(require("./security/index.js"), exports);
__exportStar(require("./seo/index.js"), exports);
__exportStar(require("./config/index.js"), exports);
__exportStar(require("./utils/index.js"), exports);
__exportStar(require("./ui/index.js"), exports);
//# sourceMappingURL=index.js.map