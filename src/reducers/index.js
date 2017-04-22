import { combineReducers } from 'redux';

import repoReducer from './repo';

export default combineReducers({
  repos: repoReducer
});
