import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";
import CartDropdown from "./CartDropdown";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <nav className="bg-gray-300 py-4 text-[18px] relative">
      <div className="flex justify-evenly items-center">
        <div>
          <img src="" alt="LOGO" />
        </div>
        <div className="flex items-center space-x-6">
          <button className="px-6">Home</button>
          <button className="px-6">Our Products</button>
          <button className="px-6">About Us</button>
        </div>
        <div className="flex gap-x-6">
          <button>
            <IoSearch />
          </button>
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
