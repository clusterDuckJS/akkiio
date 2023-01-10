import React from 'react'
import './music.css'
import Cover1 from '../../assets/Frame1.png'
import Cover2 from '../../assets/Frame2.png'
import Cover3 from '../../assets/Frame3.png'
import Cover4 from '../../assets/Frame4.png'
import {BsSpotify} from 'react-icons/bs'

function Music() {
  return (
    <section id="music">
      <h5>My Recent Tracks</h5>
        <h2>Music</h2>
        <div className="container container_music">
          <article className='music_item'>
            <img className='music_item-image' src={Cover1} alt="music cover" />
            <div className="music_item-text">
              <h4>Waking Light</h4>
              <small className='text-light'>1:05:30</small>
              <small>2025</small>
            </div>
            <a href="www.spotify.com" className='btn'>Go to album <BsSpotify/></a>
          </article>
          <article className='music_item'>
            <img className='music_item-image' src={Cover2} alt="music cover" />
            <div className="music_item-text">
              <h4>Avatar iv</h4>
              <small className='text-light'>1:51:00</small>
              <small>2024</small>
            </div>
            <a href="www.spotify.com" className='btn'>Go to album <BsSpotify/></a>
          </article>
          <article className='music_item'>
            <img className='music_item-image' src={Cover3} alt="music cover" />
            <div className="music_item-text">
              <h4>Short Straw</h4>
              <small className='text-light'>55:30</small>
              <small>2023</small>
            </div>
            <a href="www.spotify.com" className='btn'>Go to album <BsSpotify/></a>
          </article>
          <article className='music_item'>
            <img className='music_item-image' src={Cover4} alt="music cover" />
            <div className="music_item-text">
              <h4>Dying Light</h4>
              <small className='text-light'>32:30</small>
              <small>2022</small>
            </div>
            <a href="www.spotify.com" className='btn'>Go to album <BsSpotify/></a>
          </article>
        </div>
    </section>
  )
}

export default Music