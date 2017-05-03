import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import GitHubService from './github';
import reducers from './reducers';

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = routerMiddleware(history);

export default (history, initialState = {}) => {
  return createStore(
    reducers,
    initialState,
    enhancers(applyMiddleware(GitHubService.middleware, ...middleware))
  );
};
