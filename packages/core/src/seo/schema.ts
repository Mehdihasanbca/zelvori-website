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

export function buildOrganizationJsonLd(params: OrganizationSchemaParams): string {
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

export interface WebSiteSchemaParams {
  name: string;
  url: string;
  description?: string;
}

export function buildWebSiteJsonLd(params: WebSiteSchemaParams): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: params.name,
    url: params.url,
    description: params.description,
  };

  return JSON.stringify(schema, null, 2);
}

export interface ServiceSchemaParams {
  name: string;
  serviceType: string;
  providerName: string;
  providerUrl: string;
  description: string;
  areaServed?: string;
}

export function buildServiceJsonLd(params: ServiceSchemaParams): string {
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
