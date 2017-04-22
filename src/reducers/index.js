import { combineReducers } from 'redux';
import { reducer as tectonicReducer } from 'tectonic';

import issueReducer from './issues';
import repoReducer from './repo';

export default combineReducers({
  issues: issueReducer,
  repos: repoReducer,
  tectonic: tectonicReducer
});
