const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { protect } = require('../middleware/auth.middleware')

router.route('/').post(userController.registerUser)
router.post('/login', userController.authuser);
router.route('/profile').get(protect, userController.getUserProfile);

module.exports = router;