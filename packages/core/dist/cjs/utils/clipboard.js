"use strict";
/**
 * @zelvori/core - Safe Browser Clipboard Writer
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyToClipboard = copyToClipboard;
async function copyToClipboard(text) {
    if (typeof window === 'undefined')
        return false;
    try {
        if (navigator?.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
            return true;
        }
    }
    catch {
        // Fallback to execCommand if navigator.clipboard fails
    }
    try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        return successful;
    }
    catch {
        return false;
    }
}
//# sourceMappingURL=clipboard.js.map