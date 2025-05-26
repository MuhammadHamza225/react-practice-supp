import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";
import CartDropdown from "./CartDropdown";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState();
  const navigate = useNavigate();
const handldeSearch = (e) =>{
e.preventDefault();
if(searchQuery.trim()){
 navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
}
}

  return (
    <nav className="bg-gray-300 py-4 text-[18px] relative">
      <div className="flex justify-evenly items-center">
        <div>
          <img src="" alt="LOGO" />
        </div>
        <div className="flex items-center space-x-6">
          <button onClick={() => navigate("/")} className="px-6">
            Home
          </button>
          <button onClick={() => navigate("/ourproducts")} className="px-6">
            Our Products
          </button>
          <button className="px-6">About Us</button>
        </div>
        <div className="flex gap-x-6">
          <form onSubmit={handldeSearch} className="flex items-center space-x-2 bg-white px-2 py-1 rounded shadow">
            <input type="text" value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)} 
            placeholder="search..."
            className="bg-transparent outline-none w-32 sm:w-48"/>

            <button type="submit">
              <IoSearch />
            </button>
          </form>
          <div className="relative">
            {cartOpen && <CartDropdown />}

            <button onClick={() => setCartOpen(!cartOpen)}>
              <AiOutlineShoppingCart />
            </button>
          </div>
        </div>
        <div className="flex gap-x-6">
          account{" "}
          <span className="py-1">
            <RiUser3Line />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
