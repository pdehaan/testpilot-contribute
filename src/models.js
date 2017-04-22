import { Model } from 'tectonic';

export class IssueModel extends Model {
  static modelName = 'issue';
  static fields = {
    id: 0,
    title: '',
    number: 0,
    user: {},
    labels: []
  }
}
