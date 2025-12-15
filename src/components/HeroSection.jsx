import React from "react";
import { Profile_Data } from "../pages/data";
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaIdCardAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ProfileImg from "../assets/Profileimage.jpg"
import Resume from "../assets/Rishav-Professional-CV-Resume.pdf"

const HeroSection = () => {
  let {
    name,
    tagline,
    jobTitle,
    location,
    yearOfExperoence,
    email,
    LinkedIn,
    GitHub,
    skills,
  } = Profile_Data;
  return (
    <div
      id="Home"
      className="max-w-7xl text-white p-6 md:p-[50px] flex flex-col md:flex-row gap-8 items-center justify-around m-auto"
    >
      <div data-aos="fade-right" className="sm:w-[70%] md:w-[60%] lg:w-[40%] ">
        <h4 className="text-xl my-2">Hi, I'm</h4>
        <h1 className="text-4xl">{name}</h1>
        <h4 className="text-2xl">{jobTitle}</h4>
        <p className="mt-2">{tagline}</p>
        <button className="bg-[#0f9df8] px-[15px] py-2 mt-2.5 border  border-[#0f9df8] rounded-md cursor-pointer hover:bg-[#061840]">
         <a href="#Contact">Contact Me</a> 
        </button>
        <button  onClick={() => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Rishav-Professional-CV-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }} className="border border-[#0f9df8] px-[15px] py-2 rounded-md cursor-pointer ml-3 hover:bg-[#0f9df8]">
          Get Resume
        </button>
      </div>

      <div data-aos="fade-left" className="bg-linear-to-br from-blue-950 to-slate-900 text-center rounded-md p-6  sm:w-[70%] md:w-[60%] lg:w-[40%]">
       <div>
        <img src={ProfileImg} alt="" className="w-[139px] h-[139px] rounded-full m-auto"/>
       </div>
       <div className="bg-[#061840] mt-3 p-4 rounded-md">
         <p>{name}</p>
         <p className="text-slate-500">{jobTitle}</p>
         <p className="text-slate-500">
            <MdLocationPin className="inline h-5"/>  {location}</p>
       </div>

       <div className="bg-[#061840] mt-3 p-4 rounded-md text-left overflow-auto">
         <p className=" flex items-center"><MdEmail className="inline mr-1.5"/>{email}</p>
       </div>

        <div className="bg-[#061840] mt-3 p-4 rounded-md text-left ">
         <p className=" "><FaIdCardAlt className="inline mr-1.5"/>{yearOfExperoence}</p>
       </div>

       <div className=" mt-3 flex flex-wrap gap-2 text-left">
        {skills.map((skills, index)=>{
            return <div key={index} className="bg-blue-800/30 px-3 py-1 rounded-md text-sm">{skills}</div>
        })}
       </div>

       <div className="mt-3 flex gap-2">
        <div className="bg-blue-800/30 px-3 py-3 rounded cursor-pointer "><a href={GitHub} target="_blank"><FaGithub /></a></div>
        <div className="bg-blue-800/30 px-3 py-3 rounded cursor-pointer "><FaLinkedin /></div>
        <div className="bg-blue-800/30 px-3 py-3 rounded cursor-pointer"><FaXTwitter /></div>
       </div>

      </div>
    </div>
  );
};

export default HeroSection;
