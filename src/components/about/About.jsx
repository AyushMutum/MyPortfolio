import React from 'react'
import './about.css'
import ME from '../../assests/ayush-dp.jpeg'
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

<p>"Hi, I'm <strong>Ayush Mutum</strong>, a passionate and experienced web developer with a strong focus on front-end development. I thrive on transforming creative ideas into functional and visually appealing websites. With expertise in HTML, CSS, and JavaScript, I bring designs to life by creating responsive and user-friendly interfaces. I enjoy staying up-to-date with the latest web technologies and implementing best practices to deliver high-quality code. Collaborating with cross-functional teams, I have successfully developed and deployed numerous projects, ensuring seamless user experiences and optimized performance. I am dedicated to continuous learning and problem-solving, striving to deliver innovative solutions that exceed client expectations. Let's build remarkable web experiences together!"</p>
          <p><strong>Education Background: </strong> Computer Science and Engineering student at NERIST 2024 passout.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        
        
        </div>
      </div>
    </section>
  )
}

export default About