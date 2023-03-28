// IMPORTING PACKAGES/MODULES
import React from "react";
import { Box, Typography } from "@mui/material";

/**
 * @name Splash
 * @description SPLASH SCREEN COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <Splash /> (JSX)
 */
const Splash = (props) => {
  return (
    <Box
      sx={{
        zIndex: "2000",
        bgcolor: "background.default",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
      // className="h-full w-full flex items-center justify-center"
    >
      <Typography variant="h1">Q</Typography>
    </Box>
  );
};

export default Splash;
