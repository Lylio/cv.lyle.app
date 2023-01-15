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
      <p>Hi I&apos;m Lyle, thanks for checking out my online CV. At the moment I&apos;m currently
        looking for a new developer position and keen to join a company who has an interesting
        roadmap and solid business foundation. My main areas of professional tech experience are in
        <b> Java development</b>, <b>Back-End engineering</b> and <b>DevOps administration</b>.
        I also have a front-end skill set with the <b>ReactJS</b> framework.
      </p>
      <p>Please check out my <b><a href="https://cv.lyle.app/projects">projects</a></b> page for
        examples of apps I&apos;ve built with links to my GitHub code repos.
      </p>
    </article>
  </Main>
);

export default Index;
