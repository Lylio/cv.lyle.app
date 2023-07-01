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
          <p><a href="https://www.sololearn.com/profile/24431183"><b>SoloLearn</b></a> is the code
            challenge website I use as a convenient way to refresh my knowledge of familiar
            languages or as a way to upskill into a new technical area. Currently I&#39;m working
            through <b>JavaScript</b>, <b>CSS</b>, <b>Python</b> and <b>SQL</b>.
          </p>
          <p>
            <b>Completed certificated are listed below:</b>
          </p>
        </div>
      </header>
      <div className="sololearn">
        <a href="https://www.sololearn.com/certificates/CT-6JS4MSTM"><b>🎓 Java</b></a><br />
      </div>
      <br />
      <ContactIcons />
    </article>
  </Main>
);

export default Code;
