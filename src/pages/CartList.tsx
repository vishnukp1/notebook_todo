// App.tsx
import React, { useState } from "react";
import { CartItemType } from "../types";
import CartItem from "./CartItem";



const App: React.FC = () => {
  const [cart, setCart] = useState<CartItemType[]>([
    { id: 1, name: "Apple", price: 1.5, quantity: 2 },
    { id: 2, name: "Orange", price: 2.0, quantity: 1 },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <>
    <div className="max-w-lg mx-auto p-6 mt-[45rem]">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
        />
      ))}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Total: ${getTotalPrice().toFixed(2)}</h2>
      </div>
    </div>
    </>
  );
};

export default App;

