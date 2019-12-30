import React, { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodBtnClick = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutralBtnClick = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBadBtnClick = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
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
      <section className="feedback">
        <h1 className="title">Please Leave feedback</h1>

        <button className="btn" type="button" onClick={this.handleGoodBtnClick}>
          Good
        </button>
        <button
          className="btn"
          type="button"
          onClick={this.handleNeutralBtnClick}
        >
          Neutral
        </button>
        <button className="btn" type="button" onClick={this.handleBadBtnClick}>
          Bad
        </button>

        {totalFeedbackCount > 0 && (
          <>
            <h2 className="title">Statistics</h2>
            <ul className="list">
              <li className="listItem">
                <p className="text">Good: {good}</p>
              </li>
              <li className="listItem">
                <p className="text">Neutral: {neutral}</p>
              </li>
              <li className="listItem">
                <p className="text">Bad: {bad}</p>
              </li>
              <li className="listItem">
                <p className="text">Total: {totalFeedbackCount || 0}</p>
              </li>
              <li className="listItem">
                <p className="text">
                  Positive feedback: {positiveFeedbackPercentage || 0}%
                </p>
              </li>
            </ul>
          </>
        )}
        {totalFeedbackCount <= 0 && <p>No feedback given</p>}
      </section>
    );
  }
}
