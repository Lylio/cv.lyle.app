import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

  <h1>Code Challenges</h1>;

const Challenges = () => (
  <Main
    title="Challenges"
    description="Code challenges as found on popular code challenge sites"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Code Challenges</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Work in Progress... 🚧</p><br />
        <ul>
          <li><a href="https://www.sololearn.com/profile/24431183"><b>SoloLearn</b></a></li>
          <li><a href="https://www.hackerrank.com/dashboard"><b>HackerRank</b></a></li>
          <li><a href="https://www.leetcode.com/Lylio/"><b>LeetCode</b></a></li>
          <li><a href="https://www.beecrowd.com.br/judge/en/"><b>BeerCrowd</b></a></li>
          <li><a href="https://www.codechef.com/users/lylio"><b>CodeChef</b></a></li>
          <li><a href="https://www.codewars.com/users/Lylio"><b>CodeWars</b></a></li>

          <br />
        </ul>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Challenges;
