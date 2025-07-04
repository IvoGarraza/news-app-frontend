import React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const ArrowSlider = ({ direction = "left", ...props }) => {
  return (
    <IconButton
      sx={{
        transform: direction === "left" ? "rotate(0deg)" : "rotate(180deg)",
        bgcolor: "error.main",
        color: "white",
        borderRadius: 2,
        transition: "transform 0.2s",
        "&:hover": {
          transform:
            direction === "left"
              ? "scale(1.25)"
              : "rotate(180deg) scale(1.25)",
          bgcolor: "error.dark",
        },
        "&:active": {
          transform:
            direction === "left"
              ? "scale(1)"
              : "rotate(180deg) scale(1)",
        },
        width: 50,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...props}
    >
      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 24 24"
        sx={{ display: "block" }}
      >
        <path
          d="M11 6L5 12M5 12L11 18M5 12H19"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Box>
    </IconButton>
  );
};

export default ArrowSlider;
