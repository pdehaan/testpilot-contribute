import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { taskStatus } from '../../actions/tasks';
import Loading from '../../components/loading';

import './index.css';

export class ProjectIntroItem extends Component {
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
    return `#F2F2F2 linear-gradient(135deg, rgb(${colors[0]}), rgb(${colors[1]})) no-repeat`;
  }

  styles() {
    return {
      background: `${this.thumbnailBg()}, ${this.gradientBg()}`,
      backgroundSize: '80px 80px, 300px 140px'
    };
  }

  render() {
    const { description, name } = this.props;
    return (
      <li className="project-intro--item">
        <Link style={this.styles()} to="/">
          <header>
            <h3>{name}</h3>
            <p>{description}</p>
          </header>
          <button>See Tasks</button>
        </Link>
      </li>
    );
  }
}

export default class ProjectIntro extends Component {
  static propTypes = {
    repos: PropTypes.array
  };

  static defaultProps = {
    repos: []
  };

  renderHeader() {
    return <h2>Tasks by Project</h2>;
  }

  renderLoading() {
    return (
      <section className="project-intro project-intro--loading">
        {this.renderHeader()}
        <Loading className="blue" />
      </section>
    );
  }

  render() {
    const { repos, status } = this.props;
    const { ERROR, INIT, PENDING } = taskStatus;
    if ([INIT, PENDING].includes(status)) {
      return this.renderLoading();
    } else if (!repos.length || status === ERROR) {
      return null;
    }
    return (
      <section className="project-intro">
        {this.renderHeader()}
        <ul>
          {repos.map(repo => <ProjectIntroItem {...repo} />)}
        </ul>
      </section>
    );
  }
}
