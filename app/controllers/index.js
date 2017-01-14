import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['name:asc'],
  sortedGuests: Ember.computed.sort('model','sortProperties'),

  appCont:Ember.inject.controller('application'),

  property: true,
  actions: {
    sortByName: function(){
      this.set('sortProperties', ['name:dec']);
    },
    sortByPaymentType: function(){
      this.set('sortProperties', ['paymentType:asc']);
    },
    sortByPaymentStatus: function(){
      this.set('sortProperties', ['paymentStatus:asc']);
    },
    sortBysortByAttendance: function(){
      this.set('sortProperties', ['attendanceStatus:asc']);
    },
  }
});
