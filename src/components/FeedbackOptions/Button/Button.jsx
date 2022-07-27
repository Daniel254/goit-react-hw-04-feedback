import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string.isRequired,
  };

  render() {
    const { onClick, name, children } = this.props;
    return (
      <button onClick={onClick} name={name}>
        {children}
      </button>
    );
  }
}
