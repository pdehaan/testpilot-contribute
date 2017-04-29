import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class Label extends Component {
  static propTypes = {
    name: PropTypes.string
  };

  render() {
    const { name } = this.props;
    return <span className="label">{name}</span>
  }
}
