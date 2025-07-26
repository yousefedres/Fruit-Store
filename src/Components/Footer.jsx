/* eslint-disable no-unused-vars */
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";
import { FadeRight } from "../FramerMition/animation";
import { MotionStack, MotionTypography } from "../ConstData/data";
import { motion } from "framer-motion";

const Footer = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{ backgroundColor: theme.palette.neutral.main }}
      className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-7 !mt-22 !py-12 !px-10 !rounded-none justify-center"
    >
      <Box className="!font-secondary ">
        <MotionTypography
          variants={FadeRight(0.6)}
          initial="hidden"
          whileInView="visible"
          variant="h5"
          className="!font-secondary capitalize !font-bold"
        >
          Who we are
        </MotionTypography>
        <motion.p
          variants={FadeRight(0.9)}
          initial="hidden"
          whileInView="visible"
          className="text-gray-500 my-3.5 text-[15px] max-w-80"
        >
          For the past 20 years, we have been working in the fruit trade in a
          traditional way, and through our experience in this field, we have
          created the fruit store for you to serve you in your daily needs and
          make it easy for you to buy fruits.
        </motion.p>
        <MotionStack
          variants={FadeRight(1.2)}
          initial="hidden"
          whileInView="visible"
          className="!flex-row gap-4"
        >
          <div className="p-2 border-2 rounded-full cursor-pointer border-secondary/10 text-secondary/70 hover:scale-90">
            <FaFacebook />
          </div>{" "}
          <div className="p-2 border-2 rounded-full cursor-pointer border-secondary/10 text-secondary/70 hover:scale-90">
            <IoLogoInstagram />
          </div>
          <div className="p-2 border-2 rounded-full cursor-pointer border-secondary/10 text-secondary/70 hover:scale-90">
            <FaSnapchat />
          </div>
        </MotionStack>
      </Box>

      <Box>
        {" "}
        <MotionTypography
          variants={FadeRight(0.6)}
          initial="hidden"
          whileInView="visible"
          variant="h5"
          className="!font-secondary capitalize !font-bold"
        >
          Important links
        </MotionTypography>
        <MotionStack
          variants={FadeRight()}
          initial="hidden"
          whileInView="visible"
        >
          <Typography
            className="!font-secondary !mt-3.5 !text-[15px] "
            component={Link}
          >
            About the Store
          </Typography>
          <Typography
            className="!font-secondary !mt-3.5 !text-[15px] "
            component={Link}
          >
            Privacy Policy
          </Typography>
          <Typography
            className="!font-secondary !mt-3.5 !text-[15px] "
            component={Link}
          >
            Compensation Policy
          </Typography>
          <Typography
            className="!font-secondary !mt-3.5 !text-[15px] "
            component={Link}
          >
            Delivery Policy
          </Typography>
        </MotionStack>
      </Box>

      {/* */}
      <Box>
        <MotionTypography
          variants={FadeRight(0.6)}
          initial="hidden"
          whileInView="visible"
          variant="h5"
          className="!font-secondary !mb-3.5  capitalize !font-bold"
        >
          Contact us
        </MotionTypography>

        {/*  */}

        <MotionStack
          variants={FadeRight(0.9)}
          initial="hidden"
          whileInView="visible"
          className="!flex-row gap-3.5 justify-start items-center font-semibold !font-secondary mb-4 cursor-pointer text-gray-600"
          component="a"
        >
          <SiWhatsapp />
          <Typography>+963945612227</Typography>
        </MotionStack>

        {/*  */}

        <MotionStack
          variants={FadeRight(1.2)}
          initial="hidden"
          whileInView="visible"
          className="!flex-row gap-3.5 justify-start items-center font-semibold !font-secondary mb-4 cursor-pointer text-gray-600"
          component="a"
        >
          <MdOutlinePhone />
          <Typography>+963945612227</Typography>
        </MotionStack>

        {/*  */}

        <MotionStack
          variants={FadeRight(1.5)}
          initial="hidden"
          whileInView="visible"
          className="!flex-row gap-3.5 justify-start items-center font-semibold !font-secondary mb-4 cursor-pointer text-gray-600"
          component="a"
        >
          <CgMail />
          <Typography>furit@gmail.com</Typography>
        </MotionStack>
      </Box>

      {/*  */}

      <Box></Box>
    </Container>
  );
};

export default Footer;
