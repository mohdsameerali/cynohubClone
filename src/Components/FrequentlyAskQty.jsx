import React from 'react'
import './FrequentlyAskQty.css'


export default function FrequentlyAskQty() {
  return (
    <>
    <section className='frecon'>
    <div className='container pt-5 pb-5' id="accordion"> 
        <div className='heade1  text-center'>
            <h1> Frequently Asked Questions</h1>
        </div>
        <div className='conbox'>
  <div className="card mt-5 ">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button id='btfront'  className="btn  collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">

        What Are The Job Opportunities For Full Stack Developers In 2022?
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body">
      One of the most in-demand roles in the industry is full-stack developer. Because they contribute the most to software projects, companies reward them heftily. As a result, whether you are a new developer or an experienced one, you will always be in demand in the software industry, with many opportunities awaiting you.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button id='btfront' className="btn collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Will I Get A Full Stack Developer Certification?
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div className="card-body">
      You will receive a course completion certificate once you have completed all of the assignments at the end of the course.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button id='btfront' className="btn collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What Kind Of Jobs Can I Get After The Full Stack Developer Program?
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div className="card-body">
      Mock interviews, resume reviews, and other forms of preparation assistance We are confident that with the right teaching, curriculum, and guidance, you will achieve your objectives. You will also be able to apply for hundreds of Jobs Posted by our Recruitment team to get placed as soon as you complete the course.
      </div>
    </div>
  </div>



  <div className="card ">
    <div className="card-header" id="headingFour">
      <h5 className="mb-0">
        <button id='btfront' className="btn " data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
        How Will I Get Placement Assistance?
        </button>
      </h5>
    </div>
    <div id="collapseFour" className="collapse show" aria-labelledby="headingFour" data-parent="#accordion">
      <div className="card-body">
      This Full Stack Java Developer Program can lead to jobs such as Full Stack Developer, Front-end Engineer, Full Stack Engineer, and Software Engineer
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingFive">
      <h5 className="mb-0">
        <button id='btfront' className="btn collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        How Much Salary Can I Expect After The Full Stack Developer Program?
        </button>
      </h5>
    </div>
    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
      <div className="card-body">
      Full Stack Developers are paid well around the world, and their demand is increasing year after year. A Full Stack Developer certification boosts such professionals’ earning potential even further. In India, the salary of a Full Stack Engineer ranges from 12LPA to 40LPA.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingSix">
      <h5 className="mb-0">
        <button id='btfront' className="btn collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        Will I Get Help If I’m Stuck?
        </button>
      </h5>
    </div>
    <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
      <div className="card-body">
      Absolutely, our trainers and experts work around the clock to ensure that all of your questions are answered.
      </div>
    </div>
  </div>
  </div>
</div>
</section>
      
    </>
  )
}
