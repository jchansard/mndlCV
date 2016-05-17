import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'a',
	attributeBindings: ['href'],
	href: Ember.computed('section', function() { console.log(this.get('section')); this.get('section'); })
});
