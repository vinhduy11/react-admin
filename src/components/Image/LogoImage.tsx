import { Box } from "@mui/material";
import React from "react";

interface ImageComponentProps {
  src: string;
}

const LogoImage: React.FC<ImageComponentProps> = ({ src }) => {
  return (
    <Box
      component="img"
      src={src}
      alt="Logo"
      sx={{
        width: "100px",
        height: "100px",
      }}
    />
  );
};

export default LogoImage;
