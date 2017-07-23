import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../loading';

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

  handleClick(evt) {
    evt.preventDefault();
    const { changeSkill, history, tag } = this.props;
    changeSkill(tag);
    history.push('/tasks');
    window.scroll(0, 0);
  }

  render() {
    const { name, description } = this.props;
    return (
      <li className="skill-intro--item" style={this.styles()}>
        <a href="/tasks" onClick={evt => this.handleClick(evt)}>
          <h3>{name}</h3>
          <p>{description}</p>
        </a>
      </li>
    );
  }
}

export default class SkillIntro extends Component {
  static propTypes = {
    changeSkill: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    skills: PropTypes.array
  };

  static defaultProps = {
    skills: []
  };

  renderWrapper(elem) {
    return (
      <section id="skill-intro" className="skill-intro">
        <h2>Tasks by Skill</h2>
        {elem}
      </section>
    );
  }

  renderLoading() {
    return this.renderWrapper(<Loading />);
  }

  render() {
    const { changeSkill, history, skills } = this.props;
    if (!skills.length) {
      return this.renderLoading();
    }
    return this.renderWrapper(
      <ul>
        {skills.map(skill => (
          <SkillIntroItem
            changeSkill={changeSkill}
            history={history}
            {...skill}
          />
        ))}
      </ul>
    );
  }
}
