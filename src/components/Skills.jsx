import React, { useState } from 'react'
import {SKILL} from "../pages/data"
import SkillCard from '../pages/SkillCard'
import SkillInfo from '../pages/SkillInfo'

const Skills = () => {
    const [data, setData] = useState(SKILL[0])
  return (
    <div id='Skills' className='max-w-7xl bg-linear-to-br from-blue-950 to-slate-950 m-auto p-5 text-white sm:p-10'>
        <h1 className='text-3xl font-bold mb-10'>Technical Skills</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div data-aos="fade-right" className='grid grid-cols-2 h-[200px] gap-10 sm:h-[306.67px]'> 
            {SKILL.map((item, index)=>{
              return <div  key={index} className={`flex flex-col justify-center items-center bg-slate-950 relative rounded-md border border-[#74a1fcb3] sm:p-7 hover:bg-blue-950 cursor-pointer backdrop-blur-lg ${data.title === item.title?"active":""}`}
              onClick={()=>setData(item)}
              >
             <SkillCard 
             title = {item.title}
             icon = {item.icon}
             />
             </div>
            })}
        </div>

        <div data-aos="fade-left" className='bg-linear-to-br from-slate-950 to-blue-950 h-[306.67px] rounded-md border border-[#74a1fcb3]'>
            <SkillInfo
            title = {data.title}
            skills = {data.skills}
            />
        </div>
        </div>
    </div>
  )
}

export default Skills