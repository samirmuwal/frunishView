import React, { useState } from 'react'
import Sidebar from '../common/Sidebar'
import Dasbord from '../Dasbord'
import Header from '../common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer'


export default function RootLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [isProfile, setIsProfile,] = useState(false);
    return (
        <>
         
            <header className=' w-full md:flex   relative overflow-y-auto  bg-[#F1F4F5]'>

                <Sidebar sidebarOpen={sidebarOpen} />
                <div className=' w-full md:relative'>
                    <Header isProfile={isProfile} className=" "
                        setIsProfile={setIsProfile}
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen} />

                    <div className=' absolute top-0 md:top-[80px]   w-full '>
                    <Outlet />
                    </div>
                    {/* <div  className="  absolute  bottom-0 w-full ">
                    <Footer />
                    </div> */}
                </div>
            
               




            </header>


        </>
    )
}

