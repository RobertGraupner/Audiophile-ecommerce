export const calculateTotal = (
  cartItems: { price: number; quantity: number }[]
) => {
  return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
};
