const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const products = require('./data/products');
const User = require('./models/userModel');
const Product = require('./models/productModel');
const Order = require('./models/orderModel');
const connectDB = require('./config/db');

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        // console.log("above user ");
        const createdUsers = await User.insertMany(users);
        // console.log("below user ");
        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts);
        console.log("data imported");

    }catch(err) {
        console.log(err);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("data imported");
        process.exit();
        
    }catch(err) {
        console.log(err);
        process.exit(1);
    }
}

if(process.argv[2] === 'd'){
    destroyData()
}else {
    importData()
}