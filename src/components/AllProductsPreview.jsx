import React, { useState } from 'react'
import { addToCart } from '../features/productSlice'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { LiaRetweetSolid, LiaEyeSolid } from "react-icons/lia";

import { useNavigate } from 'react-router';


const AllProductsPreview = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const products = useSelector((state)=> state.products.items)
  // const [selectedCategory,setSelectedCategory] = useState("Protein")
  const categories = [
    'Protein',
    'Creatine',
    'Pre-Workout',
    'Mass Gainer',
    'Multivitimins',
    'Fat Burner'
  ]
  
const handleAddToCart = (productId) =>{
dispatch(addToCart(productId))
}

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
      {categories.map((category)=>{
const categoryProducts = products.filter((product)=> product.category === category).slice(0,4)
return(
  <div className="mb-10" key={category}>
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold">{category}</h3>
      <button className="text-sm text-gray-700 border border-gray-400 px-3 py-1 rounded-full hover:bg-gray-100 transition" onClick={()=> navigate(`/products/${category}`)}>View All</button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categoryProducts.map((product)=>(
        <div className="bg-white shadow rounded p-4 relative group overflow-hidden" key={product.id}>
          <img  className="h-60 w-full object-cover mb-2" src={product.image} alt={product.title} />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center px-4 py-2"><BsCart onClick={()=>handleAddToCart(product.id)}
            className="text-xl text-gray-500 hover:text-pink-500 cursor-pointer"/>
            <div className="flex space-x-2"><CiHeart/>
            <LiaRetweetSolid/>
            <LiaEyeSolid/></div>
          </div>
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-pink-600 font-bold">{product.price}</p>
        </div>
        
      ))}
    </div>
  </div>
)

      })}
    </div>
  )
}

export default AllProductsPreview
