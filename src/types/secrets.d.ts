declare module "secrets.js-grempe" {
  function share(secret: string, numShares: number, threshold: number): string[];
  function combine(shares: string[]): string;
  function str2hex(str: string): string;
  function hex2str(hex: string): string;
  export default { share, combine, str2hex, hex2str };
}
