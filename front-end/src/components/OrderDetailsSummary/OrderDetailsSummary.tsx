import { formatPrice } from '../../utils/formatPrice';

interface OrderDetailsSummaryProps {
  total: number;
  vat: number;
}

export function OrderDetailsSummary({ total, vat }: OrderDetailsSummaryProps) {
  return (
    <div className="mt-8 rounded-lg bg-gray-50 p-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-medium text-gray-900">
            ${formatPrice(total - vat - 50)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Shipping</span>
          <span className="font-medium text-gray-900">$50</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">VAT</span>
          <span className="font-medium text-gray-900">${formatPrice(vat)}</span>
        </div>
        <div className="flex justify-between border-t pt-4">
          <span className="font-medium text-gray-900">Total</span>
          <span className="font-bold text-primary">${formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
}
