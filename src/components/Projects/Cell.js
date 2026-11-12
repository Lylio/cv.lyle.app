import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import githublogo from './images/github-logo.png';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link || data.github}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={data.link || data.github} className="image">
        <img
          src={data.image.startsWith('https://')
            ? data.image
            : `${process.env.PUBLIC_URL}${data.image}`}
          alt={`${data.title} preview`}
        />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
      <div className="github">
        <a href={data.github} className="image" aria-label={`View ${data.title} on GitHub`}>
          <img src={githublogo} alt="GitHub" />
        </a>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
