export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  return PHONE_REGEX.test(value.trim());
}

/** Máscara (11) 99999-9999 enquanto digita. */
export function formatarTelefone(valor: string): string {
  const d = valor.replace(/\D/g, '').slice(0, 11);
  let fmt = d;
  if (d.length > 0)  fmt = `(${d.slice(0, 2)}`;
  if (d.length >= 3) fmt += `) ${d.slice(2, d.length > 10 ? 7 : 6)}`;
  if (d.length >= 7) fmt += `-${d.slice(d.length > 10 ? 7 : 6)}`;
  return fmt;
}
