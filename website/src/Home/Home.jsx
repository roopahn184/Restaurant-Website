import React from 'react';
import Hero  from './Hero';
import AmazingMeal from './AmazingMeal';
import Chef from './chef';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
      
    <Hero/>
    <AmazingMeal/>
    <Chef />
    <hr />
    <Footer />
    </div>
  )
}

export default Home