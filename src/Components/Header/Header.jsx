import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center h-[80px]">
        <div className="flex gap-2 items-center ">
          <img src="https://i.ibb.co.com/TqFmfJrF/logo.png" alt="" />
          <div>
            <NavLink to="/" className="text-4xl text-green-400 font-bold">Nest</NavLink>
            <p>MART & GROCERY</p>
          </div>
          <div className="flex gap-2 items-center ml-6">
            <img
              className="h-8"
              src="https://i.ibb.co.com/xSmzFW2X/SVG.png"
              alt=""
            />
            <h1 className="font-bold">Hot Deals</h1>
          </div>
        </div>
        <div className="flex gap-6 font-bold">
          <a href="">About</a>
          <a href="">Shop</a>
          <a href="">Mega Menu </a>
          <a href="">Vendors </a>
          <NavLink to="/blog">Blog </NavLink>
          <a href="">Pages</a>
          <a href="">Contact</a>
        </div>
        <div>
          <button className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
