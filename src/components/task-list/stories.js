import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { issueFactory } from '../task/stories';
import TaskList from './index';

storiesOf('TaskList', module)
  .add('no tasks', () => <TaskList tasks={[]} />)
  .add('one tasks', () => <TaskList tasks={issueFactory(1)} />)
  .add('five tasks', () => <TaskList tasks={issueFactory(5)} />);
