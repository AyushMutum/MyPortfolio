import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service" />
              <p>
                Front-end Development: Building responsive and interactive user
                interfaces using HTML, CSS, Bootstrap and JavaScript to create
                engaging web experiences.
              </p>
            </li>
            <li>
              <BiCheck className="service" />
              <p>
                React.js Development: Utilizing the React.js library to build
                dynamic and interactive user interfaces, leveraging its
                component-based architecture and virtual DOM for efficient and
                scalable web applications.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
