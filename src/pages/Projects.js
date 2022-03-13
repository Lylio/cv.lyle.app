import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Portfolio of development projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>The following projects have been developed using technologies such as
            <b> Spring Boot</b> and <b>React</b>. These are simple applications which demonstrate
            MVC architecture patterns and are composed of typical front end, back end and
            persistence layers.
          </p>
          <br />
          <p>These apps are hosted on the <i>free</i> tier of the Heroku cloud platform.
            Unfortunately, this can result in long <b>load-times of up to 30-seconds</b>. Your
            patience is appreciated when trying out the demos 🍃.
          </p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
