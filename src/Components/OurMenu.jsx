/* eslint-disable no-unused-vars */
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import CardMenu from "./CardMenu";
import { MotionIconButton, MotionTypography } from "../ConstData/data";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OurMenu = () => {
  return (
    <Container className="">
      <Stack className="!flex-row justify-between items-center ">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          variant="h3"
          className="!font-secondary font-bold !text-3xl md:!text-5xl !mx-2 capitalize  "
        >
          our menu
        </motion.div>
        <MotionIconButton
          component={Link}
          to="/products"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="!font-secondary font-bold !mx-2 !text-[16px] md:!text-[22px] capitalize !text-primary hover:!bg-transparent !duration-700 hover:scale-[0.80]"
        >
          Shop now <FaAngleDoubleRight className="!ml-2 animate-pulse" />
        </MotionIconButton>
      </Stack>

      <CardMenu />
    </Container>
  );
};

export default OurMenu;
