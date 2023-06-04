import React from "react";
import DrawerSm from "./DrawerSm";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Navbar from "./Navbar";
import DrawerLg from "./DrawerLg";

const drawerWidth = 220;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
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
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar({ children }) {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [drawerSm, setDrawerSm] = useState(false);


  const toggleDrawer = () => {
    setDrawerSm(!drawerSm);
  };

          <div className="navbar ">
            <div className="flex-1">
              <i>
                <GoPerson className="w-7 h-7 text-primary" />
              </i>
              <Link to={"/"} className=" ms-4  font-semibold normal-case text-2xl tracking-wider text-primary max-[574px]:hidden">
                Contact
              </Link>
            </div>
            <div className="flex-none gap-2 border-none">
              <div className="icon-input">
                <BiSearchAlt className="text-black" />
                <input
                  type="text"
                  className="outline-none rounded p-2 text-black"
                  placeholder="Search"
                  //value={}
                  //onChange={} //you should use debounce
                />
              </div>


  return (
    <Box sx={{ display: "flex" }}>
      <Navbar
        AppBar={AppBar}
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
        drawerSm={drawerSm}
        toggleDrawer={toggleDrawer}
      />
      <DrawerLg drawerWidth={drawerWidth} open={open} />
      <Main open={open}>
        <DrawerHeader />
        <div className="">{children}</div>
      </Main>
      <DrawerSm drawerSm={drawerSm} toggleDrawer={toggleDrawer} />
    </Box>
  );
}