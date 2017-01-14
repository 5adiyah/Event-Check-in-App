import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('guest', {path: '/guest/:guest_id'});
  this.route('online-payments');
  this.route('cash-payments');
  this.route('no-payments');
});

export default Router;
