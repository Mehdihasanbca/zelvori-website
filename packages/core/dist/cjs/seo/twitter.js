"use strict";
/**
 * @zelvori/core - Twitter/X Card Metadata Generator
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTwitterTags = generateTwitterTags;
exports.createTwitterMetadata = createTwitterMetadata;
const sanitization_js_1 = require("../security/sanitization.js");
function generateTwitterTags(params) {
    const { cardType = 'summary_large_image', title, description, imageUrl, twitterHandle, } = params;
    const tags = [
        `<meta name="twitter:card" content="${(0, sanitization_js_1.escapeHtml)(cardType)}" />`,
        `<meta name="twitter:title" content="${(0, sanitization_js_1.escapeHtml)(title)}" />`,
        `<meta name="twitter:description" content="${(0, sanitization_js_1.escapeHtml)(description)}" />`,
    ];
    if (imageUrl) {
        tags.push(`<meta name="twitter:image" content="${(0, sanitization_js_1.escapeHtml)(imageUrl)}" />`);
    }
    if (twitterHandle) {
        tags.push(`<meta name="twitter:site" content="${(0, sanitization_js_1.escapeHtml)(twitterHandle)}" />`);
        tags.push(`<meta name="twitter:creator" content="${(0, sanitization_js_1.escapeHtml)(twitterHandle)}" />`);
    }
    return tags.join('\n');
}
function createTwitterMetadata(params) {
    return {
        card: params.cardType || 'summary_large_image',
        title: params.title,
        description: params.description,
        images: params.imageUrl ? [params.imageUrl] : undefined,
        creator: params.twitterHandle,
        site: params.twitterHandle,
    };
}
//# sourceMappingURL=twitter.js.map