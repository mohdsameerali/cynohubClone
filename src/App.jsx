import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import MyCarousel from './Components/MyCarousel'
import Students from './Components/OurStudents/Students'
import GoogleSay from './Components/GoogleSay'
import Learners from './Components/Learners'
import Skills from './Components/Skills'
import BeReady from './Components/BeReady'
import Support from './Components/Support'
import Career from './Components/Career'
import Partners from './Components/Partners'
import FullstackCarr from './Components/FullstackCarr'
import WhyWe from './Components/WhyWe'
import CourseIncludes from './Components/CourseIncludes'
import FrequentlyAskQty from './Components/FrequentlyAskQty'
import Adress from './Components/Adress'

import './App.css'
import './Components/Navbar.css'
import './MediaQuery.css'

export default function App() {
  return (
    <>
      <div className='container-fluid pe-0 pl-0' id='container'>
          <Navbar/>
           <Home/>
            <MyCarousel/>
           <Students/>
           <GoogleSay/>
           <Learners/>
           <Skills/>
           <BeReady/>
           <Support/>
           <Career/>
           <Partners/>
           <FullstackCarr/>
           <WhyWe/>
           <CourseIncludes/>
           <FrequentlyAskQty/>
           <Adress/> 
      </div>
      
    </>
  )
}
