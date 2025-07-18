import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const getCurrentYear = () => new Date().getFullYear();

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/cv-icon.png`} alt="" />
      </Link>
      <header>
        <h2>Lyle Christine</h2>
        <h3>Senior Software Developer</h3>
      </header>
    </section>

    <section className="blurb">
      <h2>Interests</h2>
      <p>Java ☕ ∙ Spring 🌱 ∙ Kotlin 👾 ∙ Android 📱 ∙ AI 🤖 <br />
        Docker 🐋 ∙ Kubernetes ☸ ∙ Cloud ☁ ∙ Maven 🪶 <br />
        Python 🐍 ∙ MongoDB 🍃 ∙ PostgreSQL 🐘 ∙ Linux 🐧
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy;{getCurrentYear()} Lyle Christine</p>
    </section>
  </section>
);

export default SideBar;
