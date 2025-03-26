import React from 'react'
import { RiContactsBook3Line } from "react-icons/ri";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { SiVirustotal } from "react-icons/si";

export default function Dasbord() {
    return (
        <>
            <main className='py-6 px-5 sm:px-10'>
                <h1 className="pb-8 text-[25px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate__animated animate__fadeIn animate__delay-1s hover:text-blue-300 hover:text-shadow-md transition-all duration-500 ease-in-out">
                    Welcome! Admin
                </h1>
                <div className=' grid grid-cols-2   sm:grid-cols-3 md:grid-cols-2   sm:gap-3 lg:grid-cols-4 gap-3 '>
                    <div className="bg-blue-400 px-5 py-2 rounded-md transition-transform duration-700 ease-out hover:scale-105 hover:rotate-y-6 hover:shadow-2xl hover:transform-gpu">
                        <div className="flex items-center sm:gap-3 gap-10 md:gap-0 justify-between relative">
                            <div className="sm:py-4 py-2 text-white font-mono">
                                <p className="text-[36px]  animate__animated animate__fadeInUp animate__delay-1s">0</p>
                                <h2 className=" animate__animated animate__fadeInUp animate__delay-2s  text-white">Total Users</h2>
                            </div>
                            <span className="flex justify-end items-end">
                                <RiContactsBook3Line className="md:text-[50px] text-[38px] absolute bottom-1 opacity-35" />
                            </span>
                        </div>
                    </div>
                    <div className="bg-blue-400 px-5 py-2 rounded-md transition-transform duration-700 ease-out hover:scale-105 hover:rotate-y-6 hover:shadow-2xl hover:transform-gpu">
                        <div className="flex items-center sm:gap-3 gap-10 md:gap-0 justify-between relative">
                            <div className="sm:py-4 py-2 text-white font-mono">
                                <p className="text-[36px]  animate__animated animate__fadeInUp animate__delay-1s">0</p>
                                <h2 className=" animate__animated animate__fadeInUp animate__delay-2s  text-white">Total Users</h2>
                            </div>
                            <span className="flex justify-end items-end">
                                <RiContactsBook3Line className="md:text-[50px] text-[38px] absolute bottom-1 opacity-35" />
                            </span>
                        </div>
                    </div>
                    <div className="bg-blue-400 px-5 py-2 rounded-md transition-transform duration-700 ease-out hover:scale-105 hover:rotate-y-6 hover:shadow-2xl hover:transform-gpu">
                        <div className="flex items-center sm:gap-3 gap-10 md:gap-0 justify-between relative">
                            <div className="sm:py-4 py-2 text-white font-mono">
                                <p className="text-[36px]  animate__animated animate__fadeInUp animate__delay-1s">0</p>
                                <h2 className=" animate__animated animate__fadeInUp animate__delay-2s  text-white">Total Users</h2>
                            </div>
                            <span className="flex justify-end items-end">
                                <RiContactsBook3Line className="md:text-[50px] text-[38px] absolute bottom-1 opacity-35" />
                            </span>
                        </div>
                    </div>

                    <div className="bg-blue-400 px-5 py-2 rounded-md transition-transform duration-700 ease-out hover:scale-105 hover:rotate-y-6 hover:shadow-2xl hover:transform-gpu">
                        <div className="flex items-center sm:gap-3 gap-10 md:gap-0 justify-between relative">
                            <div className="sm:py-4 py-2 text-white font-mono">
                                <p className="text-[36px]  animate__animated animate__fadeInUp animate__delay-1s">0</p>
                                <h2 className=" animate__animated animate__fadeInUp animate__delay-2s  text-white">Total Users</h2>
                            </div>
                            <span className="flex justify-end items-end">
                                <RiContactsBook3Line className="md:text-[50px] text-[38px] absolute bottom-1 opacity-35" />
                            </span>
                        </div>
                    </div>
                </div>
            </main>
            

        </>
    )
}
