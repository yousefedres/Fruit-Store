import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { MotionCard, services } from "../ConstData/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/effect-coverflow";
import { Container, useTheme } from "@mui/material";
import { FadeUp } from "../FramerMition/animation";

const Services = () => {
    const theme = useTheme();

  return (
    <Container
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center !my-7 bg-secondary/10 !py-12 rounded-2xl"
      sx={{ backgroundColor: theme.palette.neutral.main }}
    >
      {services.map((service) => (
        <MotionCard
          key={service.id}
          variants={FadeUp(0.3 * service.id)}
          initial="hidden"
          whileInView="visible"
          className="w-ful h-fit !font-secondary py-6 px-3 relative text-[14px] !cursor-none !rounded-2xl"
        >
          <CardActionArea className="!flex !flex-col !py-2 items-center justify-center gap-3 !cursor-grab">
            <CardMedia
              component="img"
              image={service.image}
              className="!w-[80px] !h-[80px] bg-secondary/40 border-gray-100 border-2 rounded-full"
            />
            <CardContent>
              <Typography
                className="!font-semibold !text-[13px]"
                gutterBottom
                variant="h6"
                component="div"
              >
                {service.title}
              </Typography>
              <p className="!font-semibold text-[12px] text-gray-500 min-h-[72px]">
                {service.post}
              </p>
            </CardContent>
          </CardActionArea>
        </MotionCard>
      ))}
    </Container>
  );
};

export default Services;
