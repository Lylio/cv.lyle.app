import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/apps';

const Apps = () => (
  <Main
    title="Apps"
    description="Portfolio of apps."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Apps</Link></h2>
          <p>The following apps have been developed using tech frameworks such as
            <b> Spring Boot</b> and <b>React</b>. Although these are fairly simple applications
            composed of typical front-end, back-end and persistence layers, I feel my CV should
            have some evidence of my coding skills (i.e. my asking ChatGPT skills 🥳).
          </p>
          <p>
            Click on the app <i>title</i> to have a play with the application, and the code repos
            are behind the <b><a href="https://github.com/Lylio"> GitHub logos</a></b>.
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

export default Apps;
