import React, { useEffect, useState } from "react";
import { HiPrinter } from "react-icons/hi2";
import { CiImport, CiExport, CiMenuKebab } from "react-icons/ci";
import { MdOutlineMenuOpen } from "react-icons/md";
import GetContacts from "../Pages/GetContacts";
import Sidebar from "./Sidebar";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4);

  const lastPage = currentPage * pageSize;
  const firstPage = lastPage - pageSize;
  const currentPages = contacts.slice(firstPage, lastPage);
  const noOfPage = Math.ceil(contacts.length / pageSize);
  console.log(noOfPage);
  const numbers = [...Array(noOfPage + 1).keys()].slice(1);
  console.log(numbers);

  const currentPageHandle = (id) => {
    setCurrentPage(id);
    // console.log(id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/users`);
    const data = await api.json();
    setContacts(data);
    // console.log(data);
  };
  useEffect(() => {
    const handleWindowResize = () => {
      setMenuOpen(false);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  console.log("menuOpen - " + menuOpen);
  return (
    <Sidebar>
      <div>
        <div className="">
          <table className={menuOpen ? "table w-2/3" : "table w-full"}>
            {/* head */}
            <thead>
              <tr>
                <th className="capitalize w-1/5 max-[1003px]:w-1/3">name</th>
                <th className="capitalize w-1/5 max-[574px]:hidden max-[1003px]:w-1/3">
                  email
                </th>
                <th className="capitalize w-1/5 max-[574px]:hidden max-[1003px]:hidden">
                  phone number
                </th>
                <th
                  className={
                    menuOpen
                      ? "hidden"
                      : "capitalize w-1/5 max-[574px]:hidden max-[1003px]:hidden"
                  }
                >
                  address
                </th>
                <th className="w-1/5 max-[574px]:w-2/5 max-[1003px]:1/3">
                  <div className="flex items-center space-x-5 justify-end">
                    <div
                      className="tooltip tooltip-bottom lowercase cursor-pointer"
                      data-tip="print"
                    >
                      <HiPrinter size={20} />
                    </div>
                    <div
                      className="tooltip tooltip-bottom lowercase cursor-pointer"
                      data-tip="import"
                    >
                      <CiImport size={20} />
                    </div>
                    <div
                      className="tooltip tooltip-bottom lowercase cursor-pointer"
                      data-tip="export"
                    >
                      <CiExport size={20} />
                    </div>
                    <div
                      className="tooltip tooltip-bottom capitalize cursor-pointer"
                      data-tip="list settings"
                    >
                      <CiMenuKebab size={20} />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <div className="my-4">
              <p className=" uppercase text-xs text-[#91979b] ml-4 tracking-widest">
                {contacts.length === 1
                  ? `contact (${contacts.length})`
                  : `contacts (${contacts.length})`}
              </p>
            </div>
            <tbody>
              {currentPages.map((contact) => {
                return (
                  <GetContacts
                    key={contact?.id}
                    contact={contact}
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div className=" h-14 space-x-5 relative max-[574px]:hidden max-[1003px]:hidden lg:hidden 2xl:block">
          <div
            className={
              menuOpen
                ? "absolute w-16 top-[0.9rem] right-[380px] inline-block"
                : "absolute w-16 top-[0.9rem] right-0"
            }
          >
            <div
              className="tooltip tooltip-bottom capitalize cursor-pointer text-xs"
              data-tip={menuOpen ? "hide sidebar" : "show sidebar"}
            >
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="btn btn-ghost btn-xs "
              >
                <MdOutlineMenuOpen
                  size={23}
                  className={menuOpen ? " rotate-180" : ""}
                />
              </button>
            </div>
            <div className=" w-96 absolute top-0 left-[50px]">
              {menuOpen ? (
                <div class="card w-96 bg-base-100 shadow-3xl">
                  <div class="card-body">
                    <h2 class="card-title">Add birthdays</h2>
                    <div className="flex flex-wrap justify-between items-start">
                      <div className="w-4/5">
                        <p className="text-xs ">
                          Save your contacts' birthdays to see them on your
                          birthday calendar and get helpful cues here and across
                          Google services
                        </p>
                      </div>
                      <div className="w-1/5">
                        <MdOutlineInfo
                          size={20}
                          className="cursor-pointer ml-auto"
                        />
                      </div>
                    </div>

                    <div className=" flex flex-col gap-3 ">
                      {currentPages.map((contact) => {
                        return (
                          <>
                            <div className="flex flex-wrap justify-between items-center hover:bg-[#0206176c] p-1 cursor-pointer">
                              <div className="flex flex-wrap gap-3  cursor-pointer">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-12 h-12">
                                    <img
                                      src={`https://ui-avatars.com/api/?name=${contact.username[0]}&background=random&font-size=0.5`}
                                      alt="Avatar Tailwind CSS Component"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                  <div className="font-semibold capitalize">
                                    <p className="text-sm">
                                      {contact.name.firstname +
                                        " " +
                                        contact.name.lastname}
                                    </p>
                                  </div>
                                  <div className="">
                                    <p className="text-xs">{contact.email}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="ml-auto">
                                <MdCake />
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      {contacts ? (
        <div className="flex flex-wrap justify-center mt-10">
          <div className="join">
            {numbers.map((no, i) => {
              return (
                <button
                  onClick={() => currentPageHandle(no)}
                  className={` btn join-item  btn-primary ${
                    currentPage === no ? "btn-active" : ""
                  }`}
                  key={i}
                >
                  {no}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </Sidebar>
  );
};

export default Contact;
