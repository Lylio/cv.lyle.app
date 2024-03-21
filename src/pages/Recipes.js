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
          <p>The following <i>code recipes</i> range from basic to advanced tech
            tasks. Basically, anything that takes my fancy (or ChatGPT orders me to publish).
          </p>
          <p>This page is a new addition and will take some time to
            become anything like a <i>steaming hot</i> resource.
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
