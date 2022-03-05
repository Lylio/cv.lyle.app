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
          <p>The following projects demonstrate technologies such as <b>Quarkus</b>,
            <b> Spring Boot</b> and <b>React</b>. While these applications are fairly simple in
            utility, they stand as examples of how to overcome the complex challenges associated
            with deploying inter-connected systems which are composed of front end, back end and
            persistent components.
          </p>
          <br />
          <p>These apps are hosted on the <i>free</i> tier of <b>Heroku</b>. Unfortunately, this
            can result in long load-times of up to 30-seconds. Your time is respected; your
            patience is appreciated ☕.
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
