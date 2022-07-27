import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
    return (
      <p>
        Good: {this.props.good}
        <br />
        Neutral: {this.props.neutral}
        <br />
        Bad: {this.props.bad}
        <br />
        Total: {this.props.total}
        <br />
        Positive feedback: {this.props.positivePercentage}%
        <br />
      </p>
    );
  }
}
