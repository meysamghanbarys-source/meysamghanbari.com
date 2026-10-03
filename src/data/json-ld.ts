/** Preserve JSON values while preventing text from closing its HTML script element. */
export const serializeJsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c');
