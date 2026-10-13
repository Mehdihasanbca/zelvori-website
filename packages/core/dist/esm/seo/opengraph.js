/**
 * @zelvori/core - Open Graph 2.0 Metadata Generator
 */
import { escapeHtml } from '../security/sanitization.js';
export function generateOpenGraphTags(params) {
    const { title, description, url, imageUrl, siteName, type = 'website', locale = 'en_US', } = params;
    const tags = [
        `<meta property="og:type" content="${escapeHtml(type)}" />`,
        `<meta property="og:url" content="${escapeHtml(url)}" />`,
        `<meta property="og:title" content="${escapeHtml(title)}" />`,
        `<meta property="og:description" content="${escapeHtml(description)}" />`,
        `<meta property="og:locale" content="${escapeHtml(locale)}" />`,
    ];
    if (imageUrl) {
        tags.push(`<meta property="og:image" content="${escapeHtml(imageUrl)}" />`);
        tags.push(`<meta property="og:image:width" content="1200" />`);
        tags.push(`<meta property="og:image:height" content="630" />`);
        tags.push(`<meta property="og:image:alt" content="${escapeHtml(title)}" />`);
    }
    if (siteName) {
        tags.push(`<meta property="og:site_name" content="${escapeHtml(siteName)}" />`);
    }
    return tags.join('\n');
}
/**
 * Returns a typed Next.js App Router compatible Metadata object
 */
export function createOpenGraphMetadata(params) {
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