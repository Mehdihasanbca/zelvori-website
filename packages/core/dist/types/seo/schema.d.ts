/**
 * @zelvori/core - Schema.org JSON-LD Structured Data Generators
 */
export interface OrganizationSchemaParams {
    name: string;
    url: string;
    logoUrl?: string;
    email?: string;
    sameAs?: string[];
}
export declare function buildOrganizationJsonLd(params: OrganizationSchemaParams): string;
export interface WebSiteSchemaParams {
    name: string;
    url: string;
    description?: string;
}
export declare function buildWebSiteJsonLd(params: WebSiteSchemaParams): string;
export interface ServiceSchemaParams {
    name: string;
    serviceType: string;
    providerName: string;
    providerUrl: string;
    description: string;
    areaServed?: string;
}
export declare function buildServiceJsonLd(params: ServiceSchemaParams): string;
//# sourceMappingURL=schema.d.ts.map