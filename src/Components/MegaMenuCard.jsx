import React from "react";
import { FaRegStar, FaShoppingCart } from "react-icons/fa";

const MegaMenuCard = ({ product }) => {
  const {
    id,
    productName,
    brand,
    stoke,
    poweredBy,
    oldPrice,
    currentPrice,
    offPercentage,
    batch,
    rating,
    img,
  } = product;
  return (
    <div className="container mx-auto mt-4">
      <div className="flex flex-col justify-between">
        <div className="card bg-base-100  shadow-sm">
          <figure className="h-[200px]">
            <img src={img} className="  object-cover" alt="" />
          </figure>
          <div className="card-body ">
            <div className="flex flex-col justify-between  h-[200px]">
              <div>
                <h2 className="text-gray-300 text-xl">{brand}</h2>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{productName}</h1>
              </div>
              <div>
                <h1 className="flex text-xl justify-between">
                  <h1 className="flex gap-1 text-amber-300">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </h1>
                  <h1> {rating}</h1>
                </h1>
              </div>
              <h1 className="flex gap-2">
                <span className="text-xl text-gray-300">By</span>{" "}
                <span className="text-xl text-green-500">{poweredBy}</span>{" "}
              </h1>
              <div className="flex justify-between items-center">
                <div className="text-xl flex gap-4">
                  <h1 className="text-green-400">${currentPrice}</h1>
                  <h1 className="text-gray-400 line-through">${oldPrice}</h1>
                </div>
                <div className="">
                  <button className="btn flex bg-green-300">
                    <FaShoppingCart />
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuCard;
