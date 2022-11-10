const mongoose = require('mongoose');
require('dotenv').config();
//  = process.env.MONGO_URI;
const MONGO_URI= "mongodb+srv://Abman:80110847@cluster0.uhggrbc.mongodb.net/?retryWrites=true&w=majority"
const connectDatabase = () => {
    mongoose.connect(MONGO_URI, {  useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Mongoose Connected");
        });
}

module.exports = connectDatabase;