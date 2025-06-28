// Format numbers with commas (e.g., 2,300,454)
export const formatNumberWithCommas = (num: number): string => {
  const validNumber = isNaN(num) || num === null || num === undefined ? 0 : num; // Fallback to 0 if num is invalid
  return validNumber.toLocaleString();
};

// Format date in "YYYY-MM-DD" format
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  // Extract year, month, and day
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Pad month with leading zero
  const day = date.getDate().toString().padStart(2, "0"); // Pad day with leading zero

  return `${year}-${month}-${day}`;
};

// FORMAT NUMBER With no Decimal
export const formatNumberNoDecimalShort = (value: number): string => {
  const suffixes = ["", "k", "M", "B", "T"];
  let suffixIndex = 0;

  while (value >= 1000 && suffixIndex < suffixes.length - 1) {
    value /= 1000;
    suffixIndex++;
  }

  // Use Math.floor to remove decimal places
  return `${Math.floor(value)}${suffixes[suffixIndex]}`;
};

// FORMAT NUMBER WITH 2 DECIMAL PLACES WITHOUT SUFFIXES
export const formatNumberWithTwoDecimalsNoSuffix = (
  value: number | string | null | undefined
): string => {
  // Ensure the value is a number
  const numericValue = parseFloat(value as string);

  // Check if the value is not a valid number
  if (isNaN(numericValue)) {
    return "0"; // or handle the case as needed
  }

  // Format number with two decimal places
  const formattedValue = numericValue.toFixed(2);

  // Remove trailing .00 if there are no decimal values
  return formattedValue.endsWith(".00")
    ? formattedValue.slice(0, -3)
    : formattedValue;
};
