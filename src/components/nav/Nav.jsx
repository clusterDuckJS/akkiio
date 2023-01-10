import React, { useState } from 'react'
import './nav.css'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
    return (
    <nav>
        <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}>Home</a>
        <a href="#music" className={activeNav === '#music' ? 'active' : ''} onClick={() => setActiveNav('#music')}>Music</a>
        <a href="#merch" className={activeNav === '#merch' ? 'active' : ''} onClick={() => setActiveNav('#merch')}>Merch</a>
        <a href="#socials" className={activeNav === '#socials' ? 'active' : ''} onClick={() => setActiveNav('#socials')}>Socials</a>
        <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}>Contact</a>
    </nav>
  )
}

export default Nav