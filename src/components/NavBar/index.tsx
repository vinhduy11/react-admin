import Menu from "@mui/icons-material/Menu";
import MenuOpen from "@mui/icons-material/MenuOpen";

import { Box, IconButton, Toolbar, Typography, styled } from "@mui/material";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import { drawerWidth } from "../../styles/adminStyles";
import MenuAppBar from "../Menu";

interface INavBarProps {
  pageName: string;
  open: boolean;
  setOpen: (data: boolean) => void;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // width: `calc(100% - $$open ? drawerWidth : 0}px)`,
    // marginLeft: `${open ? drawerWidth : 0}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const NavBar = (props: INavBarProps) => {
  const { pageName, open, setOpen } = props;

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${open ? drawerWidth : 0}px)`,
        ml: `${open ? drawerWidth : 0}px`,
        background: "#fff",
        color: "#657088",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(!open)}
          edge="start"
          sx={{ mr: 2 }}
        >
          {!open ? <Menu /> : <MenuOpen />}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {pageName}
        </Typography>
        <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
          <MenuAppBar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
