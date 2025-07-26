import React from "react";
import FormComment from "../Components/FormComment";
import ProductInfo from "../Components/Product";
import CardMenuLike from "../Components/CardMenuLike";

const Product = () => {
  return (
    <div>
      <ProductInfo />

      <FormComment />
      <CardMenuLike />
    </div>
  );
};

export default Product;
