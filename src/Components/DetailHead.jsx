import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { TfiExport } from "react-icons/tfi";
import { AiOutlinePrinter } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { BsStar } from "react-icons/bs";
import {BsFillStarFill} from "react-icons/bs"
import { MdOutlineMail } from "react-icons/md";
import { BsFolder } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";
import { CgCamera } from "react-icons/cg";

const DetailHead = ({contactDetail}) => {
    const [star, setStar] = useState(false);
    console.log(contactDetail);
    
    return (
        <div className="relative">
        <div className=" border-b-4 p-10 md:flex justify-between items-end mx-5 mb-10 h-[380px] md:h-[250px]">
        <div className=" flex flex-col md:flex-row justify-start items-center gap-10 mt-16">
        
        <span
        className="myLabel text-6xl text-white font-bold bg-primary capitalize "
        >
        {contactDetail?.name?.firstname[0]}
        </span>
        <p className=" capitalize text-3xl font-semibold">{contactDetail?.name?.firstname+" "+contactDetail?.name?.lastname}</p>
        <button className="w-[120px] h-[50px] md:w-[30px] md:h-[30px] px-1 border-2 border-zinc-300 rounded-full inline-block lg:hidden ">
        <span className=" flex justify-center items-center text-2xl font-bold">
        <MdEdit className=" lg:hidden" />
        <span className="ml-2 block md:hidden"> Edit</span>
        </span>
        </button>
        </div>
        <div className="absolute top-0 right-1 md:relative mt-5 flex md:justify-end items-center">
        <div>
        <button
        onClick={() => {
            setStar(!star);
        }}
        className="text-2xl"
        >{star?
            <BsFillStarFill color="#81CFD1" /> 
            :
            <BsStar color="#81CFD1"/> 
        }
        </button>
        </div>
        <div className="dropdown dropdown-end mx-2">
        <label
        tabIndex={0}
        className="btn m-1 bg-zinc-50 font-extrabold text-2xl w-[40px] text-black hover:bg-zinc-50 border-0"
        >
        ...
        </label>
        <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52"
        >
        <li>
        <a className=" active:bg-[#81CFD1] active:text-white">
        <AiOutlinePrinter />
        Print
        </a>
        </li>
        <li>
        <a className=" active:bg-[#81CFD1] active:text-white">
        <TfiExport /> Export
        </a>
        </li>
        <li>
        <a className=" active:bg-[#81CFD1] active:text-white">
        <BiHide />
        Hide from contact
        </a>
        </li>
        <li>
        <a className=" active:bg-[#81CFD1] active:text-white">
        <MdDelete />
        Delete
        </a>
        </li>
        </ul>
        </div>
        <button className=" hidden md:block w-[100px] h-[50px] py-3 px-5 bg-primary text-white mySave">
        Edit
        </button>
        </div>
        </div>
        <div className=" flex justify-center items-center gap-2 absolute bottom-[-10px] left-[110px] md:left-[300px]">
        <p className=" w-[30px] h-[30px] border-4 flex justify-center items-center rounded-full bg-white">
        <MdOutlineMail />
        </p>
        <p className=" w-[30px] h-[30px] border-4 flex justify-center items-center rounded-full bg-white">
        <BsFolder />
        </p>
        <p className=" w-[30px] h-[30px] border-4 flex justify-center items-center rounded-full bg-white">
        <BiMessage />
        </p>
        <p className=" w-[30px] h-[30px] border-4 flex justify-center items-center rounded-full bg-white">
        <CgCamera />
        </p>
        </div>
        </div>
        );
    };
    
    export default DetailHead;