import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { useContext } from "react";
import CommentContext from "../ContextApi/ContextComment";
import { toWords } from "number-to-words";

const AllComment = () => {
  const { arrayComment, setArrayComment } = useContext(CommentContext);
  const theme = useTheme();
  return (
    <Container
      className="!rounded-2xl !py-12 !px-8"
      sx={{ backgroundColor: theme.palette.neutral.main }}
    >
      <div>
        <Box className="!mb-6">
          <Typography className="!font-secondary capitalize">
            {toWords(arrayComment.length)} comment
          </Typography>
        </Box>
        {arrayComment.map((e) => (
          <Stack className="!font-secondary !flex-row justify-between items-center !mb-4 !px-4 !pb-12 !pt-4 border-b border-gray-500/10">
            <Typography className="capitalize">{e.commentText}</Typography>
            <Typography className="text-sm text-gray-500">
              {e.createdAt}
            </Typography>
          </Stack>
        ))}
      </div>
    </Container>
  );
};

export default AllComment;
