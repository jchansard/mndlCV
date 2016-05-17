import Ember from 'ember';

export default Ember.Route.extend({
	model() {
			return Ember.RSVP.hash({
				overview: this.store.findRecord('overview', 1),
      			degrees:  this.store.findAll('degree'),
      			jobs:     this.store.findAll('past-job'),
      			projects: this.store.findAll('project')
    	});
	},
	// renderTemplate() 
	// {
	// 	this.render('index');
	// 	this.render('education', { 
	// 		into: 'index', 
	// 		outlet: 'education', 
	// 	});
	// 	this.render('jobhistory', {
	// 		into: 'index',
	// 		outlet: 'jobhistory',
	// 	})
	// }
});
