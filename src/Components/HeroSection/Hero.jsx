import React from 'react';
import './../HeroSection/Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero-container'>   
        <div className='row-1'>
                <h1>
            Turn Unstructured Videos into <span className='special-text'>Action Plans & Answers </span>
        </h1>
        </div>
        <div className='row-2'>
            <p>
                Upload a meeting. Get the transcript, key decisions, action items, and answers — all in one place.
            </p>
        </div>
        <div className='row-3'>
                <Link to="/upload"><button>Try Now</button></Link>
        </div>
        <div className='divider custom-container '>

        </div>
      
    </div>
  )
}

export default Hero
