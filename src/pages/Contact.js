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
        <p>Send me your thoughts...</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/lylechristine/"><b>LinkedIn</b></a></li>
          <li><a href="mailto:cxz@gmx.com"><b>em@il</b></a></li>
          <br />
          🌳
        </ul>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
