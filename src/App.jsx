import React, { useEffect } from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contect from './components/Contect'
import Footer from './components/Footer'
import AOS from 'aos'
import "aos/dist/aos.css"
import Headroom from 'react-headroom'

const App = () => {
  useEffect(()=>{

    AOS.init({
       duration : 1000,
      once : false,
      offset: 120
    });
  },[])
  return (
    <div className=' bg-[#061840]'>
 <Headroom>
      <Nav/>
 </Headroom>
      <div className="bg-[#061840]">
        <HeroSection/>
      </div>
      <div className='bg-slate-950'>
        <About/>
        <Skills/>
        <Project/>
        <Contect/>
      </div>
        <Footer/>
    </div>
  )
}

export default App