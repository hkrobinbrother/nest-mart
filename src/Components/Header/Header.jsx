import React, { useContext } from "react";
import { Link, NavLink } from "react-router";


import { UserContext } from "../../UserContext";


const Header = () => {
  const {user,logOut} = useContext(UserContext)
  
  
  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center h-[80px]">
        <div className="flex gap-2 items-center ">
          <img src="https://i.ibb.co.com/TqFmfJrF/logo.png" alt="" />
          <div>
            <NavLink to="/" className="text-4xl text-green-400 font-bold">
              Nest
            </NavLink>
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
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 text-xl font-extrabold"
                : "text-gray-500 text-xl font-extrabold  "
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-green-400 text-xl font-extrabold"
                : "text-gray-400 text-xl font-extrabold"
            }
          >
            About
          </NavLink>
          <NavLink className={({ isActive }) =>
              isActive
                ? "text-green-400 text-xl font-extrabold"
                : "text-gray-400 text-xl font-extrabold"
            }>Shop</NavLink>
          <NavLink className={({ isActive }) =>
              isActive
                ? "text-blue-400 text-xl font-extrabold"
                : "text-gray-500 text-xl font-extrabold  "
            }
            to="/megaMenu"
            >Mega Menu </NavLink>
          <NavLink className={({ isActive }) =>
              isActive
                ? "text-green-400 text-xl font-extrabold"
                : "text-gray-500 text-xl font-extrabold  "
            }
            
            >Vendors </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 text-xl font-extrabold"
                : "text-gray-500 text-xl font-extrabold  "
            }
            to="/blog"
          >
            Blog{" "}
          </NavLink>
          <NavLink className={({ isActive }) =>
              isActive
                ? "text-green-400 text-xl font-extrabold"
                : "text-gray-500 text-xl font-extrabold  "
            }>Pages</NavLink>
          <NavLink className={({ isActive }) =>
              isActive
                ? "text-green-400 text-xl font-extrabold"
                : "text-gray-500 text-xl font-extrabold  "
            }
            to="/contact"
            >Contact</NavLink>
        </div>
        <div>
          <Link to="/login" className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
