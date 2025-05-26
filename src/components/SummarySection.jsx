import React from 'react';
import { useSelector } from 'react-redux';

const SummarySection = () => {
  const cartItems = useSelector(state => state.products.cartItem);

  const subtotal = cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  const shipping = 0;

  return (
    <div className="mt-4 border-t pt-4">
      <div className="flex justify-between mb-2">
        <span className="font-medium">Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">Shipping:</span>
        <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
      </div>
      <div className="flex justify-between font-semibold text-lg mt-2">
        <span>Total:</span>
        <span>${(subtotal + shipping).toFixed(2)}</span>
      </div>
      <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Check Out</button>
    </div>
  );
};

export default SummarySection;
