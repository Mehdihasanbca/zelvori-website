/**
 * @zelvori/core - Twitter/X Card Metadata Generator
 */
export interface TwitterCardParams {
    cardType?: 'summary' | 'summary_large_image';
    title: string;
    description: string;
    imageUrl?: string;
    twitterHandle?: string;
}
export declare function generateTwitterTags(params: TwitterCardParams): string;
export declare function createTwitterMetadata(params: TwitterCardParams): {
    card: "summary" | "summary_large_image";
    title: string;
    description: string;
    images: string[] | undefined;
    creator: string | undefined;
    site: string | undefined;
};
//# sourceMappingURL=twitter.d.ts.map