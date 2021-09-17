const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js')
const productRoutes = require('./routes/productRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
dotenv.config();

connectDB();

const app = express();

const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
    res.send("home")
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})