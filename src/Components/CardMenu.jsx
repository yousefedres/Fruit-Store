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
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

const CardMenu = () => {
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

  //
  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        autoplay={{
          delay: 2500,
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
          800: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        className="my-8 mySwiper swiper-pagination"
      >
        {Data.map((element) => (
          <SwiperSlide
            key={element.id}
            className="!rounded-2xl"
            style={{ backgroundColor: theme.palette.neutral.secondary }}
          >
            <Link
              to={`/product/${element.id}/${element.title}`}
              className="!w-full"
            >
              <Card className="flex justify-center items-center w-auto p-4 !min-h-50 !font-secondary text-[14px] !overflow-visible !rounded-2xl !shadow-none">
                <CardActionArea className="!flex !flex-row !min-h-full">
                  <CardMedia
                    component="img"
                    loading="lazy"
                    image={element.image}
                    className="!w-[180px] !max-w-full !h-[150px] !rounded-full drop-shadow-cardImg"
                  />
                  <CardContent>
                    <Typography
                      className="!font-semibold !w-40 !text-[20px]"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {element.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="!font-bold !font-secondary text-secondary "
                    >
                      {element.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
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
      </button>
    </div>
  );
};

export default CardMenu;
