import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (food) => {
    console.log('Adding to cart:', food);
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === food.id);
      const newCart = existing
        ? prevCart.map((item) =>
            item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prevCart, { ...food, quantity: 1 }];
      console.log('New cart state:', newCart);
      return newCart;
    });
  };

  // Remove one item (– button)
  const removeFromCart = (foodId) => {
    console.log('Removing from cart:', foodId);
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === foodId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Clear all items from cart (after placing order)
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;