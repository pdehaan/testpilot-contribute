import { BaseResolver, Manager } from 'tectonic';
import TectonicSuperagent from 'tectonic-superagent';

import { IssueModel } from './models';

export default store => {
  const manager = new Manager({
    resolver: new BaseResolver(),
    drivers: {
      fromSuperagent: new TectonicSuperagent({})
    },
    store: store
  });

  manager.drivers.fromSuperagent([
    {
      meta: {
        url: 'https://api.github.com/repos/:repo/issues?labels=good-first-bug',
        method: 'GET'
      },
      returns: IssueModel.list()
    }
  ]);

  return manager;
};
