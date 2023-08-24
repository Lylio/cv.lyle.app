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
      <p><b>Welcome!</b> I'm Lyle, currently a <b>Senior Consultant</b> with global consultancy
        leaders <a href="https://www.cgi.com/en"> <b>CGI</b></a>. For further info on my career
        details, please browse around the links above or reach me at my
        <b><a href="https://www.linkedin.com/in/lylechristine/"> LinkedIn</a></b> profile.
      </p>

      <p>My <b><a href="https://cv.lyle.app/projects"> projects </a></b>
        page has some live demos of my work - these basic examples give you the
        reassurance that that I know how to use<b> Google</b> and<b> ChatGPT </b> to a
        <i> satisfactory</i> level.
      </p>
      <p>Thanks muchly for visiting 😃.</p>
    </article>
  </Main>
);

export default Index;
