const asyncHandler = require('express-async-handler');
const Order = require('../models/order.model');


// @description     Create new order
// @route           GET /api/orders
// @access          Private
const addOrderItems = asyncHandler(async(req, res) => {
    const { orderItems, shippingAddress, paymentMethod, 
        itemsPrice, taxPrice, shippingPrice, totalPrice
    } = req.body;

    if (orderItems && orderItems.length === 0 ) {
        
        res.status(400)
        throw new Error('No order items')
        return
    } else {
        const order = new Order({
            orderItems, 
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });

        const createdOrder = await order.save();
    
        res.status(201).json(createdOrder);
    };
    
});

// @description     Get order by id
// @route           GET /api/orders:id
// @access          Private
const getOrderById = asyncHandler(async(req, res) => {
    //Populate will get user name and email associated with order
    const order = await (await Order.findById(req.params.id)).populate('user', 'name email').execPopulate();

    if (order) {
        res.json(order);
    } else {
        res.status(404)
        throw new Error('Order not found');
    };
    
});


module.exports = {
    addOrderItems,
    getOrderById
};