/*global fetch, Headers, process, Request*/

import {
  taskActions as actions,
  taskActionTypes as actionTypes
} from './actions/tasks';

import { tag, repos } from './config';

const repoMap = repos.reduce((accum, repo) => {
  accum[repo.repo] = repo;
  return accum;
}, {});

const getRepo = repoUrl => {
  return repoMap[repoUrl.replace('https://api.github.com/repos/', '')];
};

export default class GitHub {
  static reduceIssue = issue => ({
    title: issue.title,
    number: issue.number,
    id: issue.id,
    url: issue.html_url,
    labels: issue.labels,
    assignee: issue.assignee,
    repo: getRepo(issue.repository_url)
  });

  static repoList = () => {
    return repos.reduce((acc, repo) => {
      return `${acc} repo:${repo.repo}`;
    }, '');
  };

  static createRequest = url => {
    if (url === null) {
      const query = encodeURIComponent(
        `label:"${tag}" type:issue ${GitHub.repoList()}`
      );
      url = `https://api.github.com/search/issues?q=${query}&per_page=100`;
    }
    const opts = {
      headers: new Headers({
        Origin: 'https://testpilot.firefox.com',
        'User-Agent': 'mozilla/testpilot'
      }),
      method: 'GET'
    };
    if (process.env.REACT_APP_GITHUB_TOKEN) {
      opts.headers.append(
        'Authorization',
        `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      );
    }
    return new Request(url, opts);
  };

  static getNextLink = response => {
    const link = response.headers.get('Link');
    if (!link) {
      return false;
    }
    return link.split(', ').reduce((acc, piece) => {
      if (piece.endsWith('rel="next"')) {
        acc = piece.replace('>; rel="next"', '').replace(/^</, '');
      }
      return acc;
    }, null);
  };

  static makeRequest = (
    outerResolve = null,
    outerReject = null,
    cumulative = [],
    next = null
  ) => {
    return new Promise((innerResolve, innerReject) => {
      const request = GitHub.createRequest(next);
      fetch(request).then(response => {
        response
          .json()
          .then(data => {
            const nextLink = GitHub.getNextLink(response);
            const items = cumulative.concat(data.items.map(GitHub.reduceIssue));
            if (nextLink) {
              GitHub.makeRequest(
                outerResolve || innerResolve,
                outerReject || innerReject,
                items,
                nextLink
              );
              if (outerResolve !== null) {
                innerResolve();
              }
            } else {
              outerResolve(items);
            }
          })
          .catch(err => {
            innerReject(err);
            if (outerReject !== null) {
              outerReject(err);
            }
          });
      });
    });
  };

  static middleware = store => next => action => {
    switch (action.type) {
      case actionTypes.TASKS_FETCH:
        GitHub.makeRequest()
          .then(data => {
            store.dispatch(actions.completeTasks(data));
          })
          .catch(err => {
            console.log(err);
            store.dispatch(actions.errorTasks(err));
          });
        break;

      case actionTypes.TASKS_COMPLETE:
        break;

      case actionTypes.TASKS_ERROR:
        break;

      default:
        break;
    }
    next(action);
  };
}
