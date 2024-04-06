import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/recipes';

const Recipes = () => (
  <Main
    title="Recipes"
    description="Portfolio of coding examples."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/recipes">Recipes</Link></h2>
          <p>The following <i>code recipes</i> will eventually become a collection of odds
            &#39;n&#39; sods tech tasks. Basically, anything that takes my fancy or ChatGPT commands
            me to publish.
          </p>
          <p>This page is a new addition and will take some time to become a <i>steaming hot</i>
            resource. Your patience is very much appreciated.
          </p>
        </div>
      </header>
      {data.map((recipes) => (
        <Cell
          data={recipes}
          key={recipes.title}
        />
      ))}
    </article>
  </Main>
);

export default Recipes;
