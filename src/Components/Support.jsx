import React from 'react'
import './Support.css'
import Carousel from "react-elastic-carousel";
// import Carousel
import Item from "./Item";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Support() {
  return (
    <>
     <section className='container-fluide pt-5 pb-5' id='supcon'>  
     <div className='container'>
     <h1 className='text-center mb-5' id='suph1'>   Recognized & Supported by   </h1>

      <div className='row  no-gutters mt-5 mb-5'>
        <div className='col'><img src="images/1.png"  id='supimg' alt="Girl in a jacket" /> </div>   
        <div className='col'><img src="images/5.png"  id='supimg' alt="Girl in a jacket" /> </div>
        <div className='col'><img src="images/3.png"  id='supimg' alt="Girl in a jacket" /></div>
        <div className='col'><img src="images/4.png"  id='supimg' alt="Girl in a jacket" /></div>
      </div>
      </div>
      <div className='heading mb-2'> <h1>In the Media</h1></div>

      <div className='container-fluid' id='dal'>
         <div className="App1">
              <Carousel breakPoints={breakPoints}>
                   <Item> <img className="d-block w-100" src="images/200.jpg" alt="First slide"/></Item>
                   <Item> <img className="d-block w-100" src="images/201.png" alt="First slide"/></Item>
                   <Item> <img className="d-block w-100" src="images/202.png" alt="First slide"/></Item>
                   <Item> <img className="d-block w-100" src="images/203.png" alt="First slide"/></Item>
                   <Item> <img className="d-block w-100" src="images/204.png" alt="First slide"/></Item>
                   <Item> <img className="d-block w-100" src="images/205.png" alt="First slide"/></Item>
                   <Item> <img className="d-block w-100" src="images/206.png" alt="First slide"/></Item>
                   <Item> <img className="d-block w-100" src="images/20.png" alt="First slide"/></Item>
               </Carousel>
          </div>
      </div>
    </section>
      
    </>
  )
}
