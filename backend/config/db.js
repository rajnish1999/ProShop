const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            
        })
    }catch(err) {
        console.log(err);
    }
}
console.log("okay");

module.exports = connectDB