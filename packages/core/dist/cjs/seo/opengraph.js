"use strict";
/**
 * @zelvori/core - Open Graph 2.0 Metadata Generator
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOpenGraphTags = generateOpenGraphTags;
exports.createOpenGraphMetadata = createOpenGraphMetadata;
const sanitization_js_1 = require("../security/sanitization.js");
function generateOpenGraphTags(params) {
    const { title, description, url, imageUrl, siteName, type = 'website', locale = 'en_US', } = params;
    const tags = [
        `<meta property="og:type" content="${(0, sanitization_js_1.escapeHtml)(type)}" />`,
        `<meta property="og:url" content="${(0, sanitization_js_1.escapeHtml)(url)}" />`,
        `<meta property="og:title" content="${(0, sanitization_js_1.escapeHtml)(title)}" />`,
        `<meta property="og:description" content="${(0, sanitization_js_1.escapeHtml)(description)}" />`,
        `<meta property="og:locale" content="${(0, sanitization_js_1.escapeHtml)(locale)}" />`,
    ];
    if (imageUrl) {
        tags.push(`<meta property="og:image" content="${(0, sanitization_js_1.escapeHtml)(imageUrl)}" />`);
        tags.push(`<meta property="og:image:width" content="1200" />`);
        tags.push(`<meta property="og:image:height" content="630" />`);
        tags.push(`<meta property="og:image:alt" content="${(0, sanitization_js_1.escapeHtml)(title)}" />`);
    }
    if (siteName) {
        tags.push(`<meta property="og:site_name" content="${(0, sanitization_js_1.escapeHtml)(siteName)}" />`);
    }
    return tags.join('\n');
}
/**
 * Returns a typed Next.js App Router compatible Metadata object
 */
function createOpenGraphMetadata(params) {
    return {
        title: params.title,
        description: params.description,
        url: params.url,
        siteName: params.siteName || 'Zelvori',
        images: params.imageUrl
            ? [
                {
                    url: params.imageUrl,
                    width: 1200,
                    height: 630,
                    alt: params.title,
                },
            ]
            : undefined,
        type: params.type || 'website',
        locale: params.locale || 'en_US',
    };
}
//# sourceMappingURL=opengraph.js.map