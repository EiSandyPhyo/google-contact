import React from 'react'
import DetailHead from '../Components/DetailHead'
import DetailSection from '../Components/DetailSection'
import { useLocation, useNavigate } from 'react-router-dom'

const Detail = () => {
   const location=useLocation();
   //console.log(location);
  return (
    <div className=' container mx-auto'>
        <DetailHead contactDetail={location?.state} />
        <DetailSection/>
    </div>
  )
}

export default Detail