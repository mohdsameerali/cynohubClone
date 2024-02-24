import React from 'react'
import './FullstackCarr.css'


export default function FullstackCarr() {
  return (
    <>
      <section className='container-fluid pb-5 pt-5' id='fullstack'>
        <div className='container'>
        <div className='fullhead'>
            <h1>Career As a Full Stack Developer</h1>
        </div>
        <div className='row mt-5'>
            <div className=' col-12 col-md-6 col-lg-4  fullcen' > 
            <div className='card1'>

            <img  src="images/money.png"  id='fullimg' alt="Girl in a jacket" />
             <h3 className='mb-4  h3b text-center'>Salary Trend</h3>
            <h6 className=' text-center h6c'>A Full Stack Developer earns an average of 12 lakhs a year, but with the sufficient skills and experience, the prospects of earning much more are quite strong.</h6>

            </div>
            
            </div>
            <div className=' col-12 col-md-6 col-lg-4  fullcen'>

            <div className='card1'>
            <img  src="images/line-chart.png"  id='fullimg' alt="Girl in a jacket" />
            <h3 className=' mb-4 h3b text-center'>Annual Growth</h3>
            <h6 className='  h6c text-center'>The global demand for full stack developers is now growing at a rate of 28% In then next years, it is expected to be substantially greater, with even more prospects for developers.</h6>
            </div>


            </div>
            <div className=' col-12 col-md-6 col-lg-4  fullcen'>
            <div className='card1' id='lastcard'>

            <img  src="images/coin.png"  id='fullimg' alt="Girl in a jacket" />
            <h3 className=' mb-4 h3b text-center'>58% Average Salary hike</h3>
            <h6 className=' text-center h6c'>With full stack development, you may expect a minimum of a 58 percent compensation increase on your current wage if you are moving jobs or want to rise through the ranks.</h6>

            </div>

            </div>
        </div>
        </div>
      </section>
    </>
  )
}
