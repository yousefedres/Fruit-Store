import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode

          neutral: {
            main: "#fb923c1a",
            secondary: "white",
            three: "black",
          },

          favColor: {
            main: grey[300],
          },
          textColor: {
            main: grey[900],
          },
          background: {
            default: "#fff",
            secondary: "#fff",
          },
        }
      : {
          // palette values for dark mode

          neutral: {
            main: "#1a1a1a",
            secondary: "#2a2a2a",
            three: "black",
          },

          favColor: {
            main: grey[800],
          },
          textColor: {
            main: "#fff",
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
