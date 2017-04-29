import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class RepoHeader extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  };

  thumbnailBg() {
    const { thumbnail } = this.props;
    return `url('/thumbnail/${thumbnail}') no-repeat 110px 30px`;
  }

  gradientBg() {
    const { colors } = this.props;
    return `#F2F2F2 linear-gradient(135deg, ${colors[0]}, ${colors[1]}) no-repeat`;
  }

  styles() {
    return {
      background: `${this.thumbnailBg()}, ${this.gradientBg()}`,
      backgroundSize: '80px 80px, 300px 140px'
    };
  }

  render() {
    const { description, name, url } = this.props;
    return (
      <header className="repo-header" style={this.styles()}>
        <h2><a href={url}>{name}</a></h2>
        <p>{description}</p>
      </header>
    );
  }
}
