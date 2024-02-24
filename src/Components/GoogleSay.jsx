import React from 'react'
import './GoogleSay.css'

export default function GoogleSay() {
  return (
    <>
      <section className='container-fluid pt-5 pb-5  ' id='skillcon'>
        <div className='container'>
          <div className='head'>
          <h1 class="font-effect-neon  mb-5">What does <span id='g1'>G</span><span id='g2'>o</span><span id='g3'>o</span><span id='g4'>g</span><span id='g5'>l</span><span id='g6'>e</span>  Say  about Full Stack</h1>
          </div>
        <div className='row  no-gutters'>
            <div className=' col-12 col-md-6 ' >
              <div id='colfirsts'>
                <h6 className='orf'>HTML & CSS Developer Salary</h6>
                <hr />
                <h6>Front End Developer Salary</h6>
                <hr/>
                <h6>Backend Developer Salary</h6>
                <hr/>
                <h6>Full Stack Developer Salary</h6>
                <hr/>
                <button type="submit" id='submit bookbtn' className="btn btn-primary mt-3 ml-5">  <a href="#HomePage">Book a Free Guidance Session</a></button> 
              </div>
            </div>
            <div className=' col-12 col-md-6' id='rtimg'>
            <img src="images/goole.png"   alt="Girl in a jacket" />
            </div>
        </div>
        </div>
      </section>
        

           
      
    </>
  )
}
