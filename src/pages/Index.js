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
      <p>I am currently a <b>Java Developer</b> with <a href="https://fsbtech.com/">FSB</a> having
        joined the team at the start of November 2022.
      </p>

      <p>FSB Tech is an award-winning gaming technology company with global operators who assemble
        their curated sports betting and iGaming experience. Specialising in sportsbook software
        and online casino solutions, FSB Tech are currently making global strides, including
        exciting developments in North American territories, providing full-scale online casinos
        and sports betting solutions.
      </p>
    </article>
  </Main>
);

export default Index;
