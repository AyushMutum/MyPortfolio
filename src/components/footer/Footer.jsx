import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

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
      
        <a className='social_icons' href="https://www.linkedin.com/in/ayush-mutum-256b80262/" target="_blank"><BsLinkedin/></a>
        <a  className='social_icons' href="https://github.com/AyushMutum" target="_blank"><BsGithub/> </a>
        
      </div>


      <div className="footer__copyright">
        <small>&copy;Ayush Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer