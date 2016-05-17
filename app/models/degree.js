import Model from 'ember-data/model';
import DS from 'ember-data';
import Ember from 'ember';

export default Model.extend({

	resume: DS.belongsTo('resume', {async: true}),

	school:	DS.attr('string'),
	start: 	DS.attr('number'),
	end: 	DS.attr('string'),
	degree: DS.attr('string'),
	major: 	DS.attr('string'),
	gpa: 	DS.attr('number'),

	dates: Ember.computed('start', 'end', function() {
		return `(${this.get('start')}-${this.get('end')})`;
	})
});
