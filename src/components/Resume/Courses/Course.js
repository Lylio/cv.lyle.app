import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ data }) => (
  <li className="course-container">
    <a href={data.link}>
      <h4 className="course-name">{}</h4>
    </a>

  </li>
);

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    curriculum: PropTypes.string.isRequired,
  }).isRequired,

};

export default Course;
