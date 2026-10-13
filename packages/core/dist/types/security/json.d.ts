/**
 * @zelvori/core - RFC 8259 Compliant Safe JSON Parser with Diagnostics
 * Never executes eval() or evaluates code as JavaScript.
 */
export interface JsonParseSuccess<T> {
    success: true;
    data: T;
    error: null;
}
export interface JsonParseFailure {
    success: false;
    data: null;
    error: {
        message: string;
        line?: number;
        column?: number;
    };
}
export type SafeJsonResult<T> = JsonParseSuccess<T> | JsonParseFailure;
export declare function safeJsonParse<T = unknown>(text: string): SafeJsonResult<T>;
export declare function safeJsonStringify(data: unknown, indent?: number | string): string;
//# sourceMappingURL=json.d.ts.map