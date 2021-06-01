const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { protect, isAdmin } = require('../middleware/auth.middleware')


router.route('/')
.get(productController.getProducts)
.post(protect, isAdmin, productController.createProduct);

router.route('/:id/reviews').post(protect, productController.createProductReview);

router.get('/top', productController.getTopProducts);

router.route('/:id')
.get(productController.getProductById)
.delete(protect, isAdmin, productController.deleteProduct)
.put(protect, isAdmin, productController.updateProduct);

module.exports = router;