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
      <p>Java <img width="30px" style={{ verticalAlign: 'sub' }} src="https://cdn.iconscout.com/icon/free/png-256/free-java-3521514-2945017.png" alt="Java" /> ∙ Python <img width="22px" style={{ verticalAlign: 'sub' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="Python" /> ∙ Kotlin <img width="18px" style={{ verticalAlign: 'sub' }} src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Kotlin_icon_%282016-2021%29.svg" alt="Kotlin" />  ∙ Mobile <img width="22px" style={{ verticalAlign: 'sub' }} src="https://freesvg.org/img/1527145993.png" alt="Mobile" /> ∙ AI 🧠 <br />
        Spring <img width="20px" style={{ verticalAlign: 'sub' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/512px-Spring_Boot.svg.png?20230616230349" alt="Spring" /> ∙ Docker <img width="30px" style={{ verticalAlign: 'sub' }} src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Docker_%28container_engine%29_logo_%28cropped%29.png?20230309095311" alt="Docker" /> ∙ Kubernetes <img width="25px" style={{ verticalAlign: 'sub' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/500px-Kubernetes_logo_without_workmark.svg.png" alt="Kubernetes" /> ∙ Cloud <img width="25px" style={{ verticalAlign: 'sub' }} src="https://www.svgrepo.com/show/16425/cloud-computing.svg" alt="Cloud" /> <br />
        Databases 🛢 ∙ CyberSecurity 🔒 ∙ Linux 🐧
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy;{getCurrentYear()} Lyle Christine</p>
    </section>
  </section>
);

export default SideBar;
