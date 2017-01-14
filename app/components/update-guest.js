import Ember from 'ember';

export default Ember.Component.extend({
  updateGuestForm: false,
  actions: {
    updateGuestForm() {
      this.set('updateGuestForm', true);
    },
    update(guest) {
      var params = {
        paymentStatus: this.get('paymentStatus')
      };
      this.set('updateGuestForm', false);
      this.sendAction('update', guest, params);
    }
  }
});
