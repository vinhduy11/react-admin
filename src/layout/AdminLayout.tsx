import HomeIcon from "@mui/icons-material/Home";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import { ThemeProvider, styled } from "@mui/material/styles";
import { useState } from "react";
import NavBar from "../components/NavBar";
import SideMenu from "../components/SideMenu";
import { DrawerHeader } from "../components/SideMenu/header";
import { adminMenu } from "../router";
import { drawerWidth, themeDark } from "../styles/adminStyles";
import { menuDarkTheme } from "../styles/menuStyles";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const BreadcrumbsLinks = () => {
  const renderBreadcrumbsLink = () => {
    const url = window.location.pathname.split("/");
    const links = url.splice(-1, 1);
    console.log(links);
    return (
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          ml: "10px",
          fontSize: "20px",
          display: "flex",
        }}
      >
        <HomeIcon sx={{ display: "flex" }} />
        {links.length > 0 &&
          links.map((link) => (
            <Link key={link} underline="hover" color="inherit" href="/">
              {link}
            </Link>
          ))}
        <Typography color="#007bff">{url[-1]}</Typography>
      </Breadcrumbs>
    );
  };

  return renderBreadcrumbsLink();
};

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [pageName, setPageName] = useState<string>(adminMenu[0].text);

  return (
    <ThemeProvider theme={themeDark}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <ThemeProvider theme={menuDarkTheme}>
          <NavBar pageName={pageName} open={open} setOpen={setOpen} />
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <SideMenu
              setPageName={setPageName}
              menuItems={adminMenu}
              open={open}
              setOpen={setOpen}
            />
          </Drawer>
        </ThemeProvider>

        <Main open={open}>
          <DrawerHeader />
          <Box
            component="div"
            sx={{
              mt: "2px",
              mb: "10px",
              color: "#657088",
              height: "40px",
              borderRadius: "5px",
              alignContent: "center",
            }}
          >
            <BreadcrumbsLinks />
          </Box>
          {children}
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default AdminLayout;
