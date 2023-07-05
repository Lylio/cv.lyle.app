import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Code = () => (

  <Main
    title="Code"
    description="Code challenges as found on popular code challenge sites"
  >
    <article className="post" id="challenges">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/challenges">Code Challenges</Link></h2>
          <p><a href="https://www.sololearn.com/profile/24431183"><b>SoloLearn</b></a> is a fun code
            challenge website I use to refresh my knowledge of familiar languages or as a way to
            upskill into a new technical area. For example, currently I&#39;m working through
            modules in <b> JavaScript</b>, <b>CSS</b>, <b>Python</b> and <b>SQL</b>.
            While I&#39;ve worked with these tech tools for many years, I really find a lot of
            satisfaction in keeping my skills shiny and sharp. After all,
            <a href="https://www.youtube.com/watch?v=i6RZY4Ar3fw"> Rust Never Sleeps.</a>
          </p>
          <br />
          <p>
            Completed certificates are listed below and will hopefully update on a swift timeline:
          </p>
        </div>
      </header>
      <div className="sololearn">
        <a href="https://www.sololearn.com/certificates/CT-6JS4MSTM"><b>🎓 Java</b></a><br /><br />
      </div>
      <br />
      <ContactIcons />
    </article>
  </Main>
);

export default Code;
