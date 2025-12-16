import React from 'react'
import Slider from "react-slick";
import {PROJECT} from "../pages/data"
import Projectcard from '../pages/Projectcard';

const Project = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id='Project' className='max-w-7xl m-auto'>
  <h1 className='text-5xl font-bold text-[#0f9df8] text-center mt-10 py-5'>Projects</h1>

  <div className='bg-linear-to-br from-blue-950 to-slate-900 text-white p-5 sm:p-10'>
    <Slider {...settings} className=''>
  {PROJECT.map((item, index)=>{
    return <Projectcard 
    key={index}
    title = {item.title}
    description = {item.description}
     GithubLink ={item.GithubLink}
     LiveServerLink = {item.LiveServerLink}
    />
  })}
  </Slider>
  </div>
    </div>
  )
}

export default Project