import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section className="feedback">
    <h2 className="title">{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Section;
