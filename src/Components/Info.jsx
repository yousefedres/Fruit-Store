import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import { MotionBox, MotionTypography } from "../ConstData/data";
import { FadeUp } from "../FramerMition/animation";

const BrandInfo = () => {
    const theme = useTheme();

  return (
    <Container
      className="grid grid-cols-1 py-5 space-y-6 my-14 md:grid-cols-2 gap-7 md:space-y-6 rounded-2xl"
      sx={{ backgroundColor: theme.palette.neutral.main }}
    >
      {/* Brand Image */}

      <Box className="flex items-center justify-center ">
        <MotionBox
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          viewport={{ once: true }}
          component="img"
          className="w-[300px] md:max-w-[400px] h-full object-cover"
          src="\images\fruits-splash.png"
        ></MotionBox>
      </Box>

      {/* Brand Info */}

      <Box className="flex flex-col items-center justify-center md:items-start ">
        <MotionTypography
          variants={FadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          variant="h3"
          className="!font-secondary !text-3xl lg:!text-5xl !font-semibold uppercase"
        >
          {" "}
          Brand Info
        </MotionTypography>
        <MotionTypography
          variants={FadeUp(0.6)}
          initial="hidden"
          whileInView="visible"
          variant="body2"
          className="!font-secondary !my-4 text-gray-500"
        >
          <span className="text-secondary uppercase !font-secondary">
            furit store
          </span>{" "}
          for Fruits makes it easy to purchase and deliver fresh, Healthy
          agricultural products from trusted sources, With fast delivery to your
          door to support your healthy diet.
        </MotionTypography>
        <MotionTypography
          variants={FadeUp(0.9)}
          initial="hidden"
          whileInView="visible"
          variant="body2"
          className="!font-secondary text-gray-500"
        >
          To ensure the customer's rights, here at Furit, what matters most to
          us is your satisfaction with the quality provided.
        </MotionTypography>
      </Box>
    </Container>
  );
};

export default BrandInfo;
