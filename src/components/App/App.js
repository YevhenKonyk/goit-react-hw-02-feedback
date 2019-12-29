import React, { Component } from 'react';

export default class App extends Component {
  state = {
    message: 'Feedback',
  };

  render() {
    const { message } = this.state;

    return <h1>{message}</h1>;
  }
}
