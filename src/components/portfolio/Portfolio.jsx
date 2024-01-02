import React from 'react';
import './portfolio.css';

import IMG1 from '../../assests/animeWebsite.png';
import IMG2 from '../../assests/todo.png'
import IMG3 from '../../assests/chegg.png';
import IMG4 from '../../assests/foodzone.png';
import IMG5 from '../../assests/jscalculator.png';
import IMG6 from '../../assests/movie-app.png';
import IMG7 from '../../assests/randomquote.png';
import IMG8 from '../../assests/country.png';
import IMG9 from '../../assests/AgeCal.png';
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
    title: 'Todo-App',
    github: 'https://github.com/AyushMutum',
    demo: 'https://todo-app-two-ochre.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Chegg Clone',
    github: 'https://github.com/AyushMutum',
    demo: 'https://chegg-clone-xi.vercel.app/'
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
  {
    id: 6,
    image: IMG1,
    title: 'Anime Shopping Website ',
    github: 'https://github.com/AyushMutum',
    demo: 'https://anime-onlineshoping-github-io.vercel.app/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Random Quote Generator',
    github: 'https://github.com/AyushMutum',
    demo: 'https://random-quote-generator-orpin.vercel.app/'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Know Countries',
    github: 'https://github.com/AyushMutum',
    demo: 'https://know-country-details-github-io.vercel.app/'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Age Calculator',
    github: 'https://github.com/AyushMutum',
    demo: 'https://age-calculator-ten-fawn.vercel.app/'
  },
  {
    id: 10,
    image: IMG4,
    title: 'Food Zone ',
    github: 'https://github.com/AyushMutum',
    demo: 'https://ayushmutum.github.io/foodhub/'
   
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
