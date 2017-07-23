import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { wrapper } from '../wrapper/decorator';

import Button from './index';

storiesOf('Button', module)
  .addDecorator(wrapper('blue'))
  .add('default', () => <Button to="/foo" text="Find a Task" />);
