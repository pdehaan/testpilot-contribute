import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { issueFactory } from '../issue/stories';
import IssueList from './index';

storiesOf('IssueList', module)
  .add('no issues', () => <IssueList issues={[]} />)
  .add('one issues', () => <IssueList issues={issueFactory(1)} />)
  .add('five issues', () => <IssueList issues={issueFactory(5)} />);
