import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LiaRetweetSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { LiaEyeSolid } from "react-icons/lia";
import { BsCart } from "react-icons/bs";
import { addToCart } from "../features/productSlice.js";
import CategoryButton from "./CategoryButton.jsx";
import { useNavigate } from "react-router-dom";
// import { handleAddToCart } from "../utils/cartUtils";

const Product = () => {
  
const navigate = useNavigate();

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  const [selectedCategory, setSelectedCategory] = useState("Protein");

  const filterProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const handleAddToCart = (productId) =>{
dispatch(addToCart(productId))
  }

  
  return (
    <>
      <div className="text-center my-10 px-4">
        <h2 className="text-3xl font-bold text-gray-800">Our Products</h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae earum
          voluptatem animi, porro unde nisi quis non facilis alias assumenda?
        </p>

        <div>
          {[
            "Protein",
            "Creatine",
            "Pre-Workout",
            "Mass Gainer",
            "Multivitamins",
            "Fat Burner",
          ].map((category) => (
            <CategoryButton
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              isActive={selectedCategory === category}  
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 mb-10">
        {filterProducts.slice(0, 4).map((product, index) => (
          
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-2xl overflow-hidden group transition-transform transform hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-cover"
            />

            <div className="absolute  inset-0 bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center px-4 py-2">
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

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <div className="text-pink-600 font-bold mt-1">
                ${product.price}
              </div>
            </div>
            
          </div>
          
        ))}
        <div className="w-full flex justify-center">
        <button  onClick={() => navigate(`/products/${selectedCategory}`)} className="border-2 border-gray-400 text-gray-700 hover:bg-gray-100 transition duration-200 rounded-full px-5 py-2 m-2">View all</button>
        </div>
      </div>
    </>
  );
};

export default Product;
