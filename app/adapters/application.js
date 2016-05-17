import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ENV from '../config/environment';

export default JSONAPIAdapter.extend({
  host: ENV.APP.host,
  namespace: 'db',
  buildURL(modelName, id, snapshot, requestType, query) {
  	return this._super(modelName, id, snapshot, requestType, query) + '.json';
  }
});