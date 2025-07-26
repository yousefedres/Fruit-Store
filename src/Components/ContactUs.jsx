import React from "react";
import { MotionStack, MotionTypography } from "../ConstData/data";
import { SiWhatsapp } from "react-icons/si";
import { Box, Typography, useTheme } from "@mui/material";
import { MdOutlinePhone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FadeRight } from "../FramerMition/animation";

const ContactUs = () => {
  const theme = useTheme();

  return (
    <div>
      <Box>
        <MotionTypography
          variants={FadeRight(0.6)}
          initial="hidden"
          whileInView="visible"
          variant="h5"
          className="!font-secondary !mb-3.5  capitalize !font-bold"
        >
          Contact with us
        </MotionTypography>

        {/*  */}

        <MotionStack
          variants={FadeRight(0.9)}
          initial="hidden"
          whileInView="visible"
          className="!flex-row gap-3.5 justify-start items-center font-semibold !font-secondary mb-4 text-gray-900"
          component="a"
        >
          <Typography
            className="!font-secondary !text-[16px] !font-semibold !mb-5"
            sx={{ color: theme.palette.text.primary }}
          >
            Your suggestions and opinions are of interest to us. Contact us:
          </Typography>
        </MotionStack>
        {/*  */}
        <div className="flex flex-col gap-5">
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
        </div>
      </Box>
    </div>
  );
};

export default ContactUs;
