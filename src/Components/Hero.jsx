import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import HeroImg from "../../public/images/fruit-plate.png";
import LeafImg from "../../public/images/leaf.png";
import { motion } from "framer-motion";
import { FadeRight } from "../FramerMition/animation";
import { Link } from "react-router-dom";

const Hero = () => {
  //

  const MotionTypography = motion(Typography);
  const MotionIconButton = motion(IconButton);
  const MotionBox = motion(Box);

  //
  return (
    <Container className="grid grid-cols-1 gap-0 md:gap-6 md:grid-cols-2 min-h-[100vh] relative overflow-hidden">
      {/* Brand Info */}

      <Box className="relative z-30 flex flex-col justify-center py-14 md:py-0 font-averia">
        <Box className="text-center md:text-left space-y-6 lg-max-w-[400px]">
          <MotionTypography
            variants={FadeRight(0.6)}
            initial="hidden"
            animate="visible"
            variant="h4"
            className="capitalize !mb-1  text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose !font-secondary "
          >
            healthy
          </MotionTypography>
          <MotionTypography
            variants={FadeRight(0.9)}
            initial="hidden"
            animate="visible"
            variant="h5"
            className="capitalize text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose !font-secondary flex justify-center md:justify-start gap-2.5 !mb-2"
          >
            fresh{" "}
            <span className="text-secondary !font-secondary ">fruits!</span>
          </MotionTypography>

          <MotionTypography
            variants={FadeRight(1.5)}
            initial="hidden"
            animate="visible"
            className="!font-secondary !my-2.5 capitalize tracking-wide !text-[22px]"
          >
            order now for fresh healthy life
          </MotionTypography>

          <MotionTypography
            variants={FadeRight(1.9)}
            initial="hidden"
            animate="visible"
            className="text-gray-400"
          >
            Healthy and yummy food for fresh morning breakfast. Eat Daily for
            good healthy and mind order now and get 20% off on your first order.{" "}
          </MotionTypography>

          <Link to="/products">
            <MotionIconButton
              variants={FadeRight(2)}
              initial="hidden"
              animate="visible"
              className="!mt-6 three-btn hover:!bg-transparent"
            >
              <IoBagHandleOutline className="mr-2" /> order now
            </MotionIconButton>
          </Link>
        </Box>
      </Box>

      {/* Hero Image */}

      <Box className="flex items-center justify-center overflow-hidden py-14 md:py-0 ">
        <MotionBox
          initial={{ opacity: 0, x: 200, rotate: 75 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          component="img"
          src={HeroImg}
          className="w-[350px] md:w-[550px]  drop-shadow "
        />
      </Box>

      <div className="absolute top-14 md:top-0 right-1/2  opacity-80 blur-[3px] rotate-[40deg]">
        <MotionBox
          initial={{ opacity: 0, y: -100, rotate: 75 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          component="img"
          src={LeafImg}
          className="w-full md:max-w-[270px]"
        />
      </div>
    </Container>
  );
};

export default Hero;
