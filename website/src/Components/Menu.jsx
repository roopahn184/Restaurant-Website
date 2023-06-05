import React from 'react';
import Hero_image from '../Menu/Hero_image';
import bgimage from '../assets/coffee.jpg';
import Menuday from '../Menu/Menuday/Menuday';
import Breakfast from '../Menu/Breakfast/Breakfast';
import Lunchtime from '../Menu/Lunchtime/Lunchtime';
import Cofee from '../Menu/Coffee/Cofee';
import Bevarages from '../Menu/Bevarages/Bevarages';
const Menu = () => {
  return (
    <div>
      <Hero_image 
      bgimage={bgimage}
      heading={["our", <span> Menu </span>]}
      text = "everything we have to offer at one glance"
      />
      <Menuday/>
      <Breakfast />
      <Lunchtime/>
      <Cofee/>
      <Bevarages/>
    </div>
  )
}

export default Menu