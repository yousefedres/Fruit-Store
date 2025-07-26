import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IoSearchSharp } from "react-icons/io5";
import { InputAdornment, useTheme } from "@mui/material";

export default function Search({ SearchValue, setSearchValue }) {
  //
  const theme = useTheme();

  return (
    <Box
      className="!my-7 text-center"
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        // label="search..."
        className="!w-full md:!w-3/4  focus:!outline-none hover:!outline-none hover:!border-none rounded-3xl"
        variant="outlined"
        // InputLabelProps={{ shrink: false }}
        type="text"
        placeholder="Enter the search word..."
        inputProps={{ "aria-label": "search" }}
        value={SearchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Box sx={{ mr: 2 }}>
                  <IoSearchSharp className="!text-[24px] !text-secondary" />
                </Box>
              </InputAdornment>
            ),
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent",
              borderRadius: "24px",
            },
            "&:hover fieldset": {
              borderColor: "#fb923c",
            },
            "&.Mui-focused fieldset": {
              borderRadius: "24px",
              borderColor: "#fb923c",
            },
          },
          backgroundColor: theme.palette.neutral.secondary,
        }}
      />
    </Box>
  );
}
