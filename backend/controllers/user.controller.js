const asyncHandler = require('express-async-handler');
const { generateToken } = require('../utils/generate-token'); 
const User = require('../models/user.model');


// @description     Auth user & get token
// @route           POST /api/users/login
// @access          Public
const authuser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id), 
        })
    }else{
        res.status(401);
        throw new Error('Invalid Email or password')
    }
});

// @description     Register a new user
// @route           POST /api/users
// @access          Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password,
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id), 
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
});

// @description     Get user profile
// @route           POST /api/users/profile
// @access          Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if(user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404);
        throw new Error('User not found.')
    }

});

module.exports = {
    authuser,
    getUserProfile,
    registerUser
}