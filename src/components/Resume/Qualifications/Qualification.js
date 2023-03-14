import React from 'react';
import PropTypes from 'prop-types';

const Qualification = ({ data }) => (
  <li className="qualification-container">
    <a href={data.link}>
      <h4 className="qualification-title">{data.title}</h4>
      <h5 className="qualification-university">{data.university}</h5>
    </a>
  </li>
);

Qualification.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    curriculum: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
  }).isRequired,

};

Qualification.defaultProps = {

};

export default Qualification;
