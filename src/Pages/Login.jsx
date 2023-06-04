import React, { useState } from 'react'

import {RiLoginBoxFill} from 'react-icons/ri'
// import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../api/authApi'

const Login = () => {
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 //const [login] = useLoginMutation()
 const [login]=useLoginMutation();
 const nav = useNavigate()
 const loginHandler = async(e) => {
  try {
    e.preventDefault()
  const user = {email,password}
  const {data} = await login(user)
  console.log(data)
  if(data?.success) nav('/')
  } catch (error) {
    console.log(error)
  }
 }
    
  return (
    <div className="">
      <div className="flex p-6 items-center bg-gray-100 shadow-lg h-screen justify-center">
        <form
          className="w-96 flex flex-col   mx-auto  gap-6 shadow-lg p-7"
          onSubmit={loginHandler}
          action=""
        >
          <div className=" gap-2 flex justify-center items-center pb-[50px]">
            <RiLoginBoxFill className="text-2xl text-secondary" />
            <p className="font-bold text-secondary  text-2xl ">Login</p>
          </div>
          <hr className="border border-primary " />
          <div>
            <div className="flex flex-col gap-4 ">
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
                className="input border-primary px-12 "
                type="password"
                name=""
                id=""
                placeholder="Enter Your Password"
              />
            </div>
            {/* <a
              className="inline-block align-baseline font-bold text-sm text-black mt-3 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a> */}
            <div className="flex flex-wrap justify-center items-center gap-2 mt-3">
              <p className="text-gray-700 font-medium">
                Don't have an account?
              </p>
              <Link to={"/register"}>
                <p className="text-blue-600 font-medium cursor-pointer">
                  Register
                </p>
              </Link>
            </div>
            
              <Link to={'/'}>
              
              <button className="px-12 register rounded py-2 text-white bg-secondary hover:bg-primary mx-auto block mt-5">
                Login
              </button>
              </Link>
              {/* <Link to={'/register'}>
            <button className='px-12 py-2 login rounded text-white bg-red-500 hover:bg-red-700'>Logout</button>
            </Link> */}
            
          </div>
        </form>
      </div>
    </div>
      
  )
}

export default Login