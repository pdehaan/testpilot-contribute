import config from '../config.json';

const initialState = config.repos.reduce((acc, repo) => {
  acc[repo.repo] = null;
  return acc;
}, {});

export default (state = initialState, action) => {
  return state;
};
