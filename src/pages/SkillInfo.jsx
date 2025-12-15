import React from 'react'

const SkillInfo = ({title,skills}) => {
  return (
    <div>
        <h1 className='text-2xl font-bold  px-9 py-5'>{title}</h1>
        <hr className='w-full border border-[#74a1fcb3]'/>
        <div className='px-9 py-5'>
            {skills?.map((item, index)=>{
             return <>
             <div key={index} className='flex justify-between'>
                <p>{item.skill}</p>
                <p>{item.percentage}</p>
             </div>
             <input type="range" readOnly={true} min={"0"} max={"100"} value={item.percentage[0]+item.percentage[1]} className='w-full text-blue-950'/>
             </>
            })}
        </div>
    </div>
  )
}

export default SkillInfo