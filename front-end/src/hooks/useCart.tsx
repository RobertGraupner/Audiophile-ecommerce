import { useContext } from 'react';
import { CartContext, CartContextType } from '../contexts/CartContext';

// Thanks to the hook we dont need to import the context and use the useContext hook in every component that needs the cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
