import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export class SkillIntroItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  };

  styles() {
    const { thumbnail } = this.props;
    return {
      background: `url('/skills/${thumbnail}') no-repeat center 24px`,
      backgroundSize: '64px 64px'
    };
  }

  render() {
    const { name, description } = this.props;
    return (
      <li className="skill-intro--item" style={this.styles()}>
        <Link to="/">
          <h3>{name}</h3>
          <p>{description}</p>
        </Link>
      </li>
    );
  }
}

export default class SkillIntro extends Component {
  static propTypes = {
    skills: PropTypes.array
  };

  static defaultProps = {
    skills: []
  };

  render() {
    const { skills } = this.props;
    if (!skills.length) {
      return null;
    }
    return (
      <section className="skill-intro">
        <h2>Tasks by Skill</h2>
        <ul>
          {skills.map(skill => <SkillIntroItem {...skill} />)}
        </ul>
      </section>
    );
  }
}
