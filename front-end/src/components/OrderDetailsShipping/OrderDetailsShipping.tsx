interface OrderDetailsShippingProps {
  address?: {
    name: string;
    email: string;
    phone: string;
    address: string;
    zip: string;
    city: string;
    country: string;
  };
}

export function OrderDetailsShipping({ address }: OrderDetailsShippingProps) {
  if (!address) return null;

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-gray-900">Shipping Address</h2>
      <div className="space-y-2 text-sm text-gray-500">
        <p className="font-medium text-gray-900">{address.name}</p>
        <p>{address.email}</p>
        <p>{address.phone}</p>
        <p>{address.address}</p>
        <p>
          {address.city}, {address.zip}
        </p>
        <p>{address.country}</p>
      </div>
    </div>
  );
}
