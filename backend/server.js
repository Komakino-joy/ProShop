const express = require('express');
const dotenv = require('dotenv');
const products = require('./data/products');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5010

app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:productId', (req, res) => {
    const product = products.find(product => product._id === req.params.productId);
    res.json(product);
});

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
