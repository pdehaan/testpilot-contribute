import React from 'react';
import { addDecorator } from '@kadira/storybook';

import { Width, Wrapper } from './index';

export const wrapper = (extraClass = 'default', innerStyles = {}) => {
  return story => (
    <Wrapper extraClass={extraClass} innerStyles={innerStyles}>
      {story()}
    </Wrapper>
  );
};
