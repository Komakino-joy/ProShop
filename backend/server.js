const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const errorMiddleware = require('./middleware/error.middleware');
const connectDB = require('./config/db');

const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');
const orderRoutes = require('./routes/order.routes');
const uploadRoutes = require('./routes/upload.routes');

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};

app.use(express.json());

const PORT = process.env.PORT || 5010


app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', ((req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID)
}));

// ^Making a folder static so it can be used in the browser. 
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use("/uploads", express.static("uploads"))

// return invalid route middleware
app.use(errorMiddleware.notFound);

// Error middleware
app.use(errorMiddleware.errorhandler);


app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
