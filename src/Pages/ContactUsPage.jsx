import React from "react";
import ContactUs from "../Components/ContactUs";
import { Container } from "@mui/material";
import FormComment from "../Components/FormComment";
import AllComment from "../Components/AllComment";
import { useContext } from "react";
import CommentContext from "../ContextApi/ContextComment";

const ContactUsPage = () => {
  const { arrayComment, setArrayComment } = useContext(CommentContext);

  return (
    <Container className="!pl-5 md:!pl-20 !pt-20 flex flex-col gap-7">
      <ContactUs />
      <FormComment />
      {arrayComment.length > 0 ? <AllComment /> : ""}
    </Container>
  );
};

export default ContactUsPage;
