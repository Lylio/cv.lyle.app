import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import sololearn from '../static/img/icons/sololearn.png';
import hackerrank from '../static/img/icons/hackerrank.png';
import leetcode from '../static/img/icons/leetcode.png';
import codechef from '../static/img/icons/codechef.png';
import codewars from '../static/img/icons/codewars.png';
import ContactIcons from '../components/Contact/ContactIcons';

  <h1>Code Challenges</h1>;

const Challenges = () => (
  <Main
    title="Challenges"
    description="Code challenges as found on popular code challenge sites"
  >
    <article className="post" id="challenges">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/challenges">Code Challenges</Link></h2>
        </div>
      </header>
      <div className="challenge-list">
        <ul>
          <a href="https://www.sololearn.com/profile/24431183"><img src={sololearn} alt="SoloLearn" /><b>SoloLearn</b></a><br />
          <a href="https://hackerrank.com"><img src={hackerrank} alt="HackerRank" /><b>HackerRank</b></a><br />
          <a href="https://leetcode.com"><img src={leetcode} alt="LeetCode" /><b>LeetCode</b></a><br />
          <a href="https://codechef.com"><img src={codechef} alt="CodeChef" /><b>CodeChef</b></a><br />
          <a href="https://codewars.com"><img src={codewars} alt="CodeWars" /><b>CodeWars</b></a><br />
        </ul>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Challenges;
