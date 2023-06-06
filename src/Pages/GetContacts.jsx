import React, { useState } from 'react'
import { HiPrinter } from "react-icons/hi2";
import { CiExport, CiMenuKebab } from "react-icons/ci";
import { MdStarOutline, MdOutlineEdit } from "react-icons/md";
import { BsStar } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { LuFolderDown } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const GetContacts = ({contact, menuOpen, checked, setChecked, selected, setSelected}) => {

  const [star, setStar] = useState(true);

  const checkboxHandler = (e,c) => {
    if (e.target.checked) {
      setChecked([...checked, c]);
      console.log(e.target)
    } else {
      setChecked(checked.filter((item) => item !== c));
    }
  };

  if (checked.length== 0){
     setSelected(true);
  } 
  console.log(checked)
    let address = contact?.address?.address;
  //console.log(contact.address.city + " " + contact.address.street);
  
  return (
    <>
    <tr className="hover group relative">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar group-hover:invisible">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={contact?.image}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          {/* checkbox visible */}
          <div className=" absolute "> {/* invisible group-hover:visible */}
          <label onClick={()=> setSelected(false)}>
              <input type="checkbox" className="checkbox rounded-sm" checked={checked.includes(contact?.firstName+" "+contact?.lastName) }
                  onChange={(e) => checkboxHandler(e,contact?.firstName+" "+contact?.lastName)} /> 
            </label>
          </div>
          <div>
            <Link to={`/detail/${contact?.id}`} state={contact} >
            <div className="font-semibold capitalize w-1/5 max-[1003px]:w-1/3">
              {contact?.firstName+" "+contact?.lastName}
            </div>
            </Link>
          </div>
        </div>
      </td>
      
      <td className="w-1/5 max-[574px]:hidden max-[1003px]:w-1/3">
        {contact?.email}
      </td>
      <td className="w-1/5 max-[574px]:hidden max-[1003px]:hidden">
        {contact?.phone}
      </td>
      <td className={
                    menuOpen
                      ? "hidden"
                      : "w-1/5 max-[574px]:hidden max-[1003px]:hidden"
                  }>
        {/* {address} */} {contact?.company?.title + " , " + contact?.company.name}
      </td>
      {/* single hover */}
      <td className="w-1/5 max-[574px]:w-2/5 max-[1003px]:1/3">
        <div className="invisible group-hover:visible flex items-center space-x-5 justify-end">
          <button className="h-full">
            <div
              className=" tooltip tooltip-bottom capitalize"
              data-tip="star contact"
            >
              <button onClick={()=>setStar(!star)}>
                {star ? <BsStar size={20}/> : <BsFillStarFill color='bg-primary' size={20}/> }
              </button>
              
            </div>
          </button>
          <button className="h-full">
            <div
              className=" tooltip tooltip-bottom capitalize"
              data-tip="edit contact"
            >
              <Link to={`/edit/${contact?.id}`} state={contact}>
              <MdOutlineEdit size={20} />
              </Link>
            </div>
          </button>
          <button className="h-full">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className=" m-1 cursor-pointer">
                <div
                  className=" tooltip tooltip-bottom capitalize"
                  data-tip="more actions "
                >
                  <CiMenuKebab size={20} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className=" space-y-1 mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 text-secondary rounded-box w-52"
                /* dropdown-content menu p-2 bg-base-100 rounded-box w-60 shadow-3xl dropdown-content-bg */
              >
                <li>
                  <a>
                    <HiPrinter />
                    Print
                  </a>
                </li>
                <li>
                  <a>
                    <CiExport />
                    Export
                  </a>
                </li>
                <li>
                  <a>
                    <LuFolderDown />
                    Hide from contacts
                  </a>
                </li>
                <li>
                  <a>
                    <RiDeleteBin6Line />
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </td>
    </tr>

    </>
  )
}

export default GetContacts
