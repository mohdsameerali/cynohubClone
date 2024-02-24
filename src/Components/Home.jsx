import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <>
      <section className='container-fluid pb-5' id='HomePage'>
        <div className='container'>
        <div className='row  no-gutters' id='homeRow'>
          <div className='col-15 col-md-6 ' id='col1'>
            <div className='contesleft'>
            <h6 className='mt-2'><span  className='orange'>100%</span> Job Assistance Program</h6>
            <h1  className='mt-3'>Learn  <span className='orange'>Full Stack</span>  Development</h1>
            <h4 className='mt-3'>Land a Job as a software developer in 5 Months</h4>
            <div  className='mt-3 mb-2'>
            <i className="fa-solid fa-star "></i>
            <i className="fa-solid fa-star "></i>
            <i className="fa-solid fa-star "></i>
            <i className="fa-solid fa-star "></i>
            <i className="fa-regular fa-star"></i>

            </div>
            <div className='weProvide'>
              <div className='imgdif mb-3'>
                 <img src="images/Bitmap-2.png" alt="Girl in a jacket" /><span> 1:1 Mentor Support</span>
              </div>
              <div className='imgdif mb-3'>
                   <img src="images/Bitmap-4.png" alt="Girl in a jacket" /><span>  Doubt Clarification Sessions</span>
              </div>
              <div className='imgdif mb-3'>
                   <img src="images/Bitmap.png" alt="Girl in a jacket" /><span> Placement Support</span>
              </div>
              <div className='imgdif mb-3'>
                 <img src="images/Bitmap-3.png" alt="Girl in a jacket" /><span> 150+ Hiring Partners</span>
              </div>
              <div className='imgdif mb-3'>
                 <img src="images/Bitmap-3.png" alt="Girl in a jacket" /><span> No Cost EMI</span>
              </div>
            </div>
            </div>
          </div>
          <div className=' col-12 col-md-6 mt-md-0 mt-5 ' id='col2'>
            <div className='FormSection pt-5'>
              <div className='childSection'>
              <h5 className='mt-3'>Book a <span className='orange'>  Free Guidance Session</span> With Our Experts</h5>
              <form>
                  <div className="form-group mb-3">
                      <label for="exampleInputEmail1">Full Name<span className='imp'>*</span></label>
                      <input type="email" className="form-control   " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your full name"/>
                  </div>
                  <div className="form-group mb-3">
                      <label for="exampleInputEmail1">Email address<span className='imp'>*</span></label>
                      <input type="email" className="form-control   " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                  <label for="exampleInputEmail1">Whatsapp Number<span className='imp'>*</span></label>
                  <div className="form-group mb-3" id='aline'>
                      <input type="email" className="form-control mr-3    "  id="Whatsappid" aria-describedby="emailHelp" placeholder="Enter Whatsapp Number*"/>
                      <button type="submit" id='verfy'  className="btn  btn-primary">Verify OTP</button>  
                  </div>
                  <div className="form-group mb-3">
                       <label for="exampleFormControlSelect1">Occupation<span className='imp'>*</span></label>
                       <select className="form-control" id="exampleFormControlSelect1">
                           <option>Students</option>
                           <option>Working Professional</option>
                           <option>Looking For Job</option>
                       </select>
                  </div>
                  <button type="submit" id='btnsub' className="btn btn-primary">Book a Free Session</button>  
              </form>
              </div>
           </div>
         </div>
         </div>
      </div>
     </section>
    </>
  )
}
