import {
  filterActionTypes as actionTypes,
  filterStatus as status
} from '../actions/filters';

const initialState = {
  available: {
    repo: [],
    skill: []
  },
  repo: null,
  skill: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTERS_CHANGE_REPO:
      return Object.assign({}, state, { repo: action.payload });

    case actionTypes.FILTERS_CHANGE_SKILL:
      return Object.assign({}, state, { skill: action.payload });

    case actionTypes.FILTERS_SET_AVAILABLE:
      const available = Object.assign(
        {},
        {
          repos: action.payload.repos,
          skills: action.payload.skills
        }
      );
      return Object.assign({}, state, { available });

    default:
      return state;
  }
};
