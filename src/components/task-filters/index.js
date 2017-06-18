import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './index.css';

class TaskFilter extends Component {
  static propTypes = {
    available: PropTypes.array,
    change: PropTypes.func.isRequired,
    current: PropTypes.string,
    getTitle: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  };

  handleChange(evt) {
    const { target } = evt;
    this.props.change(
      target.options[target.selectedIndex].getAttribute('value')
    );
  }

  renderOption(value, title) {
    const selected = value === this.props.current;
    return <option selected={selected} value={value}>{title}</option>;
  }

  renderSelect() {
    const { available, title } = this.props;
    return (
      <select onChange={evt => this.handleChange(evt)}>
        {this.renderOption(null, title)}
        {available &&
          available.map(item =>
            this.renderOption(
              this.props.getValue(item),
              this.props.getTitle(item)
            )
          )}
      </select>
    );
  }

  render() {
    return this.renderSelect();
  }
}

export default class TaskFilters extends Component {
  static propTypes = {
    available: PropTypes.shape({
      repos: PropTypes.array,
      skills: PropTypes.array
    }).isRequired,
    changeRepo: PropTypes.func.isRequired,
    changeSkill: PropTypes.func.isRequired,
    repo: PropTypes.string,
    skill: PropTypes.string
  };

  render() {
    const {
      available: { repos, skills },
      changeRepo,
      changeSkill,
      repo,
      skill
    } = this.props;
    return (
      <menu className="task-filters">
        <h2>Filter by</h2>
        <TaskFilter
          available={repos}
          change={changeRepo}
          current={repo}
          getTitle={repo => repo.name}
          getValue={repo => repo.repo}
          title="Project"
        />
        <TaskFilter
          available={skills}
          change={changeSkill}
          current={skill}
          getTitle={repo => repo.name}
          getValue={skill => skill.tag}
          title="Skill"
        />
      </menu>
    );
  }
}
