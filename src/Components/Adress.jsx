import React from 'react'

import './Adress.css'


export default function Adress() {
  return (
    <>
    <section className='container-fluid pb-5' id='adresscon'>
        <div className='container ' id='addcon'>
            <div className='row  '>
                <div className=' col-12 col-md-6'>
                    <h6>Address</h6>
                    <p> 
                    <i class="fa-regular  fa-address-book"></i>

                        
                         Road no - 9, Kakatiya Hills, Jubilee Hills, Kavuri Hills, Hyderabad, Telangana, Madhapur: 500081</p>
                    <p> 
                    <i class="fa-solid fa-phone"></i>
                                91 9703712609 (9am - 6pm , Monday - Saturday)  +91 8069068538 (9am - 6pm , Monday - Saturday)
                    </p>
                    <p>
                    <i class="fa-regular fa-envelope"></i>
                          hello@cynohub.com</p>
                          <div>
                          <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-google-play"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-youtube"></i>
                          </div>
                </div>
                <div className=' col-6 col-md-3 pl-4' id='end1'>
                <h6>Explore</h6>
                    <p> Academics</p>
                    <p>Full Stack Developement Master Class</p>
                    <p>Robotics & Electronics Masterclass</p>
                </div>
                <div className=' col-6 col-md-3 pl-4' id='end2'>
                <h6>About Us</h6>
                    <p> Contact Us</p>
                    <p>Privacy Policy </p>
                    <p>Terms of service</p>
                </div>
                <div className="lastline" >

                    <h5 className=' mt-5 text-center'>© 2023 True Comet Edutech Private Limited</h5>
                </div>

            </div>
        </div>

    </section>

      
    </>
  )
}
