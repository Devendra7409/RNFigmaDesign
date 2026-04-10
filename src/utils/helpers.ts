export const formatCurrency = (
  value: number,
  currency = '₹',
  decimals = 2,
): string => {
  return `${currency}${value.toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
};

export const formatCompact = (value: number): string => {
  if (value >= 1_00_00_000) return `${(value / 1_00_00_000).toFixed(2)}Cr`;
  if (value >= 1_00_000) return `${(value / 1_00_000).toFixed(2)}L`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return `${value}`;
};

export const getGreeting = (date: Date = new Date()): string => {
  const h = date.getHours();
  if (h < 12) return 'Good Morning';
  if (h < 17) return 'Good Afternoon';
  return 'Good Evening';
};

export const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));
