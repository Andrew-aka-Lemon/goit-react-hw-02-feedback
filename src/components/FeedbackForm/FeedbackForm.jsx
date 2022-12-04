// import PropTypes from "prop=types";
import { Component } from 'react';

import {
  ButtonThumb,
  ItemCounter,
} from 'components/FeedbackForm/FeedbackForm.styled';

class FeedbackForm extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackGoodHandler = e => {
    this.setState(({ good }) => {
      return { good: good + 1 };
    });
  };

  feedbackNeutralHandler = e => {
    this.setState(({ neutral }) => {
      return { neutral: neutral + 1 };
    });
  };

  feedbackBadHandler = e => {
    this.setState(({ bad }) => {
      return { bad: bad + 1 };
    });
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ButtonThumb>
          <button type="button" onClick={this.feedbackGoodHandler}>
            Good
          </button>
          <button type="button" onClick={this.feedbackNeutralHandler}>
            Neutral
          </button>
          <button type="button" onClick={this.feedbackBadHandler}>
            Bad
          </button>
        </ButtonThumb>

        <h2>Statistics</h2>
        <ul>
          <ItemCounter>
            <p>Good :</p>
            <span>{this.state.good}</span>
          </ItemCounter>
          <ItemCounter>
            <p>Neutral :</p>
            <span>{this.state.neutral}</span>
          </ItemCounter>
          <ItemCounter>
            <p>Bad :</p>
            <span>{this.state.bad}</span>
          </ItemCounter>
        </ul>
      </div>
    );
  }
}

export default FeedbackForm;
