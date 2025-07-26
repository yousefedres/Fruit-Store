import React from "react";
import CardProducts from "../Components/CardProducts";
import Search from "../Components/Search";
import { useState } from "react";
import CardMenu from "../Components/CardMenu";
import Review from "../Components/Review";
import { Container, useTheme } from "@mui/material";

const Products = () => {
  //

  const [SearchValue, setSearchValue] = useState("");
  const theme = useTheme();

  return (
    <Container>
      {/* <div className="w-full h-72 bg-[url(/images/imge.avif)] bg-contain"> */}
      <Search SearchValue={SearchValue} setSearchValue={setSearchValue} />
      <h1
        style={{ color: theme.palette.textColor.main }}
        className="text-2xl font-secondary capitalize !my-6 text-gray-500 pl-2  "
      >
        More than 15 products
      </h1>
      {/* </div> */}
      <CardProducts SearchValue={SearchValue} />
      <Review />
    </Container>
  );
};

export default Products;
