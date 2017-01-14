import Ember from 'ember';

export default Ember.Component.extend({
  selectedPayment: null,
  selectedAttendance: null,
  actions: {
    getPayment: function(selected) {
      this.set('selectedPayment', selected);
      console.log(this.get('selectedPayment'));
    },
    getAttendance: function(selected) {
      this.set('selectedAttendance', selected);
      console.log(this.get('selectedAttendance'));
    },
    update(guest) {
      var params = {
        paymentStatus: this.get('selectedPayment'),
        attendanceStatus: this.get('selectedAttendance')
      };
      this.sendAction('update', guest, params);
    },
    delete(guest) {
      if (confirm('Are you sure you want to delete this guest?')) {
        this.sendAction('destroyGuest', guest);
      }
    }
  }
});
