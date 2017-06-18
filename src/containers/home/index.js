import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterActions } from '../../actions/filters';
import DocsIntro from '../../components/docs-intro';
import ProjectIntro from '../../components/project-intro';
import SkillIntro from '../../components/skill-intro';
import Intro from '../../components/intro';

import { repos, skills } from '../../config.json';
import './index.css';

export class Home extends Component {
  render() {
    const { changeRepo, changeSkill, history, repos, skills } = this.props;
    return (
      <section>
        <Intro />
        <DocsIntro />
        <ProjectIntro changeRepo={changeRepo} history={history} repos={repos} />
        <SkillIntro changeSkill={changeSkill} history={history} skills={skills} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  repos: state.filters.available.repos,
  skills: state.filters.available.skills
});

const mapDispatchToProps = dispatch => ({
  changeRepo: repo => dispatch(filterActions.changeRepoFilter(repo)),
  changeSkill: repo => dispatch(filterActions.changeSkillFilter(repo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
