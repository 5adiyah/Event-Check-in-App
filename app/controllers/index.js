import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['name:asc'],
  sortedGuests: Ember.computed.sort('model','sortProperties'),

  appCont:Ember.inject.controller('application'),

  property: true,
  actions: {
    sortBy: function(){
      if(this.property){
        console.log('hello');
      }
    }
  }
});
