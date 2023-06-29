import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (

    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service'/>
              <p>User-Centered Design: Demonstrating a commitment to user needs by conducting research, incorporating feedback, and prioritizing the user experience in the design process.</p>
            </li>
            <li>
              <BiCheck className='service'/>
              <p>Visual Design Aesthetics: Creating visually appealing interfaces through effective color selection, typography, iconography, and visual hierarchy.</p>
            </li>
            <li>
              <BiCheck className='service'/>
              Responsive and Adaptive Design: Designing interfaces that are responsive and adaptive across different devices and screen sizes, ensuring accessibility and usability in various contexts.
            </li>
          
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service'/>
             <p>Front-end Development: Building responsive and interactive user interfaces using HTML, CSS, and JavaScript to create engaging web experiences.
</p>
            </li>
            <li>
              <BiCheck className='service'/>
              <p>React.js Development: Utilizing the React.js library to build dynamic and interactive user interfaces, leveraging its component-based architecture and virtual DOM for efficient and scalable web applications.</p>
            </li>
            <li>
              <BiCheck className='service'/>
              <p>MongoDB: Employing MongoDB, a NoSQL database, to design and implement flexible and scalable data storage solutions for web applications, leveraging its document-oriented model and seamless integration with Node.js</p>
            </li>
          
            <li>
              <BiCheck className='service'/>
              
           
          <p>Node.js Development: Utilizing Node.js, a powerful JavaScript runtime, to build efficient and scalable server-side applications, taking advantage of its event-driven architecture, non-blocking I/O operations, and vast ecosystem of libraries and frameworks.</p>
          </li>
          </ul>
        </article>
      </div>
    </section>
  )

}


export default Services