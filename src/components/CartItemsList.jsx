import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../features/productSlice';

const CartItemsList = () => {
  const cartItems = useSelector(state => state.products.cartItem);
  const dispatch = useDispatch();

  const decrementQuantity = (item) => {
    if (item.quantity === 1) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(removeFromCart(item.id));
      for (let i = 0; i < item.quantity - 1; i++) {
        dispatch(addToCart(item.id));
      }
    }
  };

  return (
    <div className="space-y-6">
      {cartItems.map(item => (
        <div key={item.id} className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
            <div>
              <p className="font-semibold">{item.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded">
              <button onClick={() => decrementQuantity(item)} className="px-2">-</button>
              <span className="px-4">{item.quantity}</span>
              <button onClick={() => dispatch(addToCart(item.id))} className="px-2">+</button>
            </div>
            <p className="w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500">×</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemsList;
