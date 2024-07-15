import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { useState } from "react";
import { IMenu } from "../../types/menu";

interface INestListProps {
  setPageName: (data: string) => void;
  menuItems: IMenu[];
  children?: React.ReactNode;
}

interface IMenuItemProps {
  setPageName: (data: string) => void;
  selectedIndex: number;
  handleListItemClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    isSub: boolean,
    isInSub: boolean
  ) => void;
  menu: IMenu;
  isSub: boolean;
}

const MenuItem = (props: IMenuItemProps) => {
  const { setPageName, selectedIndex, handleListItemClick, menu, isSub } =
    props;
  return (
    <ListItemButton
      selected={selectedIndex === menu.id}
      onClick={(event) => {
        handleListItemClick(event, menu.id, isSub, isSub);
        setPageName(menu.text);
      }}
    >
      {isSub && (
        <ListItemIcon>
          <ArrowRightIcon />
        </ListItemIcon>
      )}

      <ListItemText primary={menu.text} />
    </ListItemButton>
  );
};
export default function NestedList(props: INestListProps) {
  const { setPageName, menuItems, children } = props;
  const [selectedMenu, setSelectedMenu] = useState({
    selectedIndex: 1,
    open: false,
  });

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    isSub: boolean,
    isInSub: boolean
  ) => {
    if (isSub) {
      setSelectedMenu((prevState) => ({
        selectedIndex: index,
        open: true,
      }));
      return;
    }
    setSelectedMenu((prevState) => ({
      selectedIndex: index,
      open: isSub && !prevState.open,
    }));
  };
  return (
    <List
      key={-1}
      sx={{
        color: "#fff",
        bgcolor: "#343a40",
        width: "100%",

        maxWidth: 360,
        "&& .MuiCollapse-root": {
          bgcolor: "#E5E9F1",
          color: "#000",
          border: "10px",
          borderColor: "#174580",
          width: "100%",

          "&, & .MuiListItemIcon-root": {
            color: "#5pxfff",
            paddingLeft: "4px",
            paddingRight: "4px",
            paddingTop: "2px",
            paddingBottom: "5px",
          },
        },
        "&& .Mui-selected, && .Mui-selected:hover": {
          bgcolor: "#007bff",
          color: "#fff",
          border: "10px",
          borderColor: "#174580",

          "&, & .MuiListItemIcon-root": {
            color: "#5pxfff",
          },
        },
        // hover states
        "& .MuiListItemButton-root:hover": {
          bgcolor: "#c2c7d0",

          "&, & .MuiListItemIcon-root": {
            color: "#000",
          },
        },
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      //   subheader={
      //     <ListSubheader component="div" id="nested-list-subheader">
      //       Nested List Items
      //     </ListSubheader>
      //   }
    >
      {menuItems.length &&
        menuItems.map((item: IMenu) =>
          item.subMenus ? (
            <React.Fragment key={item.id}>
              <ListItemButton
                selected={selectedMenu.selectedIndex === item.id}
                onClick={(event) => {
                  handleListItemClick(event, item.id, true, false);
                  setPageName(item.text);
                }}
              >
                <ListItemText primary={item.text} />
                {selectedMenu.open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={selectedMenu.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subMenus?.map((subMenu) => (
                    <MenuItem
                      key={subMenu.id}
                      setPageName={setPageName}
                      selectedIndex={selectedMenu.selectedIndex}
                      handleListItemClick={handleListItemClick}
                      menu={subMenu}
                      isSub={true}
                    />
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ) : (
            <MenuItem
              key={item.id}
              setPageName={setPageName}
              selectedIndex={selectedMenu.selectedIndex}
              handleListItemClick={handleListItemClick}
              menu={item}
              isSub={false}
            />
          )
        )}
    </List>
  );
}
