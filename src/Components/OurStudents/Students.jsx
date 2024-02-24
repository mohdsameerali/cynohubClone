import React  from "react"
// import './Vid 2.css'
import './Students.css'
import VideoPlayer from "./VideoPlayer"
import VideoPlayer2 from "./VideoPlayer2"


export default function Students() {
    return (
      <>
        <section className='container-fluid pt-5 pb-5' id="stdcon">
          <div className="container">
            <div className='row  no-gutters'>
              <div className=" col-12 col-md-6 mb-5">
              <h2 className="font-weight-bold     ">Hear directly from the students</h2>
              </div>
              <div className="col-3"></div>
              <div className="col-3">
                   <button type="submit" id='submit bookbtn'  className="btn dd btn-primary mt-3 "> <i class="fa-solid fa-phone"></i>  <a href="#HomePage">Book a Free Guidance Session</a></button> 
              </div>

                <div className=' col-12 col-md-6 col-lg-3'>
                   <VideoPlayer/>
                </div>
                <div className=' col-12 col-md-6 col-lg-3 ' id="butt">
                   <VideoPlayer2/>
                </div>
                <div className=' col-12 col-md-6 col-lg-3'>
                   <VideoPlayer/>
                </div>
                <div className=' col-12 col-md-6 col-lg-3 ' id="butt">
                   <VideoPlayer2/>
                </div>
            </div>
            </div>
        </section> 
      </>
    )
  }