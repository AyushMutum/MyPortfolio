import React from 'react';
import './portfolio.css';


import IMG2 from '../../assests/NoteApp.png'
import IMG3 from '../../assests/fitness.png';
import IMG5 from '../../assests/jscalculator.png';
import IMG6 from '../../assests/movie-app.png';
import IMG10 from '../../assests/Move.png';





const data = [
  
 
  {
    id: 1,
    image: IMG6,
    title: 'Movie Details Fetcher',
    github: 'https://github.com/AyushMutum',
    demo: 'https://movie-details-fetcher.vercel.app/'
    
  },
  {
    id: 2,
    image: IMG2,
    title: 'NoteVerse',
    github: 'https://github.com/AyushMutum/NoteVerse',
    demo: 'https://noteverse-1.onrender.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Fitness-coach-website',
    github: 'https://github.com/AyushMutum',
    demo: 'https://a-fitness-xi.vercel.app/'
  },
  {
    id: 4,
    image: IMG10,
    title: 'Move-it',
    github: 'https://github.com/AyushMutum',
    demo: 'https://move-it-beta-sandy.vercel.app/'
    
  },
  {
    id: 5,
    image: IMG5,
    title: 'JS Simple Calculator',
    github: 'https://github.com/AyushMutum',
    demo: 'https://js-calculator-fawn.vercel.app/'
  },









];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article className='portfolio__item' key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>My GitHub</a>
                  <a href={demo} className='btn btn-primary' target='__blank' rel='noopener noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;
