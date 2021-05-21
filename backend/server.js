const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const errorMiddleware = require('./middleware/error.middleware');
const connectDB = require('./config/db');
const productRoutes = require('./routes/product.routes');

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5010


app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/products', productRoutes);

// return invalid route middleware
app.use(errorMiddleware.notFound);

// Error middleware
app.use(errorMiddleware.errorhandler);


app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
