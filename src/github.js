/*global fetch, Headers, process, Request*/

import {
  taskActions as actions,
  taskActionTypes as actionTypes
} from './actions/tasks';

import { skills, tag, repos } from './config';

const repoMap = repos.reduce((accum, repo) => {
  accum[repo.repo] = repo;
  return accum;
}, {});

const getRepo = repoUrl => {
  return repoMap[repoUrl.replace('https://api.github.com/repos/', '')];
};

const getActiveRepos = issues =>
  issues.reduce((accum, issue) => {
    const { repo } = issue.repo;
    if (!Object.keys(accum).includes(repo)) {
      accum[repo] = getRepo(repo);
    }
    return accum;
  }, {});

const skillMap = skills.reduce((accum, skill) => {
  accum[skill.tag] = skill;
  return accum;
}, {});

const getSkill = labelName => skillMap[labelName];

const getSkills = labels =>
  labels.reduce((accum, label) => {
    if (Object.keys(skillMap).includes(label.name)) {
      accum.push(getSkill(label.name));
    }
    return accum;
  }, []);

const getActiveSkills = issues =>
  issues.reduce((accum, issue) => {
    if (issue.skills.length) {
      issue.skills.forEach(skill => {
        const { tag } = skill;
        if (!Object.keys(accum).includes(tag)) {
          accum[tag] = getSkill(tag);
        }
      });
    }
    return accum;
  }, {});

export default class GitHub {
  static reduceIssue = issue => ({
    title: issue.title,
    number: issue.number,
    id: issue.id,
    url: issue.html_url,
    assignee: issue.assignee,
    repo: getRepo(issue.repository_url),
    skills: getSkills(issue.labels)
  });

  static repoList = () => {
    return repos.reduce((acc, repo) => {
      return `${acc} repo:${repo.repo}`;
    }, '');
  };

  static createRequest = url => {
    if (url === null) {
      const query = encodeURIComponent(
        `label:"${tag}" state:open type:issue ${GitHub.repoList()}`
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
              if (outerResolve !== null) {
                outerResolve(items);
              } else {
                innerResolve(items);
              }
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
          .then(issues => {
            store.dispatch(
              actions.completeTasks({
                data: issues,
                skills: getActiveSkills(issues),
                repos: getActiveRepos(issues)
              })
            );
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
