import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ label, value }) => (
  <>
    <p className="text">
      {label} {value}
    </p>
  </>
);

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.PropTypes.number.isRequired,
};

export default Statistic;
