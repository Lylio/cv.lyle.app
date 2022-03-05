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
      <p><b>Software Developer</b> with <a href="https://www.olmsystems.com/">OLM Systems</a>.</p>

      <p>I develop health & social care software products within the OLM integration team. This
        role is focused on backend Java development whereby the Quarkus framework supports a variety
        of microservices, web apps and bespoke integrations. The OLM product suite is very popular
        with local authorities and other public sector organisations. Their award winning
        Software-as-a-Service range includes:
      </p>
      <uo>
        <li><b>CP-IS</b>: The Child Protection-Information Sharing project enables health and social
          care staff to share information securely to better protect the most vulnerable children
          in society.
        </li>
        <li><b>Eclipse</b>: cloud native case management and finance software platform.</li>
        <li><b>CareKnowledge</b>: a holistic professional development platform for busy social care
          teams.
        </li>
      </uo>
    </article>
  </Main>
);

export default Index;
