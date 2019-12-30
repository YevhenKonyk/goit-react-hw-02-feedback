import React, { Component } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = e => {
    const { name } = e.target;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedbackCount = Object.values({ ...this.state }).reduce(
      (acc, value) => acc + value,
      0,
    );

    const positiveFeedbackPercentage = parseFloat(
      (good / totalFeedbackCount) * 100,
    ).toFixed();

    return (
      <>
        <Section title="Please Leave feedback">
          <FeedbackOptions
            options={Object.keys({ ...this.state })}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbackCount}
            positivePercentage={positiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}
