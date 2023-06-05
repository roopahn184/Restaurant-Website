import React from 'react';
// import {faBars, faTimes} from 'react-icons/fa';
import logo from '../src/assets/logo.png';
import {Link, NavLink} from 'react-router-dom';
import '../src/Navbar.css'
import { useState } from 'react';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setcolor] = useState(false);

  const changeColor=()=>{
    if(window.scrollY >= 100){
         setcolor(true)
    } else{
      setcolor(false)
    }
  }

  window.addEventListener("scroll", changeColor)
  const handleClick =()=>{
    setClick(!click)
  }
  return (
    <div className={color ? "header header-bg" :'header' }>
      <div className="container">
        <div className="nav-bar">
          <Link to="/">
          <img src={logo} alt="logo" width="80px" />
          </Link>
          <ul className='nav-menu'>
            <li>
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/delivery">Delivery</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li>
              <button className='btn btn-success'>Order Now</button>
            </li>
          </ul>
          <div className='hamburger' onClick={handleClick}>
            {
              click ?(
                <faTimes size={20} style={{color:"#fff"}}/>
              ) :(
                <faBars size={20} style={{color:"#fff"}}/>
              )
            }
              </div>
        </div>
      </div>
     
    </div>
  )
}

export default Navbar