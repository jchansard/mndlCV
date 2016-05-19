import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'a',
	attributeBindings: ['href', 'target'],
	href: 'https://www.linkedin.com/in/josh-chansard-33b77327',
	target: '_blank',
	classNames: ['btn-linkedin'],

	text: false
});
