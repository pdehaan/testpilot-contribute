const FILTERS_CHANGE_REPO = 'FILTERS_CHANGE_REPO';
const FILTERS_CHANGE_SKILL = 'FILTERS_CHANGE_SKILL';
const FILTERS_SET_AVAILABLE = 'FILTERS_SET_AVAILABLE';

const changeRepoFilter = slug => ({
  type: FILTERS_CHANGE_REPO,
  slug
});

const changeSkillFilter = slug => ({
  type: FILTERS_CHANGE_SKILL,
  slug
});

const setAvailableFilters = available => ({
  type: FILTERS_SET_AVAILABLE,
  available
});

export const filterActions = {
  changeRepoFilter,
  changeSkillFilter,
  setAvailableFilters
};
export const filterActionTypes = {
  FILTERS_CHANGE_REPO,
  FILTERS_CHANGE_SKILL,
  FILTERS_SET_AVAILABLE
};
