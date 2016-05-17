import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['container-fluid'],

	didInsertElement() {
		console.log('done');
	}
});
