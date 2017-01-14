import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  name: DS.attr(),
  paymentType: DS.attr(),
  ticketPrice: DS.attr(),
  paymentStatus: DS.attr(),
  attendanceStatus: DS.attr()
});
