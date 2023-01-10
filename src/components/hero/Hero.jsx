import React from 'react'
import HeroImage from '../../assets/hero.jpeg'
import './hero.css'

function Hero() {
  return (
    <div className="container hero_container">
        <div className="hero_text-area">
            <h2>About Me</h2>
            <div className='text-content'>
              <h4 className='text-light'>As a master of the craft, few can match my sheer DJ skills and passion for music, developed at an early age</h4>
              <h4 className='text-light'>just button mashing my way to success! Hailing from a long line of legendary composers, orchestrators and DJs (most likely), it was only natural that I should join and continue in their noble quest. Let others be content with mere listening</h4> 
            </div>
            
        </div>
        <img src={HeroImage} alt="hero" className="hero_image" />
    </div>
  )
}

export default Hero