import React from 'react';
import { addDecorator } from '@kadira/storybook';

import Wrapper from './index';

export default (extraClass = 'default') => {
  return story => (
    <Wrapper extraClass={extraClass}>
      {story()}
    </Wrapper>
  );
};
