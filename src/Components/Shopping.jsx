import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import ShoppingContext from "../ContextApi/Context";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled, useTheme } from "@mui/material/styles";
import SnackbarAlert from "./Snackbar";
import { IoIosCloseCircle } from "react-icons/io";

const Shopping = () => {
  //

  const { arrayShopping, setArrayShopping } = useContext(ShoppingContext);
  const [loading, setLoading] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      const totalPrice = arrayShopping.reduce(
        (acc, e) => acc + e.quantity * parseFloat(e.price.replace("$", "")),
        0
      );
      setTotalAmount(totalPrice);
    }, 1000);
  }, [arrayShopping]);

  //

  const incrementCount = (id) => {
    const updated = arrayShopping.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setArrayShopping(updated);
  };

  const decrementCount = (id) => {
    const updated = arrayShopping.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setArrayShopping(updated);
  };

  // Delete Product From  Cart

  const deleteProductFromCart = (id) => {
    setTimeout(() => {
      const deleted = arrayShopping.filter((item) => item.id !== id);
      setArrayShopping(deleted);
      setOpenSnackbar(true);
    }, 2000);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  //
  const handleEmptyTheCart = () => {
    setLoading(true);
    setTimeout(() => {
      setArrayShopping([]);
    }, 2000);
  };

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "var(--color-primary)",
      color: "white",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  //
  return (
    <Container
      sx={{ backgroundColor: theme.palette.neutral.main }}
      className={`w-full min-h-[80vh] rounded-b-2xl rounded-bl-2xl  flex ${
        arrayShopping.length === 0
          ? "justify-center items-center"
          : "justify-start items-start"
      }`}
    >
      {arrayShopping.length === 0 ? (
        <Container className="grid items-center justify-center w-full gap-7">
          <Box
            className="grid items-center justify-center p-10 rounded-full"
            sx={{ backgroundColor: theme.palette.neutral.secondary }}
          >
            <MdOutlineShoppingCart className="text-7xl text-gray-500/30" />
          </Box>
          <p className="text-gray-500 capitalize">The basket is empty</p>
          <Link to="/">
            <p className="capitalize three-btn">Back to homepage</p>
          </Link>
        </Container>
      ) : (
        <Container className="grid items-start justify-center gap-0 grid-col-1 xl:grid-cols-2 xl:gap-9">
          <Stack className="gap-5 !py-14 !w-full">
            {arrayShopping.map((product) => (
              <Box
                className="flex !w-[100%] gap-5 md:gap-20 flex-col sm:flex-row !min-h-[130px] p-4 justify-between items-center rounded-xl"
                sx={{
                  backgroundColor: theme.palette.neutral.secondary,
                  color: theme.palette.textColor.main,
                }}
                key={product.id}
              >
                <div className="flex items-center justify-between w-full gap-5">
                  <Box
                    component="img"
                    className="bg-white rounded-2xl !min-h-[80px] !max-w-[80px] border-[1px] border-gray-400/30 p-1"
                    src={product.image}
                  />
                  <Typography className="!font-bold !font-secondary capitalize !grow-1 !text-[16px] md:!text-[22px]  xl:!text-[15px] !max-w-18">
                    {product.title}
                  </Typography>
                </div>
                <div className="flex justify-between items-center gap-5 py-2 w-full border-y-[1px] border-y-gray-400/30 sm:border-none ">
                  <Stack className="!flex-row  border-2 border-gray-400/30 rounded-[8px] justify-between items-center !w-[120px] !overflow-hidden">
                    <button
                      onClick={() => decrementCount(product.id)}
                      className="!border-r-2 !rounded-none !py-[2px] border-gray-400/30 !w-10 cursor-pointer text-[20px]"
                    >
                      -
                    </button>
                    <span className="px-5 py-1"> {product.quantity}</span>
                    <button
                      onClick={() => incrementCount(product.id)}
                      className="!border-l-2 !py-[2px] border-gray-400/30 !rounded-none !w-10 cursor-pointer text-[20px]"
                    >
                      +
                    </button>
                  </Stack>{" "}
                  <Stack className="!flex-row gap-2 justify-between relative">
                    <Typography className="!font-bold !font-secondary capitalize !text-[16px] md:!text-[22px] xl:!text-[15px]">
                      total:{" "}
                    </Typography>
                    <Typography className="!mr-4 !font-bold !font-secondary capitalize text-secondary !text-[16px] md:!text-[22px]  xl:!text-[15px]">
                      {`$${(
                        parseFloat(product.price.replace("$", "")) *
                        product.quantity
                      ).toFixed(2)}
                 `}
                    </Typography>
                    <LightTooltip title="Delete">
                      <button
                        onClick={() => {
                          deleteProductFromCart(product.id);
                        }}
                        className="absolute top-[-123px] sm:top-[-44px] right-[-11px]  text-[26px] text-red-600 hover:text-red-400 !duration-300 cursor-pointer"
                      >
                        <IoIosCloseCircle />
                      </button>
                    </LightTooltip>

                    {/* Snackbar for product deletion */}

                    <SnackbarAlert
                      open={openSnackbar}
                      onClose={handleCloseSnackbar}
                      message={"The product has been successfully deleted."}
                    />
                  </Stack>
                </div>
              </Box>
            ))}
          </Stack>

          {/*               order summary           */}

          <Container
            className="grid items-center gap-4 py-5 rounded-2xl mb-14 xl:my-14"
            sx={{
              backgroundColor: theme.palette.neutral.secondary,
              color: theme.palette.textColor.main,
            }}
          >
            <Typography
              variant="h6"
              className="!font-secondary !font-semibold capitalize"
            >
              order summary
            </Typography>
            <Stack className="!flex-row justify-between items-center !mb-2 !mt-3 text-gray-500">
              <Typography className=" !font-secondary">
                Total Products
              </Typography>
              <Typography>{`$${totalAmount.toFixed(2)}`}</Typography>
            </Stack>
            <Stack className="!flex-row justify-between items-center !mb-5 text-gray-500">
              <Typography className=" !font-secondary">Total</Typography>
              <Typography>{`$${totalAmount.toFixed(2)}`}</Typography>
            </Stack>

            <Button className="!text-[16px] md:!text-[19px] !font-secondary !flex !flex-row !justify-center items-center capitalize three-btn  !grow-1 !px-5 !py-2 !mx-4 hover:!bg-transparent">
              Complete the order
            </Button>
            <Button
              onClick={handleEmptyTheCart}
              className="!text-[16px] md:!text-[19px] !font-secondary !flex !flex-row !justify-center items-center capitalize three-btn  !grow-1 !px-5 !py-2 !mx-4 hover:!bg-transparent"
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Empty the cart"
              )}
            </Button>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default Shopping;
