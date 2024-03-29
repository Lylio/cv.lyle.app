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
      <p><b>Hello!</b> I'm Lyle and I'm currently a <b>Senior Java Developer</b> with global
        consultancy leaders <a href="https://www.cgi.com/en"> <b>CGI</b></a>!<br />
        <br />You are currently visiting a humble online <b>CV</b> space which I built to make
        friends<i> and</i> join communities<i> and </i> to freely <b>&quot;SPEAK-MY-MIND&quot;</b>
        <i> and </i> to think <b><i> freely</i></b>, and to release my free-style &quot;raps&quot;
        <i> AND </i> to share my tip-top farming Tik-Tok top-tips to sell custom knitted clothing
        for your pets and Unicorns and... anyway... and ANYWAY... and <b>ANYWAYYYYYY!</b>
        <br />
        <br />
        For further info on my career details, please enjoy my
        <b><a href="https://www.linkedin.com/in/lylechristine/"> LinkedIn</a></b> profile. It is a
        &quot;<b>hoot</b>&quot;.
      </p>
      <p>Thanks kindly for visiting! 🦄</p>
    </article>
  </Main>
);

export default Index;
