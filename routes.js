// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function(req, res) {
  res.json({
    status: 'API Its Working',
    message: 'Welcome to RESTHub crafted with love!'
  });
});

// Import customer controller
var customerController = require('./customer.controller');

// customer routes
router
  .route('/customers')
  .get(customerController.index)
  .post(customerController.new);
router
  .route('/customers/:customer_id')
  .get(customerController.view)
  .patch(customerController.update)
  .put(customerController.update)
  .delete(customerController.delete);

// Export API routes
module.exports = router;
