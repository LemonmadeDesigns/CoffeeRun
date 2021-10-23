(function(window) {
  "use strict";
  var App = window.App || {};

  class Truck {
    constructor(truckId, db) {
      this.truckId = truckId;
      this.db = db;
    }
    createOrder(order) {
      /* eslint-disable no-console */
      console.log(`Adding order for ${order.emailAddress}`);
      this.db.add(order.emailAddress, order);
    }
    deliverOrder(customerId) {
      /* eslint-disable no-console */
      console.log(`Delivering order for ${customerId}`);
      this.db.remove(customerId);
    }
    printOrders() {
      var customerIdArray = Object.keys(this.db.getAll());

      /* eslint-disable no-console */
      console.log(`Truck # t${his.truckId} has pending orders: `);
      customerIdArray.forEach(function (id) {
        /* eslint-disable no-console */
        console.log(this.db.get(id));
      }.bind(this));
    }
  }

  App.Truck = Truck;
  window.App = App;
})(window);