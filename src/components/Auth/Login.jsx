import React from 'react'
import monstalogo from '../../assets/10001.jpg'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
export default function Login() {

    const Navigate = useNavigate();
    let formhandler = ((e) => {
        e.preventDefault();
        axios.post('http://localhost:1007/api/website/auth/admin-login', e.target)
            .then((res) => {
                if (res.data.status == true) {
                    toast.success(res.data.message)
                    console.log("error")
                    Navigate(`/furniture/admin-panel/dashboard`)
                    e.target.reset();
                }
                else {
               toast.error(res.data.message)
                }
            })
            .catch((error) =>

                toast.error(error)
            )

    })



    return (
        <div>
            <ToastContainer />
            <div className='w-full h-full'>
                <div className='grid grid-cols-[auto]'>
                    <div className='h-screen '>
                        <img src={monstalogo} className='w-full h-full object-cover' alt="Logo" />
                    </div>
                    <div className='absolute top-0 left-0 w-full h-full   bg-gray-400 opacity-30'></div>

                    <div className='absolute top-1/2 md:left-1/2 left-[40%]  transform -translate-x-[90%] -translate-y-[95%]  text-center md:text-left text-white'>
                        <h1 className='text-4xl w-full   font-bold mb-4'>Furniture</h1>
                        <h2 className='text-2xl mb-6'>Explore The Fashion</h2>
                        <p className='text-md md:text-lg   '>Explore the latest fashion trends, shop accessories, and more.</p>
                    </div>

                    <div className='absolute top-0 h-full right-0 w-[500px]  p-8 bg-white bg-opacity-90  rounded-sm'>


                        <div className='  flex flex-col  my-40'>
                            <div className='text-left mb-8'>
                                <h2 className='text-3xl font-bold text-gray-900'>Login</h2>
                                <p className='mt-2 text-sm text-gray-600'>Please enter your details to login</p>
                            </div>

                            <form className='space-y-6' onSubmit={formhandler}>
                                <div>
                                    <input
                                        id='email'
                                        type='email'

                                        name='email'
                                        required
                                        className='mt-1 block w-full px-4 py-2 border border-gray-300  outline-0 rounded-md shadow-sm focus:ring-[1px] focus:ring-blue-500 focus:border-blue-500 transition-all'
                                        placeholder='Email'
                                    />
                                </div>

                                <div>
                                    <input
                                        id='password'
                                        type='password'

                                        name='password'
                                        required
                                        className='mt-1 block w-full px-4 py-2 border border-gray-300 outline-0 rounded-md shadow-sm focus:ring-[1px] focus:ring-blue-500 focus:border-blue-500 transition-all'
                                        placeholder='Password'
                                    />
                                </div>

                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <input
                                            id='remember'
                                            type='checkbox'
                                            className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                                        />
                                        <label htmlFor='remember' className='ml-2 block text-sm text-gray-700'>
                                            Remember me
                                        </label>
                                    </div>
                                    <div className='text-sm'>
                                        <a href='#' className='font-medium text-blue-600 hover:text-blue-500'>
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>

                                <button
                                    type='submit'
                                    className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all'
                                >
                                    Sign in
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
