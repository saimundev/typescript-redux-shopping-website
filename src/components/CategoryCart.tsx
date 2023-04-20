import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

interface IItem {
  item: string;
}

const CategoryCart: React.FC<IItem> = ({ item }) => {
  return (
   <Link to={`/catprodect/${item}`}>
    <div className="bg-gradient-to-r from-orange-400 to-orange-500 hover:scale-105 duration-300 transition-all cursor-pointer flex justify-center items-center h-[100px] rounded">
      <h1 className="text-white text-xl font-semibold">{item}</h1>
    </div>
   </Link>
  );
};

export default CategoryCart;
