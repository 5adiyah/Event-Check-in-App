import Ember from 'ember';

export default Ember.Component.extend({
  addNewGuest: false,
  actions: {
    guestFormShow() {
      this.set('addNewGuest', true);
    },

    saveGuest1() {
      var params = {
        name: this.get('name'),
        paymentType: this.get('paymentType'),
        ticketPrice: this.get('ticketPrice'),
        paymentStatus: this.get('paymentStatus'),
        attendanceStatus: this.get('attendanceStatus'),
      };
      this.set('addNewGuest', false);
      this.sendAction('saveGuest2', params);
    }
  }
});
