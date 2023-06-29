import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ayush Mutum</a>


      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a className="social_icons" href="https://instagram"><BsInstagram/></a>
        <a className="social_icons" href="https://facebook.com"><BsFacebook/></a>
      </div>


      <div className="footer__copyright">
        <small>&copy;Ayush Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer