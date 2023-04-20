import React from "react";
import { useGetProdectQuery } from "../../store/services/prodectApi";
import CategoryCart from "../../components/CategoryCart";
import ProdectCart from "../../components/ProdectCart";
import Container from "../../components/Container";
import { FadeLoader } from "react-spinners";

const Prodect = () => {
  const { data, isLoading, isError } = useGetProdectQuery();
  return (
    <Container>
      <h1 className="mt-20 text-2xl font-semibold uppercase mb-4">
        All Prodect
      </h1>
      <div className="grid grid-cols-5 gap-6">
        {isLoading ? (
          <div className="">
            <FadeLoader
              color="orange"
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : isError ? (
          <div className="">something went wrong</div>
        ) : (
          data?.map((item) => <ProdectCart item={item} />)
        )}
      </div>
    </Container>
  );
};

export default Prodect;
