var mongoose = require('mongoose');

// Setup schema
var customerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  gender: String,
  phone: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});

// Export Customer model
var Customer = (module.exports = mongoose.model('customer', customerSchema));

module.exports.get = function(callback, limit) {
  Customer.find(callback).limit(limit);
};
