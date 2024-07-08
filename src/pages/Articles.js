import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Articles = () => (
  <Main
    title="Articles"
    description="Portfolio of coding examples."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/articles">Articles</Link></h2>
          <p>Click <b><a href="https://write.as/christova/">here</a></b> for my
            collection of interesting tech topics and explanatory software development graphics.
            This blog is updated in no particular order, to no particular schedule. It is a
            compendium of work from some of the best Software Developer bloggers.
            <br />©All rights reserved to each developer and blogger.
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Articles;
