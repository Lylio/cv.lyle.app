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
      <p>Hello, I'm <b>Lyle</b>, a <b>Senior Java Developer</b> with global
        consultancy leaders <a href="https://www.cgi.com/en"> <b>CGI</b></a>.
        <br />
        <br />This is my online CV space : thanks for visiting.

        <br />
      </p>
      <p>Thanks for visiting.</p>
    </article>
  </Main>
);

export default Index;
