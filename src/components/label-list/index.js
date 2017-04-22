import React, { Component, PropTypes } from 'react';

import Label from '../label';
import './index.css';

export default class LabelList extends Component {
  static propTypes = {
    labels: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    labels: []
  };

  renderLabel(label) {
    const { id, name } = label;
    return <Label key={id} name={name} />
  }

  render() {
    const { labels } = this.props;
    if (labels.length) {
      return <p>{labels.map(label => this.renderLabel(label))}</p>
    }
    return null;
  }
}
