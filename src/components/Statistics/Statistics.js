import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section';
import Statistic from '../Statistic/Statistic';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total > 0 && (
      <>
        <Section title="Statistics">
          <ul className="list">
            <li className="listItem">
              <Statistic label="Good:" value={good} />
            </li>
            <li className="listItem">
              <Statistic label="Neutral:" value={neutral} />
              <p className="text">Neutral: {neutral}</p>
            </li>
            <li className="listItem">
              <Statistic label="Bad:" value={bad} />
              <p className="text">Bad: {bad}</p>
            </li>
            <li className="listItem">
              <Statistic label="Total:" value={total} />
              <p className="text">Total: {total}</p>
            </li>
            <li className="listItem">
              <p className="text">
                <Statistic
                  label="Positive feedback:"
                  value={`${positivePercentage || 0}%`}
                />
              </p>
            </li>
          </ul>
        </Section>
      </>
    )}

    {total <= 0 && <p className="text">No feedback given</p>}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default Statistics;
