import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/apps';

const Apps = () => (
  <Main title="Apps" description="Featured software engineering projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/apps">Apps</Link></h2>
          <p>
            A selection of six software engineering projects exploring Java,
            Spring Boot, distributed systems, secure networking, scheduling,
            performance analysis and AI-assisted investigation. These projects
            demonstrate back-end architecture, testing, persistence and
            practical React-based dashboards.
          </p>
          <p>
            <b>Note:</b> These applications are development projects rather than
            publicly hosted demos. Select a screenshot or use the GitHub link
            to explore the source code, architecture, screenshots and setup guides.
          </p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Apps;
