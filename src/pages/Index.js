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
      <p><b>Java Developer</b> with <a href="https://fsbtech.com/">FSB</a>.</p>

      <p>FSB develop gambling and gaming software. More info soon.
      </p>
    </article>
  </Main>
);

export default Index;
