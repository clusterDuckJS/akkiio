import React from 'react'
import {AiFillInstagram, AiOutlineTwitter, AiFillYoutube, AiFillFacebook} from 'react-icons/ai'
import {BsSpotify} from 'react-icons/bs'
import './community.css'

function Community() {
  return (
    <section id="socials">
      <h5>Connect with us</h5>
        <h2>Socials</h2>
        <div className="container container-socials">
          <AiFillInstagram className='social-icons' />
          <BsSpotify className='social-icons' />
          <AiOutlineTwitter className='social-icons' />
          <AiFillYoutube className='social-icons' />
          <AiFillFacebook className='social-icons' />
          
        </div>
    </section>
  )
}

export default Community