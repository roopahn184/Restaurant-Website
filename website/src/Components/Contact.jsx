import React from 'react';
import Hero_image from '../Menu/Hero_image';
import bgimage from '../assets/coffee.jpg';
import Contactform from '../Menu/Contact/Contactform';

const Contact = () => {
  return (
    <div>
      <Hero_image 
      bgimage={bgimage}
      heading={["Contact", <span> Us</span>]}
      text = "Feel free to contact with us"
      />
      <Contactform/>
    </div>
  )
}

export default Contact