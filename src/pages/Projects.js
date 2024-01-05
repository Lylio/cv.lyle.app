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
          <p>The following projects have been developed using tech frameworks such as
            <b> Spring Boot</b> and <b>React</b>. Although these are fairly simple applications
            composed of typical front-end, back-end and persistence layers, I have them listed
            here to provide a little evidence of my coding skills (i.e. asking ChatGPT 🥳).
          </p>
          <p>
            Click on the <i>project title</i> to view the app and the code repos are behind the
            <b><a href="https://github.com/Lylio"> GitHub logos</a></b>.
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
