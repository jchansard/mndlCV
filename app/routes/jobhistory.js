import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
      		jobs: this.store.findAll('past-job'),
    	});
	}
});
