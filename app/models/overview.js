import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';

export default Model.extend({
  firstname: attr('string'),
  lastname: attr('string'),
  summary: attr('string'),
  objective: attr('string'),

  name: Ember.computed('firstname', 'lastname', function() {
		return `${this.get('firstname')} ${this.get('lastname')}`;
  })
});
