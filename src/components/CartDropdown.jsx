import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { removeFromCart } from "../features/productSlice";
import { useNavigate } from "react-router";

const CartDropdown = () => {
const navigate = useNavigate()

  const cartItems = useSelector((state) => state.products.cartItem);
  const dispatch = useDispatch();
  const removeItem = (productId) =>{
    dispatch(removeFromCart(productId))
  }
  
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    // <div className="absolute top-16 z-50 right-0 w-80">
    //   <div className="max-h-80 overflow-y-auto">
    //     {cartItems.map((item) => (
    //       <div key={item.id} className="flex items-center">
    //         <img src={item.url} alt="" className="object-cover w-16 h-16" />
    //         <div>
    //           <h4>{item.title}</h4>
    //           <div>
    //             <span>{item.quantity}</span>
    //             <span>{item.price}</span>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="absolute right-0 top-16 w-80 bg-white shadow-xl rounded-lg z-50 p-4">
      <div className="max-h-80 overflow-y-auto">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center border-b py-3 gap-3">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-700">
                {item.title}
              </h4>
              <div className="flex items-center text-sm gap-2 mt-1">
                <span className="text-gray-700">{item.quantity}</span>
                <span className="text-pink-500 font-bold">
                  ${item.price}
                </span>
                
              </div>
            </div>
            <button onClick={()=>removeItem(item.id)} className="text-gray-500 hover:text-red-600">
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t pt-4 text-sm">
        <div className="flex justify-between font-semibold">
          <span>SUB TOTAL:</span>
          <span>${totalPrice}</span>
        </div>
        <button onClick={() =>navigate('/checkoutpage')} className="w-full mt-4 bg-gray-500 text-white font-bold py-2 rounded hover:bg-gray-600 transition">
          CHECKOUT
        </button>
        <button className="w-full mt-2 border-2 border-gray-500 text-gray-500 font-bold py-2 rounded hover:bg-gray-200 transition">
          VIEW CART
        </button>
      </div>
    </div>
  );
};

export default CartDropdown;
