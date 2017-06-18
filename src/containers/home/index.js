import React, { Component } from 'react';
import { connect } from 'react-redux';

import DocsIntro from '../../components/docs-intro';
import ProjectIntro from '../../components/project-intro';
import SkillIntro from '../../components/skill-intro';
import Intro from '../../components/intro';

import { repos, skills } from '../../config.json';
import './index.css';

export class Home extends Component {
  render() {
    return (
      <section>
        <Intro />
        <DocsIntro />
        <ProjectIntro repos={this.props.repos} />
        <SkillIntro skills={this.props.skills} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  repos: state.filters.available.repo,
  skills: state.filters.available.skill
});

export default connect(mapStateToProps)(Home);
