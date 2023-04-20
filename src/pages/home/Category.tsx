import React from "react";
import { useGetCategoryQuery } from "../../store/services/prodectApi";
import CategoryCart from "../../components/CategoryCart";
import Container from "../../components/Container";
import {FadeLoader} from "react-spinners";

const Category = () => {
  const { data, isLoading, isError } = useGetCategoryQuery();
  return (
    <Container>
      <div className="mt-20">
        <h1 className="text-gray-900 text-2xl font-semibold uppercase">
          Category
        </h1>
        <div className="grid grid-cols-4 gap-6 mt-5">
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
            data?.map((item) => <CategoryCart item={item} />)
          )}
        </div>
      </div>
    </Container>
  );
};

export default Category;
