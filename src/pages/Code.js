import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import sololearn from '../static/img/icons/sololearn.png';
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
            challenge system I use to track my progress in programming, coding and styling.
            These ambitions are a continuous work-in-progress and exist as part of my ongoing
            learning and development.
          </p>
        </div>
      </header>
      <a href="https://www.sololearn.com/profile/24431183"><img src={sololearn} alt="SoloLearn" /><b> SoloLearn</b></a><br />
      <br />
      <ContactIcons />
    </article>
  </Main>
);

export default Code;
