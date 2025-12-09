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
      <div className="email">
        <p>Feel free to get in touch:</p>
        <ul>
          <b><a href="mailto:cxz@gmx.com" className="contact-link">✉️ Email</a></b><br /><br />
          <b><a href="https://www.linkedin.com/in/lylechristine/" className="contact-link">🔗 LinkedIn</a></b>
        </ul>
        <img
          src="https://i.ibb.co/WFGSpYD/lyle-christine-cv2.jpg"
          style={{ height: '400px' }}
          alt="Lyle Christine"
        />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
