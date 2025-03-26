import React, { useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
export default function Breadcrumb({clickhandler,setClcikhandler,isOpen,setisOpen,detailData,setdetailData }) {
  let TbClick = () => {
    setClcikhandler(!clickhandler)
  }
  let modalClick = () =>{
    setisOpen(!isOpen)
    setdetailData('')
}


  return (
    <>
      <div className=' w-full flex justify-between px-5'  >

        <h1 className=' text-gray-600'>Dashbord</h1>
        <div className=" flex gap-3">
          <div className="bg-sky-500 text-white p-2 rounded-full shadow-lg cursor-pointer ">
            <FaFilter onClick={() => TbClick()} />
          </div>
          <div className="bg-sky-500 text-white p-2 rounded-full shadow-lg cursor-pointer">
            <IoMdAdd onClick={()=>modalClick() } />
          </div>
        </div>
      </div>
    </>
  )
}
