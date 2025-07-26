import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
const SnackbarAlert = ({ open, onClose, message }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={onClose}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
        className="!bg-primary/80 rounded-2xl "
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
