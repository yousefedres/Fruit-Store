import { Container } from "@mui/material";
import React from "react";
import Hero from "../Components/Hero";
import OurMenu from "../Components/OurMenu";
import BrandInfo from "../Components/Info";
import Review from "../Components/Review";
import Services from "../Components/Services";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <Container>
      <Hero />
      <OurMenu />
      <BrandInfo />
      <Review />
      <Services />
    </Container>
  );
};

export default Home;
