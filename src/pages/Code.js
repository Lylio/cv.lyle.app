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
          <p><a href="https://www.sololearn.com/profile/24431183"><b>SoloLearn</b></a> is a
            <i>challenge</i> website which I use to either refresh my knowledge of
            familiar languages, or as a way to upskill into new technical areas. I&#39;m currently
            working through modules in <b> CSS</b>,<b> Python</b> and <b>Intermediate Java </b>
            (alongside TypeScript, Node.js and Express.js). While I&#39;ve worked with these tech
            tools for many years (during my <b>MSc Software Development</b> for example), I do find
            a lot of satisfaction in keeping my skills shiny and sharp. After all: <a id="rust" href="https://www.youtube.com/watch?v=i6RZY4Ar3fw"><b>Rust Never Sleeps.</b></a>
          </p>
          <br />
          <p>
            Completed certificates are listed below with more to come.
          </p>
        </div>
      </header>
      <div className="sololearn">
        <ul>
          <li>
            <a href="https://www.sololearn.com/certificates/CC-WXYQA2GW"><img src="https://i.imgur.com/P8qgBC5.jpg" alt="JavaScript" /></a>
            <span>JavaScript | Aug 2023 | <a id="cert" href="https://www.sololearn.com/certificates/CC-WXYQA2GW">Certificate</a></span>
          </li>
          <li>
            <a href="https://www.sololearn.com/certificates/CC-DVJRYRU8"><img src="https://i.imgur.com/MbrP2z0.jpg" alt="SQL" /></a>
            <span>SQL | Aug 2023 | <a id="cert" href="https://www.sololearn.com/certificates/CC-DVJRYRU8">Certificate</a></span>
          </li>
          <li>
            <a href="https://www.sololearn.com/certificates/CT-6JS4MSTM"><img src="https://i.imgur.com/aZbeRzk.jpeg" alt="Java" /></a>
            <span>Java | March 2023 | <a id="cert" href="https://www.sololearn.com/certificates/CT-6JS4MSTM">Certificate</a></span>
          </li>
        </ul>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Code;
