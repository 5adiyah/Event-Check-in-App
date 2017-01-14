import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('guest');
  },

  actions: {
    saveGuest3(params) {
      var newGuest = this.store.createRecord('guest', params);
      newGuest.save();
      this.transitionTo('index');
    },
    updatePayment(guest, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          guest.set(key,params[key]);
        }
      });
      guest.save();
      this.transitionTo('index');
    },
    update(guest, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          guest.set(key,params[key]);
        }
      });
      guest.save();
      this.transitionTo('index');
    },
    destroyGuest(guest) {
      guest.destroyRecord();
      this.transitionTo('index');
    }
  }
});
