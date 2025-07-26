/* eslint-disable no-unused-vars */
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { CircularProgress, IconButton } from "@mui/material";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const DialogLogin = ({ open, handleClose }) => {
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("xs");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleClose();
    }, 4000);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      className="!font-secondary"
      PaperProps={{
        sx: {
          borderRadius: "16px",
        },
      }}
    >
      <div className="relative flex justify-center mt-12 mb-2">
        <FaRegUserCircle className="text-7xl text-gray-500/30 " />
      </div>{" "}
      <DialogTitle className="text-center !font-secondary capitalize !text-3xl font-bold">
        login
      </DialogTitle>
      <DialogContent sx={{ paddingBottom: 0 }}>
        <DialogContentText>Email</DialogContentText>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          className="!text-red-600 hover:!text-red-400 hover:!bg-white text-2xl !absolute !top-2 !right-2"
        >
          <IoCloseCircleOutline />
        </IconButton>
        <form onSubmit={handleLogin}>
          <TextField
            //   autoFocus
            required
            placeholder="your@gmail.com"
            margin="dense"
            id="name"
            name="email"
            //   label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            className="!rounded-xl"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#6a72824d",
                  borderRadius: "8px",
                },
                "&:hover fieldset": {
                  borderColor: "#fb923c",
                },
                "&.Mui-focused fieldset": {
                  borderRadius: "8px",
                  borderColor: "#fb923c",
                },
              },
            }}
          />
          <DialogActions className="!p-0">
            <Button
              onClick={() => {
                <CircularProgress />;
              }}
              type="submit"
              className="!my-5 w-full three-btn !py-3 "
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "login"
              )}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogLogin;
