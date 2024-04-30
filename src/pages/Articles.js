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
          <p>The following software development <i>articles</i> are a collection of odds
            &#39;n&#39; sods tech solutions and tasks.
          </p>
          <p>This page is a new addition and will take some time to become a <i>steaming hot </i>
            resource of essential information. Your patience is very much appreciated.
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
