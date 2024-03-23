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
      <p><b>Hello</b>. I'm Lyle, and I'm currently a <b>Senior Java Developer</b> with global
        consultancy leaders <a href="https://www.cgi.com/en"> <b>CGI</b></a>.
        <br /><br /> I built this online CV space to make friends <i>and</i> join communities
        <i> and</i> freely speak my mind <i>and</i> to think freely <i>and</i> release my music
        <i> and</i> to share my rap/kick-boxing Tik Toks <i>and</i> sell custom knitted clothing for
        your pets. For further info on my career details, please enjoy my
        <b><a href="https://www.linkedin.com/in/lylechristine/"> LinkedIn</a></b> profile.
      </p>
      <p>My <b><a href="https://cv.lyle.app/apps"> apps </a></b>
        page has some live applications to play with. These basic examples give you the reassurance
        that I know how to command Ai tools to do work that is assigned to me.
      </p>
      <p>Thanks kindly for visiting. 😁</p>
    </article>
  </Main>
);

export default Index;
