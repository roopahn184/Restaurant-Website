import React from 'react';
import '../Home/Hero.css';

const Hero = () => {
  return (
    <div className='hero-img container'>
      <div className='  hero-content'>
        <h1 className='heading-primary text-white'>
          <span className='text-danger'> welcome</span> to restaurant
        </h1>
        <p className='text-white'>the best gourmet restaurant available in manhatten</p>
        <p className='text-white'>Book online or call <span className='special-word'>(sss)123-4567</span></p>

      </div>


    </div>
  )
}

export default Hero