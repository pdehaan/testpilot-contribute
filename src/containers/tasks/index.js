import React, { Component } from 'react';
import { connect } from 'react-redux';

import { taskStatus } from '../../actions/tasks';
import Loading from '../../components/loading';
import TaskList from '../../components/task-list';
import './index.css';

class Tasks extends Component {
  renderWrapper(elem) {
    return (
      <section className="tasks">
        <h2>Tasks</h2>
        {elem}
      </section>
    );
  };

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
  tasks: state.tasks.data
});

export default connect(mapStateToProps)(Tasks);
