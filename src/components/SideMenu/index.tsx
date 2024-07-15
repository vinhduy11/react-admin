import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Box, Button, Stack } from "@mui/material";
import { IMenu } from "../../types/menu";
import { DrawerHeader } from "./header";
import NestedList from "./list";

interface ISideMenuProps {
  setPageName: (data: string) => void;
  menuItems: IMenu[];
  open: boolean;
  setOpen: (data: boolean) => void;
}

const SideMenu = (ele: ISideMenuProps) => {
  const { setPageName, menuItems, open, setOpen } = ele;
  const handleLogout = () => {
    window.location.href = "/login";
  };
  return (
    <>
      <DrawerHeader
        sx={{
          justifyContent: "center",
          alignContent: "center",
          height: "30px",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            background: "#343a40",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4>Admin Panel</h4>
        </Box>
      </DrawerHeader>
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={{
          height: "100%",
          padding: "20x",
          background: "#343a40",
        }}
      >
        <NestedList setPageName={setPageName} menuItems={menuItems} />
        <Box sx={{ p: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogout}
          >
            <Box component="div" sx={{ mr: 1 }}>
              Logout
            </Box>
            <LogoutOutlinedIcon />
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default SideMenu;
