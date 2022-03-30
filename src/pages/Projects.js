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
          <p>The following projects have been developed using hot technologies such as
            <b> Spring Boot</b> and <b>React</b>. These are fairly simple applications composed of
            typical front end, back end and persistence layers. I have them listed here to
            provide a little evidence of my coding skills (i.e. my Googling skills).
          </p>
          <br />
          <p>Some of these apps are hosted on the <i>free</i> tier of the Heroku cloud platform.
            This means an occasional <b>30-second load-time</b> 🙃. Your patience is appreciated
            when trying out these demos.
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
