const mongoose = require('mongoose');
const colors = require('colors');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.Db);
        console.log(`Connected successfull on Databse`.bgYellow);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;