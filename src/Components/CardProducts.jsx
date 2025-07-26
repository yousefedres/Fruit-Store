import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import { Data, MotionBox } from "../ConstData/data";
import { FadeLeft } from "../FramerMition/animation";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import ShoppingContext from "../ContextApi/Context";
import { useContext } from "react";
import SnackbarAlert from "./Snackbar";

const CardProducts = ({ SearchValue }) => {
  //
  const { arrayShopping, setArrayShopping } = useContext(ShoppingContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openSnackbarNo, setOpenSnackbarNo] = useState(false);
  const [visibleCount, setVisibleCount] = useState(15);
  const theme = useTheme();

  const filteredData =
    SearchValue && SearchValue.trim() !== ""
      ? Data.filter((element) =>
          element.title.toLowerCase().includes(SearchValue.toLowerCase())
        )
      : Data;

  if (filteredData.length === 0) {
    return (
      <Typography
        variant="h6"
        align="center"
        sx={{ mt: 4 }}
        className="font-semibold capitalize text-secondary"
      >
        No products found
      </Typography>
    );
  }
  //

  const handleOnClickAddToCart = (product) => {
    const exists = arrayShopping.some((item) => item.id === product.id);
    if (exists) {
      setOpenSnackbarNo(true);
      return;
    } else {
      setArrayShopping((prev) => [...prev, { ...product, quantity: 1 }]);
      setOpenSnackbar(true);
    }
  };
  console.log(arrayShopping);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setOpenSnackbarNo(false);
  };
  return (
    <Box
      className="my-5 !py-10 rounded-2xl "
      sx={{ backgroundColor: theme.palette.neutral.main }}
    >
      <Container className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {filteredData.slice(0, visibleCount).map((element) => (
          <MotionBox
            className="!min-h-[290px]"
            variants={FadeLeft(element.id * 0.3)}
            initial="hidden"
            whileInView="visible"
            key={element.id}
          >
            <Card className="p-4 max-h-fit !font-secondary text-[14px] !cursor-none !rounded-2xl !shadow-none mb-7">
              <div className="!cursor-auto">
                <Link
                  to={`/product/${element.id}/${element.title}`}
                  className="!w-full"
                >
                  <div className="max-w-full !min-h-[212px] !mb !pt-3 grid justify-center items-center hoverImg hover:!scale-[1.05] duration-300">
                    <CardMedia
                      component="img"
                      loading="lazy"
                      image={element.image}
                      className="!w-[200px] rounded-[50%]  drop-shadow-cardImg"
                    />
                  </div>{" "}
                </Link>

                <CardContent>
                  <Link
                    to={`/product/${element.id}/${element.title}`}
                    className="!w-full"
                  >
                    <Typography
                      className="!font-semibold !text-[15px] !py-1 !px-2 text-left hover:text-primary !duration-500"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {element.title}
                    </Typography>
                  </Link>
                  <Stack className="!flex-row !justify-between items-center my-2">
                    <Typography
                      variant="body2"
                      className="!font-bold !font-secondary text-secondary !py-1 !px-2"
                    >
                      {element.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="!font-bold !font-secondary text-secondary !py-1 !px-2 flex flex-row items-center gap-1"
                    >
                      <FaStar />
                      {element.rate}
                    </Typography>
                  </Stack>

                  <Stack className="!flex-row !justify-between items-center  my-5 gap-8">
                    <IconButton
                      onClick={() => handleOnClickAddToCart(element)}
                      className="!flex  !flex-row !justify-center items-center !z-50 capitalize three-btn !grow-1 !px-5 !py-2"
                    >
                      <Typography className="!text-[14px]">
                        add to cart
                      </Typography>

                      <MdOutlineShoppingCart className="!ml-1.5" />
                    </IconButton>
                    <Box>
                      <MdFavoriteBorder className="!text-[26px] hover:scale-90 duration-300" />
                    </Box>
                    {/*  */}
                    <SnackbarAlert
                      open={openSnackbar}
                      onClose={handleCloseSnackbar}
                      message={" The product has been added to the cart."}
                    />
                    <SnackbarAlert
                      open={openSnackbarNo}
                      onClose={handleCloseSnackbar}
                      message={"The product is already in the cart."}
                    />
                  </Stack>
                </CardContent>
              </div>
            </Card>
          </MotionBox>
        ))}
      </Container>
      {visibleCount < filteredData.length && (
        <Button
          className="capitalize !font-secondary !text-2xl !py-2 three-btn !block !m-auto !mt-2"
          onClick={() => {
            setVisibleCount(Data.length);
          }}
        >
          Load More
        </Button>
      )}
    </Box>
  );
};

export default CardProducts;
