const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const url = process.env.MONGO_URI;
        mongoose.connect(url)
    }
    catch(err){
        console.err("error in connection", err);
    }
}

module.exports = connectDb;