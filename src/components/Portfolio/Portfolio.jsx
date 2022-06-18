import React from "react";
import IMG1 from "../asset/portfolio1.jpg";
import IMG2 from "../asset/portfolio2.jpg";
import IMG3 from "../asset/portfolio3.jpg";
import IMG4 from "../asset/portfolio4.jpg";
import IMG5 from "../asset/portfolio5.png";
import IMG6 from "../asset/portfolio6.jpg";
import "./portfolio.css";

//<=====   PORTFOLIO ARRAY    =====>//
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    github: "https://github.com",
    demo: "http://dribbble.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Lorem ipsum dolor sit amet consectetur.",
    github: "https://github.com",
    demo: "http://dribbble.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Lorem ipsum dolor sit amet consectetur.",
    github: "https://github.com",
    demo: "http://dribbble.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Lorem ipsum dolor sit amet consectetur.",
    github: "https://github.com",
    demo: "http://dribbble.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Lorem ipsum dolor sit amet consectetur.",
    github: "https://github.com",
    demo: "http://dribbble.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Lorem ipsum dolor sit amet consectetur.",
    github: "https://github.com",
    demo: "http://dribbble.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <artical key={id} className="portfolio__item">
              <div className="portfolio__image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </artical>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
