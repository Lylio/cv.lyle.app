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
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p>Welcome! - I'm Lyle and I'm currently a <b>Software Engineer</b> with global consultancy
        <a href="https://www.cgi.com/en"> <b>CGI</b></a>. For further info on my career details,
        please reach out to the links above and why not marvel at my
        <b><a href="https://www.linkedin.com/in/lylechristine/"> LinkedIn</a></b> profile.
      </p>
      <p>My <b><a href="https://cv.lyle.app/projects"> projects </a></b>
        page has some live demos along with accompanying code repos - admittedly these are
        basic apps but they should at least give you <i>some</i> confidence that I know how to use
        <b> Google</b> and <b>ChatGPT</b>.
      </p>
      <p>Thanks muchly.</p>
    </article>
  </Main>
);

export default Index;
