const mongoose = require('mongoose');

 const connectToMongoDB = async (url) => {
    await mongoose.connect(url);
    console.log('mongoDB connected');
}

module.exports = connectToMongoDB;