import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class Label extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string
  };

  render() {
    const { className, name } = this.props;
    return (
      <span className={`label label--${className}`}>{name}</span>
    );
  }
}
