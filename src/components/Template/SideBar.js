import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const getCurrentYear = () => new Date().getFullYear();

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
      <p>Java ☕ ∙ React ⚛ ∙ Spring 🍃 <br />
        Linux 🐧 ∙ Docker 🐋 ∙ Kubernetes ⎈
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/cv') ? <Link to="/cv" className="button">CV</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy;{getCurrentYear()} Lyle Christine</p>
    </section>
  </section>
);

export default SideBar;
