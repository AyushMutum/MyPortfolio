
import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/WhatsApp Image 2023-04-26 at 9.53.40 PM.jpeg'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
       <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ayush Mutum</h1>
        <h5 className="text-light">
            Frontend Web Developer
        </h5>

        <CTA />
      <HeaderSocials/>

        <div className="me">
          <img  className="me-img" src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
       </div>
    </header>
  )
}

export default Header