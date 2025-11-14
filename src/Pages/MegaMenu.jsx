import React from "react";
import { useLoaderData } from "react-router";
import MegaMenuCard from "../Components/MegaMenuCard";

const MegaMenu = () => {
  const cards = useLoaderData();
  return (
    <div className="container mx-auto mt-4  ">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-400">Popular Products</h1>
        </div>
        <div className="text-xl flex gap-6 text-gray-400 font-bold">
            <a href="" className="text-green-500 font-bold">All</a>
            <a href="">Baking Material</a>
            <a href="">Fresh Fruits</a>
            <a href="">Vegetables</a>
            <a href="">Milk & Dairies</a>
            <a href="">Meats</a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {cards.map((product, index) => (
          <MegaMenuCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
