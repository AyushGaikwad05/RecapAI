import React from 'react'
import './../Components/Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='nav-container'>
            <div className='main-nav custom-container'>
                    <h2><Link to={"/"}><span className='special-text'>ReCapAI</span></Link></h2>
                    
            </div>
    </div>
  )
}

export default Navbar
