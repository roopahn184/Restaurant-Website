import React from 'react';
import Hero_image from '../Menu/Hero_image';
import bgimage from '../assets/burger.jpg';
import Aboutinfo from '../Menu/About/Aboutinfo';
import Ourdata from '../Menu/About/Ourdata';

const About = () => {
  return (
    <div>
      <Hero_image 
      bgimage={bgimage}
      heading={["about us", <span> & </span>, "photo gallery"]}
      text = "take a look at the place, the people and the food..."
      />
      <Aboutinfo />
      <Ourdata />
    </div>
  )
}

export default About