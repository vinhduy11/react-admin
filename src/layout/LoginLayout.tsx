import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { themeDark } from "../styles/loginStyles";

const LoginLayout = ({ children }) => {
  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <Container
        //component="main"
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default LoginLayout;
