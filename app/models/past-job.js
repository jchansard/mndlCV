import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
	position: DS.attr('string'),
	company:  DS.attr('string'),
	start:    DS.attr('string'),
	end: 	  DS.attr('string')
});
