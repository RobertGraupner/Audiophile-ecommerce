import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { OrdersList } from '../../components/OrdersList/OrdersList';
import { Order } from '../../types/order';

export function OrdersPage() {
  const orders = useLoaderData() as Order[];
  const navigation = useNavigation();

  return (
    <main
      className={`bg-light-grey px-8 pb-40 transition-all duration-300 lg:px-10 ${
        navigation.state === 'loading' ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <div className="mx-auto min-h-[calc(100vh-400px)] max-w-[1120px] py-8 md:py-20">
        <Link
          to="/"
          className="text-[15px] leading-[25px] opacity-50 hover:text-primary hover:opacity-100"
        >
          Go back
        </Link>
        <div className="mt-14 min-h-96 rounded-lg">
          <h1 className="mb-8 text-[32px] font-medium leading-9 tracking-[1.1px]">
            Orders
          </h1>
          <OrdersList orders={orders} />
        </div>
      </div>
    </main>
  );
}
