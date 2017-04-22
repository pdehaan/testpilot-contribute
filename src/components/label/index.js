import React, { Component, PropTypes } from 'react';

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
