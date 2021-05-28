const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const errorMiddleware = require('./middleware/error.middleware');
const connectDB = require('./config/db');

const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');
const orderRoutes = require('./routes/order.routes');

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5010


app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// return invalid route middleware
app.use(errorMiddleware.notFound);

// Error middleware
app.use(errorMiddleware.errorhandler);


app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
