const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const { protect, isAdmin } = require('../middleware/auth.middleware');

router.route('/')
.post(protect, orderController.addOrderItems)
.get(protect, isAdmin, orderController.getOrders);
router.route('/myorders').get(protect, orderController.getMyOrders);
// Make sure this is at the bottom
router.route('/:id').get(protect, orderController.getOrderById);
router.route('/:id/pay').put(protect, orderController.updateOrderToPaid);
router.route('/:id/deliver').put(protect, isAdmin, orderController.updateOrderToDelivered);

module.exports = router;