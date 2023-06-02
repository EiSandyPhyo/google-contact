import React from "react";
import {GoPerson} from "react-icons/go"
import {FiMenu} from "react-icons/fi"

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow z-50">
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button"><FiMenu className="w-5 h-5"/></label>
        <div className="flex-1">
            <i> <GoPerson className="w-7 h-7"/> </i>
          <a className="btn btn-ghost normal-case text-xl">Contact</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
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
    </>
  );
};

export default Navbar;
