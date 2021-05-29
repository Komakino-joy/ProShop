const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const { protect } = require('../middleware/auth.middleware');

router.route('/').post(protect, orderController.addOrderItems);
router.route('/myorders').get(protect, orderController.getMyOrders);
// Make sure this is at the bottom
router.route('/:id').get(protect, orderController.getOrderById);
router.route('/:id/pay').put(protect, orderController.updateOrderToPaid);

module.exports = router;