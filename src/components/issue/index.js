import React, { Component, PropTypes } from 'react';

import './index.css';

export default class Issue extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    labels: []
  };

  renderLabel(label) {
    const { id, name } = label;
    return <span key={id}>{name}</span>
  }

  renderLabels() {
    const { labels } = this.props;
    if (labels.length) {
      return <p>{labels.map(label => this.renderLabel(label))}</p>
    }
    return null;
  }

  render() {
    const { number, title, html_url } = this.props;
    return (
      <li className="issue">
        <h2><a href={html_url}>{title} (#{number})</a></h2>
        {this.renderLabels()}
      </li>
    );
  }
}
