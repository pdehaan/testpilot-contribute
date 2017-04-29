import { BaseResolver, Manager } from 'tectonic';
import TectonicSuperagent from 'tectonic-superagent';

import { tag } from './config.json';
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
        url: `https://api.github.com/repos/:repo/issues?labels=${encodeURIComponent(tag)}`,
        method: 'GET'
      },
      returns: IssueModel.list()
    }
  ]);

  return manager;
};
