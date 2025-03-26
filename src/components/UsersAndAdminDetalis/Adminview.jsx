import React, { useState } from 'react'
import Breadcrumb from '../common/Breadcrumb'
import FilteSection from '../common/FilteSection'
import AdminRecords from '../common/AdminRecords'
import Modal from '../common/Modal'

export default function Adminview() {
  let [clickhandler,setClcikhandler] = useState(0)

  let [isOpen,setisOpen] =useState(0)
  let [filter,setfilter] = useState('')
  let [detailData,setdetailData] = useState('')
  

  return (
    <>

      <Breadcrumb
       clickhandler={clickhandler} setClcikhandler={setClcikhandler} 

       setisOpen={setisOpen} isOpen={isOpen}  setdetailData={setdetailData}
       
       />
       <span className=' absolute top-[-4%] left-[30%] w-[500px] z-20'>
       <Modal className=" w-full"  isOpen={isOpen} setisOpen={setisOpen} detailData={detailData} setdetailData={setdetailData}/>
       </span>
 
      <FilteSection clickhandler={clickhandler} filter={filter} setfilter={setfilter} />

      <AdminRecords filter={filter} setfilter={setfilter} isOpen={isOpen} setisOpen={setisOpen} detailData={detailData} setdetailData={setdetailData}/>
    </>
  )
}
