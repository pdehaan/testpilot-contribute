import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { repos } from '../../config.json';
import Task from './index';
import { labelFactory } from '../label/stories';

export const taskProps = (overrides = {}) =>
  Object.assign(
    {},
    {
      id: 1,
      number: 123,
      url: 'https://github.com/mozilla/testpilot/tasks/1',
      title: 'Setup Sugardough Base',
      labels: labelFactory(3),
      assignee: {
        login: 'lmorchard',
        html_url: 'https://github.com/lmorchard'
      },
      repo: repos[0]
    },
    overrides
  );

export const taskFactory = n =>
  [...Array(n).keys()].map(key => ({
    values: () =>
      taskProps({
        key: key,
        id: key,
        title: `This is task #${key + 1}`
      })
  }));

storiesOf('Task', module).add('default', () => <Task {...taskProps()} />);
