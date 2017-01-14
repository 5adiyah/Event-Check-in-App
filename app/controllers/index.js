import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['name:asc'],
  sortedGuests: Ember.computed.sort('model','sortProperties'),
});
