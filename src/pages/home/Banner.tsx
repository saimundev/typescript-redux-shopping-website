import React from "react";
import Container from "../../components/Container";

const Banner = () => {
  return (
    <div className="mt-4">
      <Container>
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=2000"
            alt=""
            className="h-[550px] w-full rounded"
          />
          <div className="absolute top-[40%] left-8">
          <h1 className=" text-white text-4xl font-bold">Weccome to Our  <span className="text-orange-700">E-Shop</span> Brand</h1>
          <h1 className="text-3xl font-semibold text-orange-700 mt-3">Happy Shopping For You</h1>
          <button className="bg-orange-500 px-6 py-2 text-white rounded font-medium mt-5 ring-1 ring-white">Continue Shopping</button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Banner;

