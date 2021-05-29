const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { protect, isAdmin } = require('../middleware/auth.middleware')

router.route('/').post(userController.registerUser).get(protect, isAdmin, userController.getUsers)
router.post('/login', userController.authuser);
router.route('/profile')
.get(protect, userController.getUserProfile)
.put(protect, userController.updateUserProfile);

module.exports = router;
