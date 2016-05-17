import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: 		attr('string'),
  overview: 	attr('string'),
  url: 			attr('string'),
  screenshot: 	attr('string'),
  contribution: attr('string')
});
