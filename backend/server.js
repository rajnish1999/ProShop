const express = require('express');
const products = require('./data/products')

const app = express();

const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
    res.send("home")
})

app.get('/api/products', (req, res) => {
    res.send(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => req.params.id === p._id)
    res.send(product)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})