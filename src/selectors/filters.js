import { createSelector } from 'reselect';

const taskSelector = state => state.tasks.data;
const filterSelectors = state => ({
  repo: state.filters.repo,
  skill: state.filters.skill
});

export default createSelector(
  taskSelector,
  filterSelectors,
  (tasks, filters) => {
    return tasks.filter(task => {
      return (
        (filters.repo === null || task.repo.repo === filters.repo) &&
        (filters.skill === null ||
          task.skills.some(skill => filters.skill === skill.tag))
      );
    });
  }
);
