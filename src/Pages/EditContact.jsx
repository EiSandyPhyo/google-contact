import React from "react";
import {  useLocation } from "react-router-dom";
import EditSection from "../Components/EditSection";
import EditHead from "../Components/EditHead";
import Sidebar from '../Components/Sidebar'


const EditContact = () => {
  const location = useLocation();
  const contactDetail = location.state;
  console.log(contactDetail);
 



  return (
    <Sidebar>
    <EditHead contactDetail={contactDetail}/>
    <EditSection contactDetail={contactDetail} />
    </Sidebar>
  );
};

export default EditContact;
