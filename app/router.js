import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.route('education', function() {
  // 	this.route('jobhistory', { resetNamespace: true });
  // });
  // this.route('jobhistory');
  // this.route('resume', function() {
  // 	this.route('education', { resetNamespace: true });
  // });
});

export default Router;
