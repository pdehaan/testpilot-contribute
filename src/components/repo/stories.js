import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { UnconnectedRepo as Repo } from './index';
import { issueFactory } from '../issue/stories';

const props = (overrides = {}) => Object.assign({}, {
  name: 'Test Pilot',
  repo: 'mozilla/testpilot',
  description: 'Test Pilot\'s own website and parent add-on.',
  issues: [],
  status: {
    issues: {
      status: 'SUCCESS'
    }
  }
}, overrides);

storiesOf('Repo', module)
  .add('no issues', () => <Repo {...props()} />)
  .add('one issue', () => <Repo {...props({ issues: issueFactory(1) })} />)
  .add('five issues', () => <Repo {...props({ issues: issueFactory(5) })} />);
