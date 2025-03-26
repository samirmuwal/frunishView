import React from 'react'


export default function Footer() {
    return (
        <>
       <footer className="flex flex-col md:flex-row w-full justify-between py-4 px-4 bg-gray-100">
    <div className="flex justify-center md:justify-start">
        <p className="text-sm text-gray-600">© 2025 Your Website. All rights reserved.</p>
    </div>
    <div className="flex justify-center md:justify-end mt-4 md:mt-0">
        <h1 className="font-bold text-gray-900 hover:text-gray-800 transition duration-500 ease-in-out capitalize animate-fadeIn hover:scale-105">
            design by Samir muwal
        </h1>
    </div>
</footer>




            


        </>
    )
}