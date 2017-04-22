import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Issue from './index';
import { labelFactory } from '../label/stories';

export const issueProps = (overrides = {}) => Object.assign({}, {
  id: 1,
  number: 123,
  html_url: 'https://github.com/mozilla/testpilot/issues/1',
  title: 'Setup Sugardough Base',
  labels: labelFactory(3)
}, overrides);

export const issueFactory = n => [...Array(n).keys()].map(key => ({
  values: () => (issueProps({
    key: key,
    id: key,
    title: `This is issue #${key + 1}`
  }))
}));

storiesOf('Issue', module)
  .add('default', () => <Issue {...issueProps()} />);
