import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
	position: DS.attr('string'),
	company:  DS.attr('string'),
	summary:  DS.attr('string'),
	achievs:  DS.attr(),
	start:    DS.attr('string'),
	end: 	  DS.attr('string')
});
