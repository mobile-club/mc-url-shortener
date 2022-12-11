export const URLABLE_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.!*;:@&=+$,';

export function generateUrlId(): string {
  return generateRandomString(URLABLE_CHARS, 6);
}
export function generateRandomString(charset: string, length: number): string {
  return Array.from({ length }, () =>
    charset.charAt(Math.floor(Math.random() * charset.length)),
  ).join('');
}
