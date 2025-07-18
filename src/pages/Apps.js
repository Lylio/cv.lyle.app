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
          <h2 data-testid="heading"><Link to="/apps">Apps</Link></h2>
          <p>The following apps have been developed using tech frameworks such as
            <b> Spring Boot</b> and <b>React</b>. These are very simple applications
            composed of typical MVC front-end, back-end and persistence layers, simply to provide a
            little evidence of my coding skills (i.e. my Vibe Coding skills!).
          </p>
          <p> <b>NOTE:</b> Although most of these apps are not &#39;app&#39; and running, please do
            check out the <b><a href="https://github.com/Lylio"> codebases</a></b>.
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
