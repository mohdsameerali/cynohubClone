import React from 'react'
import './BeReady.css'



export default function BeReady() {
  return (
    <>
    <section className='container-fluid' id='becon'>
      <div className='container' > 
        <div className='row no-gutters  pt-5 pb-5' >
            <div className=' col-12 col-lg-6' id='bereimg'>
            <img src="images/101.png"  id='beimg' alt="Girl in a jacket" />

            </div>
            <div className='col-12 col-lg-6'>
            <h1>Be <span id='indus'> Industry-Ready</span>  From Day-One :</h1>
            <div className='pt-5 pb-5   ' id='befont'>


                <h5 id='fas' >Learn Professional Communication</h5>
                <hr  className='hr' />
                <h5>Job Training</h5>
                <hr  className='hr'/>
                <h5>Interview Preparation</h5>
                <hr  className='hr'/>
                <h5>Mock Interviews</h5>
                <hr  className='hr'/>
               



</div>

               
                <button type="submit" id='submit bookbtn' className="btn btn-primary mt-3 ml-5">   <a href="#HomePage">Book a Free Guidance Session</a> </button> 

            </div>
        </div>
        </div>
    </section>


     
    </>
  )
}
