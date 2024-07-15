import { Box } from "@mui/material";

const MainContent = ({ children }) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#fff",
        boxShadow: "#123",
        minHeight: "750px",
        borderRadius: "10px",
      }}
    >
      <Box component="div">{children}</Box>
    </Box>
  );
};

export default MainContent;
