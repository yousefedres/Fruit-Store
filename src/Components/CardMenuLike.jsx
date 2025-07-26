import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Data } from "../ConstData/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useRef, useState } from "react";
import { Box, Container, Stack, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { useContext } from "react";
import ShoppingContext from "../ContextApi/Context";
import SnackbarAlert from "./Snackbar";
import { useMemo } from "react";

const CardMenuLike = () => {
  //
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  //

  const { arrayShopping, setArrayShopping } = useContext(ShoppingContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openSnackbarNo, setOpenSnackbarNo] = useState(false);
  const theme = useTheme();

  const handleOnClickAddToCart = (product) => {
    const exists = arrayShopping.some((item) => item.id === product.id);
    if (exists) {
      setOpenSnackbarNo(true);
      return;
    } else {
    }
    setArrayShopping((prev) => [...prev, { ...product, quantity: 1 }]);
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setOpenSnackbarNo(false);
  };
  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  //
  const getRandomItems = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const randomProducts = useMemo(() => getRandomItems(Data, 10), []);

  return (
    <Container
      className="relative my-10 gap-4 !py-10 rounded-2xl"
      sx={{ backgroundColor: theme.palette.neutral.main }}
    >
      <Typography variant="h5" className="!font-secondary capitalize ">
        Products you may like
      </Typography>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay,EffectFade, Navigation]}
        className="my-8 mySwiper swiper-pagination"
      >
        {randomProducts.map((element) => (
          <SwiperSlide
            key={element.id}
            className="!rounded-2xl !bg-transparent"
          >
            <Box
              className="!min-h-[290px] duration-300"
              // variants={FadeLeft(element.id * 0.3)}
              // initial="hidden"
              // whileInView="visible"
              key={element.id}
            >
              <Card className="p-4 max-h-fit !font-secondary text-[14px] !cursor-none !rounded-2xl !shadow-none overflow-hidden">
                <CardActionArea>
                  <Link
                    to={`/product/${element.id}/${element.title}`}
                    className="!w-full"
                  >
                    <div className="max-w-full !max-h-[120px] !mb-14 !pt-3 grid justify-center items-center">
                      <CardMedia
                        component="img"
                        image={element.image}
                        className="!w-[200px] rounded-[50%]  drop-shadow-cardImg "
                      />
                    </div>
                  </Link>
                  <CardContent>
                    <Typography
                      className="!font-semibold !text-[15px] !py-1 !px-2 !mt-4 text-left"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {element.title}
                    </Typography>
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

                    <Stack className="!flex-row !justify-between items-center my-5 gap-8">
                      <Box
                        onClick={() => handleOnClickAddToCart(element)}
                        className="!flex !flex-row !justify-center items-center capitalize secondary-btn !grow-1 !px-5 !py-2"
                      >
                        <Typography className="!text-[14px] ">
                          {" "}
                          add to cart
                        </Typography>

                        <MdOutlineShoppingCart className="!ml-1.5" />
                      </Box>
                      <Box>
                        <MdFavoriteBorder className="!text-[26px] hover:scale-90 duration-300" />
                      </Box>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`custom-prev absolute left-[-20px] top-1/2 z-1000 cursor-pointer rounded-full text-secondary/50 hover:bg-gray-400/10 p-3 text-2xl transition-opacity ${
          isBeginning ? "opacity-30 pointer-events-none" : "opacity-100"
        }`}
      >
        <FaCaretLeft />
      </button>
      <button
        className={`custom-next absolute right-[-20px] top-1/2 z-1000 cursor-pointer rounded-full text-secondary/50 hover:bg-gray-400/10 p-3 text-2xl transition-opacity ${
          isEnd ? "opacity-30 pointer-events-none" : "opacity-100"
        }`}
      >
        <FaCaretRight />
      </button>{" "}
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
    </Container>
  );
};

export default CardMenuLike;
