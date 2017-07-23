import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Label from '../label';
import './index.css';

export default class LabelList extends Component {
  static propTypes = {
    labels: PropTypes.arrayOf(PropTypes.object),
    repo: PropTypes.object.isRequired
  };

  static defaultProps = {
    labels: [],
    repo: {}
  };

  renderSkill(label) {
    const { id, name } = label;
    return <Label key={id} className="skill" name={name} />;
  }

  renderRepo() {
    const { colors, name, repo } = this.props.repo;
    return <Label key={repo} className="project" name={name} />;
  }

  render() {
    const { labels } = this.props;
    return (
      <div className="label-list">
        {this.renderRepo()}
        {labels.map(label => this.renderSkill(label))}
      </div>
    );
  }
}
