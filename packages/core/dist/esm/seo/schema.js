/**
 * @zelvori/core - Schema.org JSON-LD Structured Data Generators
 */
export function buildOrganizationJsonLd(params) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: params.name,
        url: params.url,
        logo: params.logoUrl,
        email: params.email,
        sameAs: params.sameAs || [],
    };
    return JSON.stringify(schema, null, 2);
}
export function buildWebSiteJsonLd(params) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: params.name,
        url: params.url,
        description: params.description,
    };
    return JSON.stringify(schema, null, 2);
}
export function buildServiceJsonLd(params) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: params.name,
        serviceType: params.serviceType,
        provider: {
            '@type': 'Organization',
            name: params.providerName,
            url: params.providerUrl,
        },
        description: params.description,
        areaServed: params.areaServed || 'Worldwide',
    };
    return JSON.stringify(schema, null, 2);
}
//# sourceMappingURL=schema.js.map