const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/db-test-2";



const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => {
        console.log("Connected to Mongo Successfully")}, (err) => {
            console.log(`some error occured: ${err}`);
        });
    
};

module.exports = connectToMongo;