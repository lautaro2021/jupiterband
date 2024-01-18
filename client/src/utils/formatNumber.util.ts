export default function formatNumberToString(
  number: number,
  decimals: number = 0
): string {
  const formattedNumber = new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(number);

  return formattedNumber;
}

export const parseFormattedStringToNumber = (
  formattedNumber: string
): number => {
  const numberString = formattedNumber.replace(/\./g, "").replace(/,/g, ".");
  const number = parseFloat(numberString);

  return number;
};

export const validateFormattedNumber = (formattedNumber: string): boolean => {
  const regex = /^\d{1,3}(\.\d{3})*(,\d+)?$/;
  return regex.test(formattedNumber);
};

export function isNumeric(value: unknown): boolean {
  if (typeof value != "string") return false;
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
}

export function nonVisibleNumber(number: number) {
  const numberToString = String(number).split("");
  let points = "";

  numberToString.map(() => (points += "*"));

  return points;
}
