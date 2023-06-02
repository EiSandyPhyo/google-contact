import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { FiMenu } from "react-icons/fi";
import { BiSearchAlt, BiHelpCircle } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { RxPerson, RxCounterClockwiseClock } from "react-icons/rx";
import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsPersonPlusFill } from "react-icons/bs";

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

export default function Sidebar({children}) {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <div className=" navbar fixed bg-base-100 shadow-none ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <button onClick={open ? handleDrawerClose : handleDrawerOpen}>
              <FiMenu className=" mx-5 w-5 h-5 text-primary" />
            </button>
          </label>

          <div className="navbar ">
            <div className="flex-1">
              <i>
                <GoPerson className="w-7 h-7 text-primary" />
              </i>
              <Link to={"/"} className=" ms-4  font-semibold normal-case text-2xl tracking-wider text-primary">
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

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAZlBMVEX///8AAADh4eEpKSno6OjV1dUFBQXr6+v29vbk5OQZGRnw8PD6+vrNzc3z8/OpqalqamqXl5cxMTG3t7dzc3NNTU2Kiop/f38iIiI5OTlDQ0MdHR2vr69iYmIRERGhoaFVVVXBwcGnVZ/wAAADuUlEQVR4nO2a2ZaqMBBFBRlkJoyCivD/P3mVFIiKxDaxWLe79pvCSg4ZakhlsyEIgiAIgiAIgiCIX4/vObrueP7aOnr8gMV7rWcfs2BtUQ5LLG2ClTBnRTlecacGNBXeWnqO7rOcK+5xFTl+OS/nSrnCUrKTu0FJkmb6O7Gx9Rj52HmTpabuGLqZxofxz9zA1bOrhp7bdDo9x3Ycox2mHj+DbvfRw2rxIzBKWoa5js7Qaa0/P9NreHjG06PDAo5npyU8wdqaUfslYMLycP5xCAu+xNJjira2seVvmEiCYt5d+vqNFNY1jh6Hf3+89A7XvMVxtEf++cHSOwF/B8ep8SW9XX5pjzdn/v4dK8Mt1R5DkPfGjI1zhhEa8U1fCZynk6BtfL6l2xdGcSBsRaZBGVHf00ngOn3uP6K/KIiboVYQ7uxaNEPE908tiFHt+p29qASDxxaC/WPyBAkjkPWFrvUKuFeUqDEX+9bBu+YYeob4ddEIgznHiWIDvjzY0jusf8XCWNObYc7chWBHdxFnbAyIFlZRjBkOXfZZJVghsMoqtMwM9vSrrS94/A2GhHnWVUXwsMXTszHGfPnJg9hjlo163NBBr1ryMC/peErTYeoZd1pvkAIYJjtgt3/RT9GiW99afcrKMjvV2op6LrM2c+A5YCHPF0fPX+nJ8c497vDPzZyc5rze6XlY1I9y6kKQj3wZL82mcrJ0tVPzCUbKyiwrWbpmVYEgfh270NEXcELEyoJhsjaxFjxZ782spGUBRkjUlcmylClJ+eUw1mZiEY+wLw7TuRL3PzNM38pfg4/kXKm+ksGy+2Xsbhe5rw9bi3n3R4Tx9IuLqDONRcwuKqYjOl/JktCTTNTobwZgvj7RVCkNk7xbHHb8Ub3ZvmUntcJIaTeOD/txdOqPlkJhWXgICg8fJRPdUDxXVooZvvFVSVPEUPJcPuN6Hzgx0/KPhxwOrVWdqNWyei4LCcaoVqEHcuaD1CbxwFAqyLBtMCWSyXEH1kj+kgoMUCHbTsHbka/GwAaRtiE7aEi2nU7Vhw1DLbvR+DWqREGQZXBzL3n/AqpMSm5x8G8T1bUEwDUPJbVcJW1xZ31QcuDjuwpMUaZuxobG5Fwsv3eiKErnFQfBHQ0BjQorPcBNSCPThN8odNIQNjQyC9LjTSi6MGHyz5Px0nYvyFUlqN9mlowhIkEkiAT9OUE87jwoqjbpB/louM/wWjV6lLRmny4tKKupOBdFJ9lEyFFaHdSpYEQQBEEQBEEQBEH85/wDk64oF6fo13sAAAAASUVORK5CYII=" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 text-secondary rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: 9,
            border: 0,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div className="menu  bg-base-100 text-base-content">
          <Link to={"/create"} className=" m-2   btn btn-primary rounded-full flex items-center gap-3">
            <BsPersonPlusFill className="w-5 h-5" />
            Create Contact
          </Link>
          <ul
            tabIndex={0}
            className="mt-3 p-2 dropdown-content    text-secondary  w-52"
          >
            <li className=" rounded-box">
              <Link to={"/"}>
                <i>
                  <RxPerson className="w-5 h-5" />
                </i>
                contacts
              </Link>
            </li>

            <li>
              <a>
                <i>
                  <RxCounterClockwiseClock className="w-5 h-5" />
                </i>
                Recent
              </a>
            </li>

            <br />
            <li>
              <a>
                <i>
                  <BiHelpCircle className="w-5 h-5" />
                </i>
                Help
              </a>
            </li>
            <li>
              <a>
                <i>
                  <HiOutlineTrash className="w-5 h-5" />
                </i>
                Trash
              </a>
            </li>
            <li>
              <a>
                <i>
                  <AiOutlineSetting className="w-5 h-5" />
                </i>
                Settings
              </a>
            </li>
          </ul>
        </div>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <div>
          {children}
        </div>
      </Main>
    </Box>
  );
}
