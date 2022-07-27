import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map((item, index) => {
        return (
          <button
            key={index}
            name={item}
            onClick={onLeaveFeedback}
            type="button"
          >
            {item}
          </button>
        );
      })}
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
