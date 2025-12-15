import React, { useState } from 'react'
import Resume from "../assets/resume.png"
import { CgMenuMotion } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {

    const [isMenuOpen, setIsMenuOption] = useState()

    const tooglee = ()=>{
        setIsMenuOption(!isMenuOpen)
    }

  return (
    <div className='  bg-blue-950 max-w-7xl shadow-2xl md:px-20 rounded-md text-white flex justify-between items-center m-auto p-5 backdrop-blur-[200px] relative'>
        <div>
        <img src={Resume} alt="" className='w-12 '/>
        </div>
        
      
        <ul className={isMenuOpen?'flex gap-16  md:gap-8 max-sm:font-bold cursor-pointer text-lg md:text-[15px] flex-col md:flex-row absolute top-22 left-0 bg-blue-950 md:bg-inherit md:w-auto md:static w-3/5 h-screen md:h-auto text-white pt-11 items-center  md:justify-center md:pt-0 backdrop-blur-sm transition-all duration-450 z-50':"transform -translate-x-full md:translate-x-0 flex gap-16 md:gap-8 flex-col cursor-pointer md:flex-row absolute top-22 left-0 bg-blue-950 md:bg-inherit md:w-auto md:static w-[70vw] h-screen md:h-auto text-white pt-11 items-center md:justify-center md:pt-0 backdrop-blur-sm max-sm:font-bold transition-all duration-450 z-50"}>
            <li className='relative after:content-[""] after:absolute after:w-full after:bg-blue-500 after:-bottom-2 after:-left-2 after:h-[3px] after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 hover:after:left-0' onClick={()=>tooglee()}><a href="#Home">Home</a></li>
            <li className='relative after:content-[""] after:absolute after:w-full after:bg-blue-500 after:-bottom-2 after:-left-2 after:h-[3px] after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 hover:after:left-0' onClick={()=>tooglee()}><a href="#About">About Me</a></li>
            <li className='relative after:content-[""] after:absolute after:w-full after:bg-blue-500 after:-bottom-2 after:-left-2 after:h-[3px] after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 hover:after:left-0' onClick={()=>tooglee()}><a href="#Skills">Skills</a></li>
            <li className='relative after:content-[""] after:absolute after:w-full after:bg-blue-500 after:-bottom-2 after:-left-2 after:h-[3px] after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 hover:after:left-0' onClick={()=>tooglee()}><a href="#Project">Projects</a></li>
            <li className='relative after:content-[""] after:absolute after:w-full after:bg-blue-500 after:-bottom-2 after:-left-2 after:h-[3px] after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 hover:after:left-0' onClick={()=>tooglee()} ><a href="#Contact">Contact us</a></li>
        </ul>

        <div className={isMenuOpen?'w-screen h-screen absolute top-0 right-0 z-10 bg-transparent':"hidden"} onClick={()=>{tooglee()}}>

        </div>

        <button className='bg-blue-800 p-3 rounded md:hidden'
        onClick={()=>{tooglee()}}
        >
            { isMenuOpen?<RxCross2 />:<CgMenuMotion/>}
        </button>
    </div>
  )
}

export default Nav