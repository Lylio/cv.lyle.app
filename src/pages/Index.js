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
      <p>I was recently a <b>Java Developer</b> with <a href="https://fsbtech.com/">FSB Tech</a>
        having joined the team at the start of November 2022.
      </p>
      <p>Unfortunately, in Decemeber 2022, FSB was forced to close its Glasgow office
        as a result of chaotic role restructuring and unsustainable market strategies.
        Subsequently, I am currently looking for a new developer position and keen to join a
        company with an interesting roadmap and solid business foundation.
      </p>
      <p>Please don&apos;t hesitate to get in touch if my skill-set and experience aligns with the
        business goals of your company.
      </p>
    </article>
  </Main>
);

export default Index;
