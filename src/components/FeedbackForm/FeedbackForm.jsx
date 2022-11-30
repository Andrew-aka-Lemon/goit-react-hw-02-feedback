// import PropTypes from "prop=types";
import { Component } from 'react';

class FeedbackForm extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <h2>Statistics</h2>
        <p>Good</p>
        <p>Neutral</p>
        <p>Bad</p>
      </>
    );
  }
}

export { FeedbackForm };
