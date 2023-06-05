import React from 'react';
import Navbar from './Navbar';
import Home from './Home/Home';
import Menu from './Components/Menu';
import Delivery from './Components/Delivery';
import About from './Components/About';
import Contact from './Components/Contact';
import {Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route  path='/menu' element={<Menu />}/>
        <Route  path='/delivery' element={<Delivery />}/>
        <Route  path='/about' element={<About />}/>
        <Route  path='/contact' element={<Contact />}/>

      </Routes>
    </div>
  )
}

export default App