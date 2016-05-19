import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'nav',
	classNames: ['navbar navbar-default topbar visible-xs-block'],
	droppedDown: false,

	actions: {
		toggleDropdown() {
			this.toggleProperty('droppedDown');
		}
	}
});
