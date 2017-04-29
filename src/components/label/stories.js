import React from 'react';
import { storiesOf } from '@kadira/storybook';

import wrapper from '../wrapper/decorator';
import Label from './index';

export const labelProps = (overrides = {}) => Object.assign({}, {
  id: 1,
  name: 'Label'
}, overrides);

export const labelFactory = n => [...Array(n).keys()].map(key => labelProps({
  key: key,
  id: key,
  name: `label-${key + 1}`
}));

storiesOf('Label', module)
  .addDecorator(wrapper())
  .add('default', () => <Label {...labelProps()} />);
