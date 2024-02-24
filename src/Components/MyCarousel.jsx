import React from "react";
import Carousel from "react-elastic-carousel";

import Item from "./Item";
import "./MyCarousel.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

 export default function MyCarousel() {
  return (
    <>
      <div className='container-fluid pb-5' id='containerSlide'>
        <h1  className='h1 mt-5'>Learn from the best in the industry</h1>
        <div className="cen">
          <div className="App">
              <Carousel breakPoints={breakPoints}>
                   <Item> <img className="d-block w-100" src="images/12.png" alt="First slide"/></Item>
                   <Item> <img className="d-block w-100" src="images/15.png" alt="First slide"/></Item>
                   <Item> <img className="d-block w-100" src="images/16.png" alt="First slide"/></Item>
                   <Item> <img className="d-block w-100" src="images/19.png" alt="First slide"/></Item>
                   <Item> <img className="d-block w-100" src="images/20.png" alt="First slide"/></Item>
                   <Item> <img className="d-block w-100" src="images/12.png" alt="First slide"/></Item>
                   <Item> <img className="d-block w-100" src="images/12.png" alt="First slide"/></Item>
                   <Item> <img className="d-block w-100" src="images/12.png" alt="First slide"/></Item>
               </Carousel>
          </div>
        </div> 
      </div> 
    </>
  );
}
















