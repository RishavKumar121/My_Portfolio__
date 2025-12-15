import React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";
import {Profile_Data} from "../pages/data"

const Contect = () => {
  return (
    <div id='Contact' className='max-w-7xl m-auto pb-5'>
        <h1 className='text-5xl font-bold text-center mt-10 text-[#0f9df8] py-5'>Contact us</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 md:px-6 mx-5 text-white'>

            <div data-aos="fade-right">
            <div className=' cursor-pointer flex items-center gap-4 bg-linear-to-br from-blue-950 to-slate-900 px-6 py-4 border border-blue-800 rounded mb-5'><IoMdMail className='w-auto h-auto rounded border border-solid border-[#67e8f9] p-2 text-[20px] text-[#67e8f9]'/>{Profile_Data.email}</div>
            <div className=' cursor-pointer flex items-center gap-4 bg-linear-to-br from-blue-950 to-slate-900 px-6 py-4 border border-blue-800 rounded mb-5'><IoPhonePortraitOutline className='w-auto h-auto rounded border border-solid border-[#67e8f9] p-2 text-[20px] text-[#67e8f9]'/>{Profile_Data.phone}</div>
            <div className=' cursor-pointer flex items-center gap-4 bg-linear-to-br from-blue-950 to-slate-900 px-6 py-4 border border-blue-800 rounded mb-5'><MdOutlineWeb className='w-auto h-auto rounded border border-solid border-[#67e8f9] p-2 text-[20px] text-[#67e8f9]'/>{Profile_Data.website}</div>
            </div>

            <div>
                <form data-aos="fade-left" action="">
                    <div><input type="text" className='border border-blue-800 w-full bg-linear-to-br from-blue-950 to-slate-900 rounded py-4 px-6 mb-5 ' placeholder='Name' required /></div>
                    <div><input type="email" className='border border-blue-800 w-full bg-linear-to-br from-blue-950 to-slate-900 rounded py-4 px-6 mb-5' placeholder='Email' required/></div>
                    <div><textarea name="" id="" className='border border-blue-800 w-full bg-linear-to-br from-blue-950 to-slate-900 rounded py-4 px-6 mb-5' placeholder='Message'></textarea></div>
                    <div><input type="submit" className='border border-blue-800 w-full bg-blue-500 rounded py-2 px-6 mb-5 cursor-pointer hover:bg-inherit' /></div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Contect