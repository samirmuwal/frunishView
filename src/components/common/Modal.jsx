import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { IoIosFootball } from "react-icons/io";
import { ConstantContext } from '../constantApi/constant';
import { data, useParams } from 'react-router-dom';


export default function Modal({ isOpen, setisOpen, setdetailData, detailData }) {
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const { flag, setFlag } = useContext(ConstantContext);


    //  console.log(detailData)

    useEffect(() => {
        if (isOpen == 1) {
            setLoading(true);
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1000);

            return () => clearTimeout(timer); // cleanup

        }
    }, [isOpen]);
    let formSubmit = ((event) => {


        // const formData = new FormData(event.target);
        // const data = Object.fromEntries(formData.entries());
        event.preventDefault()
        const url = detailData
            ? "http://localhost:1007/api/website/auth/admin-edit"

            : "http://localhost:1007/api/website/auth/admin";

        const method = detailData ? axios.put : axios.post;

        method(url, event.target, {
            // headers: {
            //   "Content-Type": "application/json",
            // },
          })
            .then(() => {
              event.target.reset();
              setisOpen(0);
              toast.success("Admin Updated!");
              setFlag(!flag);
            })
            .catch(() => {
              toast.error("Admin error!");
            });
    })


    return (

        <>
            {loading === true && isOpen === true && (
                <p
                    className={`
    text-3xl font-extrabold text-center text-gray-600
    flex items-center justify-center gap-2 
    bg-gradient-to-r from-gray-300-300 to-gray-400 
    p-2 rounded-2xl shadow-2xl 
    animate-pulse
  `}
                    style={{
                        animation: "slideFade3D 0.8s ease-out forwards",
                        transform: "perspective(1000px) rotateX(0deg)",
                    }}
                >
                    L
                    <span>
                        <IoIosFootball className="animate-spin text-orange-800 text-3xl" />
                    </span>
                    <span>
                        <IoIosFootball className="animate-spin text-orange-800 text-3xl" />
                    </span>
                    d
                    <span className="animate-bounce">i</span>ng
                    <span className="text-orange-700 animate-pulse">....</span>
                </p>
            )}



            <div
                className={`
    bg-white rounded-xl shadow-2xl dark:bg-gray-800 transform transition-all
    duration-700 ease-in-out origin-left mx-auto w-[90%] max-w-md
    ${isOpen && !loading
                        ? "translate-x-0 rotate-y-0 scale-100 pointer-events-auto"

                        : "-translate-x-20 rotate-y-12 scale-90 hidden pointer-events-none"}
  `}
                style={{
                    perspective: "1200px",
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d"
                }}
            >
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {(detailData) ? "Update User" : "Create User"}
                    </h3>
                    <button
                        type="button"
                        onClick={() => setisOpen(false)}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 14 14">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>

                <div className="p-4 md:p-5">
                    <form className="space-y-4" onSubmit={(e) => formSubmit(e)}>
                        <input type="text" defaultValue={detailData._id} name='_id'  ></input>
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                defaultValue={detailData.name}
                                placeholder="name"
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                defaultValue={detailData.email}
                                placeholder="email"
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="mobile_No"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                name="mobile_no"
                                id="mobile_no"
                                defaultValue={detailData.mobile_no}
                                placeholder="mobile number"
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            />
                        </div>
                       <div className={`${detailData ? "hidden" : ""}`}>
  <label
    htmlFor="password"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Password
  </label>
  <input
    type="password"
    name="password"
    id="password"
    placeholder="Enter your password"
    minLength={6}
    defaultValue={detailData.password}
    required
    title="Password must be at least 6 characters long."
    autoComplete="current-password"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
               dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
  />
</div>

                        <button
                            type="submit"
                            className="w-[20%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            {(detailData) ? "Update" : "Create"}
                        </button>
                    </form>
                </div>
            </div>



        </>
    )
}
