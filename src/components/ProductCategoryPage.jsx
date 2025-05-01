import React from 'react'
import {  useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LiaRetweetSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { LiaEyeSolid } from "react-icons/lia";
import { BsCart } from "react-icons/bs";
import { addToCart } from '../features/productSlice.js';
// import { handleAddToCart } from '../utils/cartUtils.js';



const ProductCategoryPage = () => {

  const dispatch = useDispatch()
 
    const { category } = useParams();
    const products = useSelector((state) => state.products.items);
  
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
const handleAddToCart = (productId) =>{
  dispatch(addToCart(productId))
}

  return (
    <div className='p-6'>
      <h2 className="text-2xl font-bold mb-4">{category} Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <div key={product.id} className="bg-white shadow rounded p-4 relative">
            <img src={product.image} alt={product.title} className="h-60 w-full object-cover mb-2" />
             <div className="absolute  inset-0 bg-white/70 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-between items-center px-4 py-2">
                          <BsCart
                            onClick={() => handleAddToCart(product.id)}
                            className="text-xl text-gray-500 hover:text-pink-500 cursor-pointer"
                          />
                          <div className="flex space-x-2">
                            <CiHeart className="text-gray-500 hover:text-pink-500 cursor-pointer" />
                            <LiaRetweetSolid className="text-gray-500 hover:text-pink-500 cursor-pointer" />
                            <LiaEyeSolid className="text-gray-500 hover:text-pink-500 cursor-pointer" />
                          </div>
                        </div>
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-pink-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCategoryPage
