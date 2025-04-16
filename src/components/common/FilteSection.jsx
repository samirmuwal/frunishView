import React, { useContext } from 'react'
import { TbMoodSearch } from "react-icons/tb";
import { MdAutoDelete } from "react-icons/md";
import axios from 'axios';
import { ConstantContext } from '../constantApi/constant';
export default function FilteSection({ clickhandler, setfilter, filter }) {

  

    let { setFlag , flag} = useContext(ConstantContext)
    let filterResults = ((event) => {
        event.preventDefault()
        setfilter(event.target)
        setFlag(!flag)
    })

    let clearRecords = (() => {
        filter.reset()
        setfilter('')
    })
    
    return (
        <>
        
            <div className={`p-7 ${(clickhandler) ? ' duration-700 ' : '  hidden'} space-y-4 m-4 bg-white`}>
                <div className="grid lg:grid-cols-[22%_22%_22%_13%_auto] md:grid-cols-3 justify-centerś gap-5">
                    <form onSubmit={() => filterResults(event)} className='flex gap-6'>

                        <input type="text" name='name' placeholder="Name" className="border border-gray-400 p-2 rounded" />
                        <input type="text" name='email' placeholder="Email Address" className="border border-gray-400 p-2 rounded" />
                        <input type="text" name='mobile_no' placeholder="Mobile Number" className="border border-gray-400 p-2 rounded" />
                        <button className=" flex items-center gap-3 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            <span className=' animate-bounce'>
                                <TbMoodSearch />
                            </span >
                            Filter
                        </button>

                        <button type='button' onClick={() => clearRecords()} className=" flex items-center gap-3 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            <span className=' animate-bounce' >
                                <MdAutoDelete />
                            </span>
                            clear
                        </button>
                    </form>



                </div>



            </div>



        </>
    )
}
