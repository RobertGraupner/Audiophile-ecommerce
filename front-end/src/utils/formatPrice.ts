export function formatPrice(price: number): string {
  return price.toLocaleString('en-US', {
    style: 'decimal',
    maximumFractionDigits: 0,
  });
}
