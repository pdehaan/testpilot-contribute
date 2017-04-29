import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    to: PropTypes.string
  };

  render() {
    const { text, to } = this.props;
    return <Link className="button" to={to}>{text}</Link>;
  }
}
