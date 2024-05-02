import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/articles';

const Articles = () => (
  <Main
    title="Articles"
    description="Portfolio of coding examples."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/articles">Articles</Link></h2>
          <p>The following software development <b>articles</b> are a motley crew collection of
            interesting tech topics.
          </p>
        </div>
      </header>
      {data.map((articles) => (
        <Cell
          data={articles}
          key={articles.title}
        />
      ))}
    </article>
  </Main>
);

export default Articles;
