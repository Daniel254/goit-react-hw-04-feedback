import PropTypes from 'prop-types';

function Statistics({ stats: { good, neutral, bad } }) {
  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.floor((good / totalFeedback) * 100)
    : 0;

  return totalFeedback === 0 ? (
    <p>There is no feedback</p>
  ) : (
    <p>
      Good: {good}
      <br />
      Neutral: {neutral}
      <br />
      Bad: {bad}
      <br />
      Total: {totalFeedback}
      <br />
      Positive feedback: {positiveFeedbackPercentage}%
      <br />
    </p>
  );
}

Statistics.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Statistics;
