import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { skills } from '../../config.json';
import wrapper from '../wrapper/decorator';
import SkillIntro, { SkillIntroItem } from './index';

const itemStories = storiesOf('Skill Intro Items', module)
  .addDecorator(wrapper('blue'));
skills.forEach(skill => {
  itemStories.add(skill.name, () => <SkillIntroItem {...skill} />);
})

const stories = storiesOf('Skill Intro', module)
  .addDecorator(wrapper('blue'))
  .add('default', () => <SkillIntro skills={skills} />);
