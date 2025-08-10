import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = CartContext.Provider;

export function CustomCartProvider({ children }) {
  const [quantity, setQuantity] = useState(0);
  const contextValue = {
    quantity: quantity,
    totalPrice: 0,
    cart: [],
    setQuantity: setQuantity,
  };

  return <CartProvider value={contextValue}>{children}</CartProvider>;
}
