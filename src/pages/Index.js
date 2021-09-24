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
          <p>
            This online <b>portfolio/CV</b> was built using React.JS. Credit to Michael D&apos;Angelo for his <b><a href="https://github.com/mldangelo/personal-site">starter template</a></b> (MIT licence).
          </p>
        </div>
      </header>
      <p><h2>Current Activity</h2>
        <ul>
          <li><b>Software Developer</b> with <b><a href="https://www.olmsystems.com/">OLM Systems</a></b> (since Aug 2021)</li>
          <li>Java (JDK 11) | Quarkus | Spring Boot | Kafka</li>
          <li>React</li>
          <li>PostgreSQL</li>
          <li>Kubernetes | Docker | Google Cloud Platform | Linux (Ubuntu)</li>
          <li>Bitbucket | Slack</li>
        </ul>
        Developing health & social care software products as part of OLMs integration team:
        <ul>
          <li>Delivering new functionality using Java and React</li>
          <li>Engaging in agile development process (full SDLC)</li>
          <li>Taking part in peer code reviews</li>
          <li>Test automation</li>
        </ul>
      </p>
    </article>
  </Main>
);

export default Index;
