import React from "react";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../context/appContextProvider";
import NavProvider from "../context/navContextProvider";
import DrawerComponent from "./drawer";
import Header from "./header";
import { Box, CssBaseline } from "@mui/material";

function Layout() {
  const { navEnabled } = useAppContext();

  return (
    <NavProvider>
      <Box sx={{ display: "flex" }}>
        <DrawerComponent />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            ml: { xs: 0, md: `${322}px` },
            width: "100%",
          }}
        >
          <Header />
          <Box sx={{ flexGrow: 1 }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </NavProvider>
  );
}

export default Layout;
