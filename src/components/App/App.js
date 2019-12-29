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

    return (
      <section className="">
        <h1 className="">Please Leave feedback</h1>

        <button className="" type="button" onClick={this.handleGoodBtnClick}>
          Good
        </button>
        <button className="" type="button" onClick={this.handleNeutralBtnClick}>
          Neutral
        </button>
        <button className="" type="button" onClick={this.handleBadBtnClick}>
          Bad
        </button>

        <h2 className="">Statistics</h2>
        <ul className="">
          <li className="">
            <p>Good: {good}</p>
          </li>
          <li className="">
            <p>Neutral: {neutral}</p>
          </li>
          <li className="">
            <p>Bad: {bad}</p>
          </li>
        </ul>
      </section>
    );
  }
}
