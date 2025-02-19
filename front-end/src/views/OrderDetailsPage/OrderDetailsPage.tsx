import { useNavigation, useLoaderData } from 'react-router-dom';
import { Order } from '../../types/order';
import { OrderDetails } from '../../components/OrderDetails/OrderDetails';

export function OrderDetailsPage() {
  const order = useLoaderData() as Order;
  const navigation = useNavigation();

  return (
    <main
      className={`bg-light-grey px-8 pb-40 transition-all duration-300 lg:px-10 ${
        navigation.state === 'loading' ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <div className="mx-auto min-h-[calc(100vh-400px)] max-w-[1120px]">
        <OrderDetails order={order} />
      </div>
    </main>
  );
}
