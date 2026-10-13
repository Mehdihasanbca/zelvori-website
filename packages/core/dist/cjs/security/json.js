"use strict";
/**
 * @zelvori/core - RFC 8259 Compliant Safe JSON Parser with Diagnostics
 * Never executes eval() or evaluates code as JavaScript.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeJsonParse = safeJsonParse;
exports.safeJsonStringify = safeJsonStringify;
function safeJsonParse(text) {
    if (typeof text !== 'string' || text.trim() === '') {
        return {
            success: false,
            data: null,
            error: { message: 'Input is empty or not a string' },
        };
    }
    try {
        const data = JSON.parse(text);
        return { success: true, data, error: null };
    }
    catch (err) {
        const errorObj = err;
        const msg = errorObj.message || 'JSON Syntax Error';
        let line;
        let column;
        const lineColMatch = msg.match(/line\s+(\d+)\s+column\s+(\d+)/i);
        if (lineColMatch) {
            line = parseInt(lineColMatch[1], 10);
            column = parseInt(lineColMatch[2], 10);
        }
        else {
            const posMatch = msg.match(/at\s+position\s+(\d+)/i);
            if (posMatch) {
                const pos = parseInt(posMatch[1], 10);
                const upToPos = text.substring(0, pos);
                const lines = upToPos.split('\n');
                line = lines.length;
                column = lines[lines.length - 1].length + 1;
            }
        }
        return {
            success: false,
            data: null,
            error: { message: msg, line, column },
        };
    }
}
function safeJsonStringify(data, indent = 2) {
    try {
        return JSON.stringify(data, null, indent);
    }
    catch {
        return '';
    }
}
//# sourceMappingURL=json.js.map