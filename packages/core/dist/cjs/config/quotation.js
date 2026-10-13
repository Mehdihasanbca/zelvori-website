"use strict";
/**
 * @zelvori/core - Commercial Project Quotation & Milestone Models
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAdvancePaymentMailto = generateAdvancePaymentMailto;
exports.generateAdvancePaymentWhatsApp = generateAdvancePaymentWhatsApp;
const brand_js_1 = require("./brand.js");
function generateAdvancePaymentMailto(request) {
    const subject = encodeURIComponent(`Request Project Advance Link — ${request.quotationRef} (${request.projectName})`);
    const body = encodeURIComponent(`Hello Zelvori Engineering Desk,\n\n` +
        `We have reviewed and approved project quotation ${request.quotationRef} for "${request.projectName}".\n\n` +
        `Please issue a Razorpay Live Project Advance Payment Link for our agreed advance payment of ${request.currency || 'INR'} ${request.agreedAdvanceAmount}.\n\n` +
        `Client Details:\n` +
        `- Name: ${request.clientName}\n` +
        `- Company: ${request.companyName || 'N/A'}\n` +
        `- Project: ${request.projectName}\n` +
        `- Quotation Reference: ${request.quotationRef}\n\n` +
        `Thank you.`);
    return `mailto:${brand_js_1.ZELVORI_BRAND.contact.primaryEmail}?subject=${subject}&body=${body}`;
}
function generateAdvancePaymentWhatsApp(request) {
    const text = encodeURIComponent(`Hello Zelvori, we have approved quotation ${request.quotationRef} for project "${request.projectName}". Please share our project advance payment link.`);
    const cleanNumber = brand_js_1.ZELVORI_BRAND.contact.whatsappNumber.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanNumber}?text=${text}`;
}
//# sourceMappingURL=quotation.js.map