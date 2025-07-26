import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Data } from "../ConstData/data";
import { useParams } from "react-router-dom";
import ShoppingContext from "../ContextApi/Context";
import { useMemo } from "react";
import SnackbarAlert from "./Snackbar";
import CardMenu from "./CardMenu";
const ProductInfo = () => {
  //
  const { productId } = useParams();
  //   console.log(productId);

  const { arrayShopping, setArrayShopping } = useContext(ShoppingContext);
  const selectedProduct = Data.find((product) => product.id == productId);

  //   console.log(Data);
  // console.log(selectedProduct);
  //
  // const productInCart = arrayShopping.find(
  //   (item) => item.id === selectedProduct.id
  // );

  const productInCart = useMemo(
    () => arrayShopping.find((item) => item.id === selectedProduct?.id),
    [arrayShopping, selectedProduct]
  );

  const [quantity, setQuantity] = useState(
    productInCart ? productInCart.quantity : 1
  );
  const incrementCountQ = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementCountQ = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  //

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openSnackbarAdd, setOpenSnackbarAdd] = useState(false);
  const theme = useTheme();

  const handleOnClickAddToCart = (product) => {
    const exists = arrayShopping.some((item) => item.id === product.id);
    if (exists) {
      const updated = arrayShopping.map((item) =>
        item.id === product.id ? { ...item, quantity } : item
      );
      setArrayShopping(updated);
      setOpenSnackbar(true);
    } else {
      setArrayShopping((prev) => [...prev, { ...product, quantity }]);
      setOpenSnackbarAdd(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setOpenSnackbarAdd(false);
  };

  return (
    <Container
      className="grid grid-cols-1 md:grid-cols-2 !my-10 !gap-7 !px-8 rounded-2xl py-12 "
      sx={{ backgroundColor: theme.palette.neutral.main }}
    >
      <Box
        component="img"
        className=" rounded-2xl min-h-auto md:!min-h-[425px] !max-w-full"
        sx={{ backgroundColor: theme.palette.neutral.secondary }}
        src={selectedProduct.image}
      />
      <Box className="!flex !flex-col justify-start gap-12 pt-5">
        <Typography className="!font-bold !font-secondary capitalize">
          {selectedProduct.title}
        </Typography>
        <Stack
          className="!flex-row gap-7 items-center"
          sx={{ color: theme.palette.neutral.three }}
        >
          <button className="flex content-center rounded-full bg-white p-4 text-[19px] cursor-pointer ">
            <FaRegHeart />
          </button>
          <button className="flex content-center rounded-full bg-white p-4 text-[19px] cursor-pointer ">
            <IoMdShare />
          </button>
        </Stack>
        <Stack className="!flex-row justify-between">
          <Typography className="!font-bold !font-secondary capitalize">
            Price{" "}
          </Typography>
          <Typography className="!mr-4 !font-bold !font-secondary capitalize text-secondary">
            {`$${(
              parseFloat(selectedProduct.price.replace("$", "")) * quantity
            ).toFixed(2)}`}{" "}
          </Typography>
        </Stack>
        <Stack className="!flex-row justify-between items-center">
          <Typography className="!font-bold !font-secondary capitalize">
            {" "}
            Quantity{" "}
          </Typography>
          <Stack className="!flex-row border-2 border-gray-500 rounded-[8px] justify-between items-center !w-[120px] !overflow-hidden">
            <button
              onClick={decrementCountQ}
              className="!border-r-2 !rounded-none !py-[2px] border-gray-500 !w-10 cursor-pointer text-[20px]"
            >
              -
            </button>
            <span className="px-5 py-1"> {quantity}</span>
            <button
              onClick={incrementCountQ}
              className="!border-l-2 !py-[2px] border-gray-500 !rounded-none !w-10 cursor-pointer text-[20px]"
            >
              +
            </button>
          </Stack>
        </Stack>
        <Box
          onClick={() => handleOnClickAddToCart(selectedProduct)}
          className="!flex !flex-row !justify-center  items-center w-52 !px-6 !py-2 capitalize cursor-pointer three-btn"
        >
          <Typography className="!text-[18px] !font-bold !font-secondary">
            {" "}
            add to cart
          </Typography>

          <MdOutlineShoppingCart className="!ml-1.5 !text-[20px]" />
        </Box>
      </Box>
      {/* Snackbar for  Data updated */}
      <SnackbarAlert
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message={"Data updated successfully"}
      />
      <SnackbarAlert
        open={openSnackbarAdd}
        onClose={handleCloseSnackbar}
        message={"The product has been added to the cart."}
      />
    </Container>
  );
};

export default ProductInfo;
