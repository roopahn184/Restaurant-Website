import React from 'react';
import './Hero_image.css'

const Hero_image = (props) => {
  return (
    <div className='container' style={{background:`url(${props.bgimage}) no-repeat bottom center/cover`, height:"65vh"}}>
     <div className="banner_content">
        <h1 className='heading-primary'>{props.heading}</h1>
        <p className='text-white'>{props.text}</p>
     </div>
    </div>
  )
}

export default Hero_image