import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/lyle-christine.jpg`} alt="" />
      </Link>
      <header>
        <h2>Lyle Christine</h2>
        <h3>Software Developer</h3>
      </header>
    </section>

    <section className="blurb">
      <h2>Interests</h2>
      <p>Product Development | Automation | Microservice Architecture
        | CI/CD | Internet of Things
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Resume</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy;2021 Lyle Christine</p>
    </section>
  </section>
);

export default SideBar;
