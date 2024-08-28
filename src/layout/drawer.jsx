import React from "react";
import { Drawer as MUIDrawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Inbox as InboxIcon, Mail as MailIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Drawer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <MUIDrawer variant="permanent" anchor="left">
      <List>
        <ListItem button onClick={() => handleNavigation("/page")}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Page" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation("/another-page")}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Another Page" />
        </ListItem>
      </List>
    </MUIDrawer>
  );
};

export default Drawer;
