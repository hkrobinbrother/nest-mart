import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ThreeCard from "./ThreeCard";

const SmallCards = () => {
  const cardName = [
    {
      id: 1,
      img: "https://i.ibb.co.com/9H3z94PP/Figure-1.png",
      name: "Cake & Milk",
      item: "11 items",
      color: "bg-blue-200"
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/qMZfJ4X6/Figure-2.png",
      name: "Cake & Milk",
      item: "11 items",
      color: "bg-red-200"
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/PZf47tW7/Figure-3.png",
      name: "Cake & Milk",
      item: "11 items",
      color: "bg-orange-200"
    },
    {
      id: 4,
      img: "https://i.ibb.co.com/STstvzd/Figure-4.png",
      name: "Cake & Milk",
      item: "11 items",
      color: "bg-green-200"
    },
    {
      id: 5,
      img: "https://i.ibb.co.com/tT3qb8p8/Figure-6.png",
      name: "Cake & Milk",
      item: "11 items",
      color: "bg-purple-200"
    },
    {
      id: 6,
      img: "https://i.ibb.co.com/gbCZ3tQQ/Figure-5.png",
      name: "Cake & Milk",
      item: "11 items",
      color: "bg-gray-200"
    },
    {
      id: 7,
      img: "https://i.ibb.co.com/B2vpQQ8d/Figure-7.png",
      name: "Cake & Milk",
      item: "11 items",
      color: "bg-blue-200"
    },
    {
      id: 8,
      img: "https://i.ibb.co.com/sv9htB2B/Figure-8.png",
      name: "Cake & Milk",
      item: "11 items",
      color: "bg-green-200"
    },
    {
      id: 9,
      img: "https://i.ibb.co.com/mV8kzVPf/Figure-9.png",
      name: "Cake & Milk",
      item: "11 items",
      color: "bg-red-200"
    },
    {
      id: 10,
      img: "https://i.ibb.co.com/yF7YWt7v/Figure-10.png",
      name: "Cake & Milk",
      item: "11 items",
      color: "bg-yellow-200"
      
    },
  ];
  return (
    <div className="container mx-auto space-y-4">
      <h1 className="text-5xl font-semibold text-green-400">
        Featured Categories
      </h1>
      
        <div className="grid grid-cols-1 md:grid-cols-10 gap-2">
              {/* <h1>
                <FaArrowLeft className="px-2 py-2 rounded-full bg-gray-400" />
              </h1> */}
          {cardName.map((card) => (
            <div className={`${card?.color} rounded-lg flex flex-col  items-center gap-4 p-2`}>
              <div>
                <img src={card.img} alt="" />
                <div className="items-center flex flex-col">
                  <h1>{card.name}</h1>
                  <p>{card.item}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
          {/* <h1>
            <FaArrowRight />
          </h1> */}
      <ThreeCard/>
    </div>
  );
};

export default SmallCards;
