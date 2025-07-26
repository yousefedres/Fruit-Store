import { Container, useTheme } from "@mui/material";
import React, { useContext } from "react";
import CommentContext from "../ContextApi/ContextComment";
import { useState } from "react";

const FormComment = () => {
  //

  const { arrayComment, setArrayComment } = useContext(CommentContext);
  const [commentText, setCommentText] = useState("");
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      commentText: commentText,
      createdAt: new Date().toLocaleDateString(),
    };

    const updated = [...arrayComment, newComment];
    setArrayComment(updated);
    console.log("New comment array:", updated);
    setCommentText("");
  };
  //
  return (
    <Container
      className="!px-8 rounded-2xl py-12"
      sx={{ backgroundColor: theme.palette.neutral.main }}
    >
      <form onSubmit={handleSubmit}>
        <textarea
          required
          placeholder="Share your question or comment with us."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="w-full px-10 py-6 text-black bg-white resize-none h-30 rounded-2xl focus-within:outline-secondary/20"
          
        ></textarea>
        <div className="flex items-center justify-end">
          <button className="!px-11 !py-2 !text-[18px] my-4 inline-block capitalize cursor-pointer three-btn">
            send
          </button>
        </div>
      </form>
    </Container>
  );
};

export default FormComment;
