import React from "react";
import img1 from "../../../public/images/alt.png";
import img2 from "../../../public/images/alt_2.png";
import img3 from "../../../public/images/alt_3.png";
import { FaArrowRight } from "react-icons/fa";
const ThreeCard = () => {
  return (
    <div className="flex gap-2">
      <div className="relative">
        <div className="absolute space-y-4 left-8 top-10">
          <h1 className="text-2xl text-gray-500 font-bold">Everyday Fresh & <br /> Clean with Our <br /> Products</h1>
          <button className="flex btn bg-green-300 text-white font-bold">
            Shop Now <FaArrowRight />
          </button>
        </div>
        <img src={img1} alt="" />
      </div>
     <div className="relative">
        <div className="absolute space-y-4 left-8 top-10">
          <h1 className="text-2xl text-gray-500 font-bold">Everyday Fresh & <br /> Clean with Our <br /> Products</h1>
          <button className="flex btn bg-green-300 text-white font-bold">
            Shop Now <FaArrowRight />
          </button>
        </div>
        <img src={img2} alt="" />
      </div>
      <div className="relative">
        <div className="absolute space-y-4 left-8 top-10">
          <h1 className="text-2xl text-gray-500 font-bold">Everyday Fresh & <br /> Clean with Our <br /> Products</h1>
          <button className="flex btn bg-green-300 text-white font-bold">
            Shop Now <FaArrowRight />
          </button>
        </div>
        <img src={img3} alt="" />
      </div>
    </div>
  );
};

export default ThreeCard;
