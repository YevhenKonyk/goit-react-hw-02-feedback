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
            </li>
            <li className="listItem">
              <Statistic label="Bad:" value={bad} />
            </li>
            <li className="listItem">
              <Statistic label="Total:" value={total} />
            </li>
            <li className="listItem">
              <Statistic
                label="Positive feedback:"
                value={`${positivePercentage}%`}
              />
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
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
