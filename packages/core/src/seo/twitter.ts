/**
 * @zelvori/core - Twitter/X Card Metadata Generator
 */

import { escapeHtml } from '../security/sanitization.js';

export interface TwitterCardParams {
  cardType?: 'summary' | 'summary_large_image';
  title: string;
  description: string;
  imageUrl?: string;
  twitterHandle?: string;
}

export function generateTwitterTags(params: TwitterCardParams): string {
  const {
    cardType = 'summary_large_image',
    title,
    description,
    imageUrl,
    twitterHandle,
  } = params;

  const tags: string[] = [
    `<meta name="twitter:card" content="${escapeHtml(cardType)}" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
  ];

  if (imageUrl) {
    tags.push(`<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`);
  }

  if (twitterHandle) {
    tags.push(`<meta name="twitter:site" content="${escapeHtml(twitterHandle)}" />`);
    tags.push(`<meta name="twitter:creator" content="${escapeHtml(twitterHandle)}" />`);
  }

  return tags.join('\n');
}

export function createTwitterMetadata(params: TwitterCardParams) {
  return {
    card: params.cardType || 'summary_large_image',
    title: params.title,
    description: params.description,
    images: params.imageUrl ? [params.imageUrl] : undefined,
    creator: params.twitterHandle,
    site: params.twitterHandle,
  };
}
