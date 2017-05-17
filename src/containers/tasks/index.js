import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskList from '../../components/task-list';
import './index.css';

class Tasks extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <section className="tasks">
        <h2>Tasks</h2>
        <TaskList tasks={tasks} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  status: state.tasks.status,
  tasks: state.tasks.data
});

export default connect(mapStateToProps)(Tasks);
