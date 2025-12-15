import React from 'react'

const Projectcard = (prop) => {
  return (
    <div data-aos="fade-down-right" className='bg-[#0e214e] rounded-md border border-[#0a214e] text-center mx-2 h-auto px-5 py-5'>
      <h1 className='text-2xl font-bold my-2'>{prop.title}</h1>
      <p>{prop.description}</p>
      <div className='mt-7 '>
        <a href={prop. GithubLink} target='_blank' className='border border-solid px-5 mx-2 py-3 rounded-md hover:bg-[#1f1f38] cursor-pointer'>Github</a>
        <a href={prop.LiveServerLink} target='_blank' className='border border-solid px-5 mx-2 py-3 rounded-md hover:bg-[#1f1f38] cursor-pointer'>Live link</a>
      </div>
    </div>
  )
}

export default Projectcard