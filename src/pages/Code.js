import React from 'react';
import { Link } from 'react-router-dom';
import CodeCertificates from '../components/Resume/CodeCertificates';
import Main from '../layouts/Main';

const Code = () => (
  <Main
    title="Certificates"
    description="Code certificated completed from popular code challenge sites"
  >
    <article className="post" id="challenges">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/certificates">Code Certificates</Link>
          </h2>
          I use code challenge websites such as
          <b><a href="https://www.sololearn.com/en/profile/24431183" className="hover-link"> Sololearn </a></b>
          to keep my knowledge of familiar languages fresh, and also as a way to up-skill into new
          technical areas. While I have worked with these programming languages for many years, I
          still find satisfaction in keeping my skills shiny and sharp. After all:

          <b><a href="https://www.youtube.com/watch?v=i6RZY4Ar3fw" className="hover-link"> Rust Never Sleeps </a></b>

          <div id="certlist">Completed certificates are listed below:</div>
        </div>
      </header>

      <div className="page page--code">
        <CodeCertificates />
      </div>
    </article>
  </Main>
);

export default Code;
