import { Box, Paper, TextField } from "@mui/material";
import { useState } from "react";
import login from "../../assets/img/login.png";
import CustomButton from "../../components/Button";
import LogoImage from "../../components/Image/LogoImage";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
    window.location.href = "/admin/dashboard";
  };

  return (
    <Paper elevation={6} sx={{ p: 4, borderRadius: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "150px",
            width: "300150pxpx",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          <LogoImage src={login} />
        </Box>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CustomButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </CustomButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default LoginPage;
