import React from "react";
import { useParams } from "react-router-dom";
import { useGetCategoryItemQuery } from "../../store/services/prodectApi";
import ProdectCart from "../../components/ProdectCart";
import Container from "../../components/Container";
import { FadeLoader } from "react-spinners";
const CatProdect = () => {
  const { category } = useParams();
  const { data, isError, isLoading } = useGetCategoryItemQuery(category);
  return (
    <Container>
      <div className="grid grid-cols-4 gap-6 mt-10">
        {isLoading ? (
          <div className="">
            <FadeLoader color="orange" />
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

export default CatProdect;
