import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/ayush-mutum-256b80262/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/AyushMutum" target="_blank"><BsGithub/> </a>
        
    </div>
  )
}

export default HeaderSocials