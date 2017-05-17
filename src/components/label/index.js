import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class Label extends Component {
  static propTypes = {
    color: PropTypes.string,
    name: PropTypes.string,
    prefix: PropTypes.string
  };

  renderPrefix() {
    const { prefix } = this.props;
    if (prefix) {
      return (
        <span className="label--prefix">
          {prefix}
        </span>
      );
    }
    return null;
  }

  getStyle() {
    const { color } = this.props;
    if (!color) {
      return {};
    }
    return {
      backgroundColor: `rgb(${color})`
    };
  }

  render() {
    const { name } = this.props;
    return (
      <span className="label" style={this.getStyle()}>
        {this.renderPrefix()}
        <span className="label--name">{name}</span>
      </span>
    );
  }
}
