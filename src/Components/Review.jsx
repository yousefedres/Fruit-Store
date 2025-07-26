import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Data, Reviews } from "../ConstData/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaCaretLeft, FaCaretRight, FaQuoteLeft, FaStar } from "react-icons/fa";
import React, { useRef, useState } from "react";
import { Container, useTheme } from "@mui/material";

const Review = () => {
  //
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const theme = useTheme();

  //

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <Container className="relative !my-10 !overflow-visible">
      <Typography variant="h6" className="my-4 capitalize !font-secondary">
        Read testimonials
      </Typography>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        autoplay={{
          delay: 3000,
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
          1150: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Autoplay,EffectFade, Navigation]}
        className="my-8 mySwiper swiper-pagination"
      >
        {Reviews.map((element) => (
          <SwiperSlide
            key={element.id}
            className="!rounded-2xl !overflow-hidden"
            style={{ backgroundColor: theme.palette.neutral.secondary }}
          >
            <Card className="w-full py-8 px-4 max-h-28 !font-secondary relative text-[14px] !rounded-none !overflow-visible !shadow-none ">
              <CardActionArea className="!flex !flex-row !py-2 items-center justify-center gap-14 !cursor-grab">
                <CardMedia
                  component="img"
                  image={element.image}
                  className="!w-[80px] !h-[80px] rounded-[50%]  drop-shadow-cardImg"
                />
                <CardContent>
                  <Typography
                    className="!font-semibold !text-[13px]  mb-3.5"
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    {element.userName}
                  </Typography>
                  <Typography
                    variant="body2"
                    className=" !font-secondary  !mb-3.5 "
                  >
                    {element.post}
                  </Typography>
                  <Typography
                    variant="body2"
                    className=" !font-secondary flex justify-center items-center gap-1 text-yellow-300/80"
                  >
                    {Array.from({ length: element.rate }).map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className="absolute z-50 top-1/6 right-[42px] text-2l md:text-3xl text-secondary/70">
                <FaQuoteLeft />
              </div>{" "}
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`custom-prev absolute left-[-30px] top-1/2 z-10 cursor-pointer rounded-2xl text-secondary/50 hover:bg-gray-400/10 p-2 transition-opacity ${
          isBeginning ? "opacity-30 pointer-events-none" : "opacity-100"
        }`}
      >
        <FaCaretLeft />
      </button>
      <button
        className={`custom-next absolute right-[-30px] top-1/2 z-10 cursor-pointer rounded-2xl text-secondary/50 hover:bg-gray-400/10 p-2 transition-opacity ${
          isEnd ? "opacity-30 pointer-events-none" : "opacity-100"
        }`}
      >
        <FaCaretRight />
      </button>
    </Container>
  );
};

export default Review;
