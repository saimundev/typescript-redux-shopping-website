import React from "react";
import { useGetSingleProdectQuery } from "../../store/services/prodectApi";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import { FadeLoader } from "react-spinners";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../store/feachers/cartSlice";
const Details = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProdectQuery(id);

  const dispatch = useAppDispatch();
  const handleCart = () => {
    dispatch(addToCart(data));
  };

  if (isLoading)
    return (
      <div className="flex justify-center mt-20">
        <FadeLoader
          color="orange"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  return (
    <Container>
      <div className="grid grid-cols-2 gap-6 mt-20">
        <img src={data?.image} alt="" className="h-[400px] mx-auto" />
        <div className="">
          <h1 className="text-2xl font-bold ">{data?.title}</h1>
          <h3 className="text-xl font-bold text-orange-500 my-3">
            Price: {data?.price}
          </h3>
          <p>{data?.description}</p>
          <button
            onClick={handleCart}
            className="px-6 py-2 bg-orange-500 rounded text-white mt-4 hover:bg-orange-700 duration-300"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Details;
