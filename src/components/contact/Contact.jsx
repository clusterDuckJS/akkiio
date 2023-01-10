import React, { useRef } from 'react';
import {AiOutlineMail, AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai'
import './contact.css'
import emailjs from '@emailjs/browser';
import './contact.css'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n0ie7tj', 'template_hodddkf', form.current, 'smHXRoK3JW6jh6wNI')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Your Full Name' required/>
          <input type="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}


export default Contact
