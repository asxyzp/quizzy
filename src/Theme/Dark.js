// IMPORTING PACKAGES/MODULES
import { createTheme } from "@mui/material/styles";

/**
 * @name DarkTheme
 * @description DARK THEME OBJECT
 * @returns {Object} Theme
 */
const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f77b2c",
    },
    secondary: {
      main: "#f766a1",
    },
    error: {
      main: "#f57030",
    },
  },
  typography: {
    fontFamily: "'Akshar', sans-serif",
  },
});

export default DarkTheme;
