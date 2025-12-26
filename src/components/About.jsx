import React from 'react'
import {About_Data} from "../pages/data"
import AboutImg from "../assets/AboutImage.jpg"

const About = () => {
    let{introduction, background,interests, careerGoals }=About_Data
  return (
    <div id='About' className='p-5 max-w-7xl bg-slate-950 m-auto'>
        <h1 className='text-5xl py-5  text-[#0f9df8] font-bold text-center'>About me</h1>

        <div className='flex flex-col md:flex-row justify-between gap-8 my-7 '>
            <div data-aos="fade-right" className='md:w-[30%] md:h-[440px]  m-auto'>
                <img src= {AboutImg} alt="" className=' aspect-square md:aspect-auto  md:w-full h-full object-cover rounded-md'/>
            
            </div>
            <div data-aos="fade-left" className='md:w-[67%] bg-linear-to-br from-blue-950 text-white to-slate-900 rounded-md'>
                <p className="text-justify p-6">{introduction+background}</p>
                <p className="text-justify p-6">{interests+careerGoals}</p>
            </div>
        </div>
    </div>
  )
}

export default About