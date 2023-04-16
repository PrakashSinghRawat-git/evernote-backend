require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;



const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => {
        console.log("Connected to Mongo Successfully", mongoURI)}, (err) => {
            console.log(`some error occured: ${err}`);
        });
    
};

module.exports = connectToMongo;