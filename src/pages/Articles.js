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
          <p>Click <b><a href="https://write.as/christova/">here</a></b> for a motley crew
            collection of interesting tech topics. Many of these posts are credited to
            <b><a href="https://www.amigoscode.com/"> AmigosCode</a></b> - please do check out
            his site which features excellent courses on a variety of invaluable software
            engineering topics.
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Articles;
