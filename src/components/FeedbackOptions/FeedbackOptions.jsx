import styled from 'styled-components';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ButtonThumb>
      <button type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </ButtonThumb>
  );
};

const ButtonThumb = styled.div`
  display: flex;
  gap: 10px;
`;

export default FeedbackOptions;
