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
      <p>Hi I&apos;m <b>Lyle</b>, welcome to my online CV. I&apos;m delighted to say I&apos;m
        currently a <b>Senior Software Engineer</b> with esteemed global enterprise
        <b><a href="https://www.cgi.com/en"> CGI</a></b>. For further info on my career details,
        please check out my <b><a href="https://cv.lyle.app/about">ABOUT</a></b>
        and <b><a href="https://cv.lyle.app/cv">CV</a></b> pages.
      </p>
      <p> Finally, for a little fun, don&apos;t forget to have a look at my portfolio
        <b><a href="https://cv.lyle.app/projects"> PROJECTS</a></b> page for examples of live apps
        that I&apos;ve built which include links to my GitHub code repos.
      </p>
    </article>
  </Main>
);

export default Index;
