import React, { useState } from 'react'
import {FaRegistered} from 'react-icons/fa'
// import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../api/authApi'


const Register = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [password_confirmation,setPasswordConfirmation] = useState('')
  const [register]=useRegisterMutation();
  const nav = useNavigate()
  const registerHandler = async(e) => {
   try {
    e.preventDefault()
    const user = {name,email,password,password_confirmation}
    const {data}= await register(user)
    console.log(data)
    if(data?.success){
      nav('/login')
    }
   } catch (error) {
    console.log(error)
   }

  }
  return (
    <div className="">
    <div className=" flex h-screen justify-center items-center p-6 bg-gray-100 shadow-lg ">
      <form
        className="w-96 flex flex-col mx-auto gap-6 shadow-lg p-7"
        onSubmit={registerHandler}
      >
        <div className="flex items-center justify-center gap-2 pb-[50px]">
          <FaRegistered className="text-2xl text-secondary" />
          <p className="font-bold text-secondary text-2xl tracking-wider ">
            Register
          </p>
        </div>
        <hr className="border border-primary " />
        <div className="flex flex-col gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input  border-primary px-12 "
            type="text"
            name=""
            id=""
            placeholder="Your Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input  border-primary px-12 "
            type="text"
            name=""
            id=""
            placeholder="Your Email Address"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input  border-primary px-12 "
            type="text"
            name=""
            id=""
            placeholder="Enter Your Password"
          />
          <input
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="input  border-primary px-12 "
            type="text"
            name=""
            id=""
            placeholder="Password Confirmation"
          />
          <div className="flex gap-2 mx-auto">
            <p>Already have an account?</p>
            <Link to={"/login"}>
              <p className="text-blue-500">Login</p>
            </Link>
          </div>
          <div className="flex gap-3 p-6 ">
            <button className=" mx-auto px-12 register py-1 rounded text-white bg-secondary hover:bg-primary">
              Register
            </button>
            {/* <Link to={"/login"}>
              <button className="px-12 py-2 login rounded text-white bg-primary hover:bg-secondary-focus">
                Login
              </button>
            </Link> */}
          </div>
        </div>
      </form>
    </div>
  </div>
      
);
};


export default Register