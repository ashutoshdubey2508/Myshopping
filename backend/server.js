const express = require('express');
const products = require('./data/products');
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.get('/', (req, res) => {
    res.send('<h3>welcome to Node server</h3>');
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
})

const PORT = 8080;

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} Node on Port ${process.env.PORT}`);
});