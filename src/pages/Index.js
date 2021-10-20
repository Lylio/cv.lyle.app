import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Lyle Christine's online portfolio. Glasgow based Software Developer."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">cv.lyle.app</Link></h2>
        </div>
      </header>
      <h2>Current Activity</h2>
      <p><b>Software Developer</b> with <a href="https://www.olmsystems.com/">OLM Systems</a>.</p>
      <p>Current tech stack includes:</p>
      <ul>
        <li>Java (JDK 11) | Quarkus | PostgreSQL | Liquibase | Kafka</li>
        <li>React | Kubernetes | Docker | Google Cloud Platform </li>
        <li>Linux (Ubuntu) | Bitbucket</li>
      </ul>

      <p>My current role involves developing health & social care software products as part of the
        OLM integration team. My position involves engaging in an agile development process as part
        of the full SDLC and includes peer code reviews and test automation.
      </p>
    </article>
  </Main>
);

export default Index;
