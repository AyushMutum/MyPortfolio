import React from 'react'
import './about.css'
import ME from '../../assests/WhatsApp Image 2023-04-26 at 9.53.40 PM.jpeg'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {RiFoldersLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <img src={ME} className="about__me-image" alt="About Image" />
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
              </article>

              {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>clients</h5>
              <small>100+</small>
              </article> */}

              <article className='about__card'>
              <RiFoldersLine className='about__icon'/>
              <h5>Projects</h5>
              <small>8+ projects</small>


            </article>
          </div>

          <p>My name is <strong>Ayush Mutum</strong>. I am from Manipur. Studying Computer Science and Engineering at NERIST (currently at 4th year 1st sem). And I am a Frontend Web developer</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        
        
        </div>
      </div>
    </section>
  )
}

export default About