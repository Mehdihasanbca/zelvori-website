/**
 * @zelvori/core - Commercial Project Quotation & Milestone Models
 */
export interface AdvancePaymentRequest {
    clientName: string;
    companyName?: string;
    projectName: string;
    quotationRef: string;
    agreedAdvanceAmount: number;
    currency?: string;
}
export declare function generateAdvancePaymentMailto(request: AdvancePaymentRequest): string;
export declare function generateAdvancePaymentWhatsApp(request: AdvancePaymentRequest): string;
//# sourceMappingURL=quotation.d.ts.map