import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterActions } from '../../actions/filters';
import { taskStatus } from '../../actions/tasks';
import Loading from '../../components/loading';
import TaskList from '../../components/task-list';

import filteredTasks from '../../selectors/filters';

import './index.css';

class Tasks extends Component {
  renderWrapper(elem) {
    return (
      <section className="tasks">
        <h2>Tasks</h2>
        {elem}
      </section>
    );
  }

  render() {
    const { status, tasks } = this.props;
    if ([taskStatus.INIT, taskStatus.PENDING].includes(status)) {
      return this.renderWrapper(<Loading extraClass="loading--light" />);
    }
    return this.renderWrapper(<TaskList tasks={tasks} />);
  }
}

const mapStateToProps = state => ({
  filters: {
    repo: state.filters.repo,
    skills: state.filters.skill
  },
  repos: state.filters.available.repos,
  skills: state.filters.available.skills,
  status: state.tasks.status,
  tasks: filteredTasks(state)
});

const mapDispatchToProps = dispatch => ({
  changeRepo: repo => dispatch(filterActions.changeRepoFilter(repo)),
  changeSkill: repo => dispatch(filterActions.changeSkillFilter(repo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
