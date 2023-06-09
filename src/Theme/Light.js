// IMPORTING PACKAGES/MODULES
import { createTheme } from "@mui/material/styles";

/**
 * @name LightTheme
 * @description LIGHT THEME OBJECT
 * @returns {Object} Theme
 */
const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#404e40",
    },
    secondary: {
      main: "#f77b2c",
    },
    error: {
      main: "#f57030",
    },
    background: {
      default: "#F3F3F4",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "'Akshar', sans-serif",
  },
});

export default LightTheme;
