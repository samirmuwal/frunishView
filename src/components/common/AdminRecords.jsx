import React, { useContext, useEffect, useState } from 'react'
import { MdAutoDelete } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { TbFileTypeCsv } from "react-icons/tb";
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

import { MdOutlinePictureAsPdf } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import axios from 'axios';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { ConstantContext } from '../constantApi/constant';
import { Link } from 'react-router-dom';


export default function AdminRecords({ filter, isOpen, setisOpen, detailData, setdetailData }) {
    const [list, setlist] = useState(1);
    const [data, setData] = useState([''])
    const [search, setSearch] = useState('')
    const { flag, setFlag } = useContext(ConstantContext);
    const [limit, setlimit] = useState(4)
    const [page, setPgae] = useState(1)
    const [totalPage, settotalPage] = useState()
    const [checkBox, setcheckBox] = useState([])


    useEffect(() => {
        axios.post("http://localhost:1007/api/website/auth/admin-index", {
            sort: search,
            name: (filter) ? filter.name.value : '',
            email: (filter) ? filter.email.value : '',
            mobile_no: (filter) ? filter.mobile_no.value : '',
            limit: limit,
            page: page
        })
            .then((res) => {
                if (res.data.status == true) {
                    setData(res.data.data)
                    settotalPage(res.data.totalPages)
                }
            }).catch(() => {
            })
    }, [search, flag, limit, page])

    let editData = (data) => {
        setisOpen(true)
        setdetailData(data)
    }

    const searchHandler = ((event) => {
        setSearch(event.target.value)
    })

    const clickhandler = (() => {
        setlist(!list)
    })

    const getLimit = ((event) => {
        setlimit(event.target.value)
    })

    const checkBoxHandler = (event, id) => {
        if (event.target.checked == true) {
            // setcheckBox([...checkBox,id]);
            // setcheckBox((v)=>[...v,id])
            checkBox.push(id)
            setcheckBox([...checkBox])
        } else {
            let data = checkBox.filter((val) => val != id);
            setcheckBox(data);
        }
    };

    const indexCheckBox = () => {

        if (checkBox.length != data.length) {
            let id = data.map((val, ind) => {
                return (val._id)
            }
            )
            setcheckBox((v) => [...v, ...id])
        }
        else { setcheckBox([]) }
    }

    const DownloadCSV = async () => {
        
        const filteredData = data.map(({ _id, status, password, ...rest }) => ({
            ...rest,
            password: password
        }));

        const headers = Object.keys(filteredData[0]).join(",") + "\n";
        const rows = filteredData.map(row => Object.values(row).join(",")).join("\n");

        const csvContent = headers + rows;

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'filtered_data.csv';
        link.click();

        URL.revokeObjectURL(url); //
    }

    const DownloadPdf = async () => {

       
        const filteredData = data.map(({ _id, status, password, ...rest }) => ({
            ...rest,
            password: password
        }));
    
        const doc = new jsPDF();
    
        // Adding Title
        doc.setFontSize(18);
        doc.text("User Data Report", 14, 15);
    
        // Adding table
        autoTable(doc, {
            startY: 20,
            head: [['Name', 'Email', 'Password']],
            body: filteredData.map(user => [user.name || "", user.email || "", user.password || ""]),
            styles: { fontSize: 10, cellPadding: 4 },
            headStyles: { fillColor: [22, 160, 133], textColor: 255, halign: 'center' },
            bodyStyles: { textColor: 0 },
            theme: 'grid',
        });
    
        // Generate PDF Blob
        const pdfBlob = doc.output('blob');
        const url = URL.createObjectURL(pdfBlob);
    
        // Create a download link
        const link = document.createElement('a');
        link.href = url;
        link.download = 'user_data_report.pdf';
        document.body.appendChild(link);
        link.click();
    
        // Cleanup
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
    const deleteHandler = async () => {
        try {
            const res = await axios.post('http://localhost:1007/api/website/auth/admin-delete', { _id: checkBox });
            console.log("Delete response:", res.data);

            setcheckBox([]);  // Clear selected checkboxes

            if (data.length === checkBox.length) {
                // If all records are deleted, clear the state
                setData([]);
                settotalPage(1);
            } else {
                setFlag(prev => !prev);  // Toggle flag to trigger useEffect
            }
        } catch (err) {
            console.error("Error deleting:", err);
        }

        console.log("Deleting ID:", checkBox);
    };


    return (
        <>

            <div className="p-7 space-y-4 m-4 bg-white">
                <div className=" flex justify-between px-3  gap-7 3 w-full  " >
                    <div className=' flex gap-[50%] items-center  '>
                        <div className=' border-1 px-10 py-2 relative ' onClick={() => clickhandler()}>

                            {(list == 1) ?
                                <IoIosArrowDown />
                                :
                                <IoIosArrowUp />
                            }
                            <ul
                                onClick={() => getLimit(event)}
                                className={`${list == 1 ? 'hidden' : 'flex flex-col'} absolute right-[0px] 
                                top-[32px] border-1`}
                            >
                                <li className='px-[38px] border-gray-400 border-1 hover:bg-blue-300'
                                    value={5}>5</li>
                                <li className='px-[38px] border-gray-400 border-1 hover:bg-blue-300'
                                    value={10}>10</li>
                                <li className='px-[38px] border-gray-400 border-1 hover:bg-blue-300'
                                    value={20}>20</li>
                            </ul>

                        </div>




                    </div>
                    <div class="flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden max-w-md
                     mx-auto font-[sans-serif]">
                        <input type="email" placeholder="Search Something..."
                            onChange={() => searchHandler(event)} class="w-full outline-none bg-transparent
                             text-gray-600 text-sm" />
                        <Link to={''}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" class="fill-gray-600">
                            <path
                                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                            </path>
                        </svg>
                        </Link>
                    </div>


                    <div className=' flex flex-row gap-4   items-center text-[20px]'>
                        <div>
                            <span className="text-green-500 flex items-center  bg-gray-200 shadow-gray-400 shadow-md p-1 hover:scale-110 duration-500"><BiTransfer /></span>
                        </div>

                        <span className=" flex items-center text-red-700 bg-gray-200 shadow-gray-400 shadow-md p-1 hover:scale-110 duration-500"><MdAutoDelete onClick={() => deleteHandler()} /></span>
                        <span className="text-green-700 flex items-center bg-gray-200 shadow-gray-400 shadow-md p-1 hover:scale-110 duration-500"><TbFileTypeCsv onClick={() => DownloadCSV()} /></span>
                        <span className="text-green-700 flex items-center bg-gray-200 shadow-gray-400 shadow-md p-1 hover:scale-110 duration-500"><MdOutlinePictureAsPdf onClick={()=>DownloadPdf()}/></span>
                    </div>
                </div>
                <div>
                    <table className="table-auto w-full   border-gray-200 border-2">
                        <thead>
                            <tr className="bg-gray-50 text-gray-500">
                                <th className="border-gray-200 border-2 px-4 py-2" ><input type='checkbox'
                                    checked={checkBox.length == data.length ? true : ''}
                                    onClick={() => indexCheckBox()}></input></th>
                                <th className="border-gray-200 border-2 px-4 py-2 ">Name</th>
                                <th className="border-gray-200 border-2 px-4 py-2">Email</th>
                                <th className="border-gray-200 border-2 px-4 py-2">Phone</th>
                                <th className="border-gray-200 border-2 px-4 py-2">Status</th>
                                <th className="border-gray-200 border-2 px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {data.length > 0 ? data.map((data) =>

                                <tr key={data.id} className=' text-center text-gray-500' >
                                    <td onClick={() => checkBoxHandler(event, data._id)} className="border px-4 py-2 "><input type='checkbox'
                                        checked={checkBox.includes(data._id) ? true : ''}
                                    ></input></td>
                                    <td className="border-gray-200 border-2 px-4 py-2">{data.name}</td>
                                    <td className="border-gray-200 border-2 px-4 py-2">{data.email}</td>
                                    <td className="border-gray-200 border-2 px-4 py-2">{data.mobile_no}</td>

                                    <td className="border-gray-200 border-2 px-4 py-2 "><span className={`${(data.status) ? ' bg-green-400 text-white' : 'text-white bg-red-400'}   px-2.5 rounded-2xl font-bold`}>{data.status == true ? "Active" : "Deactive"}</span>
                                    </td>
                                    <td onClick={() => editData(data)} className="border-gray-200 border-2 px-4 py-2 text-green-600 "> <BiSolidEdit className=' w-full' /></td>
                                </tr>
                            ) : <tr>
                                <td colSpan={6}>No records</td>
                            </tr>
                            }
                        </tbody>
                    </table>
                    <div className="flex items-center justify-center space-x-4 mt-4">
                        <button onClick={(() =>
                            setPgae(page <= 1 ? 1 : page - 1)

                        )} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md shadow-sm transition-all duration-200">
                            Prev
                        </button>
                        <span className="text-lg font-semibold text-blue-600">{page}</span>
                        <span className="text-lg font-semibold text-blue-600"><MdKeyboardDoubleArrowLeft /></span>
                        <span className="text-lg font-semibold text-blue-600"><MdKeyboardDoubleArrowRight /></span>
                        <span className="text-lg font-semibold text-blue-600">{totalPage}</span>
                        <button onClick={(() => {
                            setPgae(page < totalPage ? page + 1 : totalPage)

                        }

                        )} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md shadow-sm transition-all duration-200">
                            Next
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

