/**
 * @zelvori/core - Open Graph 2.0 Metadata Generator
 */
export interface OpenGraphParams {
    title: string;
    description: string;
    url: string;
    imageUrl?: string;
    siteName?: string;
    type?: 'website' | 'article' | 'profile';
    locale?: string;
}
export declare function generateOpenGraphTags(params: OpenGraphParams): string;
/**
 * Returns a typed Next.js App Router compatible Metadata object
 */
export declare function createOpenGraphMetadata(params: OpenGraphParams): {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: {
        url: string;
        width: number;
        height: number;
        alt: string;
    }[] | undefined;
    type: "website" | "article" | "profile";
    locale: string;
};
//# sourceMappingURL=opengraph.d.ts.map