import React from 'react';
import PropTypes from 'prop-types';

import Qualification from './Qualifications/Qualification';

const getRows = (qualifications) => qualifications.sort((a, b) => {
  let ret = 0;
  if (a.university > b.university) ret = -1;
  else if (a.university < b.university) ret = 1;
  else if (a.number > b.number) ret = 1;
  else if (a.number < b.number) ret = -1;
  return ret;
}).map((qualification, idx) => (
  <Qualification
    data={qualification}
    key={qualification.title}
    last={idx === qualifications.length - 1}
  />
));

const Qualifications = ({ data }) => (
  <div className="qualifications">
    <div className="link-to" id="qualifications" />
    <div className="tutorials">
      <h3>Tutorials & Certificates</h3>
    </div>
    <ul style={{ listStyleType: 'none' }} className="qualification-list">
      {getRows(data)}
    </ul>
  </div>
);

Qualifications.defaultProps = {
  data: [],
};

Qualifications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    university: PropTypes.string,
  })),
};

export default Qualifications;
