import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Code = () => (

  <Main
    title="Certificates"
    description="Code certificated completed from popular code challenge sites"
  >
    <article className="post" id="challenges">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/certificates">Code Certificates</Link></h2>
          I use code challenge websites such as
          <a href="https://www.sololearn.com/profile/24431183"><b> Sololearn</b></a> to keep my
          knowledge of familiar languages fresh, and also as a way to up-skill into new technical
          areas. While I&#39;ve worked with these programming languages for many years, I still find
          satisfaction in keeping my skills <i>shiny</i> and <i>sharp</i>. After all: <br /> <br />
          <a id="rust" href="https://www.youtube.com/watch?v=i6RZY4Ar3fw">Rust Never
            Sleeps
          </a>
          <br />
          <br />
          <div id="certlist">Completed certificates are listed below:
          </div>
        </div>
      </header>
      <div className="sololearn">
        <ul>
          <li>
            <a href="https://www.sololearn.com/certificates/CC-YUX5BHQQ">
              <img
                src="/images/cert-icons/c-sharp.png"
                alt="Introduction to C#"
              />
            </a>
            <span>Introduction to C# | Aug 2025 | &nbsp;
              <a
                id="cert"
                href="https://www.sololearn.com/certificates/CC-YUX5BHQQ"
              >
                Certificate
              </a>
            </span>
          </li>
          <li>
            <a href="https://www.sololearn.com/certificates/CC-TADETWOJ">
              <img
                src="/images/cert-icons/vibe-coding.png"
                alt="Vibe Coding"
              />
            </a>
            <span>Vibe Coding | July 2025 | &nbsp;
              <a
                id="cert"
                href="https://www.sololearn.com/certificates/CC-TADETWOJ"
              >
                Certificate
              </a>
            </span>
          </li>
          <li>
            <a href="https://www.sololearn.com/certificates/CC-IFB8SIKR">
              <img
                src="/images/cert-icons/prompt-engineering.png"
                alt="Prompt Engineering"
              />
            </a>
            <span>Prompt Engineering | July 2025 | &nbsp;
              <a
                id="cert"
                href="https://www.sololearn.com/certificates/CC-7TYIURTO"
              >
                Certificate
              </a>
            </span>
          </li>
          <li>
            <a href="https://www.sololearn.com/certificates/CC-7TYIURTO">
              <img
                src="/images/cert-icons/python-intermediate.png"
                alt="Python Intermediate"
              />
            </a>
            <span>Python Intermediate | Jan 2025 | &nbsp;
              <a
                id="cert"
                href="https://www.sololearn.com/certificates/CC-7TYIURTO"
              >
                Certificate
              </a>
            </span>
          </li>
          <li>
            <a href="https://www.sololearn.com/certificates/CC-H4OF8EKL">
              <img
                src="/images/cert-icons/introduction-to-python.png"
                alt="Introduction to Python"
              />
            </a>
            <span>Introduction to Python | Jan 2025 | &nbsp;
              <a
                id="cert"
                href="https://www.sololearn.com/certificates/CC-H4OF8EKL"
              >
                Certificate
              </a>
            </span>
          </li>
          <li>
            <a href="https://www.sololearn.com/en/certificates/CC-YJ1Y8S6C">
              <img
                src="https://i.ibb.co/yQg6Cdk/coding-for-data.jpg"
                alt="Coding for Data"
              />
            </a>
            <span>Coding for Data | Dec 2024 | &nbsp;
              <a
                id="cert"
                href="https://www.sololearn.com/en/certificates/CC-YJ1Y8S6C"
              >
                Certificate
              </a>
            </span>
          </li>
          <li>
            <a href="https://www.sololearn.com/certificates/CC-5NVB5KDV">
              <img
                src="/images/cert-icons/sql-intermediate.png"
                alt="SQL Intermediate"
              />
            </a>
            <span>SQL Intermediate | Nov 2024 | &nbsp;
              <a
                id="cert"
                href="https://www.sololearn.com/en/certificates/CC-5NVB5KDV"
              >
                Certificate
              </a>
            </span>
          </li>
          <li>
            <a href="https://www.sololearn.com/certificates/CC-FJIJVBP3">
              <img
                src="/images/cert-icons/java-intermediate.png"
                alt="Java Intermediate"
              />
            </a>
            <span>Java Intermediate | Sept 2023 | &nbsp;
              <a
                id="cert"
                href="https://www.sololearn.com/certificates/CC-FJIJVBP3"
              >
                Certificate
              </a>
            </span>
          </li>
          <li>
            <a href="https://www.sololearn.com/certificates/CC-WXYQA2GW">
              <img
                src="/images/cert-icons/javascript.png"
                alt="JavaScript"
              />
            </a>
            <span>JavaScript | Aug 2023 | &nbsp;
              <a
                id="cert"
                href="https://www.sololearn.com/certificates/CC-WXYQA2GW"
              >
                Certificate
              </a>
            </span>
          </li>
          <li>
            <a href="https://www.sololearn.com/certificates/CC-DVJRYRU8">
              <img
                src="/images/cert-icons/sql.png"
                alt="SQL"
              />
            </a>
            <span>SQL | Aug 2023 | &nbsp;
              <a
                id="cert"
                href="https://www.sololearn.com/certificates/CC-DVJRYRU8"
              >
                Certificate
              </a>
            </span>
          </li>
          <li>
            <a href="https://www.sololearn.com/certificates/CT-6JS4MSTM">
              <img
                src="/images/cert-icons/java.png"
                alt="Java"
              />
            </a>
            <span>Java | March 2023 | &nbsp;
              <a
                id="cert"
                href="https://www.sololearn.com/certificates/CT-6JS4MSTM"
              >
                Certificate
              </a>
            </span>
          </li>
        </ul>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Code;
