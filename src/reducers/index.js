import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux';

import issues from './issues';
import repos from './repo';

export default combineReducers({
  issues,
  repos,
  routing
});
