import React, { Component } from 'react';
import styled from 'styled-components';
// import FeedbackForm from 'components/FeedbackForm';
import Statistics from 'components/Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from 'Section';

class App extends Component {
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

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.ceil((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.feedbackGoodHandler} />{' '}
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={1}
            positivePercentage={1}
          />
        </Section>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40;
  color: #010101;
`;

export { App };
