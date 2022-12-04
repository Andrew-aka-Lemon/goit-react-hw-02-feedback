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

  countTotalFeedback = allFeedback => {
    return;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + bad + neutral;
    const goodPercent = Math.ceil((good / total) * 100);

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
            <span>{good}</span>
          </ItemCounter>
          <ItemCounter>
            <p>Neutral :</p>
            <span>{neutral}</span>
          </ItemCounter>
          <ItemCounter>
            <p>Bad :</p>
            <span>{bad}</span>
          </ItemCounter>
          <ItemCounter>
            <p>Total :</p>
            <span>{total}</span>
          </ItemCounter>
          <ItemCounter>
            <p>Positive feedback :</p>
            <span>{total > 0 && goodPercent} %</span>
          </ItemCounter>
        </ul>
      </div>
    );
  }
}

export default FeedbackForm;
