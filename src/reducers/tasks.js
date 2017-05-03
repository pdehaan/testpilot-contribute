import {
  taskActionTypes as actionTypes,
  taskStatus as status
} from '../actions/tasks';
import config from '../config.json';

const initialState = {
  status: status.INIT,
  data: config.repos.reduce((acc, repo) => {
    acc[repo.repo] = null;
    return acc;
  })
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.TASKS_FETCH:
      return Object.assign({}, { status: status.PENDING });

    case actionTypes.TASKS_COMPLETE:
      return Object.assign(
        {},
        { status: status.COMPLETE, data: action.payload }
      );

    case actionTypes.TASKS_ERROR:
      return Object.assign({}, { status: status.ERROR });

    default:
      return state;
  }
};
