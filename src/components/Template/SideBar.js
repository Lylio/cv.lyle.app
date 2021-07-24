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
        <p><a href="mailto:cxz@gmx.com">cxz@gmx.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Lyle. I like building things.
        I am a <a href="https://www.gla.ac.uk/postgraduate/taught/softwaredevelopment/">University of Glasgow</a> post-graduate (2018), after which
        I worked for 3-years as a DevOps/Platform Engineer at <a href="https://uk.virginmoney.com/">Virgin Money</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
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
