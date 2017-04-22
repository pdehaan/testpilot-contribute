import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { labelFactory } from '../label/stories';
import LabelList from './index';

storiesOf('LabelList', module)
  .add('no labels', () => <LabelList />)
  .add('one label', () => <LabelList labels={labelFactory(1)} />)
  .add('five label', () => <LabelList labels={labelFactory(5)} />);
