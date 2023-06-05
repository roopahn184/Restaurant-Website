import React from 'react';
import Hero_image from '../Menu/Hero_image';
import bgimage from '../assets/cake.jpg';
import Deliveryifo from '../Menu/Deliveryifo/Deliveryifo';
import Addtocart from '../Menu/Addtocart/Addtocart';


const Delivery = () => {
  return (
    <div>
      <Hero_image 
      bgimage={bgimage}
      heading={["eat at", <span> Home </span>]}
      text = "delivery available mon - fri 10am - 6pm"
      />
      <Deliveryifo/>
      <Addtocart/>
    </div>
  )
}

export default Delivery