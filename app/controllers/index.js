import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['section'],
	sections: ['About Me', 'Education', 'Job History', 'Portfolio', 'Skills'],
	section: undefined,

	scrollToSection: Ember.observer('section', function() {
		// make sure section is valid
		let section = this.get('section');
		let sectionExists = this.get('sections').find((sec) => sec === section);
		if (!sectionExists) { return; }

		// convert Section Name to sectionname
		section = section.replace(/ /g,'').toLowerCase();

		// when rendered, scroll to section
		Ember.run.scheduleOnce('afterRender', function() { 
			var top = Ember.$('#' + section).offset().top
			Ember.$('body,html').animate({
				scrollTop: Ember.$('#' + section).offset().top
			}, 200);
		});
	}),

	actions: {
	}
});
