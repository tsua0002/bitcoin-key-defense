// Polyfill for secrets.js-grempe: expose window.crypto as the "crypto" module
const cryptoPolyfill = typeof window !== "undefined" ? window.crypto : ({} as Crypto);

export default cryptoPolyfill;
export const getRandomValues = typeof window !== "undefined" 
  ? window.crypto.getRandomValues.bind(window.crypto) 
  : undefined;
export const randomBytes = undefined;
