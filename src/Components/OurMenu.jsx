/* eslint-disable no-unused-vars */
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import CardMenu from "./CardMenu";
import { MotionIconButton, MotionTypography } from "../ConstData/data";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OurMenu = () => {
  return (
    <Container>
      <Stack className="!flex-row justify-between items-center !overflow-hidden ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="!font-secondary font-bold !text-[20px] md:!text-5xl !mx-2 capitalize  "
        >
          <span>our menu</span>
        </motion.div>
        <MotionIconButton
          component={Link}
          to="/products"
          initial={{ opacity: 0, x: 100 }}
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
