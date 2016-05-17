import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
	degrees: 	DS.hasMany('degree', {async: true}),
	name: 		DS.attr('string')
});
