import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <>
      <section className='container-fluid pt-5   ' id='skillcon'>
        <div className='container'> 
        <div className='row no-gutters'>
            <div className='col'>
                <h1>Learn the <span className='skillh1'>highest paid skills</span>  in the market :</h1>
                <h6 className='orf'>HTML & CSS</h6>
                <hr/>
                <h6>JavaScript</h6>
                <hr/>
                <h6>Data Structures & Algorithms</h6>
                <hr/>
                <h6>React JS</h6>
                <hr/>
                <h6>Mongo DB, mySQL</h6>
                <hr/>
                <h6>Express JS, Node JS</h6>
                <hr/>
                <button type="submit" id='submit bookbtn' className="btn btn-primary  mt-3 ml-5"> <a href="#HomePage">Book a Free Guidance Session</a></button> 

            </div>
            <div className='col ' id='silmg'>
            <img src="images/100.gif"  id='skillimg' alt="Girl in a jacket" />
            </div>
        </div>
        </div>
      </section>
        

           
      
    </>
  )
}
