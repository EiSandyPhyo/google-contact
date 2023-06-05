import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const Navbar = ({
  AppBar,
  open,
  handleDrawerClose,
  handleDrawerOpen,
  toggleDrawer,
}) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div>
      <AppBar position="fixed" open={open}>
        <div className=" navbar fixed bg-base-100 shadow-none ">
          <label
            tabIndex={0}
            className="hidden lg:block btn btn-ghost btn-circle avatar"
          >
            <button onClick={open ? handleDrawerClose : handleDrawerOpen}>
              <FiMenu className=" mt-3 w-5 h-5 text-primary" />
            </button>
          </label>
          <label
            tabIndex={0}
            className="lg:hidden btn btn-ghost btn-circle avatar"
          >
            <button onClick={toggleDrawer}>
              <HiMenu className="mx-5 w-5 h-5 text-primary" />
            </button>
          </label>

          <div className="navbar ">
            <div className="flex-1">
              <i>
                <GoPerson className="w-7 h-7 text-primary" />
              </i>
              <Link
                to={"/"}
                className="hidden md:block ms-4  font-semibold normal-case text-2xl tracking-wider text-primary"
              >
                Contact
              </Link>
            </div>
            <div className=" hidden lg:flex w-96 items-center border shadow-sm gap-1 px-2 py-1 rounded ">
              <BiSearchAlt className="text-black w-6 h-6" />
              <input
                type="text"
                className="  outline-none rounded p-2 text-black"
                placeholder="Search"
                //value={}
                //onChange={} //you should use debounce
              />
            </div>
            <button className=" lg:hidden mx-9">
            <BiSearchAlt className="text-black w-6 h-6" />
            </button>
            <div className="flex-none gap-2 border-none">
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAZlBMVEX///8AAADh4eEpKSno6OjV1dUFBQXr6+v29vbk5OQZGRnw8PD6+vrNzc3z8/OpqalqamqXl5cxMTG3t7dzc3NNTU2Kiop/f38iIiI5OTlDQ0MdHR2vr69iYmIRERGhoaFVVVXBwcGnVZ/wAAADuUlEQVR4nO2a2ZaqMBBFBRlkJoyCivD/P3mVFIiKxDaxWLe79pvCSg4ZakhlsyEIgiAIgiAIgiCIX4/vObrueP7aOnr8gMV7rWcfs2BtUQ5LLG2ClTBnRTlecacGNBXeWnqO7rOcK+5xFTl+OS/nSrnCUrKTu0FJkmb6O7Gx9Rj52HmTpabuGLqZxofxz9zA1bOrhp7bdDo9x3Ycox2mHj+DbvfRw2rxIzBKWoa5js7Qaa0/P9NreHjG06PDAo5npyU8wdqaUfslYMLycP5xCAu+xNJjira2seVvmEiCYt5d+vqNFNY1jh6Hf3+89A7XvMVxtEf++cHSOwF/B8ep8SW9XX5pjzdn/v4dK8Mt1R5DkPfGjI1zhhEa8U1fCZynk6BtfL6l2xdGcSBsRaZBGVHf00ngOn3uP6K/KIiboVYQ7uxaNEPE908tiFHt+p29qASDxxaC/WPyBAkjkPWFrvUKuFeUqDEX+9bBu+YYeob4ddEIgznHiWIDvjzY0jusf8XCWNObYc7chWBHdxFnbAyIFlZRjBkOXfZZJVghsMoqtMwM9vSrrS94/A2GhHnWVUXwsMXTszHGfPnJg9hjlo163NBBr1ryMC/peErTYeoZd1pvkAIYJjtgt3/RT9GiW99afcrKMjvV2op6LrM2c+A5YCHPF0fPX+nJ8c497vDPzZyc5rze6XlY1I9y6kKQj3wZL82mcrJ0tVPzCUbKyiwrWbpmVYEgfh270NEXcELEyoJhsjaxFjxZ782spGUBRkjUlcmylClJ+eUw1mZiEY+wLw7TuRL3PzNM38pfg4/kXKm+ksGy+2Xsbhe5rw9bi3n3R4Tx9IuLqDONRcwuKqYjOl/JktCTTNTobwZgvj7RVCkNk7xbHHb8Ub3ZvmUntcJIaTeOD/txdOqPlkJhWXgICg8fJRPdUDxXVooZvvFVSVPEUPJcPuN6Hzgx0/KPhxwOrVWdqNWyei4LCcaoVqEHcuaD1CbxwFAqyLBtMCWSyXEH1kj+kgoMUCHbTsHbka/GwAaRtiE7aEi2nU7Vhw1DLbvR+DWqREGQZXBzL3n/AqpMSm5x8G8T1bUEwDUPJbVcJW1xZ31QcuDjuwpMUaZuxobG5Fwsv3eiKErnFQfBHQ0BjQorPcBNSCPThN8odNIQNjQyC9LjTSi6MGHyz5Px0nYvyFUlqN9mlowhIkEkiAT9OUE87jwoqjbpB/louM/wWjV6lLRmny4tKKupOBdFJ9lEyFFaHdSpYEQQBEEQBEEQBEH85/wDk64oF6fo13sAAAAASUVORK5CYII=" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 text-secondary rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge bg-secondary text-white">New</span>
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
    </div>
  );
};

export default Navbar;
