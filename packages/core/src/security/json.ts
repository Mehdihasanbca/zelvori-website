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

export function safeJsonParse<T = unknown>(text: string): SafeJsonResult<T> {
  if (typeof text !== 'string' || text.trim() === '') {
    return {
      success: false,
      data: null,
      error: { message: 'Input is empty or not a string' },
    };
  }

  try {
    const data = JSON.parse(text) as T;
    return { success: true, data, error: null };
  } catch (err: unknown) {
    const errorObj = err as Error;
    const msg = errorObj.message || 'JSON Syntax Error';

    let line: number | undefined;
    let column: number | undefined;

    const lineColMatch = msg.match(/line\s+(\d+)\s+column\s+(\d+)/i);
    if (lineColMatch) {
      line = parseInt(lineColMatch[1], 10);
      column = parseInt(lineColMatch[2], 10);
    } else {
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

export function safeJsonStringify(data: unknown, indent: number | string = 2): string {
  try {
    return JSON.stringify(data, null, indent);
  } catch {
    return '';
  }
}
