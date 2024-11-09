// CartItem.tsx
import React from "react";
import { CartItemType } from "../types";


interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div>
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="number"
          value={item.quantity}
          min={1}
          onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
          className="w-16 border rounded px-2 py-1"
        />
        <button
          onClick={() => onRemoveItem(item.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
