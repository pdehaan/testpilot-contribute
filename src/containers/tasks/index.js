import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterActions } from '../../actions/filters';
import { taskStatus } from '../../actions/tasks';
import Header from '../../components/header';
import Loading from '../../components/loading';
import TaskFilters from '../../components/task-filters';
import TaskList from '../../components/task-list';

import filteredTasks from '../../selectors/filters';

import './index.css';

class Tasks extends Component {
  renderWrapper(elem) {
    return (
      <div>
        <Header />
        <main className="tasks">
          {elem}
        </main>
      </div>
    );
  }

  renderFilters() {
    const {
      changeRepo,
      changeSkill,
      filters,
      repos,
      skills,
      tasks
    } = this.props;
    return (
      <TaskFilters
        available={{ repos, skills }}
        changeRepo={changeRepo}
        changeSkill={changeSkill}
        repo={filters.repo}
        skill={filters.skill}
      />
    );
  }

  renderEmpty() {
    return this.renderWrapper(
      <div>
        {this.renderFilters()}
        <p>No tasks match the filters you have selected.</p>
      </div>
    );
  }

  renderTasks() {
    const { tasks } = this.props;
    return this.renderWrapper(
      <div className="tasks--view">
        {this.renderFilters()}
        <TaskList tasks={tasks} />
      </div>
    );
  }

  render() {
    const { status, tasks } = this.props;
    if ([taskStatus.INIT, taskStatus.PENDING].includes(status)) {
      return this.renderWrapper(<Loading extraClass="loading--white" />);
    } else if (tasks.length === 0) {
      return this.renderEmpty();
    }
    return this.renderTasks();
  }
}

const mapStateToProps = state => ({
  filters: {
    repo: state.filters.repo,
    skill: state.filters.skill
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
