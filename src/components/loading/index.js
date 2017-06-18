import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './index.css';

export default class Loading extends Component {
  static propTypes = {
    extraClass: PropTypes.string
  };

  static defaultProps = {
    extraClass: ''
  };

  classNames() {
    return classnames('loading', this.props.extraClass);
  }

  render() {
    return (
      <div className={this.classNames()}>
        <div className="loading--bar" />
        <div className="loading--bar" />
        <div className="loading--bar" />
        <div className="loading--bar" />
      </div>
    );
  }
}
