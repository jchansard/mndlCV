import Ember from 'ember';

export default Ember.Component.extend({
	visible: false,
	src: undefined,

	actions: {
		toggleVisibility() {
			let vis = (this.get('visible')) ? false : true;
			this.set('visible', vis);
		},

		setImage(src) {
			this.set('src', src);
		}
	}
});
