import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Lyle Christine via email or LinkedIn."
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>It would be grand to hear from you! I have <a href="https://www.linkedin.com/in/lylechristine/"><b>LinkedIn</b></a> | I have <a href="mailto:cxz@gmx.com"><b>em@il</b></a>.</p>
        <p>Check out my <a href="https://github.com/Lylio"><b>GitHub</b></a>.</p>
        <br />
        🌳
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
