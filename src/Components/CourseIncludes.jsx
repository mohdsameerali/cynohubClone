import React from 'react'
import './CourseIncludes.css'

export default function CourseIncludes() {
  return (
    <>
    <section  className='container-fluid pb-5' id='courinclude'>   
    <div  className='container'>
        <div className="carrhead pb-3 pt-5">
            <h1>This Course Includes</h1>
        </div>
        <div className='row'>
          <div className=' col-12 col-md-6 pt-3'  id='wid'>
            <div className='carddd pb-3'>
            <img src="images/earth.png"  id='courimg' alt="Girl in a jacket" />
            <h5 >Real-world projects from industry experts</h5>
            <h6  id='h6s'>With Real World Projects And Immersive Content Built In Partnership With Top Tier Companies, You’ll Master The Tech Skills Companies Want.</h6>

            </div>
          </div>
          <div className=' col-12 col-md-6 pt-3'  id='wid' >
          <div className='carddd pb-3'>
            <img src="images/video-call.png"  id='courimg' alt="Girl in a jacket" />
            <h5 >Technical mentor support</h5>
            <h6  id='h6s'>Our Knowledgeable Mentors Guide Your Learning And Are Focused On Answering Your Questions, Motivating You And Keeping You On Track.</h6>
          </div>
          </div>

          <div className=' col-12 col-md-6 pt-3'  id='wid'>
          <div className='carddd pb-3'>
            <img src="images/career-path.png"  id='courimg' alt="Girl in a jacket" />
            <h5 >Career services</h5>
            <h6  id='h6s'>You’ll Have Access To Github Portfolio Review And LinkedIn Profile Optimization To Help You Advance Your Career And Land A High-Paying Role.</h6>
          </div>
          </div>

          <div className=' col-12 col-md-6 pt-3'  id='wid'>
          <div className='carddd pb-3'>
            <img src="images/online-learning.png"  id='courimg' alt="Girl in a jacket" />
            <h5 >Flexible learning program</h5>
            <h6  id='h6s'>Tailor A Learning Plan That Fits Your Busy Life. Learn At Your Own Pace And Reach Your Personal Goals On The Schedule That Works Best For You.</h6>
          </div>
          </div>

        </div>
        </div>
    </section>

      
    </>
  )
}