import React from 'react';
import '../Home/AmazingMeal.css'
import image1 from '../assets/burger.jpg';
import image2 from '../assets/cheese.jpg';
import image3 from '../assets/cake.jpg';
import image4 from '../assets/coffee.jpg';
import image5 from '../assets/pizza.jpeg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState } from 'react';
import {BsFillStarFill} from 'react-icons/bs'

const AmazingMeal = () => {
    const[items, setitems]=useState([
        {id:1, url:image1},
        {id:2, url:image2},
        {id:3, url:image3},
        {id:4, url:image4},
        {id:5, url:image5},
     ])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        SlidesToShow: 1,
        SlidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000,
      };
  return (
    <div className='section'>
        <div className="container">
            <div className='amazing-container'>
                <div className='amazing-carousal'>
                    <div>
                        <Slider {...settings}>
                            {items.map(item=>(
                                <div key={item.id}>
                                    <img src={item.url} alt="caurosal pic" />
                                    </div>
                            ))}
                            </Slider>
                    </div>
                </div>
                <div className='amazing-content'>
                    <h2 className='heading-secondary'>Amazing meals <span className='ampersand'>&#38;</span>
                    <br />
                    <span>
                        Great <br /> Entertainment
                    </span>
                    </h2>
                    <h4> we hope to see you soon!</h4>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates vitae suscipit totam repudiandae incidunt pariatur! Sunt magni harum, numquam facilis voluptatum rem voluptates non quisquam quae officia error ipsam nisi?
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veniam laborum reiciendis est, temporibus molestias dolores velit tempora pariatur quis asperiores quisquam recusandae illo sunt doloremque ratione fuga quaerat quo.
                    </p>
                    <blockquote>
                        nulla consequant massa quis enim. Donus ut, imperdiet a.
                    </blockquote>
                </div>
            </div>
            <div className='amazing-card-container'>
                <div className='amazing-card amazing-card-left'>
                    <img src={image1} alt="burger" className='amazing-card-image' />
                    <div className='amzing-card-content'>
                    <div className='amazing-card-title'>
                        <BsFillStarFill color="#c3512f" />

                        <h3 className='heading-tertiary'>the best <span>ingredients</span></h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laboriosam non accusamus possimus, maiores doloribus atque necessitatibus ratione magni nulla maxime? Assumenda, aliquam quisquam exercitationem blanditiis asperiores officiis distinctio doloremque!</p>
                    </div>
                    <div className='amazing-card-title'>
                        <BsFillStarFill color="#c3512f" />

                        <h3 className='heading-tertiary'> <span>reservations</span></h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laboriosam non accusamus possimus, maiores doloribus atque necessitatibus ratione magni nulla maxime? Assumenda, aliquam quisquam exercitationem blanditiis asperiores officiis distinctio doloremque!</p>
                </div>
           
            <div className='amazing-card amazing-card-right'>
                    <img src={image2} alt="cheese" className='amazing-card-image' />
                    <div className='amzing-card-content'>
                    <div className='amazing-card-title'>
                        <BsFillStarFill color="#c3512f" />

                        <h3 className='heading-tertiary'> <span>reservations</span></h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laboriosam non accusamus possimus, maiores doloribus atque necessitatibus ratione magni nulla maxime? Assumenda, aliquam quisquam exercitationem blanditiis asperiores officiis distinctio doloremque!</p>
                    </div>
                    <div className='amazing-card-title'>
                        <BsFillStarFill color="#c3512f" />

                        <h3 className='heading-tertiary'>the best <span>ingredients</span></h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laboriosam non accusamus possimus, maiores doloribus atque necessitatibus ratione magni nulla maxime? Assumenda, aliquam quisquam exercitationem blanditiis asperiores officiis distinctio doloremque!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AmazingMeal