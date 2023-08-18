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
          <p><a href="https://www.sololearn.com/profile/24431183"><b>SoloLearn</b></a> is a highly
            useful code <i>challenge</i> website which I use to either refresh my knowledge of
            languages which are already familiar to me; or as a way to upskill into a new technical
            area. For example, I&#39;m currently working through modules in <b> CSS</b>,
            <b> Python</b> and <b>SQL</b> (alongside <b>TypeScript, Node.js and Express.js</b>).
            While I&#39;ve worked with these tech tools for many years, I find a lot of satisfaction
            in keeping my skills shiny and sharp with testing and certification.
            After all: <a href="https://www.youtube.com/watch?v=i6RZY4Ar3fw"><b>Rust Never Sleeps.</b></a>
          </p>
          <br />
          <p>
            Completed certificates are listed below. Hopefully this list will expand swiftly.
          </p>
        </div>
      </header>
      <div className="sololearn">
        <ul>
          <li><a href="https://www.sololearn.com/certificates/CC-DVJRYRU8"><b>🎓 SQL | <span>Aug 2023</span></b></a></li>
          <li><a href="https://www.sololearn.com/certificates/CC-WXYQA2GW"><b>🎓 JavaScript | <span>Aug 2023</span></b></a></li>
          <li><a href="https://www.sololearn.com/certificates/CT-6JS4MSTM"><b>🎓 Java | <span>March 2023</span></b></a></li>
        </ul>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Code;
