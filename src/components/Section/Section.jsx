import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
  };

  render() {
    const { title, children } = this.props;
    return (
      <section>
        {title && <h2>{title}</h2>}
        {children}
      </section>
    );
  }
}
