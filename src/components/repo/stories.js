import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Repo from './index';

const props = (overrides = {}) => Object.assign({}, {
  name: 'Test Pilot',
  url: 'mozilla/testpilot',
  description: 'Test Pilot\'s own website and parent add-on.',
  issues: []
}, overrides);

const issues = n => [...Array(n).keys()].map(key => ({
  title: `This is the name of issue #${key + 1}`
}));

storiesOf('Repo', module)
  .add('no issues', () => <Repo {...props()} />)
  .add('one issue', () => <Repo {...props({ issues: issues(1) })} />)
  .add('five issues', () => <Repo {...props({ issues: issues(5) })} />);
