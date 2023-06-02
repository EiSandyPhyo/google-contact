import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const EditContact = () => {
  const location = useLocation();
  const contactDetail = location.state;
  console.log(contactDetail);
  const [firstname,setFirstName]=useState(contactDetail?.name?.firstname);
  const [lastname,setlastName]=useState(contactDetail?.name?.lastname);
  const [email,setemail]=useState(contactDetail?.email);
  const [address,setAddress]=useState(contactDetail?.address?.city);
  const [phone,setPhone]=useState(contactDetail?.phone);



  return (
    <div className=" flex   justify-center items-center h-screen ">
      <form className="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className=" font-semibold text-2xl tracking-wider my-6">Edit contact detail</h1>
        <div className="mb-4">
          <label
            className="block text-secondary text-sm font-bold mb-2"
            htmlFor="username"
          >
            Firstname
          </label>
          <input
            className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter Firstname"
            value={firstname}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-secondary text-sm font-bold mb-2"
            htmlFor="username"
          >
            Lastname
          </label>
          <input
            className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter Lastname"
            value={lastname}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-secondary text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="email"
            value={email}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-secondary text-sm font-bold mb-2"
            htmlFor="username"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="address"
            value={address}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-secondary text-sm font-bold mb-2"
            htmlFor="username"
          >
            Phone
          </label>
          <input
            className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="phone"
            value={phone}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Update
          </button>
          <Link to={"/"}> 
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Cancel
          </button>
          </Link>
        </div>
      </form>

    </div>
  );
};

export default EditContact;
