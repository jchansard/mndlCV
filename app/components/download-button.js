import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'a',
	attributeBindings: ['href', 'target'],
	href: undefined,
	target: '_blank',
	classNames: ['btn-linkedin'],
});
