// Import customer model
const Customer = require('./customer.model');

// Handle index actions
exports.index = function(req, res) {
  Customer.get(function(err, customers) {
    if (err) {
      res.json({
        status: 'error',
        message: err
      });
    }
    res.json({
      status: 'success',
      message: 'Customers retrieved successfully',
      data: customers
    });
  });
};

// Handle create customer actions
exports.new = function(req, res) {
  var customer = new Customer();
  customer.name = req.body.name ? req.body.name : customer.name;
  customer.gender = req.body.gender;
  customer.email = req.body.email;
  customer.phone = req.body.phone;

  // save the customer and check for errors
  customer.save(function(err) {
    if (err) res.json(err);
    res.json({
      message: 'New customer created!',
      data: customer
    });
  });
};

// Handle view customer info
exports.view = function(req, res) {
  Customer.findById(req.params.customer_id, function(err, customer) {
    if (err) res.send(err);
    res.json({
      message: 'Customer details loading..',
      data: customer
    });
  });
};

// Handle update customer info
exports.update = function(req, res) {
  Customer.findById(req.params.customer_id, function(err, customer) {
    if (err) res.send(err);
    customer.name = req.body.name ? req.body.name : customer.name;
    customer.gender = req.body.gender;
    customer.email = req.body.email;
    customer.phone = req.body.phone;

    // save the customer and check for errors
    customer.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: 'Customer Info updated',
        data: customer
      });
    });
  });
};

// Handle delete customer
exports.delete = function(req, res) {
  Customer.remove(
    {
      _id: req.params.customer_id
    },
    function(err, customer) {
      if (err) res.send(err);
      res.json({
        status: 'success',
        message: 'Customer deleted'
      });
    }
  );
};
