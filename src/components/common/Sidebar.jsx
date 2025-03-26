import React, { useState } from 'react'
import img from '../../../public/10001.png'
import { IoMdMenu } from "react-icons/io";
import { PiDotsThreeOutlineBold } from "react-icons/pi";
import { IoMdContacts } from "react-icons/io";
import { navList } from "./NavList"
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Link, Links } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


export default function Sidebar({ sidebarOpen }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(true);
    const [issubOpen, setSubOpen] = useState(null);

    let toggleMenu = (index) => {
        setSubOpen(issubOpen === index ? null : index);
    };
    return (
        <>

            <div className={`flex flex-col  md:max-h-screen   text-white`}>

                <ToastContainer/>

                {/* Header Section */}
                <div className={`py-[16px] bg-[#3E8EF7]  
                            flex z-50 gap-3 font-bold px-2 
                            flex-grow items-center
                            md:flex  w-screen
                            ${(sidebarOpen) ? 'text-[15px] md:w-36 duration-700'
                        : ' md:w-49 text-[16px] duration-700'}`}>
                    <span className='md:hidden' onClick={
                        () => setIsOpen(!isOpen)
                    }>   <IoMdMenu />
                    </span>
                    <Link to={`/furniture/admin-panel/dashboard`}>    <div className="flex items-center justify-center gap-3 w-full">
                        <i><img src={img} alt="" width={100} /></i>
                        <p>Furniture</p>
                    </div></Link>
                    <span className='md:hidden' onClick={() => setIsHovered(!isHovered)}><PiDotsThreeOutlineBold /></span>
                </div>

                <div className={` bg-white  z-10 w-full py-1 md:hidden  flex justify-end
                  ${isHovered
                        ? 'absolute top-[-200px] transition-all duration-500 ease-out'  // Moves up when hovered
                        : 'relative top-0 flex  duration-500 ease-in' // Resets position with animation when not hovered
                    }`}>

                    <div className='flex items-center relative cursor-pointer  border-gray-400 border rounded-full'>
                        <img className='h-8 w-8  rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8QqtNuTTgH2kV_yXmcGBIzjN5EV1mia5XxNYLFJqR85iG49Dn28Gb9fw3SIrGNoI4SQ&usqp=CAU' alt='Logo' />
                        <span className='ml-4 text-xl font-semibold  bg-green-500  rounded-full p-[4px] absolute bottom-1  right-0'></span>
                    </div>
                </div>
                {/* Main Sidebar Section */}
                <div className={`flex-grow duration-500 z-10 bg-[#263238]    md:translate-x-[0] h-screen 
                ${(isOpen) ? 'translate-x-[0] duration-500 ease-in'

                        : ' translate-x-[-700px] duration-500 ease-out'}   sm:max-w-[260px] md:w-full`}>
                    <Link to={`/furniture/admin-panel/dashboard`}    >    <div className='flex items-center justify-center py-2 mt-3 gap-4 text-white
                     hover:bg-gray-600 cursor-pointer rounded-lg transition-all duration-300'>

                        <p className='text-lg font-semibold'>Dashboard</p>
                    </div></Link>
                    {

                        /* Loop through the navigation items */

                        navList.map((item, index) => {
                            const { navName, icon, id, subMenu } = item;
                            return (
                                <ul className="divide-y divide-gray-200 ">
                                    {/* Orders Link */}
                                    <li className="py-[6px] relative duration-700  ">
                                        <span className=" flex flex-col     hover:text-white group px-1 mb-[4px]">
                                            <p className=' rounded-md hover:bg-gray-500   shadow-sm  shadow-gray-700'>
                                                <span className={`flex p-1 cursor-pointer text-[15px] ${(sidebarOpen) ? 'items-center gap-5 justify-center' : 'justify-between items-center'} w-full`}>
                                                    {icon}
                                                    {(sidebarOpen) ? '' : (
                                                        <p className="flex w-full  capitalize duration-700 ms-3 items-center   justify-between" onClick={() =>
                                                            toggleMenu(id)}>
                                                            <i className=''>{navName}

                                                            </i>

                                                            <i>
                                                                {(issubOpen === id) ? (
                                                                    <FaChevronDown className='text-[15px]' />
                                                                ) : (
                                                                    <FaChevronRight className='text-[15px]' />
                                                                )}
                                                            </i>
                                                        </p>
                                                    )}
                                                </span>
                                            </p>



                                            {
                                                /* Submenu all hover effect*/


                                                (sidebarOpen != false) &&
                                                <div className={`absolute text-sm text-gray-400  mt-[3px]  flex gap-2 w-34
                                                            group-hover:flex bg-black    rounded-e-md transition-all duration-300 opacity-0 group-hover:opacity-100 py-2  flex-col items-center justify-center top-0 right-[-136px] ${(sidebarOpen)}`}>

                                                    {
                                                        (sidebarOpen) &&

                                                        subMenu.map((subitem, subindex) => {
                                                            const { navName, subLink } = subitem;
                                                            return (

                                                                <span className={`text-white w-full  px-2 capitalize hover:bg-gray-700`}>
                                                                    {navName}

                                                                </span>
                                                            )
                                                        })

                                                    }
                                                </div>

                                                /* Submenu all hover effect end*/
                                            }

                                        </span>
                                        {/* Submenu all drop-down*/}

                                        {
                                            (issubOpen === id) && (sidebarOpen != true) &&
                                            subMenu.map((subitem, subindex) => {


                                                const { navName, link } = subitem;

                                                // alert()


                                                return (
                                                    <div className="relative  overflow-hidden ">
                                                        <div
                                                            key={subindex}
                                                            className={`group py-1 ${(issubOpen)  ? '' : 'translate-y-[-60px]'}  hover:bg-gray-800 hover:shadow-md rounded-md transition-all duration-300 cursor-pointer`}
                                                        >
                                                    
                                                                <Link
                                                                    to={link}
                                                                    className="flex flex-col px-6 py-1 text-white capitalize transition-colors duration-300 hover:text-gray-300"
                                                                >
                                                                    {navName}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                

                                                )
                                            })
                                        }
                                        {/* Submenu all drop-down end*/}


                                    </li>
                                </ul>
                            )
                        })



                    }
                </div>
            </div>
        </>
    )
}
