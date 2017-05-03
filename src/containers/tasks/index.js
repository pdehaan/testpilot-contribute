import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css';

class Tasks extends Component {
  render() {
    return (
      <section className="tasks">
        <p>Tasks</p>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  tasks: []
});

export default connect(mapStateToProps)(Tasks);
