import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class Wrapper extends Component {
  static propTypes = {
    extraClass: PropTypes.string.isRequired
  }

  render() {
    const { children, extraClass } = this.props;
    return (
      <div className={`wrapper wrapper--${extraClass}`}>
        <div className="wrapper--inner">
          {children}
        </div>
      </div>
    );
  }
};
