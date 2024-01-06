import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/coding';

const Coding = () => (
  <Main
    title="Coding"
    description="Portfolio of coding examples."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/coding">Coding</Link></h2>
          <p>The following coding examples range from basic to advanced typical business tasks.
            Along with my <b><a href="/projects"> project examples</a></b>, the combined samples give an indication of
            my programming skill level (i.e. asking ChatGPT 🥳).
          </p>
          <p>To view the code, click on the heading, background or GitHub logo.</p>
          <p><b>PLEASE NOTE</b> - THIS PAGE IS A NEW ADDITION TO THE SITE AND WILL TAKE
            SOME TIME TO BECOME A SUBSTANTIAL RESOURCE.
          </p>
        </div>
      </header>
      {data.map((coding) => (
        <Cell
          data={coding}
          key={coding.title}
        />
      ))}
    </article>
  </Main>
);

export default Coding;
