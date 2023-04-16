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
      <h2 style={{ color: 'rgb(134,19,48)' }}>Current Activity</h2>
      <p>Hi and welcome to my online CV. I currently occupy the role of
        <b> Senior Sofware Engineer </b> with esteemed global consultancy
        <a href="https://www.cgi.com/en"> <b>CGI</b></a>. For further info on my career details,
        please check out the links above in addition to my
        <b><a href="https://www.linkedin.com/in/lylechristine/"> LinkedIn</a></b> profile.
      </p>
      <p> My <b><a href="https://cv.lyle.app/projects"> portfolio </a></b>
        page has some live demos along with accompanying GitHub repos to present an impression of my
        coding and system design skills (*<b>cough</b>* ChatGPT skills).
        <br />
      </p>
    </article>
  </Main>
);

export default Index;
