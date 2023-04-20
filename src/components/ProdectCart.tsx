import React from "react";
import { Link } from "react-router-dom";

interface IProdectItem {
  item: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: object;
  };
}

const ProdectCart: React.FC<IProdectItem> = ({ item }) => {
  return (
    <Link to={`/details/${item.id}`}>
    <div className="border border-gray-300 cursor-pointer px-2 py-4 hover:scale-105 duration-300 transition-all hover:shadow-lg">
      <img src={item.image} alt="" className="h-[200px] mx-auto" />
      <h1 className="text-lg font-medium">{item.title?.slice(0,50)}...</h1>
      <h3 className="text-md font-medium text-orange-500">Price: {item.price}</h3>
    </div>
    </Link>
  );
};

export default ProdectCart;
