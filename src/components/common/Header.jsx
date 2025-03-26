import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from './Sidebar';
import Dasbord from '../Dasbord';
import { PiArrowFatLineUpLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function Header({setSidebarOpen,sidebarOpen,setIsProfile,isProfile}) {
    

   




    return (
        <>
                
                    <div className=' justify-between items-center  px-8  bg-[#FFFFFF]   hidden md:flex'>
                        <div className='flex items-center'>
                          
                            <button type='buttion' className='px-4  text-sm font-medium text-gray-800 hover:text-gray-900'>
                                <AiOutlineMenu className=' text-[25px]  cursor-pointer' onClick={
                                    () => {
                                        setSidebarOpen(!sidebarOpen)
                                    }
                                } />
                            </button>
                        </div>


                        {/* Profile Button */}
                        <div
                            className='flex items-center relative cursor-pointer py-3 px-2 hover:bg-gray-100 '
                            onClick={() => {
                                setIsProfile(!isProfile);
                            }}
                        >
                            <img
                                className='h-8 w-8 border rounded-full'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8QqtNuTTgH2kV_yXmcGBIzjN5EV1mia5XxNYLFJqR85iG49Dn28Gb9fw3SIrGNoI4SQ&usqp=CAU'
                                alt='Profile'
                            />
                            <span className='ml-4 text-xl font-semibold bg-green-500 rounded-full p-[4px] absolute bottom-3 right-3'></span>
                        </div>

                        {/* Profile Dropdown */}
                        {isProfile && (
                            <div className={`bg-white w-[180px] px-2 py-2 absolute top-[70px] right-0 shadow-lg z-10 
                              transition-all duration-300 ease-out 
                                 ${isProfile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'}`}>
                                <ul>
                                    <li className='py-1 hover:bg-gray-200 flex items-center gap-2 px-2'>
                                        <i><CgProfile /></i> <a href='#'> Profile</a>
                                    </li>
                                    <li className='py-1 hover:bg-blue-200 px-2 flex items-center gap-2'>
                                        <i><PiArrowFatLineUpLight /></i> <a href='#'>Company Profile</a>
                                    </li>
                                    <li className='py-1 hover:bg-gray-200 px-2 flex items-center gap-2'>
                                        <i><RiLogoutCircleRLine /></i>  <a href='#'>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        )}

                    </div>
                    

               
            
        </>

    )
}
