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
      <p>Hi welcome to my online CV. I&apos;m
        delighted to say I&apos;ll soon occupy the role of <b>Senior Java Developer</b> with
        esteemed global enterprise<b><a href="https://www.cgi.com/en"> CGI</a></b>.
        For further info on my career details, please check out my
        <b><a href="https://cv.lyle.app/about"> ABOUT</a></b> and
        <b><a href="https://cv.lyle.app/cv"> CV</a></b> pages.
      </p>
      <p> Finally, my portfolio <b><a href="https://cv.lyle.app/projects"> PROJECTS </a></b>
        page has some live demos along with my GitHub repos to give you an idea of my skill level.
      </p>
    </article>
  </Main>
);

export default Index;
